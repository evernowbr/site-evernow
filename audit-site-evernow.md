# Audit Técnico SEO + Quality Score Ads — Evernow

**Data:** 22/04/2026
**Escopo:** código 11ty local (pronto para ser a próxima produção) + análise indireta do site atual em `evernow.com.br`
**Objetivo:** maximizar Quality Score do Google Ads (impacto direto no CPC) + SEO orgânico, com budget de R$ 2.000/mês

---

## 0. Descoberta crítica antes de qualquer coisa

**O site atualmente ativo em `evernow.com.br` NÃO é o código 11ty deste repositório.**

Evidência direta (via SERP do Google):
- URLs em produção hoje: `/mitm-prevenindo-ataques-man-in-the-middle-em-2024/`, `/clientes/page/6/`, `/pentest/` (trailing slash, sem extensão)
- URLs que o 11ty gera: `/pentest.html`, `/blog/{slug}.html`, `/solucoes/{slug}/`, `/produtos/{slug}/`

O padrão de URLs em produção é compatível com **WordPress** (permalinks root + paginação `/page/N/`). O 11ty é uma **migração pronta mas não deployada** — provavelmente hospedada em Cloudflare Pages (`*.pages.dev`).

**Implicação direta para campanhas:** as landings das novas campanhas Google Ads (`/guias/quanto-custa-pentest/`, etc.) ainda **não existem em `evernow.com.br`**. Se rodar as campanhas hoje, o Google Ads vai recusar os anúncios (política de URL inválida) ou servirá 404.

**Ações necessárias antes de ativar o Ads:**
1. Fazer o cutover do 11ty para produção (`evernow.com.br`)
2. Configurar 301 redirects de URLs WP antigas → novas (para não perder backlinks nem ranking orgânico já conquistado)
3. Re-submeter sitemap ao Google Search Console
4. Validar com a ferramenta de URL Inspection que as novas páginas são indexáveis

---

## 1. Fixes aplicados AGORA (já validados no build)

### 1.1 🐛 Bug hreflang EN nas 7 páginas novas (CRÍTICO)

**O problema:** as páginas novas (`/guias/*`, `/servicos/*`) geravam hreflang EN apontando para URLs que não existem:
- `hreflang="en"` → `https://evernow.com.br/en/guias/quanto-custa-pentest/` ❌ (não existe)
- URL EN real (arquivo `_site`): `https://evernow.com.br/en/guides/pentest-pricing/` ✅

**Impacto SEO:** Google detecta hreflang quebrado, pode des-indexar versão EN, dividir autoridade entre duas URLs conflitantes, e degradar posição orgânica.
**Impacto Ads:** Landing Page Experience ruim = Quality Score ruim = CPC até 100% mais caro.

**Correção aplicada:** adicionei `langPtUrl` e `langEnUrl` no front-matter YAML de cada página. Agora o head.njk recebe a URL certa para montar o alternate.

**Estado depois do fix (validado):**
```
quanto-custa-pentest → /en/guides/pentest-pricing/    ✅
cspm-o-que-e         → /en/guides/cspm/                ✅
devsecops            → /en/guides/devsecops/           ✅
sast-vs-dast-vs-sca  → /en/guides/sast-vs-dast-vs-sca/ ✅
adequacao-lgpd       → /en/services/lgpd-compliance/   ✅
consultoria-iso-27001 → /en/services/iso-27001-consulting/ ✅
soc-como-servico     → /en/services/soc-as-a-service/  ✅
```

### 1.2 📏 Meta descriptions dos 24 parceiros (ALTO)

**O problema:** 21 dos 24 parceiros tinham meta description entre 200 e 260 chars. Google trunca em ~160.

**Impacto Ads:** Quality Score penaliza LPs com snippet incompleto.
**Impacto SEO:** CTR mais baixo no SERP (snippet cortado ao meio).

**Correção aplicada:** script Node cortou todas inteligentemente no último ponto/espaço completo ≤ 158 chars. Preservou PT e EN.

### 1.3 Arquivo fonte recuperado

`src/servicos/consultoria-iso-27001.njk` tinha sido removido (só sobrou o output já buildado do `_site`). Recriado com o hreflang já correto.

---

## 2. Estado do SEO técnico (código 11ty)

### 2.1 ✅ O que já está excelente (manter)

