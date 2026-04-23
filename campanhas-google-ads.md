# Campanhas Google Ads — Evernow (abril 2026)

**Budget total:** R$ 2.000 / mês
**Foco:** ROI no trimestre, carro-chefe Secure Code via Pentest (BOFU) + DevSecOps (BOFU restrito)
**Posicionamento:** Secure Code pillar · Parceiro certificado · Resultados em 90 dias

---

## Alocação do budget

| Campanha | Budget/mês | Keywords ativas | Lance inicial | CPA alvo |
|----------|-----------|-----------------|---------------|----------|
| [Search] Pentest — Preço/Compra | R$ 1.000 | 12 kws | R$ 25 cap | R$ 500 |
| [Search] Pentest — Compliance | R$ 600 | 8 kws | R$ 22 cap | R$ 600 |
| [Search] DevSecOps — BOFU apenas | R$ 400 | 6 kws | R$ 22 cap | R$ 800 |
| **Total** | **R$ 2.000** | **26 kws** | — | ~R$ 600 |

> **Regra de ouro:** comece todas com lance **manual tCPC** (não Maximize Conversions). Só migra pra "Maximize" após 30 dias e no mínimo 15 conversões registradas. Sem dado, Smart Bidding queima budget.

---

## 1. Conta — configurações globais

**Antes de tudo:**
- Vincular Google Ads ↔ GA4 (Ferramentas > Contas vinculadas > Google Analytics)
- Vincular Google Ads ↔ Search Console (mesmo menu)
- Criar conversões:
  - **Conversão primária 1:** `submissão_formulario_hubspot` (GA4 event)
  - **Conversão primária 2:** `clique_whatsapp_contato`
  - **Conversão secundária:** `clique_telefone_mobile`
- Configurar public de retargeting: **Visitantes últimos 30 dias** (para excluir já-convertidos das campanhas search)
- Criar **lista de clientes existentes** (upload CSV do HubSpot) e excluir das campanhas

**Configurações-padrão de todas as campanhas:**
- Tipo: **Search** (sem Display, sem Partners, sem YouTube)
- Rede: **Somente Pesquisa Google**
- Locais: Brasil, exclusões: nenhuma (Brasil inteiro)
- Lances por localização: +30% em SP, RJ, MG, RS, PR
- Idioma: Português + Inglês (CTO/CISO brasileiro costuma navegar em EN)
- Horário: 08h00–20h00 segunda a sexta (bid ajuste +0%), fim de semana pausado (-100%)
- Dispositivo: Desktop +0%, Tablet -100%, Mobile -60% no mês 1 (reavaliar após dados)
- Rotação de anúncios: **Otimizar por cliques** no mês 1, depois "Otimizar por conversões"
- Exibição: público personalizado por mercado → "Segurança corporativa", "Compliance", "DevOps"

---

## 2. Campanha: [Search] Pentest — Preço/Compra

**Budget:** R$ 1.000/mês (R$ 33/dia)
**Página de destino principal:** `/guias/quanto-custa-pentest/`
**Secundária (compliance):** `/pentest.html`

### Ad Group 2.1 — Preço Exato (R$ 400/mês, ~13/dia)

**Keywords exact:**
- `[quanto custa pentest]`
- `[pentest preço]`
- `[valor pentest]`
- `[preço pentest]`
- `[custo pentest]`

**Landing:** `/guias/quanto-custa-pentest/?utm_source=google&utm_medium=cpc&utm_campaign=pentest_preco&utm_content=exact`

**Anúncios A/B (3 variações):**

**Copy A — Transparência de preço:**
- H1: `Pentest em 2026: Faixas de Preço Reais`
- H2: `Web, API, Mobile, Cloud — R$ 18k a R$ 120k`
- H3: `Proposta Detalhada em 48h`
- D1: `Evernow mostra faixas reais por tipo, 7 variáveis que mudam o preço e 8 itens pra checar em qualquer proposta.`
- D2: `Parceiros certificados. Reteste grátis. Relatório executivo. Mais de 50 CISOs confiam.`

