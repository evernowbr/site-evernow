# On-Page SEO Audit — 15 páginas-chave Evernow

**Data:** 28/04/2026
**Método:** crawl direto da produção via curl + parsing HTML, métricas técnicas
**Padrão de referência:** title 50-60 chars, description 120-155 chars, 1 H1, ≥3 H2, FAQ schema em LPs comerciais, palavras 1500+ em pillar pages

---

## 1. Resumo executivo

| Métrica | Páginas OK | Páginas com gap | % conformidade |
|---|---|---|---|
| Title 50-60 chars | 6 | 9 | 40% |
| Description 120-155 chars | 7 | 8 | 47% |
| 1 H1 unique | 15 | 0 | **100% ✅** |
| Canonical correto | 15 | 0 | **100% ✅** (após fix de hoje) |
| OG image presente | 15 | 0 | **100% ✅** |
| FAQ schema em LP comercial | 4 | 7 | 36% |
| Schema Service em /servicos /produtos | 4 | 1 | 80% |
| Imagens com alt | 15 | 0 | **100% ✅** |

**Pontos fortes globais:** estrutura técnica sólida, canonical corretos (após fix), schemas Organization/LocalBusiness/WebSite no header, imagens 100% com alt, internal linking forte (74-95 links/página).

**Gaps prioritários:**
1. **FAQ schema faltando** em 7 LPs comerciais críticas
2. **Title overflow** (>60 chars) em 5 páginas
3. **Description overflow** (>155 chars) em 4 páginas
4. **Word count baixo** em 4 páginas estratégicas
5. **Keywords genéricas** em /solucoes/* e /produtos/devsecops

---

## 2. Tabela detalhada — 15 páginas

| # | URL | Title chars | Desc chars | H1 | H2 | Words | FAQ schema | Schemas extras | Status |
|---|---|---|---|---|---|---|---|---|---|
| 1 | `/` | 51 ✅ | 178 ❌ (>155) | 1 | 4 | 838 | ❌ | Org+LocalBiz+WebSite | ⚠️ |
| 2 | `/pentest` | 57 ✅ | 141 ✅ | 1 | 13 ✅ | 1965 ✅ | ✅ | FAQPage | ✅ ⭐ |
| 3 | `/guias/quanto-custa-pentest/` | 72 ❌ | 158 ⚠️ | 1 | 8 | 1438 | ✅ | Article+FAQ | ⚠️ title |
| 4 | `/guias/devsecops/` | 72 ❌ | 153 ✅ | 1 | 7 | 1008 | ❌ | TechArticle | ⚠️ |
| 5 | `/guias/sast-vs-dast-vs-sca/` | 79 ❌❌ | 141 ✅ | 1 | 5 | 923 | ❌ | TechArticle | ⚠️ title |
| 6 | `/guias/cspm-o-que-e/` | 76 ❌ | 156 ⚠️ | 1 | 8 | 1314 | ❌ | TechArticle | ⚠️ |
| 7 | `/servicos/adequacao-lgpd/` | 60 ✅ | 157 ⚠️ | 1 | 6 | 817 ⚠️ | ❌ | Service | ⚠️ |
| 8 | `/servicos/consultoria-iso-27001/` | 56 ✅ | 158 ⚠️ | 1 | 5 | 695 ❌ | ❌ | Service | ⚠️ words |
| 9 | `/servicos/soc-como-servico/` | 62 ⚠️ | 147 ✅ | 1 | 8 | 1192 ✅ | ✅ | Service+FAQ | ✅ ⭐ |
| 10 | `/solucoes/secure-code/` | 54 ✅ | 140 ✅ | 1 | 4 ⚠️ | 943 | ❌ | Service | ⚠️ FAQ |
| 11 | `/solucoes/data-shield/` | 53 ✅ | 159 ❌ | 1 | 4 ⚠️ | 904 | ❌ | Service | ⚠️ |
| 12 | `/produtos/devsecops/` | 49 ✅ | 144 ✅ | 1 | 7 | 1481 | ✅ | Service+FAQ | ✅ |
| 13 | `/parceiros` | 50 ✅ | 172 ❌ | 1 | 1 ❌ | 572 ❌ | ❌ | (apenas global) | ❌❌ |
| 14 | `/parceiros/fortify/` | 79 ❌❌ | 157 ⚠️ | 1 | 5 | 1646 ✅ | ✅ | Service+FAQ | ⚠️ title |
| 15 | `/assessment` | 47 ✅ | 150 ✅ | 1 | 4 | 605 ❌ | ❌ | (apenas global) | ⚠️ |

**Legenda**: ✅ ok / ⚠️ ajustar / ❌ corrigir / ❌❌ corrigir prioridade alta / ⭐ benchmark

---

## 3. Priorização de correções (Top 12 quick wins)

Ordem por impacto SEO × esforço (todos são correções de 5-30 min cada).

### 🔴 P0 — Crítico (fazer essa semana)

| # | Ação | Páginas afetadas | Tempo | Impacto |
|---|---|---|---|---|
| 1 | Adicionar **FAQ schema** com 5-7 perguntas | `/`, `/guias/devsecops`, `/guias/sast-vs-dast-vs-sca`, `/guias/cspm-o-que-e`, `/servicos/adequacao-lgpd`, `/servicos/consultoria-iso-27001`, `/solucoes/secure-code`, `/solucoes/data-shield`, `/parceiros`, `/assessment` | 30 min cada × 10 = 5h | 🔥 Alto — rich results no SERP |
| 2 | Reduzir titles **>70 chars** | `/guias/sast-vs-dast-vs-sca` (79), `/parceiros/fortify` (79), `/guias/cspm-o-que-e` (76), `/guias/quanto-custa-pentest` (72), `/guias/devsecops` (72) | 2-5 min cada | 🔥 Alto — evita truncamento SERP |
| 3 | Reduzir descriptions **>155 chars** | `/` (178), `/parceiros` (172), `/solucoes/data-shield` (159) | 2-5 min cada | Médio — evita truncamento SERP |
| 4 | **Reescrever /parceiros** (hub gravemente fino) — 1 H2, 572 palavras, sem schema | `/parceiros` | 1-2h | 🔥 Alto — é hub com 25 vendor pages dependendo dele |

### 🟠 P1 — Alto valor (próximas 2 semanas)

| # | Ação | Páginas afetadas | Tempo | Impacto |
|---|---|---|---|---|
| 5 | **Expandir conteúdo** abaixo de 1000 palavras em LPs comerciais | `/servicos/consultoria-iso-27001` (695→1500+), `/assessment` (605→1200+) | 2-3h cada | Alto — relevância semântica |
| 6 | **Reescrever keywords meta** genéricas | `/solucoes/secure-code`, `/solucoes/data-shield`, `/produtos/devsecops` | 5 min cada | Médio — sinal fraco mas ainda usado |
| 7 | Aumentar H2 count em **/solucoes/secure-code** e **/solucoes/data-shield** (de 4 para 7-8) | 2 páginas | 30-45 min cada | Médio — scannability + signals |
| 8 | Adicionar **Article schema completa** (`datePublished`, `dateModified`, `author`) nas guias | 4 guias | 15 min cada | Médio — rich results de Article |

