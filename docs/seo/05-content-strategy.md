# Content Strategy — Onda 2

**Data:** 28/04/2026
**Conteúdo:** Topical Clusters (#11) + SEO Content Outlines (#13) + FAQ schemas (#15) + Internal Linking (#16)

---

## Parte 1 — Topical Cluster Map

Modelo: cada **pillar** tem 1 página-pillar (3000-8000 palavras) que linka pra **clusters** (subtemas, 1500-3000 palavras cada), que linkam de volta. Bottom of funnel: **LPs comerciais** + **páginas de produto/serviço**.

### Pillar 1: AppSec / DevSecOps / Secure Code

```
┌─────────────────────────────────────────────────────────┐
│ PILLAR: /guias/devsecops/  (3000+ palavras — expandir)  │
│ ⭐ Foco: "o que é devsecops", "guia devsecops"          │
└─────────────────────────────────────────────────────────┘
        │
        ├─ /guias/sast-vs-dast-vs-sca/    [✅ existe]
        ├─ /guias/threat-modeling-stride/ [⏳ criar]
        ├─ /guias/shift-left-security/    [⏳ criar]
        ├─ /guias/appsec-maturity/        [⏳ criar]
        ├─ /guias/secret-scanning/        [⏳ criar — promover blog]
        ├─ /guias/secure-code-review/     [⏳ criar]
        │
        │── BOFU LPs comerciais ──
        ├─ /produtos/devsecops/           [✅ existe]
        ├─ /produtos/sast-dast-sca/       [✅ existe — verificar]
        ├─ /produtos/code-protection/     [✅ existe]
        ├─ /produtos/revisao-codigo/      [✅ existe]
        ├─ /produtos/desenvolvimento-seguro-gerenciado/ [✅]
        ├─ /produtos/treinamento-devsecops/ [✅]
        ├─ /produtos/modelagem-ameacas/   [✅]
        │
        └── Vendor pages (BOFU search) ──
            ├─ /parceiros/fortify/        [✅]
            ├─ /parceiros/sonarqube/      [✅]
            ├─ /parceiros/semgrep/        [✅]
            ├─ /parceiros/veracode/       [✅]
            ├─ /parceiros/sonatype/       [✅]
            ├─ /parceiros/jscrambler/     [✅]
            ├─ /parceiros/guardsquare/    [✅]
            └─ /parceiros/security-compass/ [✅]
```

### Pillar 2: Pentest / Offensive Security

```
┌─────────────────────────────────────────────────────────┐
│ PILLAR: /pentest  (1965 palavras — expandir pra 3000+)   │
│ ⭐ Foco: "pentest empresa", "empresa pentest"           │
└─────────────────────────────────────────────────────────┘
        │
        ├─ /guias/quanto-custa-pentest/    [✅ existe]
        ├─ /guias/tipos-de-pentest/        [⏳ criar — alta prioridade]
        ├─ /guias/pentest-continuo/        [⏳ criar — substituir URL legacy 404]
        ├─ /guias/pentest-vs-bug-bounty/   [⏳ criar]
        ├─ /guias/relatorio-pentest/       [⏳ criar]
        ├─ /guias/pentest-saas/            [⏳ criar — gap competitivo único]
        │
        │── BOFU LPs ──
        ├─ /pentest                        [✅ pillar+LP combinado]
        ├─ /produtos/pentest/              [✅]
        ├─ /produtos/red-team/             [✅]
        │
        └── Blog (TOFU/MOFU) ──
            ├─ /blog/introducao-ao-pentest-como-funciona-e-quando-fazer
            ├─ /blog/contratar-pentest
            ├─ /blog/construindo-defesas-solidas-com-pentest
            ├─ /blog/pentest-continuo-para-empresas
            └─ /blog/dast-para-apis-e-aplicacoes
```

### Pillar 3: Compliance (LGPD / ISO 27001 / PCI DSS)

```
┌─────────────────────────────────────────────────────────┐
│ PILLAR: criar /guias/compliance-cibersegurança/         │
│ ⭐ Foco: "compliance segurança", "frameworks regulação" │
└─────────────────────────────────────────────────────────┘
        │
        ├─ /guias/lgpd-empresas/           [⏳ criar — alta prioridade]
        ├─ /guias/iso-27001-implementacao/ [⏳ criar — alta prioridade]
        ├─ /guias/pci-dss-4-implementacao/ [⏳ criar]
        ├─ /guias/dpia-ripd/               [⏳ criar]
        ├─ /guias/soc-2-type-2-brasil/     [⏳ criar — gap competitivo]
        ├─ /guias/iso-27017-27018-cloud/   [⏳ criar — gap competitivo]
        │
        │── BOFU LPs ──
        ├─ /servicos/adequacao-lgpd/       [✅]
        ├─ /servicos/consultoria-iso-27001/[✅]
        ├─ /produtos/lgpd/                 [✅]
        ├─ /produtos/consentimento-lgpd/   [✅]
        ├─ /produtos/iso-27001/            [✅]
        ├─ /produtos/pci-dss/              [✅]
        ├─ /produtos/grc/                  [✅]
        │
        └── Blog/Cluster ──
            ├─ /blog/compliance-em-cloud-com-lgpd-e-iso
            ├─ /blog/csf-2-0-uma-nova-era-na-gestao-de-riscos-ciberneticos
            └─ /blog/identificar-e-conter-violacoes-de-dados-no-brasil...
```

### Pillar 4: SOC / Managed Security

```
┌─────────────────────────────────────────────────────────┐
│ PILLAR: /servicos/soc-como-servico/  (1192 palavras)    │
│ ⭐ Foco: "soc as a service brasil", "mssp brasil"       │
└─────────────────────────────────────────────────────────┘
        │
        ├─ /guias/soc-proprio-vs-mssp/     [⏳ criar]
        ├─ /guias/edr-xdr-comparativo/     [⏳ criar]
        ├─ /guias/threat-intelligence/     [⏳ criar]
        ├─ /guias/incident-response-playbook/ [⏳ criar]
        │
        │── BOFU LPs / Produtos ──
        ├─ /produtos/soc-monitoramento/    [✅]
        ├─ /produtos/servicos-gerenciados/ [✅]
        ├─ /produtos/managed-appsec/       [✅]
        ├─ /produtos/resposta-incidentes/  [✅]
        │
        └── Vendors ──
            ├─ /parceiros/microsoft-sentinel/ [✅]
            ├─ /parceiros/sentinelone/       [✅]
            ├─ /parceiros/darktrace/         [✅]
            ├─ /parceiros/aws-security-hub/  [✅]
            └─ /parceiros/senhasegura/       [✅]
```

### Pillar 5: Cloud Security / Data Security

```
┌─────────────────────────────────────────────────────────┐
│ PILLAR: /guias/cspm-o-que-e/  (1314 palavras)            │
│ ⭐ Foco: "cspm", "cloud security empresa"               │
└─────────────────────────────────────────────────────────┘
        │
        ├─ /guias/cspm-cwpp-cnapp/         [⏳ criar — expandir pillar]
        ├─ /guias/data-shield-dspm/        [⏳ criar]
        ├─ /guias/criptografia-aplicada/   [⏳ criar]
        │
        │── BOFU LPs / Produtos ──
        ├─ /solucoes/data-shield/          [✅]
        ├─ /produtos/cspm/                 [✅]
        ├─ /produtos/dspm/                 [✅]
        ├─ /produtos/dlp/                  [✅]
        ├─ /produtos/criptografia-kms-hsm/ [✅]
        ├─ /produtos/data-discovery/       [✅]
        │
        └── Vendors ──
            ├─ /parceiros/orca-security/   [✅]
            ├─ /parceiros/aws-kms/         [✅]
            ├─ /parceiros/azure-key-vault/ [✅]
            ├─ /parceiros/microsoft-purview/ [✅]
            ├─ /parceiros/opentext-voltage/ [✅]
            └─ /parceiros/securiti/        [✅]
```

---

## Parte 2 — Outlines de 5 conteúdos prioritários

Foco: criar primeiro os que cobrem **gap competitivo + alto volume + match com serviços**.

### Outline 2.1 — `/guias/tipos-de-pentest/` (NOVO)

**Keyword core:** `tipos de pentest` (~310/mês, KD 25)
**Word count target:** 2200-2800
**Estrutura:**

```
H1: Tipos de Pentest: Black-box, White-box, Grey-box e Como Escolher

Intro (200 palavras): contexto + por que importa escolher tipo certo

H2: Pentest por escopo de informação
  H3: Black-box (atacante externo, zero info)
  H3: Grey-box (acesso parcial, mais comum)
  H3: White-box (acesso total, código + arquitetura)
  → tabela comparativa: tempo, custo, profundidade, quando usar

H2: Pentest por superfície de ataque
  H3: Pentest Web (apps, OWASP WSTG)
  H3: Pentest API (REST/GraphQL/gRPC)
  H3: Pentest Mobile (Android/iOS, OWASP MASVS)
  H3: Pentest Cloud (IAM, S3, Kubernetes)
  H3: Pentest IoT / Embedded
  H3: Pentest Wireless

H2: Pentest por origem do atacante
  H3: Pentest externo (internet pública)
  H3: Pentest interno (LAN, insider threat)

H2: Modalidades especiais
  H3: Red Team (objetivo > escopo)
  H3: Adversary Simulation (TTPs específicas)
  H3: Pentest contínuo / PTaaS
  H3: Bug Bounty público

H2: Como escolher o tipo certo (decision tree)
  → diagrama: Você tem código? → você tem credenciais? → produção ou staging?

H2: Frameworks que regulam cada tipo
  → tabela: PCI DSS, ISO 27001, NIST, LGPD

H2: Quanto custa cada tipo (faixas reais)
  → linkar pra /guias/quanto-custa-pentest

H2: FAQ (8 perguntas)

CTA final: "Não sabe qual escolher? 30 min com especialista grátis"
→ /assessment ou form contato

Schema: TechArticle + FAQPage + BreadcrumbList
Internal links: /pentest, /produtos/pentest, /produtos/red-team, /guias/quanto-custa-pentest, /parceiros/ridge-security (PTaaS)
```

### Outline 2.2 — `/guias/iso-27001-implementacao/` (NOVO)

**Keyword core:** `iso 27001 implementação` (~260) + `certificação iso 27001` (~720)
**Word count target:** 3000-4000
**Estrutura:**

```
H1: ISO 27001:2022 Implementação Empresarial: Plano de 8 Meses

Intro (250 palavras): por que ISO 27001 (compliance + sales enabler)

H2: O que é ISO 27001:2022 (vs 2013)
  H3: Principais mudanças da revisão 2022
  H3: 14 cláusulas + Anexo A com 93 controles

H2: Cronograma típico de 8 meses
  → diagrama visual com fases:
  Mês 1: Diagnóstico/gap analysis
  Mês 2-3: Definição do escopo + SoA
  Mês 4-5: Implementação dos 93 controles
  Mês 6: Documentação + treinamento
  Mês 7: Auditoria interna
  Mês 8: Auditoria de certificação

H2: Os 93 controles do Anexo A explicados
  H3: Controles organizacionais (37)
  H3: Controles de pessoas (8)
  H3: Controles físicos (14)
  H3: Controles tecnológicos (34)
  → acordeon expandível com cada controle

H2: Custos típicos no Brasil (2026)
  → tabela: pequena (até 100 func), média (100-500), grande (500+)
  → custo consultoria + auditor + certificação

H2: Erros comuns que reprovam empresas
  → 7-8 anti-padrões reais

H2: Diferenças vs SOC 2 / ISO 27017 / ISO 27018
  → quando combinar

H2: ISO 27001 e LGPD (sinergia)

H2: FAQ (8 perguntas)

CTA: "Plano de 8 meses pronto pra sua empresa"
→ /servicos/consultoria-iso-27001/

Schema: TechArticle + FAQPage
Links: /servicos/consultoria-iso-27001, /produtos/iso-27001, /servicos/adequacao-lgpd
```

### Outline 2.3 — `/guias/lgpd-empresas/` (NOVO)

**Keyword core:** `consultoria lgpd` (~1300) + `adequação lgpd` (~880)
**Word count target:** 3500-4500
**Estrutura:**

```
H1: LGPD para Empresas: Adequação em 120 Dias com Foco no que ANPD Cobra

Intro (300 palavras): contexto recente (multas ANPD 2024-2026)

H2: O que mudou em 2024-2026 nas fiscalizações
  → casos reais de multa

H2: Roadmap 120 dias dividido em 4 sprints
  Sprint 1 (30d): mapeamento (Article 37, ROPA)
  Sprint 2 (30d): bases legais + DPIA
  Sprint 3 (30d): políticas + contratos + treinamento
  Sprint 4 (30d): canal de titular + evidências ANPD

H2: Os 6 entregáveis obrigatórios
  H3: ROPA (Registro de Operações de Tratamento)
  H3: DPIA / RIPD
  H3: Política de privacidade externa
  H3: Política interna de proteção de dados
  H3: Aviso de cookies + gestão consentimento
  H3: Plano de resposta a incidentes (vazamento)

H2: DPO: interno, terceirizado ou as a Service?
  → tabela comparativa de modelos

H2: Quando precisa fazer DPIA
  → checklist de 7 critérios

H2: Compliance contínuo: o que ninguém fala
  → revisão anual + treinamento + monitoramento

H2: LGPD + ISO 27001 + ISO 27701 (sinergias)

H2: Custos típicos
  → faixas para pequena, média, grande

H2: FAQ (10 perguntas)

CTA: "120 dias pra adequação completa com DPO as a Service"
→ /servicos/adequacao-lgpd/

Schema: TechArticle + FAQPage
Links: /servicos/adequacao-lgpd, /produtos/lgpd, /produtos/consentimento-lgpd, /produtos/grc, /guias/iso-27001-implementacao
```

### Outline 2.4 — `/guias/threat-modeling-stride/` (NOVO)

**Keyword core:** `threat modeling` (~590)
**Word count target:** 2500-3000

```
H1: Threat Modeling com STRIDE: Guia Prático para Times de Engenharia

Intro: por que threat modeling vira diferencial em maturidade AppSec

H2: O que é Threat Modeling (sem jargão)

H2: Quando fazer (sprint 0, design review, mudança crítica)

H2: Frameworks: STRIDE, PASTA, OCTAVE, LINDDUN
  → tabela comparativa

H2: STRIDE em profundidade
  H3: Spoofing
  H3: Tampering
  H3: Repudiation
  H3: Information Disclosure
  H3: Denial of Service
  H3: Elevation of Privilege

H2: Workshop de 2h passo a passo
  → exemplo prático: app fintech (login + PIX)
  → diagramas data flow
  → ameaças identificadas
  → mitigações propostas

H2: Ferramentas (Threat Dragon, IriusRisk, Microsoft TMT, Security Compass SD Elements)
  → linkar parceiros

H2: Como integrar threat modeling no SDLC

H2: KPIs de maturidade

H2: FAQ

CTA: "Quer threat model facilitado pelo nosso time? POC gratuita"
→ /produtos/modelagem-ameacas/

Schema: TechArticle + FAQPage
Links: /produtos/modelagem-ameacas, /parceiros/security-compass, /guias/devsecops, /guias/sast-vs-dast-vs-sca
```

### Outline 2.5 — `/guias/pentest-continuo/` (NOVO)

**Keyword core:** `pentest contínuo` (~95) + `ptaas` (~210)
**Word count target:** 2200-2700

```
H1: Pentest Contínuo (PTaaS) vs Pentest Pontual: Quando Cada Um Faz Sentido

Intro: contexto release contínuo + DevSecOps

H2: O que é PTaaS (Pentest as a Service)

H2: Diferenças entre Pentest Pontual e PTaaS
  → tabela: frequência, custo, integração, profundidade

H2: Quando faz sentido pentest contínuo
  → 7 sinais (alta velocidade deploy, multi-tenant, fintech, etc)

H2: Quando ainda vale pontual
  → projetos com escopo claro, requisito compliance, budget

H2: ROI comparativo (3 cenários)
  → empresa SaaS, fintech, indústria

H2: Como funciona PTaaS na prática
  → fluxo: integração com Jira → autonomia time atacante → relatório vivo

H2: Ferramentas de mercado
  → Ridge Security, Cobalt, HackerOne pentest, BugCrowd
  → Evernow + Ridge Security (CTA)

H2: Como migrar de pontual pra contínuo

H2: FAQ

CTA: "Avalie sua empresa pra pentest contínuo"
→ /pentest ou /assessment

Schema: TechArticle + FAQPage
Links: /pentest, /guias/quanto-custa-pentest, /guias/tipos-de-pentest, /parceiros/ridge-security
```

---

## Parte 3 — FAQ schemas para LPs com gap

Geração de FAQs com perguntas que (a) usuários **realmente** buscam, (b) demonstram autoridade, (c) capturam keywords MOFU/BOFU.

### 3.1 Homepage `/`

```json
{
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Para que tamanho de empresa a Evernow atende?",
      "acceptedAnswer": {"@type": "Answer", "text": "A Evernow atende empresas de médio e grande porte (acima de 100 funcionários ou TI estruturado). Atuamos em bancos, fintechs, healthcare, telecom, varejo enterprise e governo. Tickets típicos vão de R$ 30k a R$ 500k+ por projeto."}
    },
    {
      "@type": "Question",
      "name": "Quais áreas de cibersegurança a Evernow cobre?",
      "acceptedAnswer": {"@type": "Answer", "text": "5 pilares: Application Security & DevSecOps (SAST, DAST, SCA, threat modeling), Pentest e Red Team, Compliance (LGPD, ISO 27001, PCI DSS, SOC 2), SOC e MSSP 24x7, e Cloud + Data Security (CSPM, DSPM, criptografia, DLP)."}
    },
    {
      "@type": "Question",
      "name": "Vocês implementam ferramentas de mercado ou só revendem licenças?",
      "acceptedAnswer": {"@type": "Answer", "text": "Implementamos ponta a ponta. Somos parceiros certificados de Fortify, Veracode, SonarQube, Sonatype, Tenable, SentinelOne, Microsoft Sentinel, AWS Security Hub e mais 16 plataformas. Fazemos POC, instalação, configuração, integração CI/CD e operação gerenciada."}
    },
    {
      "@type": "Question",
      "name": "Quanto tempo leva pra começar um engajamento?",
      "acceptedAnswer": {"@type": "Answer", "text": "30 minutos: assessment gratuito de cibersegurança. 5-10 dias úteis: proposta detalhada com escopo e investimento. 2-4 semanas: kickoff do projeto após assinatura."}
    },
    {
      "@type": "Question",
      "name": "Como a Evernow garante qualidade técnica?",
      "acceptedAnswer": {"@type": "Answer", "text": "Time certificado nas próprias plataformas (não generalistas), pentests com OSCP/OSWE, metodologia OWASP/PTES/NIST, retesting incluído, NDA + cláusula de destruição de dados em todos contratos."}
    }
  ]
}
```

### 3.2 `/guias/devsecops/` (FAQ schema falta)

Perguntas:
1. "Qual a diferença entre DevOps e DevSecOps?"
2. "Quanto tempo leva pra implementar DevSecOps numa empresa?"
3. "DevSecOps trava o deploy?"
4. "Quais ferramentas SAST, DAST e SCA são essenciais no pipeline?"
5. "Como medir maturidade DevSecOps?"
6. "Qual o ROI de DevSecOps?"
7. "Preciso de DevSecOps mesmo se já tenho SOC?"

### 3.3 `/guias/sast-vs-dast-vs-sca/` (FAQ schema falta)

Perguntas:
1. "Posso usar só SAST e dispensar DAST?"
2. "SCA e SBOM são a mesma coisa?"
3. "Qual ferramenta gratuita de SAST funciona em CI/CD?"
4. "DAST quebra produção?"
5. "Como priorizar findings dos 3?"

### 3.4 `/servicos/adequacao-lgpd/` (FAQ schema falta)

Perguntas:
1. "Quanto tempo leva adequação LGPD completa?"
2. "Preciso de DPO próprio ou DPO as a Service?"
3. "O que é DPIA e quando é obrigatória?"
4. "Vocês ajudam em incidente de vazamento?"
5. "Quanto custa adequação LGPD?"
6. "ANPD pode multar mesmo empresa pequena?"

### 3.5 `/servicos/consultoria-iso-27001/` (FAQ schema falta)

Perguntas:
1. "Quanto custa certificação ISO 27001 no Brasil?"
2. "ISO 27001 vale pra empresa pequena?"
3. "Qual auditor certificador vocês recomendam?"
4. "ISO 27001:2022 vs ISO 27001:2013, preciso recertificar?"
5. "Vocês ajudam na manutenção pós-certificação?"

(Repetir padrão para `/solucoes/secure-code`, `/solucoes/data-shield`, `/parceiros`, `/assessment`.)

---

## Parte 4 — Internal Linking System

### 4.1 Padrão recomendado (regra)

Toda página deve ter:
- **3-5 links contextuais** dentro do corpo (não no menu/footer) pra páginas relacionadas
- **1 link pillar→cluster** (página-pillar linka pros clusters)
- **1 link cluster→pillar** (cluster linka de volta pra pillar)
- **1 link guia→LP comercial** (TOFU/MOFU termina em CTA pra LP)
- **1 link LP→produto/parceiro** (BOFU mostra solução concreta)

### 4.2 Anchor text strategy

Usar anchor com keyword relacionada (não "clique aqui"):
- ❌ "Saiba mais aqui"
- ✅ "como implementar DevSecOps em 90 dias"
- ✅ "comparativo SAST vs DAST vs SCA"
- ✅ "consultoria especializada em ISO 27001"

### 4.3 Mapa de links sugeridos por página-chave

| De | Para | Anchor sugerido |
|---|---|---|
| `/guias/quanto-custa-pentest/` | `/pentest` | "solicitar orçamento de pentest agora" |
| `/guias/quanto-custa-pentest/` | `/guias/tipos-de-pentest` (criar) | "saber qual tipo de pentest precisa" |
| `/guias/quanto-custa-pentest/` | `/parceiros/ridge-security` | "pentest contínuo automatizado" |
| `/pentest` | `/guias/quanto-custa-pentest/` | "faixas de preço reais 2026" |
| `/pentest` | `/guias/tipos-de-pentest` (criar) | "tipos de pentest e quando usar" |
| `/pentest` | `/produtos/pentest/` | "metodologia técnica detalhada" |
| `/guias/devsecops/` | `/guias/sast-vs-dast-vs-sca` | "diferenças entre SAST, DAST e SCA" |
| `/guias/devsecops/` | `/produtos/devsecops/` | "consultoria DevSecOps especializada" |
| `/guias/devsecops/` | `/parceiros/fortify` | "Fortify SAST enterprise" |
| `/servicos/adequacao-lgpd/` | `/guias/lgpd-empresas` (criar) | "guia completo LGPD para empresas" |
| `/servicos/adequacao-lgpd/` | `/produtos/grc/` | "plataforma GRC integrada" |
| `/servicos/consultoria-iso-27001/` | `/servicos/adequacao-lgpd/` | "compliance LGPD complementar" |
| `/parceiros/fortify/` | `/guias/sast-vs-dast-vs-sca/` | "como escolher entre SAST, DAST e SCA" |
| `/parceiros/fortify/` | `/produtos/devsecops/` | "implementação DevSecOps com Fortify" |

### 4.4 Auditoria do estado atual (problemas observados)

- ✅ Maioria das páginas tem 70-95 links internos (volume alto, bom)
- ⚠️ Mas a **distribuição** é dominada por menu/footer (que repete em todas) — links **contextuais** dentro do corpo são poucos
- ⚠️ Vendor pages quase não linkam pras páginas-pillar (falta retroalimentação)
- ⚠️ Blog posts legacy não têm CTAs pra LPs comerciais (oportunidade desperdiçada)

### 4.5 Ação concreta: criar componente Nunjucks `related-links.njk`

Sugestão de implementação:

```html
{# /src/_includes/components/related-links.njk #}
<aside class="related-links">
  <h3>Conteúdos relacionados</h3>
  <ul>
    {% for link in relatedLinks %}
    <li><a href="{{ link.url }}">{{ link.anchor }}</a></li>
    {% endfor %}
  </ul>
</aside>
```

Cada page com `.njk` define um array `relatedLinks` no front-matter:

```yaml
relatedLinks:
  - url: /guias/sast-vs-dast-vs-sca
    anchor: "Diferenças SAST, DAST e SCA explicadas"
  - url: /produtos/devsecops
    anchor: "Consultoria DevSecOps especializada"
  - url: /parceiros/fortify
    anchor: "Fortify SAST enterprise no Brasil"
```

Tempo de implementação: **1-2h** pra criar o componente + 5 min/página pra adicionar `relatedLinks` no front-matter de 30-50 páginas-chave.

---

## Resumo de entregáveis e prazos

| Item | O que é | Prioridade | Tempo |
|---|---|---|---|
| 5 outlines acima | Briefing pronto pra escrita | 🔥 P0 | Já feito |
| 5 FAQ schemas exemplos | Cole nos templates | 🔥 P0 | Já feito |
| Component related-links.njk | Sistema reusável de internal links | 🟠 P1 | 1-2h dev |
| Reescrita das 5 LPs com gap | Aplicar outlines | 🟠 P1 | 4-6h cada |
| Schema FAQPage nas 7 LPs sem | Implementação direta | 🔥 P0 | 30 min cada × 7 = 3.5h |

**Próxima Onda 3** (último arquivo) cobre: AI Search Optimization, Content Refresh Plan, Traffic Opportunities priorizadas, e 30-Day Action Plan consolidado.