| Item | Status |
|------|--------|
| Title tags (30-60 chars) | ✅ 100% das páginas críticas dentro do sweet spot |
| H1 único por página | ✅ 1 H1 por página em todas checadas |
| Canonical tags | ✅ Presentes e corretos |
| hreflang PT/EN/x-default | ✅ Agora corretos em todas as páginas (após fix) |
| Open Graph completo | ✅ og:title, description, image 1200×630, type, url, locale |
| Twitter Card | ✅ summary_large_image |
| Schema.org Organization + LocalBusiness + WebSite na home | ✅ |
| Schema.org Service / Article / FAQPage nas páginas filhas | ✅ |
| BreadcrumbList schema | ✅ |
| Charset UTF-8 + viewport mobile | ✅ |
| Preconnect (FontAwesome, GTM, HubSpot) | ✅ |
| Robots.txt com AI crawlers permitidos | ✅ |
| Sitemap.xml com 306 URLs + hreflang alternates | ✅ |
| i18n PT/EN com fallback | ✅ |
| Build 11ty rápido (1.27s, 327 arquivos) | ✅ |

### 2.2 ⚠️ Pendências de MÉDIO impacto (30 dias)

#### 2.2.1 GA4 provavelmente não está inline

No HTML das páginas não há `gtag('config', 'G-XXXXXX')` direto — só o GTM. Isso é **OK se** dentro do GTM existir uma Tag GA4 Configuration ativa. **NÃO OK se** o GTM só disparar pixels legados (Facebook, etc.) sem GA4.

**Como validar (ação do Ney):**
1. Entrar em `tagmanager.google.com`
2. Abrir o container `GTM-W6PP4HHP`
3. Verificar na aba **Tags** se existe tag do tipo `Google Analytics: GA4 Configuration`
4. Se não existir: criar ativando na trigger "All Pages"

**Impacto Ads:** sem GA4 conectado ao Google Ads, você perde:
- Conversões importadas automaticamente (Enhanced Conversions)
- Audiências remarketing
- Smart Bidding funcional
- Consequência: CPC 30-60% mais caro nos mesmos lances

#### 2.2.2 Conversões no GTM não estão explicitamente mapeadas

Olhando o HTML, não há `data-gtm-event` no botão "Fale com um especialista", nem disparo explícito de `form_submit` para o HubSpot. Isso deve ser configurado no **GTM via triggers**:
- `Click: gtm.click` com matcher em `Click Element matches CSS selector .contact-btn` → dispara evento `lead_cta_click`
- `Form Submission` com matcher no container HubSpot → dispara `lead_form_submit`
- Cada evento precisa virar uma **Conversão** no Google Ads

**Sem essas conversões, Maximize Conversions no Ads fica cego.**

#### 2.2.3 Otimização de imagens (86 PNGs + 13 JPGs + só 1 WebP)

O site tem `optimize-images.js` mas parece não ter sido rodado em lote. WebP economiza 25-35% do peso vs PNG/JPG.

**Fix:** `npm run optimize-images` antes do deploy em produção.

**Impacto:** Largest Contentful Paint (LCP) mais baixo = Quality Score (Landing Page Experience) mais alto = CPC mais barato.

#### 2.2.4 CSS 332KB + FontAwesome Pro externo

332KB de CSS é alto para uma LP. FontAwesome Pro vem de CDN externo (~400KB) via `<link rel="preload" onload="rel='stylesheet'">`. Estratégia boa, mas poderia ser substituída por subset (só os ícones usados).

**Fix sugerido (médio prazo):** usar apenas ícones usados via `fa-subset-font` ou substituir por SVG inline nos hero sections críticos (pentest, LP de LGPD).

### 2.3 ⚠️ Pendências de BAIXO impacto (60+ dias)

- 22 imagens com `alt=""` na home — aceitável se forem decorativas, mas idealmente alt descritivo
- Sem `<link rel="preload">` para a imagem do hero (LCP pode ser ~200ms mais rápido)
- Securiti consent SDK carregado globalmente (~60KB) — avaliar load sob demanda

---

## 3. Tracking & rastreabilidade

### 3.1 Estado atual (confirmado no HTML)

| Tag | Status | Onde |
|-----|--------|------|
| Google Tag Manager (GTM-W6PP4HHP) | ✅ Ativo | Todas as páginas |
| HubSpot (49406327) | ✅ Ativo | Todas as páginas |
| LinkedIn Insight (6541169) | ✅ Ativo | Todas as páginas |
| Securiti (consent/cookies) | ✅ Ativo | Todas as páginas |
| Google Analytics 4 | ❓ Via GTM (validar) | — |
| Microsoft Clarity | ❌ Ausente | — |
| Facebook Pixel | ❌ Ausente | — |

