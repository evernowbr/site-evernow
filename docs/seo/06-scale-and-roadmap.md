# Scale + AI + Roadmap — Onda 3

**Data:** 28/04/2026
**Conteúdo:** AI Search Optimization (#18) + Content Refresh Plan (#19) + Traffic & Revenue Opportunities (#12) + 30-Day SEO Action Plan (#20)

---

## Parte 1 — AI Search Optimization (#18)

Cenário: ChatGPT, Claude, Perplexity, Google SGE/AI Overviews, Bing Copilot. Compradores B2B B2 estão usando esses canais cada vez mais — especialmente CTOs/CISOs que pesquisam "comparativo Fortify vs SonarQube" ou "como escolher consultoria LGPD".

### 1.1 Estado atual da Evernow

✅ **Já existe** `https://evernow.com.br/llms.txt` (8KB) — você está à frente da maioria do mercado BR
✅ **Robots.txt** com permissão explícita para GPTBot, ChatGPT-User, ClaudeBot, anthropic-ai, PerplexityBot, Googlebot-Extended, Meta-ExternalAgent, Applebot, Bytespider
✅ **Schema.org** Organization + LocalBusiness + WebSite + BreadcrumbList em quase todas as páginas
✅ **Hreflang** PT-BR / EN configurado

### 1.2 O que precisa evoluir

| Item | Estado atual | Ação |
|---|---|---|
| **`llms.txt`** | Existe, 8KB | Auditar conteúdo + reorganizar com seções "Use cases" e "Quem é o cliente ideal" + atualizar trimestralmente |
| **Schema FAQPage em LPs** | 4 das 15 páginas-chave | Adicionar nas 7 que faltam (lista em `05-content-strategy.md`) |
| **Schema Service em produtos/serviços** | Já tem em `/servicos/*` e `/produtos/devsecops/` | Replicar pros 27 produtos restantes |
| **Schema HowTo em guias** | ❌ não existe | Adicionar nas guias com passos numerados (DevSecOps, ISO 27001, LGPD) |
| **Schema Article com author** | TechArticle sem `author` específico | Adicionar `Person` com nome real (ex: Felipe Tonin) — ajuda EEAT |
| **Tabelas comparativas estruturadas** | Algumas em texto | Marcar como `<table>` com `<thead>`/`<tbody>` (LLMs leem tabelas melhor) |
| **Resposta direta no início da página** | Variado | Padrão: 1º parágrafo deve responder a pergunta do title em 50-100 palavras (LLMs extraem o "lead") |
| **Citáveis: estatísticas próprias** | ❌ não tem | Adicionar dados originais ("Em 2025, 67% dos pentests Evernow encontraram XSS...") — LLMs adoram cites |
| **FAQ enxuto + direto** | OK em algumas | Padrão LLM: pergunta + resposta de 2-3 frases (não parágrafos longos) |
| **Sitemap dedicado pra IA** | ❌ não tem | Considerar `llms-full.txt` com URLs canônicas + descrição de 1 linha cada |

### 1.3 llms.txt — review do atual + sugestões

Conteúdo atual cobre:
- Quem é Evernow
- Pillars de serviço
- Páginas principais
- Audience

**Adicionar:**
1. **Use cases por indústria** ("Para fintechs: nossa expertise em PCI DSS + DevSecOps...")
2. **Diferenciais vs concorrentes** (texto seco, não marketing fluff)
3. **Quem NÃO é cliente ideal** (filter — LLMs respeitam)
4. **Tickets típicos por serviço** (ranges; ajuda LLM a recomendar quando alguém pergunta "consultoria cibersegurança barata BR" — vc não é, fica claro)

### 1.4 Padrões de conteúdo que LLMs gostam

Quando você for escrever (ou refrasear) páginas pensando em IA Search:

| Padrão | Por quê | Exemplo bom |
|---|---|---|
| **Lead direto** | LLM extrai 1ª frase como answer | "Pentest empresarial custa entre R$ 18.000 e R$ 120.000 dependendo do escopo." |
| **Listas numeradas** | LLM cita como step-by-step | "Os 5 passos de DevSecOps: 1) Threat modeling, 2) SAST, 3) SCA, 4) DAST, 5) RASP" |
| **Comparações tabulares** | LLM extrai tabela | `<table><tr><th>SAST</th><th>DAST</th>...` |
| **Definições no formato "X é Y"** | LLM cita como autoridade | "DevSecOps é a integração de práticas de segurança no ciclo DevOps com automação." |
| **Estatísticas com fonte** | LLM cita você como fonte original | "Segundo dados internos da Evernow (200+ pentests entregues entre 2022-2025), 67% das aplicações testadas tinham IDOR exploitável." |
| **FAQ com linguagem natural** | LLM cita FAQ direto | Pergunta + resposta direta |

### 1.5 Página "Sobre" otimizada para IA (sugestão criar)

Crie `/sobre-llm.html` (ou enriquecer `/about`) com:
- Quem é Evernow (1 parágrafo direto)
- Histórico (anos no mercado, número de clientes, pentests entregues)
- 3 cofundadores/líderes com nome + LinkedIn (people authority)
- Lista de 10-15 clientes-tipo (sem revelar nomes — "banco médio do Sul", "fintech B series")
- Certificações da empresa (ISO, parcerias)
- Contato direto (não só form)

LLMs usam essa info pra **citar você como autoridade** quando alguém pergunta "qual a melhor consultoria de cibersegurança no Brasil".

---

## Parte 2 — Content Refresh Plan (#19)

Você tem **70+ blog posts legacy** vindos do WordPress. Maioria foi escrita em 2023-2024 e nunca atualizada. SEO valoriza **freshness**: refresh mensal pode dobrar tráfego orgânico de posts antigos sem criar novo conteúdo.

### 2.1 Auditoria preliminar (lista de 25 posts top — priorização)

⭐ Top performers prováveis (revisar primeiro com base em URLs e tópicos):

| Post | Slug | Tópico | Ação |
|---|---|---|---|
| 1 | `introducao-ao-pentest-como-funciona-e-quando-fazer` | Pentest 101 | **REFRESH** — adicionar "tipos de pentest" + linkar nova /guias/tipos-de-pentest |
| 2 | `csf-2-0-uma-nova-era-na-gestao-de-riscos-ciberneticos` | NIST CSF 2.0 | **REFRESH** — atualizar com NIST Updates 2026 |
| 3 | `compliance-em-cloud-com-lgpd-e-iso` | Multi-compliance | **REFRESH** — linkar nova /guias/iso-27001-implementacao |
| 4 | `contratar-pentest` | Como contratar | **REFRESH** — linkar /guias/quanto-custa-pentest e /pentest |
| 5 | `tendencias-de-ciberseguranca-para-2025` | Trends 2025 | **REPURPOSE** — fazer "Tendências 2026" + redirect 2025→2026 |
| 6 | `5-tendencias-da-gartner-para-ciberseguranca` | Gartner trends | **REFRESH** — atualizar com Gartner 2025-2026 |
| 7 | `as-5-melhores-estrategias-de-seguranca-de-aplicacoes-corporativas-para-2025` | AppSec strategies | **REFRESH** — atualizar 2026 |
| 8 | `desafios-appsec-seguranca-aplicacoes` | AppSec challenges | **REFRESH** + linkar /guias/devsecops |
| 9 | `pentest-continuo-para-empresas` | PTaaS | **REFRESH MAJOR** — virar pillar + link de /pentest |
| 10 | `o-que-e-seguranca-cibernetica` | Cybersec 101 | **REFRESH** — adicionar TOC + FAQ schema |
| 11 | `dast-para-apis-e-aplicacoes` | DAST | **REFRESH** + linkar /guias/sast-vs-dast-vs-sca |
| 12 | `seguranca-sast-ciclo-de-vida-software` | SAST | **REFRESH** + linkar /guias/sast-vs-dast-vs-sca |
| 13 | `seguranca-em-software-com-foco-em-sca` | SCA | **REFRESH** + linkar /guias/sast-vs-dast-vs-sca |
| 14 | `appsec-na-estrategia-de-negocios` | AppSec strategy | **REFRESH** |
| 15 | `governanca-de-ia-como-vantagem-competitiva` | AI governance | **REFRESH** — tema quente 2026 |
| 16 | `riscos-da-shadow-ai-em-empresas` | Shadow AI | **REFRESH** — tema quente |
| 17 | `automatizar-correcao-vulnerabilidades-sem-travar-pipeline` | Auto-remediation | **REFRESH** + linkar produtos AppSec |
| 18 | `threat-modeling-protegendo-seu-negocio-com-estrategias-de-seguranca` | Threat Modeling | **REFRESH MAJOR** + virar pillar de /guias/threat-modeling-stride |
| 19 | `os-maiores-riscos-do-vazamento-de-credenciais-e-como-mitiga-los` | Credential leak | **REFRESH** + linkar /parceiros/senhasegura (PAM) |
| 20 | `simulacao-defesa-cibernetica-protecao-empresas` | Tabletop / war games | **REFRESH MAJOR** — link nova LP (criar /produtos/tabletop) |
| 21 | `tudo-que-voce-precisa-saber-sobre-a-atualizacao-do-nist-csf-2-0` | NIST CSF 2.0 | **MERGE** com `csf-2-0-uma-nova-era` (canonical 1) |
| 22 | `secret-scanning-prevencao-crises` | Secret scanning | **REFRESH** + linkar produtos DevSecOps |
| 23 | `protecao-de-dados-corporativos-evitando-multas-e-danos-a-reputacao` | Compliance | **REFRESH** + linkar /servicos/adequacao-lgpd |
| 24 | `identificar-e-conter-violacoes-de-dados-no-brasil-leva-ate-299-dias` | Breach response | **REFRESH** + estatísticas 2026 |
| 25 | `ciberseguranca-empresarial-protegendo-o-futuro-dos-negocios` | Generic intro | **CONSOLIDATE** com home (canonical home; redirect 301) |

### 2.2 Critérios de refresh

Pra cada post, fazer em 30-45 min:

| Item | O que fazer |
|---|---|
| Title | Atualizar com ano correto (2026) + revisar pra 50-60 chars |
| Description | Reescrever pra 130-150 chars |
| Lead paragraph | Reescrever 1ª frase pra responder direto a pergunta core (LLM-friendly) |
| Estatísticas | Atualizar todas com fonte 2024-2026 |
| Internal links | Adicionar 3-5 links contextuais pras LPs/guias atuais |
| FAQ | Adicionar 4-5 FAQs com schema FAQPage |
| Author | Adicionar `Person` schema com nome real |
| Imagens | Verificar se WebP + alt + dimensões |
| CTA | Adicionar CTA forte pra LP relacionada |
| `dateModified` | Atualizar (sinaliza freshness pro Google) |

### 2.3 Posts a CONSOLIDAR (canonical → 1)

Vários posts cobrem temas duplicados — consolidar pra evitar canibalização:

| Tema | Posts duplicados | Ação |
|---|---|---|
| NIST CSF 2.0 | `csf-2-0-uma-nova-era-na-gestao-de-riscos-ciberneticos`, `tudo-que-voce-precisa-saber-sobre-a-atualizacao-do-nist-csf-2-0`, `por-que-a-transicao-para-o-csf-2-0-e-importante` | Manter 1 (o mais forte), 301 os outros |
| Compliance digital | `compliance-digital-seguranca-informacao-regulacoes`, `compliance-em-cloud-com-lgpd-e-iso` | Consolidar em pillar de Compliance |
| Pentest intro | `introducao-ao-pentest-como-funciona-e-quando-fazer`, `construindo-defesas-solidas-com-pentest`, `contratar-pentest` | Manter o mais forte como hub, demais 301 |
| AppSec | `appsec-preventiva-riscos-terceiros`, `desafios-appsec-seguranca-aplicacoes`, `as-5-melhores-estrategias-de-seguranca-de-aplicacoes-corporativas-para-2025` | Linkar todos pro `/guias/devsecops` (não consolidar — angles diferentes) |

### 2.4 Posts a DELETAR/redirecionar (low-value)

Posts genéricos que só comem crawl budget sem ranquear:

| Post | Motivo | Destino redirect |
|---|---|---|
| `desvendando-os-segredos-dos-ataques-de-forca-bruta` | Tópico saturado, low intent | `/blog` |
| `dos-amp-ddos-desvendando-os-ataques-que-ameacam-a-internet` | Generic | `/blog` |
| `ciberseguranca-sua-empresa-esta-vulneravel` | Clickbait sem conversão | `/assessment` (faz sentido!) |
| `voce-sabe-quais-sao-os-ataques-ciberneticos-mais-explorados` | Generic | `/blog` |
| `principais-tipos-de-ataques-ciberneticos-para-2024` | Outdated | `/blog/principais-tipos-de-ataques-ciberneticos-para-2026` (criar novo) |

### 2.5 Calendário de refresh proposto

| Mês | Volume | Foco |
|---|---|---|
| Mês 1 (maio 2026) | 10 posts | Top performers prováveis (lista 1-10) + consolidações |
| Mês 2 (junho) | 10 posts | Lista 11-20 + 5 deleções |
| Mês 3 (julho) | 10 posts | Lista 21-25 + posts adicionais |
| Mês 4-6 | 30 posts | Refresh sistemático do resto |
| **Total** | **70+ posts** em 6 meses | |

---

## Parte 3 — Traffic & Revenue Opportunities (#12)

Análise: quais páginas/keywords têm o **maior ROI potencial** se otimizadas, com base em (a) volume de busca estimado, (b) intenção comercial, (c) match com serviços de alto ticket Evernow, (d) capacidade de conversão atual.

### 3.1 Top 10 oportunidades por ROI

| # | Oportunidade | Volume M | Conversão estimada | Ticket médio | ROI 12m | Ação |
|---|---|---|---|---|---|---|
| 1 | **`/guias/quanto-custa-pentest` + calculadora** | 1.300 (cluster) | 3% se interativo | R$ 60k | R$ 936k | Adicionar calculadora interativa + FAQ schema |
| 2 | **Pillar `/guias/devsecops` 8k palavras** | 2.700 (cluster) | 1.5% | R$ 80k | R$ 1.07M | Reescrever como pillar gigante |
| 3 | **Cluster ISO 27001 (3 conteúdos)** | 1.700 | 2% | R$ 120k | R$ 1.42M | Criar pillar + 2 clusters |
| 4 | **Cluster LGPD (4 conteúdos)** | 3.500 | 1.5% | R$ 80k | R$ 1.62M | Pillar + clusters DPIA, DPO, DPIA tools |
| 5 | **`/guias/tipos-de-pentest`** | 310 | 4% | R$ 60k | R$ 274k | Criar — gap baixo competição |
| 6 | **LP nova `/pentest-preco`** | 720 | 5% | R$ 60k | R$ 1.36M | Criar LP comercial dedicada (alias /pentest-preco já existe via redirect — virar LP real) |
| 7 | **`/parceiros` reescrita + cards de cada vendor** | (alimenta 24 vendor pages) | 2% indireto | R$ 40-150k | R$ 800k | Reescrever hub + cards interativos |
| 8 | **Cluster SOC (3 conteúdos)** | 580 | 1% | R$ 100k | R$ 580k | Criar guias SOC interno vs MSSP, EDR/XDR comparativo, IR playbook |
| 9 | **State of AppSec/Cybersec Brasil 2026** (relatório anual) | (backlinks) | indireto | múltiplos | R$ 2M+ | Pesquisa proprietária — backlinks PR |
| 10 | **Calculadora de risco/maturidade interativa em /assessment** | (conversão direta) | 8% | R$ 30-80k | R$ 480k | Self-assessment widget |

### 3.2 "Quick wins" de conversão em LPs existentes

Páginas que já têm tráfego mas convertem pouco — melhorar **CTA + formulário** pode dobrar leads sem aumentar tráfego:

| Página | Problema | Fix proposto | Lift estimado |
|---|---|---|---|
| `/pentest` | CTA "Solicitar orçamento" genérico | Trocar pra "Receba estimativa em 48h" + adicionar prova social acima do form | +30% conversion |
| `/guias/quanto-custa-pentest/` | Sem calculadora | Adicionar widget interativo com 5 inputs → output R$ range + CTA | +200% conversion |
| `/assessment` | Form genérico | Tornar interativo (10 perguntas → score → CTA conversa especialista) | +150% conversion |
| `/parceiros/{vendor}` | Form igual em todos | Personalizar por vendor: "Quero POC do [Fortify]" não "Quero contato" | +40% conversion |

### 3.3 Onde ficar de olho via Search Console (configurar relatório semanal)

Métricas a acompanhar toda 2ª-feira:

1. **Top 20 queries** com posição 5-15 → essas estão **a 1-2 movimentos** de virar tráfego
2. **Top 20 páginas** com CTR < 2% → titles/descriptions não vendem
3. **Páginas com impressão alta + clique baixo** → oportunidade de title rewrite
4. **Páginas perdendo posição** mês-a-mês → refresh urgente

---

## Parte 4 — 30-Day SEO Action Plan (#20)

Roadmap consolidado das Ondas 1, 2 e 3. Ordem por **impacto / esforço**.

### Semana 1 (29 abr – 5 mai)

| Dia | Tarefa | Quem | Tempo |
|---|---|---|---|
| **Seg 29/04** | ✅ Push do `_redirects` (já fizemos parte; falta o segundo lote: /seguranca-de-aplicacoes, /somos-a-evernow, /pentest-continuo, etc) | Você | 5 min |
| Seg 29/04 | Após push: contestar 3 sitelinks reprovados no Google Ads + RSA legacy | Eu via Chrome | 10 min |
| Seg 29/04 | Adicionar 20 keywords novas (lista do `01-keyword-research`) nas campanhas Compliance e DevSecOps | Eu via Chrome | 30 min |
| Ter 30/04 | Title/meta otimizados (15 páginas — `04-title-meta-optimizer.md`) | Eu via Edit | 70 min |
| Qua 01/05 | FAQ schema nas 7 LPs com gap | Eu via Edit | 4h |
| Qui 02/05 | Internal linking component (`related-links.njk`) + aplicar em 30 páginas | Eu via Edit | 3h |
| Sex 03/05 | Reescrever `/parceiros` (572 → 1500 palavras + schema) | Eu via Edit | 2h |

### Semana 2 (6-12 mai)

| Dia | Tarefa | Tempo |
|---|---|---|
| Seg 06/05 | Ritual semanal Google Ads (Search Terms + screenshots) | 30 min |
| Seg-Qua | Criar `/guias/tipos-de-pentest` (outline 2.1) | 4h |
| Qua-Qui | Criar `/guias/iso-27001-implementacao` (outline 2.2) | 5h |
| Sex 10/05 | Refresh top 5 blog posts (lista 1-5) | 3h |

### Semana 3 (13-19 mai)

| Dia | Tarefa | Tempo |
|---|---|---|
| Seg-Ter | Criar `/guias/lgpd-empresas` (outline 2.3) | 6h |
| Qua-Qui | Criar `/guias/threat-modeling-stride` (outline 2.4) | 4h |
| Sex 17/05 | Calculadora interativa em `/guias/quanto-custa-pentest` | 4h dev (HTML/JS) |

### Semana 4 (20-26 mai)

| Dia | Tarefa | Tempo |
|---|---|---|
| Seg-Ter | Criar `/guias/pentest-continuo` (outline 2.5) | 4h |
| Qua | Refresh top 6-10 blog posts | 3h |
| Qui | AI Search optimization: review llms.txt + adicionar HowTo schema em 4 guias | 2h |
| Sex 24/05 | Smart Bidding migration check (se 15 conversões em 30d) | 30 min |

### Resultados esperados ao final do 30-day plan

| Métrica | Hoje (28/04) | Esperado (28/05) |
|---|---|---|
| Páginas-pillar ricas | 5 (parciais) | 5 (completas) + 5 novas guias = **10 pillars** |
| Schema FAQPage | 4 LPs | 11 LPs |
| Posts refrescados | 0 | 10 |
| Keywords core nas campanhas | 29 | 49 |
| Internal links contextuais | ~3-5/página | ~8-12/página |
| Pontuação otimização Google Ads | 99% | 99,5%+ |
| Sessões Paid Search | 99 (28d) | 200+ |
| Sessões Organic Search | 45 (28d) | 90+ |
| Lead conversões | 0 (visíveis) | 5-10 |

### Riscos e mitigações

| Risco | Probabilidade | Mitigação |
|---|---|---|
| Tracking de leads não captar mesmo após fixes | Média | Validar via DebugView do GA4 + teste manual de form todo dia 1 |
| Bot traffic continuar inflando relatórios | Alta | Filtros de IP/cidade no GA4 (Onda 3 deixou pendente — você define critério) |
| Concorrentes copiarem nossas guias | Alta | Manter ritmo de publicação 2x semanais (eles não conseguem replicar) |
| Mudança no algoritmo do Google | Baixa-Média | Foco em EEAT (autoridade) protege contra updates core |
| Time interno não escrever as guias | Alta | Outlines prontas + posso ajudar drafting (próximas conversas) |

---

## Sumário final dos 6 documentos da Onda C+A+2+3

```
docs/seo/
├── 01-keyword-research.md         ✅ 80 keywords B2B cybersec BR
├── 02-content-gap.md              ✅ Análise vs 5+ concorrentes
├── 03-onpage-audit.md             ✅ 15 páginas auditadas
├── 04-title-meta-optimizer.md     ✅ Títulos/metas reescritos
├── 05-content-strategy.md         ✅ Clusters + outlines + FAQ + linking
└── 06-scale-and-roadmap.md        ✅ AI + refresh + opportunities + 30d plan
```

**Próximo passo recomendado**: a) você revisa os 6 docs, b) prioriza o que aplica primeiro, c) eu começo a executar (edits no código + Google Ads).

---

**Última observação**: este plano cobre 90 dias se executado em ritmo realista (não 30 dias punitivos). O "30-Day Action Plan" acima foca nos quick wins; o resto entra no Q3.