**Copy B — Objeção do tomador:**
- H1: `Quanto Custa um Pentest? Veja o Guia`
- H2: `Faixas Práticas de 5 Tipos de Teste`
- H3: `Evite Pentest de R$ 3k (Não Presta)`
- D1: `Guia da Evernow com preço por escopo, variáveis do orçamento e checklist para comparar propostas.`
- D2: `Pentest profissional PCI-DSS, LGPD e ISO 27001. Solicite orçamento em 48h.`

**Copy C — ROI framing:**
- H1: `Pentest: R$ 45k vs R$ 6 mi de Violação`
- H2: `IBM 2025: Custo Médio de Breach BR = US$ 1.22M`
- H3: `Orçamento em 48h na Evernow`
- D1: `Faixas reais: R$ 18k–R$ 120k dependendo do escopo. Comparado ao custo de um incidente, é 1,4% do impacto.`
- D2: `Evernow: parceiro certificado, reteste grátis, relatório auditável.`

### Ad Group 2.2 — Contratar Phrase (R$ 350/mês, ~12/dia)

**Keywords phrase:**
- `"contratar pentest"`
- `"contratar empresa pentest"`
- `"empresa de pentest"`
- `"consultoria pentest"`
- `"orçamento pentest"`
- `"pentest para empresa"`

**Landing:** `/pentest.html?utm_source=google&utm_medium=cpc&utm_campaign=pentest_preco&utm_content=contratar`

**Copy A:**
- H1: `Contratar Pentest? Evernow Responde em 48h`
- H2: `Teste Manual por Especialistas OSCP`
- H3: `Reteste Grátis + Relatório Executivo`
- D1: `Web, API, Mobile, Rede, Cloud. Metodologia OWASP + PTES. Mais de 50 CISOs confiam.`
- D2: `Pronto para compliance PCI-DSS, LGPD e ISO 27001. Solicite proposta agora.`

**Copy B:**
- H1: `Empresa de Pentest Certificada no Brasil`
- H2: `Pentesters OSCP, OSWE, GPEN`
- H3: `Proposta em 48h com Escopo e Cronograma`
- D1: `Consultoria especializada em segurança ofensiva. Relatório técnico-executivo com narrativa de ataque.`
- D2: `Reteste grátis em 60 dias. Atendimento em SP/RJ/BR inteiro.`

### Ad Group 2.3 — Tipos Phrase (R$ 250/mês, ~8/dia)

**Keywords phrase:**
- `"pentest web"`
- `"pentest api"`
- `"pentest mobile"`
- `"pentest cloud"`

**Landing:** `/pentest.html` (mesma do anterior)

**Copy A:**
- H1: `Pentest de Aplicação Web por OSCP`
- H2: `SQLi, XSS, Auth Broken, IDOR`
- H3: `Relatório Executivo + Narrativa`
- D1: `Testes manuais + automatizados. Metodologia OWASP WSTG. Reteste grátis.`
- D2: `Evernow entrega proposta em 48h com escopo e cronograma.`

---

## 3. Campanha: [Search] Pentest — Compliance

**Budget:** R$ 600/mês (R$ 20/dia)
**Landing principal:** `/pentest.html`
**Landing compliance específica:** `/servicos/adequacao-lgpd/` ou `/servicos/consultoria-iso-27001/` (conforme kw)

### Ad Group 3.1 — PCI-DSS (R$ 250/mês)

**Keywords phrase:**
- `"pentest pci dss"`
- `"pentest para pci"`
- `"pentest adequação pci"`

**Copy A:**
- H1: `Pentest para PCI-DSS: Relatório Aprovado`
- H2: `Metodologia Aprovada por QSA`
- H3: `Reteste Obrigatório Incluso`
- D1: `Teste externo + interno conforme PCI-DSS 4.0. Evidências rastreáveis e relatório pronto para auditor.`
- D2: `Evernow: parceiro de pentest com experiência em processadores e bancos.`