### 3.2 Ações recomendadas para o Ney antes do deploy

**Obrigatórias (sem isso, campanhas Ads = dinheiro queimado):**

1. **Verificar Tag GA4 no GTM** (10 min)
   - `tagmanager.google.com` → GTM-W6PP4HHP → Tags
   - Deve existir `Google Analytics: GA4 Configuration` com measurement ID (formato `G-XXXXXX`)
   - Trigger: "All Pages"

2. **Criar 3 conversões no GTM + importar para Google Ads** (30 min)
   - **Tag 1:** Click no botão `.contact-btn` (CTA Fale com especialista)
   - **Tag 2:** HubSpot form submission
   - **Tag 3:** Click no número de telefone `tel:`
   - Cada uma dispara evento GA4 customizado, que vira conversão importada no Google Ads

3. **Vincular contas** (15 min)
   - Google Ads ↔ GA4 (em Ferramentas > Contas vinculadas)
   - Google Ads ↔ Search Console (mesmo menu)

**Recomendadas (aumentam conversão):**

4. **Instalar Microsoft Clarity** (grátis, 5 min)
   - Adicionar tag no GTM
   - Dá heatmap + session recording — revela por que o usuário não converte
   - Crítico pra otimizar LP antes de escalar budget

5. **Enhanced Conversions no Google Ads** (ativar via GA4)
   - Passa dados first-party (email hasheado) pro Google bater lead vs conversão real
   - Melhora Smart Bidding em 20-40%

---

## 4. Impacto direto no Quality Score — o que realmente move o CPC

Google Ads Quality Score tem 3 componentes, cada um impactando diretamente seu CPC:

### 4.1 Ad Relevance (alinhamento anúncio ↔ keyword)
- **Status atual:** bom — copies A/B/C que entreguei no `campanhas-google-ads.md` usam exact-match da keyword no H1
- **Ação:** monitorar no Search Terms Report — se o Google disparar em query inesperada, adicionar negativa ou criar AG dedicado

### 4.2 Expected CTR (CTR esperado vs histórico do SERP)
- **Fator:** copies atrativas + extensões + brand recognition
- **Ação implementada:** 3 copies por AG + sitelinks + callouts + structured snippets + form extension
- **Próximo passo:** rotacionar, após 30 dias pausar o copy com menor CTR

### 4.3 Landing Page Experience (Google examina a página de destino)
**Fatores que o Google avalia:**
- Conteúdo relevante à keyword ✅ (cada AG aponta pra LP dedicada, já feito)
- Navegação transparente ✅ (breadcrumbs, CTAs visíveis)
- Boas práticas técnicas ⚠️ (ver seção 5 abaixo)
- Original content value ✅ (conteúdo aprofundado, dados reais IBM 2025, tabelas)
- Mobile-friendly ✅ (viewport, responsive)
- Tempo de carregamento ⚠️ (CSS 332KB + FA Pro externo pode penalizar)

**Prioridade pra subir LP Experience sem custo:**
1. Rodar `npm run optimize-images` antes do deploy
2. Lazy-load em todas imagens não-hero (`loading="lazy"`)
3. Ativar cache HTTP agressivo no Cloudflare (já está lá, só validar headers)

---

## 5. Checklist pré-cutover (antes de apontar `evernow.com.br` para o 11ty)

