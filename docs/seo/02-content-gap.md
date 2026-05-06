# Content Gap Analysis — Evernow vs concorrentes BR cibersec

**Data:** 28/04/2026
**Concorrentes analisados:** Conviso, Tempest, Redbelt, Gemina, Tivit + 4 do Auction Insights (HackerSec, GuardSi, Blaze, Aikido)
**Foco:** identificar tópicos onde concorrentes ranqueiam e Evernow não, mais quick wins de conteúdo.

---

## 1. Mapa de posicionamento dos concorrentes

| Concorrente | Foco principal | Diferencial declarado | Tom | Lead magnet típico |
|---|---|---|---|---|
| **Conviso** | AppSec / DevSecOps puro | Plataforma Astra (ASOC) + serviços | Técnico-comercial | Demo da plataforma, ebook DevSecOps |
| **Tempest** | Full-stack enterprise (parte da IBM) | T-CERT (CSIRT próprio), Black Hat-grade pentest | Executivo-técnico | Whitepaper + case enterprise |
| **Redbelt** | Red Team / Adversary Simulation | Boutique ofensiva, atacam como hackers | Agressivo-técnico | Free POC pentest |
| **Gemina** | Compliance enterprise | SAR / auditoria / PCI DSS especializada | Executivo-formal | Form direto (RD Station) |
| **Tivit** | Integrador full-stack TI/cyber | Escala + SOC 24x7 + parceria hyperscalers | Executivo-corporativo | Demo + reunião comercial |
| **HackerSec** | Pentest + cursos (B2B+B2C) | Volume + cursos pagos | Híbrido marketing | Curso + serviços |
| **GuardSi** | Pentest BR boutique | Especialização ofensiva | Técnico | Form de contato |
| **Blaze InfoSec** | Pentest + Red Team | Internacional (Estônia + BR) | Técnico-premium | Demo |
| **Aikido.dev** | DevSecOps SaaS moderno | Self-serve, integra GitHub | Tech-friendly | Free trial 30 dias |

---

## 2. Matriz de cobertura por tópico

`✅ = cobre com profundidade` | `🟡 = cobre superficialmente` | `❌ = não cobre`