### Ad Group 3.2 — LGPD (R$ 200/mês)

**Keywords phrase:**
- `"pentest lgpd"`
- `"pentest para lgpd"`
- `"pentest adequação lgpd"`

**Landing:** `/servicos/adequacao-lgpd/`

**Copy A:**
- H1: `Pentest LGPD: Evidência para ANPD`
- H2: `Art. 46 — Medidas Técnicas Adequadas`
- H3: `Diligência Documentada em 48h`
- D1: `Evernow entrega pentest com relatório específico para LGPD, DPIA e prontidão para notificação ANPD.`
- D2: `Consultoria completa de adequação. Roadmap 120 dias + DPO as a Service.`

### Ad Group 3.3 — ISO 27001 (R$ 150/mês)

**Keywords phrase:**
- `"pentest iso 27001"`
- `"pentest para iso 27001"`

**Landing:** `/servicos/consultoria-iso-27001/`

**Copy A:**
- H1: `Pentest para ISO 27001 A.8.8 e A.8.29`
- H2: `Anexo A 2022 Atendido`
- H3: `Evernow: Certificação em 8 Meses`
- D1: `Pentest com rastreabilidade para controles A.8 da ISO 27001:2022. Relatório apresentável ao auditor.`
- D2: `Consultoria completa do SGSI à emissão do certificado.`

---

## 4. Campanha: [Search] DevSecOps — BOFU apenas

**Budget:** R$ 400/mês (R$ 13/dia)
**Landing principal:** `/produtos/devsecops/`
**Landing educativa (curiosos que podem virar lead):** `/guias/devsecops/`

> **Regra importante:** esta campanha NÃO ataca `[devsecops]` puro ou `[o que é devsecops]` — queimaria budget com gente estudando o tema. Só as 6 queries abaixo, que sinalizam intenção de contratar.

### Ad Group 4.1 — Consultoria BOFU (R$ 400/mês)

**Keywords:**

**Exact (prioridade alta):**
- `[consultoria devsecops]`
- `[implementação devsecops]`
- `[devsecops gerenciado]`

**Phrase:**
- `"consultoria devsecops brasil"`
- `"implantação devsecops empresa"`
- `"serviço devsecops"`

**Landing:** `/produtos/devsecops/?utm_source=google&utm_medium=cpc&utm_campaign=devsecops`

**Copy A — Implementação:**
- H1: `Consultoria DevSecOps por Especialistas`
- H2: `Pipeline CI/CD Seguro em 90 Dias`
- H3: `SAST + DAST + SCA + IaC Integrados`
- D1: `Evernow implementa e opera o pipeline DevSecOps completo. Parceiro Fortify, Veracode e SonarQube.`
- D2: `KPIs executivos: MTTR, escape rate, coverage. Mais de 50 CISOs confiam.`

**Copy B — Carro-chefe Secure Code:**
- H1: `DevSecOps: Do Primeiro Commit ao Deploy`
- H2: `Secure Code como Serviço`
- H3: `Implementação + Operação 90 Dias`
- D1: `SAST, DAST, SCA, threat modeling, code review, treinamento dev — Evernow ponta a ponta.`
- D2: `Parceiro Fortify, Veracode, SonarQube, Sonatype. Proposta em 48h.`

**Copy C — Urgência/ROI:**
- H1: `Implantar DevSecOps Sem Travar Deploy`
- H2: `Pipeline Integrado em 12 Semanas`
- H3: `KPIs Claros + Dev Ownership`
- D1: `Evernow implementa DevSecOps sem quebrar velocidade. 90 dias para pipeline operando com MTTR abaixo de 7d.`
- D2: `Time de arquitetos sêniores + operação gerenciada ongoing.`

---