### 🟡 P2 — Otimização (próximos 30 dias)

| # | Ação | Tempo | Impacto |
|---|---|---|---|
| 9 | Internal linking pillar→cluster→produto explícito (criar template) | 3-4h | Alto — distribuição de equity |
| 10 | TOC ancorado em todas guias 1000+ palavras | 1h | Médio — UX + SERP jumplinks |
| 11 | Schema BreadcrumbList em TODAS páginas (já tem em algumas) | 1h | Médio — SERP visual |
| 12 | Schema Organization + WebPage + Article com author específico (Felipe Tonin?) | 2h | Médio — autoridade EEAT |

---

## 4. Análise por categoria

### 4.1 Homepage `/`

```
Title: Evernow | Consultoria em Cibersegurança e DevSecOps (51c) ✅
Desc:  Acelere a segurança digital da sua empresa. Reduza riscos e garanta compliance com especialistas em cibersegurança, DevSecOps e Inteligência Artificial. Fale com um especialista. (178c) ❌
H1: Aceleramos a segurança digital ✅
H2: 4 (médio — pode ter 6-8 pra cobrir mais facetas)
Words: 838 (médio — homepage B2B típica tem 800-1500)
FAQ schema: ❌ FALTA
```

**Ação**: cortar description pra ~140 chars + adicionar 5 FAQs ("O que vocês fazem?", "Para que tamanho de empresa?", "Quanto tempo leva pra implementar?", "Quais setores atendem?", "Como começa o engajamento?").

### 4.2 LPs comerciais (/pentest, /assessment)

`/pentest` é o **benchmark da casa** (1965 palavras, 13 H2s, FAQ schema, 8 imagens).

`/assessment` está fraca (605 palavras, sem schema FAQ, sem schema Service). Precisa expandir.

### 4.3 Guias (/guias/*)

Todas têm TechArticle schema mas **só 1 (quanto-custa-pentest) tem FAQPage**. Os outros 3 (devsecops, sast-vs-dast-vs-sca, cspm-o-que-e) precisam adicionar.

Titles excedem 60 chars em todas as 4 — precisa enxugar.

### 4.4 Serviços (/servicos/*)

`/servicos/soc-como-servico/` é **modelo** (1192 palavras, FAQ schema, Service schema).

`/servicos/consultoria-iso-27001/` está **muito fina** (695 palavras). Precisa expandir com:
- Tabela dos 14 domínios da ISO 27001:2022
- Acordeon dos 93 controles do Anexo A (agrupados)
- Cronograma visual de 8 meses
- 6-8 perguntas FAQ schema

`/servicos/adequacao-lgpd/` similar — adicionar DPIA, ROPA, DPO as a Service como subsections.

### 4.5 Soluções (/solucoes/*)

Keywords meta **muito fracas** ("Secure Code, cibersegurança, Secure Code brasil, segurança da informação, evernow"). Precisa keyword research aplicado.

H2 count baixo (4) — adicionar 3-4 mais por página.

Sem FAQ schema.

### 4.6 Produtos (/produtos/*)

`/produtos/devsecops/` está bem (1481 palavras, FAQ schema, Service schema). Outros 25 produtos não auditados — bom assumir mesma qualidade pelo template.

### 4.7 Parceiros

**`/parceiros` é o pior gap do site:**
- 572 palavras (deveria ter 1500+)
- 1 H2 (deveria ter 5-6: "Como trabalhamos", "POC", "Implementação", "Operação", "Tabela de parceiros por categoria", "FAQ")
- Zero schemas próprios (só os globais)
- Description 172 chars (acima do limite)

**`/parceiros/fortify/` é exemplo bom**: 1646 palavras, 5 H2, FAQ schema. Replicar template para os 23 outros.

---

## 5. Próxima onda

Esse audit é a base. As ações P0 vão na **Onda 2** (Conteúdo & Estrutura) com:
- Geração de FAQ schemas (#15)
- Topical clusters (#11)
- Outlines de novas páginas (#13)
- Internal linking system (#16)

Os deliverables de title/meta otimizados estão no arquivo separado **`04-title-meta-optimizer.md`** (próxima entrega).