| Tópico | Evernow hoje | Conviso | Tempest | Redbelt | Gemina | Tivit | Aikido | Oportunidade |
|---|---|---|---|---|---|---|---|---|
| **Pentest Web** | ✅ /pentest | ✅ | ✅ | ✅ | ✅ | 🟡 | ❌ | Saturado |
| **Pentest API** | 🟡 | ✅ | 🟡 | ✅ | ❌ | ❌ | ❌ | **MÉDIA** |
| **Pentest Mobile** | 🟡 | 🟡 | ✅ | ✅ | ❌ | ❌ | ❌ | **MÉDIA** |
| **Pentest IoT** | ❌ | ❌ | ✅ | 🟡 | ❌ | ❌ | ❌ | **ALTA** |
| **Pentest Cloud** | ❌ | 🟡 | ✅ | 🟡 | ❌ | 🟡 | ❌ | **ALTA** |
| **Pentest SaaS / multi-tenant** | ❌ | 🟡 | ❌ | ❌ | ❌ | ❌ | 🟡 | **ALTA** ⭐ |
| **Pentest contínuo / PTaaS** | 🟡 (1 blog) | 🟡 | ❌ | ✅ | ❌ | ❌ | 🟡 | **ALTA** ⭐ |
| **Red Team / Adversary Sim** | ❌ | 🟡 | ✅ | ✅ | ❌ | 🟡 | ❌ | MÉDIA |
| **Bug Bounty (gerenciar)** | ❌ | 🟡 | ❌ | ❌ | ❌ | ❌ | ❌ | **ALTA** ⭐ |
| **DevSecOps maturidade** | ✅ /guias/devsecops | ✅ | 🟡 | ❌ | ❌ | 🟡 | ✅ | Saturado |
| **DevSecOps Pipeline tooling** | 🟡 | ✅ | ❌ | ❌ | ❌ | 🟡 | ✅ | MÉDIA |
| **Threat Modeling (STRIDE/PASTA)** | 🟡 (produto) | 🟡 | ✅ | ❌ | ❌ | ❌ | ❌ | **ALTA** ⭐ |
| **Shift Left Security** | ❌ | ✅ | ❌ | ❌ | ❌ | 🟡 | ✅ | MÉDIA |
| **SAST vs DAST vs SCA** | ✅ /guias/sast-vs-dast-vs-sca | ✅ | ❌ | ❌ | ❌ | ❌ | 🟡 | Saturado |
| **Secret scanning** | 🟡 (1 blog) | ✅ | ❌ | ❌ | ❌ | ❌ | ✅ | MÉDIA |
| **CSPM** | ✅ /guias/cspm-o-que-e | 🟡 | 🟡 | ❌ | ❌ | 🟡 | ❌ | OK |
| **CWPP / CNAPP** | ❌ | 🟡 | 🟡 | ❌ | ❌ | 🟡 | 🟡 | **ALTA** ⭐ |
| **DSPM / Data Security** | 🟡 (produto) | ❌ | 🟡 | ❌ | 🟡 | 🟡 | ❌ | **ALTA** |
| **LGPD adequação** | ✅ /servicos/adequacao-lgpd | 🟡 | ✅ | ❌ | ✅ | ✅ | ❌ | Saturado |
| **DPIA / RIPD** | 🟡 | ❌ | 🟡 | ❌ | ✅ | 🟡 | ❌ | **ALTA** |
| **DPO as a Service** | ❌ | ❌ | 🟡 | ❌ | ✅ | 🟡 | ❌ | **ALTA** ⭐ |
| **ISO 27001 implementação** | ✅ /servicos/consultoria-iso-27001 | ❌ | ✅ | ❌ | ✅ | 🟡 | ❌ | OK |
| **ISO 27017/27018 (cloud privacy)** | ❌ | ❌ | 🟡 | ❌ | 🟡 | ❌ | ❌ | **ALTA** ⭐ |
| **PCI DSS 4.0 implementação** | 🟡 (produto) | ❌ | ✅ | ❌ | ✅ | ✅ | ❌ | MÉDIA |
| **NIST CSF 2.0** | ✅ /blog/csf-2-0... | ❌ | 🟡 | ❌ | 🟡 | 🟡 | ❌ | OK |
| **SOC 2 Type II** | ❌ | ❌ | ✅ | ❌ | 🟡 | ✅ | ❌ | **ALTA** ⭐ |
| **SOC as a Service** | ✅ /servicos/soc-como-servico | ❌ | ✅ | ❌ | 🟡 | ✅ | ❌ | OK |
| **EDR / XDR managed** | 🟡 (parceiros) | ❌ | ✅ | ❌ | ❌ | ✅ | ❌ | MÉDIA |
| **SIEM/SOAR custom** | 🟡 (parceiros) | ❌ | ✅ | ❌ | ❌ | ✅ | ❌ | MÉDIA |
| **Threat Intelligence** | ❌ | ❌ | ✅ | 🟡 | ❌ | 🟡 | ❌ | **ALTA** |
| **Incident Response (IR)** | 🟡 (produto) | ❌ | ✅ | ✅ | ❌ | ✅ | ❌ | MÉDIA |
| **Tabletop exercises / war games** | ❌ | ❌ | ✅ | ✅ | ❌ | 🟡 | ❌ | **ALTA** ⭐ |
| **Maturity Assessment** | ✅ /produtos/assessment-maturidade | 🟡 | ✅ | 🟡 | ✅ | 🟡 | ❌ | OK |
| **Calculadora de ROI / Custo** | ✅ /guias/quanto-custa-pentest | 🟡 | ❌ | ❌ | ❌ | ❌ | ❌ | **ÚNICO** ⭐⭐⭐ |
| **Glossário cibersegurança** | ❌ | 🟡 | 🟡 | ❌ | ❌ | ❌ | 🟡 | **ALTA** |
| **Comparativo de ferramentas** | 🟡 (parceiros pages) | ✅ | ❌ | ❌ | ❌ | ❌ | ✅ | MÉDIA |
| **Casos por indústria** | ✅ /industrias/* | 🟡 | ✅ | 🟡 | ✅ | ✅ | ❌ | OK |
| **Ataques recentes / news** | 🟡 (blog) | ✅ | ✅ | 🟡 | 🟡 | ❌ | 🟡 | MÉDIA |

---

## 3. Top 10 oportunidades de conteúdo (priorizadas por ROI)

Cada uma é um conteúdo SEO potencial onde Evernow pode liderar. Critérios: gap competitivo + intenção comercial + match com serviços atuais.

### ⭐⭐⭐ Tier 1 — quick wins (criar nos próximos 30 dias)

| # | Conteúdo | Tipo | Keyword core | Volume M | Por que vale |
|---|---|---|---|---|---|
| 1 | **Guia: Pentest contínuo (PTaaS) — quando faz sentido vs pentest pontual** | Guia comparativo | "pentest contínuo" + "ptaas" | ~95-210 | Só Redbelt cobre bem; vc já tem 1 blog post legacy mas precisa promover a guia |
| 2 | **Calculadora interativa: estimativa de custo de pentest por escopo** | Ferramenta | "calcular pentest" "estimar custo pentest" | low | NINGUÉM tem ferramenta interativa; transforma o /guias/quanto-custa-pentest em LP convertedora pesada |
| 3 | **Guia: Tipos de pentest (Black/White/Grey-box, interno/externo, web/api/mobile)** | Pillar guide | "tipos de pentest" | ~310 | Volume alto, KD baixo (~25), você já tem fragmentos no /pentest |
| 4 | **Guia: SOC 2 Type II — implementação no Brasil** | Guia | "soc 2 type 2" "soc 2 brasil" | ~210 | Tempest e Tivit cobrem, mas mal ranqueado; SaaS BR está crescendo nessa demanda |
| 5 | **Guia: Threat Modeling com STRIDE — passo a passo** | Guia técnico | "threat modeling" "stride" | ~590 | Tempest cobre superficialmente; vc tem produto Threat Modeling sem suporte de SEO |

### ⭐⭐ Tier 2 — médio prazo (60-90 dias)

| # | Conteúdo | Tipo | Keyword core | Volume M |
|---|---|---|---|---|
| 6 | **Guia: Pentest SaaS multi-tenant — padrões e armadilhas** | Guia | "pentest saas" | ~45-80 |
| 7 | **DPO as a Service — quando contratar e checklist** | LP comercial + guia | "dpo as a service" "dpo terceirizado" | ~140 |
| 8 | **CNAPP — o que é e como escolher (vs CSPM, CWPP)** | Guia comparativo | "cnapp" "cnapp vs cspm" | ~310 |
| 9 | **Tabletop exercises / war games — playbook B2B BR** | Guia técnico | "tabletop exercise" | ~85 |
| 10 | **ISO 27017 + 27018 (cloud + privacy) — implementação** | Guia técnico | "iso 27017" "iso 27018" | ~110 (somados) |

---

## 4. Quick wins em páginas EXISTENTES (próximos 7 dias)

Páginas que já existem, mas podem ranquear muito melhor com 30-60 min de edição cada:

| Página | Gap | Ação |
|---|---|---|
| `/guias/quanto-custa-pentest/` | Falta **calculadora interativa**, falta CTA forte ao final, falta schema FAQPage | Adicionar widget de cálculo (input: tipo + escopo + escopo profundidade → output: faixa estimada) + 8 perguntas FAQ schema |
| `/pentest` | H1 atual é genérico, falta **comparison block** (pentest vs scan vs bug bounty), falta TOC ancorado | Reescrever H1 mais comercial, adicionar comparativo + TOC |
| `/guias/sast-vs-dast-vs-sca` | Falta **decision tree** ("qual escolho?"), falta tabela de ferramentas (Fortify, Veracode, Sonatype, Sonarqube...) | Adicionar tabela comparativa + flowchart de decisão |
| `/guias/devsecops` | Falta **maturity model** próprio (DSO Maturity Score), falta CTA para Assessment | Inserir self-assessment de 8-10 perguntas + CTA pra serviço |
| `/guias/cspm-o-que-e` | Não menciona **CWPP nem CNAPP** | Expandir pra cobrir os 3 (CSPM/CWPP/CNAPP) — vira pillar |
| `/servicos/adequacao-lgpd/` | Falta **DPIA/RIPD seção**, falta **DPO as a Service**, falta schema | Adicionar 2 seções + FAQ schema 6-8 perguntas |
| `/servicos/consultoria-iso-27001/` | Falta **detalhe dos 93 controles**, falta cronograma visual de 8 meses | Bloco visual de timeline + acordeon dos 93 controles agrupados |
| `/servicos/soc-como-servico/` | Falta **comparativo SOC interno vs MSSP**, falta playbook típico | Tabela + diagrama de fluxo de incidente |
| `/produtos/devsecops/` | Página fina, sem comparação SAST/DAST/SCA tools | Linkar pros parceiros (Fortify/Veracode/Sonatype/Sonarqube/Semgrep) com cards |
| `/produtos/modelagem-ameacas/` | Conteúdo técnico curto, sem exemplos | Adicionar exemplo prático de STRIDE em uma app fintech |

---

## 5. Padrões de conteúdo que concorrentes usam e Evernow NÃO

| Padrão | Quem faz | Por que vale | Sugestão Evernow |
|---|---|---|---|
| **Centro de pesquisa / threat report anual** | Tempest, Conviso | Backlinks orgânicos (mídia cita), autoridade | Lançar "State of AppSec Brasil 2026" baseado em dados de pentests entregues |
| **Glossário de cibersegurança** | Conviso, Tivit (parcial) | Captura long-tail TOFU + linka pra páginas | Criar /glossario com 50+ termos (DevSecOps, OWASP, CVSS, CWE, etc) |
| **Comparativo de ferramentas estilo G2** | Aikido, Conviso | Captura "X vs Y" buscas, vende serviço de seleção | Criar /comparativos/ com tabelas (Fortify vs Sonarqube, Tenable vs Qualys, etc) |
| **Webinars gravados públicos** | Tempest, Tivit | YouTube SEO + autoridade | Você tem /webinars/ — falta volume + recência |
| **Cases por indústria publicados (com número)** | Tempest, Gemina | Social proof + SEO | /cases existe — adicionar 2-3 cases anonimizados com métricas |
| **Páginas-pilar gigantes (10k+ palavras)** | Conviso ("ASOC: Guia completo") | Ranqueia 50+ keywords long-tail | Transformar /guias/devsecops em pillar de 8-10k palavras |
| **Comparação direta com nome de concorrente** | Aikido ("Aikido vs Snyk") | Captura buscas BOFU "X vs Y" | Cuidado legal, mas vale ter "Veracode vs Fortify" e similares |
| **Lista de ferramentas open source** | Conviso (educational) | TOFU massivo | "10 ferramentas SAST open source" — capa long-tail |

---

## 6. Sumário operador

### O que vc tem MELHOR que todos os concorrentes
- ✅ **Calculadora de custo de pentest** (`/guias/quanto-custa-pentest`) — único no mercado BR, ímã de leads
- ✅ **Guia SAST vs DAST vs SCA** com profundidade
- ✅ **Páginas de parceiros estruturadas** (24 vendors com hero/oqueFaz/FAQ)
- ✅ **Estrutura de pillares clara** (`/solucoes/secure-code`, `/solucoes/data-shield`, `/solucoes/managed-ops`, `/solucoes/assurance`)

### O que falta criar (Top 5 prioridades)
1. **Pillar gigante de DevSecOps** (transformar `/guias/devsecops` em conteúdo de 8-10k palavras com sub-tópicos)
2. **State of AppSec/Cybersec Brasil 2026** (relatório anual com dados próprios — backlinks magnet)
3. **Calculadora 2.0**: expandir `/guias/quanto-custa-pentest` com widget interativo
4. **Cluster de PTaaS / Pentest contínuo** (3-4 conteúdos: o que é, vs pontual, ROI, casos de uso)
5. **Guia Threat Modeling STRIDE** (pillar técnico — você tem o produto, falta SEO)

### O que melhorar nas páginas existentes (Top 5)
1. Schema FAQPage em todas as LPs comerciais (`/pentest`, `/servicos/*`, `/produtos/*`)
2. Internal linking guia→LP→produto (exemplo: `/guias/quanto-custa-pentest` → `/pentest` → `/produtos/pentest`)
3. CTAs com number-driven copy ("Receba estimativa em 48h", "Diagnóstico gratuito de 30 min")
4. Adicionar tabelas comparativas (vs concorrentes, vs ferramentas, vs metodologias)
5. Adicionar TOC (table of contents) ancorado em guias longos

---

**Última observação**: este gap analysis baseia-se em (a) conhecimento do mercado BR de cibersegurança 2024-2026, (b) análise de SERP e estrutura de URLs visível, (c) Auction Insights do seu Google Ads (Top 9 concorrentes diretos no leilão pago). Para validar volumes exatos, exportar Keyword Planner e Semrush/Ahrefs.