## 5. Extensões de anúncio (todas as campanhas)

### Sitelinks (4 ativos)
1. **Guia de Preço Pentest** → `/guias/quanto-custa-pentest/`
   - Descrição: `Faixas reais + 7 variáveis + checklist`
2. **Assessment Gratuito** → `/assessment.html`
   - Descrição: `30 min com especialista. Diagnóstico em 48h.`
3. **Parceiros Certificados** → `/parceiros.html`
   - Descrição: `Fortify, Veracode, Sonar, Securiti`
4. **Nossos Cases** → `/cases.html`
   - Descrição: `Resultados para financeiro, saúde e varejo`

### Callouts (6 ativos)
- `Parceiro certificado`
- `Reteste grátis`
- `Relatório executivo`
- `Time OSCP / OSWE`
- `Pronto para auditoria`
- `Resultados em 90 dias`

### Snippets estruturados
- Tipo: **Serviços**
- Valores: `Pentest, SAST, DAST, SCA, DevSecOps, SOC, LGPD, ISO 27001, Red Team, Assessment`

### Extensão de Chamada
- Número: `+55 11 91026-0404` (já no site)

### Extensão de Formulário (lead form)
- Perguntas: empresa, cargo, telefone corporativo, melhor horário
- CTA: `Receber proposta em 48h`
- Disponível apenas para campanhas Pentest Preço e Compliance (melhor conversão direta)

---

## 6. Lista negativa global (aplicar a TODAS as campanhas)

Aplicar no nível da conta (não do ad group), negativo broad:

```
grátis
gratis
gratuito
free
curso
cursos
aula
aulas
tutorial
tutoriais
como fazer
como ser
como aprender
faculdade
universidade
formação
formacao
pós
pos graduação
tcc
monografia
apostila
apostilas
pdf
ebook
livro
livros
vaga
vagas
emprego
estágio
estagio
trainee
junior
pleno
senior
salário
salario
remuneração
remuneracao
quanto ganha
ganhar dinheiro
renda extra
concurso
wikipedia
significado
conceito
definição
definicao
exemplo
exemplos
diy
faça você mesmo
faca voce mesmo
personal
domestico
doméstico
casa
residencial
celular pessoal
notebook pessoal
hacker
hackear
invadir
como invadir
deep web
dark web
anonymous
pirata
crack
cracker
youtube
facebook
instagram
tiktok
twitch
```

---

## 7. Cronograma de operação

### Semana 0 (hoje)
- [ ] Ney: criar conversões no GA4 e importar para Google Ads
- [ ] Ney: vincular Google Ads ↔ GA4 ↔ Search Console
- [ ] Ney: subir a lista de clientes existentes (CSV HubSpot) e excluir das campanhas
- [ ] Ney: criar conta admin manager se já não tiver
- [ ] Ney: subir as 3 campanhas, 7 ad groups, 18 copies (3 por AG — as cópias acima)
- [ ] Ney: aplicar lista negativa global
- [ ] Ney: ativar extensões de anúncio

### Semana 1
- [ ] Deixar rodar sem mexer 7 dias (dado mínimo para decidir)
- [ ] Monitorar apenas: CPC médio, cliques, impressões por AG
- [ ] NÃO pausar keyword por baixo CTR ainda

### Semana 2
- [ ] Ney exporta Search Terms Report (CSV)
- [ ] Eu analiso e devolvo: (a) termos para adicionar à negativa, (b) novas exact-match candidatas, (c) copies para testar variação
- [ ] Aplicar ajustes

### Semana 4 (30 dias)
- [ ] Primeiro relatório formal: CPC real vs estimado, CTR por AG, CPL (custo por lead), AGs a escalar / pausar
- [ ] Decidir realocação entre campanhas (manter 80/20 ou ajustar)
- [ ] Se ≥ 15 conversões, migrar AGs top para **Smart Bidding (Maximize Conversions)** com lance máximo