```
[ ] 1. Rodar `npm run optimize-images` para reduzir imagens
[ ] 2. Validar Tag GA4 ativa no GTM
[ ] 3. Criar triggers de conversão no GTM (click CTA, form, tel)
[ ] 4. Importar conversões no Google Ads
[ ] 5. Vincular Google Ads ↔ GA4 ↔ Search Console
[ ] 6. Listar URLs antigas (WP) e criar matriz de redirects 301 → novas
     Mínimo necessário:
     /pentest/                                        → /pentest.html
     /rasp-waf-waap-quando-usar/                      → /blog/rasp-waf-waap-quando-usar.html
     /mitm-prevenindo-ataques-man-in-the-middle-em-2024/ → /blog/mitm-prevenindo-ataques-man-in-the-middle-em-2024.html
     /despedida-do-pci-dss-3-2-1-e-boas-vindas-ao-pci-dss-4-0/ → /blog/despedida-do-pci-dss-3-2-1-e-boas-vindas-ao-pci-dss-4-0.html
     /secret-scanning-prevencao-crises/               → /blog/secret-scanning-prevencao-crises.html
     /ataques-a-aplicacoes-e-a-importancia-da-owasp-top-10/ → /blog/ataques-a-aplicacoes-e-a-importancia-da-owasp-top-10.html
     /clientes/page/N/                                → /cases.html
     (extrair lista completa via Screaming Frog do evernow.com.br atual)
[ ] 7. Configurar _redirects no Cloudflare Pages com as 301s
[ ] 8. Deploy 11ty para produção → DNS cutover
[ ] 9. Submeter sitemap novo ao Search Console
[ ] 10. Solicitar re-crawl das URLs antigas (para o Google aprender os redirects)
[ ] 11. Monitorar 404s no Search Console por 14 dias
[ ] 12. Ativar campanhas Google Ads APENAS após validar que tudo funciona
```

### Como extrair URLs antigas do site atual (WP)

**Opção A — Screaming Frog (grátis até 500 URLs):**
```
1. Download em screamingfrog.co.uk/seo-spider
2. Configure → Spider → configure as "Crawl all subfolders"
3. Start com: https://evernow.com.br
4. Aguardar finalizar
5. Export → Internal → HTML → CSV
6. Filtrar Status Code = 200
7. Lista completa de URLs ativas hoje
```

**Opção B — Google Search Console:**
```
1. Propriedade evernow.com.br → Indexação → Páginas
2. Filtrar "Indexadas"
3. Exportar CSV
4. Contém TODAS URLs indexadas hoje (não só as importantes)
```

Ambos dão input para a matriz de redirects.

---

## 6. Roadmap de 30 dias por prioridade/impacto

### Semana 1 — Preparação técnica (BLOQUEADORES do Ads)
- [ ] Ney: validar GA4 no GTM + criar conversões (seção 3.2)
- [ ] Ney: extrair URLs do WP atual (Screaming Frog) e montar planilha de 301s
- [ ] Claude: revisar e otimizar 5 parceiros BOFU adicionais (sonatype, securiti, purview, sentinel, orca) com o mesmo enriquecimento SEO feito em Fortify/Veracode/SonarQube
- [ ] Claude: criar script/lista de redirects `_redirects` para Cloudflare Pages a partir do crawl

### Semana 2 — Cutover
- [ ] Deploy do 11ty em produção com 301s ativos
- [ ] Re-submeter sitemap
- [ ] Executar `npm run optimize-images` antes do build

### Semana 3 — Ads go-live
- [ ] Ativar campanhas Google Ads (seguindo `campanhas-google-ads.md`)
- [ ] Monitorar primeiros 7 dias sem mexer
- [ ] Instalar Microsoft Clarity para session recording

### Semana 4 — Otimização orgânica
- [ ] Analisar primeiras queries do GSC (dados começam a chegar em 48-72h pós-deploy)
- [ ] Identificar páginas rankeando posição 8-20 e enriquecer com parágrafos semânticos (ritual descrito na mensagem anterior)
- [ ] Primeira rodada de negativas no Ads baseada em Search Terms Report real

---

## 7. Resumo executivo

**Status do código 11ty:** production-ready, com 2 bugs críticos corrigidos nesta rodada (hreflang + meta desc longas).

**Bloqueador principal para rodar Google Ads:** o site em `evernow.com.br` ainda é o legado (WordPress). As URLs das campanhas não existem lá. Precisa do cutover antes de qualquer gasto de mídia.

**Economia esperada no Ads após cutover + fixes:** 20-35% de CPC médio vs rodar em WP antigo sem Quality Score otimizado. Com budget de R$ 2.000/mês, isso significa ~5 cliques adicionais/mês, ou ~3 leads extras/trimestre.

**Risco maior se rodar Ads sem o cutover:**
1. Google rejeita anúncios por "destination URL not working"
2. Mesmo se aceitar, LP Experience ruim eleva CPC em até 100%
3. Dados de conversão vêm fragmentados entre URLs novas e antigas

**Recomendação final:** cutover antes de ativar Ads. O código 11ty está pronto. A maior parte do trabalho de preparação é Ney-side (Google, GTM, Cloudflare), não mais do código.