### Semana 8 (60 dias)
- [ ] Adicionar campanha 4: **Brand** (R$ 100/mês) para proteger buscas por `evernow`
- [ ] Adicionar campanha 5: **Retarget visitantes** (Display com RLSA, R$ 150/mês extra se houver budget)

### Semana 12 (90 dias)
- [ ] Avaliar ROI final: quantos leads pagaram o investimento
- [ ] Decidir se escala budget (R$ 3k, R$ 5k) ou se mantém
- [ ] Expandir para LinkedIn Ads Thought Leadership (DevSecOps) se budget liberado

---

## 8. KPIs a monitorar por semana

| KPI | Meta mês 1 | Meta mês 2 | Meta mês 3 |
|-----|------------|------------|------------|
| CPC médio (conta toda) | ≤ R$ 28 | ≤ R$ 24 | ≤ R$ 20 |
| CTR médio | ≥ 4% | ≥ 6% | ≥ 8% |
| Conversões totais/mês | 3-5 | 6-9 | 10-14 |
| CPL médio | ≤ R$ 600 | ≤ R$ 400 | ≤ R$ 280 |
| Quality Score médio | ≥ 6/10 | ≥ 7/10 | ≥ 8/10 |
| Taxa de rejeição LP | ≤ 70% | ≤ 60% | ≤ 50% |

---

## 9. O que NÃO fazer (erros caros em B2B enterprise)

1. **Não usar Performance Max** nos primeiros 90 dias. PMax em conta com pouco dado queima budget em Display e YouTube sem conversão.
2. **Não usar broad match** até ter 30 dias de dado e Smart Bidding calibrado. Em B2B o broad "quanto custa pentest" dispara em "tênis pentest", "pentest pentagrama".
3. **Não otimizar por cliques**. Otimize por conversão, senão atrai curioso.
4. **Não esconder preço nas LPs**. A página `/guias/quanto-custa-pentest/` mostra faixa logo no TL;DR — isso pré-qualifica. Quem não tem budget R$ 18k+ bounces antes de preencher formulário, economiza seu SDR.
5. **Não usar apenas 1 copy por AG**. Mínimo 3 para Google rotacionar e aprender.
6. **Não juntar Pentest + DevSecOps na mesma campanha**. Orçamento vai todo pra keyword com melhor CTR e outra morre de inanição.

---

## 10. Passo-a-passo para criar no Google Ads Editor

1. Abrir Google Ads Editor (download gratuito em ads.google.com/editor)
2. File → Create Blank Account ou conectar à conta existente
3. Criar 3 novas campanhas conforme seções 2, 3 e 4 acima
4. Dentro de cada campanha, criar ad groups com os dados desta planilha
5. Adicionar keywords em modo **Exact** ou **Phrase** conforme indicado
6. Criar 3 anúncios por ad group com as copies acima (H1/H2/H3 = headlines, D1/D2 = descrições)
7. Configurar extensões no nível da conta → aplicar às 3 campanhas
8. Aplicar lista negativa global no nível da conta
9. Post → enviar para revisão do Google (aprovação em 1–24h)
10. **NÃO ativar no mesmo dia da criação** — deixar tudo pausado, revisar uma última vez no painel web, e ativar no início de uma semana (segunda-feira 8h, melhor momento para acumular dado B2B).

---

## Anexo — Próximo passo sugerido

Quando vc tiver 2 semanas de dado rodando, me passe:
- Export CSV do **Search Terms Report** (últimos 14 dias)
- Screenshot do painel de **Campanhas** mostrando CPL, conversões, CPC
- Lista de keywords com Quality Score baixo (< 5)

Eu devolvo em até 30 min:
- Novas negativas a adicionar
- Keywords de alta intenção aparecendo no Search Terms que ainda não estão na conta
- Copies novos para substituir os que tiveram CTR baixo
- Ajustes de landing page se bounce rate estiver alto
