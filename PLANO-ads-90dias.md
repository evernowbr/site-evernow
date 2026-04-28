# Plano Google Ads — Operação 90 dias (análise + otimização + criação)

**Data base:** quinta 23/04/2026
**Ativação prevista:** segunda 27/04/2026 às 08:00 BRT
**Budget:** R$ 2.000/mês (R$ 66,66/dia)
**Objetivo final:** 4-5 leads qualificados/mês até o final do mês 3

---

## ⚡ FASE 0 — Pré-voo concentrado: SEXTA 24/04 (~2h)

Como você não trabalha fim de semana, agrupei todas as ações em **um único bloco de sexta-feira de manhã**. Faz o ritual completo, descanso de fim de semana, segunda só clica "Ativar".

### Sexta 24/04 · 09:00 → 11:00 (2h corridas)

**Bloco 1 · 09:00–09:15 · HSTS + smoke test (15 min)**
- Cloudflare dashboard → SSL/TLS → Edge Certificates → **Enable HSTS** → Max age 6 months, Include subdomains ON, No-Sniff ON
- Testar em https://securityheaders.com/?q=evernow.com.br → score deve ir pra A+

**Bloco 2 · 09:15–10:00 · Subir 8 CSVs no Google Ads Editor (45 min)**
- Download em https://ads.google.com/intl/pt_br/home/tools/ads-editor/
- Login na conta Evernow (785-517-9598)
- File → Import → From file → na ordem 01, 02, 03, 04, 05, 06, 07, 08
- Revisar warnings → **Post all changes**
- Em 2 min as 3 campanhas aparecem em ads.google.com pausadas

**Bloco 3 · 10:00–10:30 · GA4 Key Events + linkagem (30 min)**
- analytics.google.com → Admin → Eventos → tab "Eventos recentes"
- Procurar `lead_cta_click`, `lead_form_submit`, `lead_phone_click` (apareceram nas últimas 24h)
- Se algum não estiver lá: abrir evernow.com.br em outra aba e dispara manualmente (clica CTA, manda form de teste, clica tel: no mobile). Volta no GA4, aguarda 2 min, refresh
- Clicar **estrela ⭐** em cada um dos 3 → vira Key Event
- Confirmar linkagem: ads.google.com → Ferramentas → Setup → Contas vinculadas → Google Analytics 4 deve estar Linked

**Bloco 4 · 10:30–11:00 · Importar conversões no Ads + revisar campanhas (30 min)**
- ads.google.com → Metas → Resumo → "+" → Ação de conversão → Importar
- Google Analytics 4 → Web events → marcar os 3 eventos → Importar
- Configurar valores:
  - `lead_form_submit` → R$ 500 → **PRIMÁRIA**
  - `lead_phone_click` → R$ 200 → secundária
  - `lead_cta_click` → R$ 50 → secundária
- Abrir cada uma das 3 campanhas pausadas → Configurações:
  - Redes: só Search ✓
  - Geo: Brasil + bid adjustments SP/RJ/MG/RS/PR ✓
  - Device: Mobile −60%, Tablet −100% ✓
  - Bid strategy: Manual CPC enhanced ✓
  - Budget: 33,33 / 20,00 / 13,33 ✓

**11:00 — Pronto pra segunda. Fim de semana livre.**

---

## 🚀 FASE 1 — Ativação + observação · Segunda 27/04 → Sexta 01/05

### Segunda 27/04 · 08:00 — D-Day

- 07:55 abrir ads.google.com
- 08:00 selecionar 3 campanhas → Editar → **Ativar** → confirmar
- 08:05 teste end-to-end: abrir evernow.com.br anônimo, clicar CTA, mandar form de teste → verificar evento no GA4 DebugView
- 08:30 / 12:00 / 17:00: check de 5 min cada (impressão rodando? CPC dentro do esperado? algum anúncio reprovado?)

### Filosofia da semana 1: **NÃO MEXER**

Pode parecer contra-intuitivo mas é estratégico: nas primeiras 5 dias úteis o algoritmo do Google está calibrando. Pausar/editar/adicionar negativa antes de ter dado é tiro no escuro e atrasa o aprendizado.

**Exceções (só intervir se):**
- Anúncio reprovado (ajusta texto e reativa)
- CPC > R$ 50 (claramente fora — baixa max bid em 20%)
- Zero impressão após 24h num AG (bid muito baixo — sobe 30%)
- Gasto > 90% do budget diário antes das 14h (pode estar em keyword louca — investigar mas só pausar se for óbvio)

### KPIs alvo da semana 1

| Métrica | Mínimo aceitável | Bom | Ótimo |
|---|---|---|---|
| Impressões/dia (3 campanhas) | 80 | 150 | 250 |
| Cliques/dia | 3 | 6 | 10 |
| CPC médio | ≤ R$ 40 | ≤ R$ 30 | ≤ R$ 25 |
| CTR médio | ≥ 3% | ≥ 5% | ≥ 8% |
| Conversões na semana | 0–1 | 1–2 | 3+ |

Se semana 1 fechar em "mínimo aceitável", está OK. O algoritmo precisa de ~5 dias pra estabilizar.

---

## 🔧 FASE 2 — Primeira otimização · Semana 2 (04/05 → 09/05)

### Segunda 04/05 · 09:00 — Ritual semanal nasce aqui

Toda segunda 9h, exporta 2 coisas e me passa:

1. **Search Terms Report** (Ferramentas → Insights e relatórios → Termos de pesquisa, últimos 7 dias) → Download CSV
2. **Screenshot da tabela de campanhas** mostrando: budget consumido, cliques, CTR, conversões, CPL

Em ~30 min eu devolvo:

| Output | Conteúdo |
|---|---|
| `negativas-semana-N.csv` | Termos de pesquisa que pegaram cliques mas não devem (curiosos, fora de perfil) |
| `keywords-novas-semana-N.csv` | Queries reais que tiveram conversão e ainda não estão como exact-match na conta |
| `bid-adjustments.md` | Subir/descer bid em AGs específicos baseado em CPL real |
| `ad-rotation.md` | Qual RSA pausar (CTR baixo) e qual ângulo testar pra substituir |
| `lp-recommendations.md` | Se bounce alto em alguma LP, sugestões de mudança pontual |

### Decisões automáticas que eu tomo na análise

- **Negativa imediata:** termo gastou R$ > R$ 30 sem clique relevante OU clique sem conversão em 7 dias
- **Bid +20%:** AG com CTR > 6% mas posição média > 3 (subir competitividade)
- **Bid −20%:** AG com CTR < 1,5% após 200+ impressões
- **Pausar keyword:** custo > R$ 100 sem nenhum lead em 14 dias
- **Adicionar exact-match:** termo de pesquisa apareceu 3+ vezes com 1+ conversão

---

## 🤖 FASE 3 — Migração para Smart Bidding · Semanas 3-4 (11/05 → 23/05)

### Pré-requisitos pra ativar (gatilho)

Manual CPC manual fica até atingir **15 conversões em 30 dias** numa campanha. Quando bater esse marco:

1. Selecionar a campanha que bateu (provavelmente Pentest Preço primeiro)
2. Configurações → Estratégia de lance → mudar pra **Maximize Conversions**
3. Definir Maximum CPC bid limit em R$ 30 (limite de segurança nas primeiras 2 semanas)
4. Deixar 14 dias rodar
5. Se CPL ficar < R$ 500 (valor da conversão primária): migrar pra **Target CPA = R$ 400**

### O que muda pra você

- Manual: você define o lance, o Google leiloa
- Maximize Conversions: você define só o budget, o Google define o lance pra cada query individual baseado em probabilidade de conversão
- Target CPA: você define quanto quer pagar por lead, Google só vai a leilões onde tem chance de bater esse custo

**Resultado prático:** CPC médio cai de ~R$ 28 pra ~R$ 22 sem você fazer nada. O algoritmo passa a evitar quem só clica e foca em quem converte.

### Quando NÃO migrar

- AG com < 5 conversões em 30 dias → manter Manual
- Se Google sugerir Maximize Conversions sem cap → ignorar (sempre coloca cap)
- Mudou alguma coisa importante na conta nos últimos 7 dias → esperar

---

## 📈 FASE 4 — Expansão de formatos · Mês 2-3 (Junho)

### Critério de gatilho

Só ativa fase 4 se até final de maio:
- ≥ 4 leads/mês qualificados (form_submit) ✓
- CPL ≤ R$ 500 ✓
- Pelo menos 1 contrato fechado ou em proposta ✓

Se algum desses 3 falhar, a gente otimiza ainda no que existe antes de criar novidade. **Disciplina > expansão**.

### Se gatilhos OK, ordem de criação

#### 4.1 · Brand campaign (Junho semana 1, ~R$ 100/mês)

**Por que:** captura quem busca "Evernow" e protege da concorrência (a Tempest pode comprar termos com seu brand).

**Setup:**
- 1 campanha Search com max budget R$ 3,33/dia
- Keywords exact: `[evernow]`, `[evernow cibersegurança]`, `[evernow pentest]`, `[evernow brasil]`
- CPC máximo R$ 4 (brand é barato)
- 1 RSA com headlines que reforçam diferencial
- Landing: home (`/`)

#### 4.2 · Retargeting Display via GA4 Audience (Junho semana 2-3, R$ 200/mês extra)

**Por que:** quem visitou /guias/quanto-custa-pentest/ e não converteu já demonstrou intenção. Lembrar por 30 dias com Display custa centavos por impressão.

**Setup:**
- GA4 → Admin → Audiências → criar audiência "Visitantes Pentest últimos 30d" (Page path contains `/guias/quanto-custa-pentest/` OR `/pentest`)
- Compartilhar com Google Ads
- Nova campanha Display (sim, agora pode) → Audiência: a criada acima → Frequency cap: 3 impressões/usuário/dia
- Banner único genérico "Recebeu nosso guia? Solicite proposta em 48h"

#### 4.3 · LinkedIn Ads Thought Leadership (Junho semana 3-4, ~R$ 400/mês — fora do budget Google)

**Por que:** o público de DevSecOps no LinkedIn é mais qualificado que no Google. Se Pentest no Google já estiver fluindo, libera budget pra alimentar funil DevSecOps via LinkedIn (que é nosso carro-chefe Secure Code).

**Setup:**
- LinkedIn Campaign Manager → Lead Gen
- Document Ad com PDF do guia DevSecOps (extrair do site)
- Audience: Job Title CTO/CISO/Head of Security/AppSec/DevOps; Company size 200+; Indústria Finance/Healthcare/Tech BR
- Budget R$ 400/mês

#### 4.4 · Performance Max (Julho, só se 30+ conversões acumuladas)

**Por que:** PMax precisa MUITO dado pra funcionar bem. Antes de 30 conversões mensais ele vira loteria.

**Setup quando chegar lá:**
- Asset group "Pentest Brasil"
- Audience signal: lookalike dos converters
- Conversion goal: lead_form_submit
- Budget: 50% do que estiver em Pentest Preço hoje

---

## 📊 KPIs por fase (cumulativo)

| Mês | Leads/mês esperados | CPC médio | CPL real | Cumulativo |
|---|---|---|---|---|
| Mês 1 (maio) | 2-3 | R$ 30-35 | R$ 700-1000 | aprendizado |
| Mês 2 (junho) | 3-4 | R$ 25-28 | R$ 500-700 | Smart Bidding ativo |
| Mês 3 (julho) | 4-5 | R$ 20-25 | R$ 400-500 | Brand + Retarget rodando |
| Mês 6 | 8-12 | R$ 20-22 | R$ 250-350 | LinkedIn maduro, PMax calibrada |

**Breakeven:** 1 contrato (R$ 80-150k ticket) paga 12 meses de mídia.

---

## 🎯 Cadência de trabalho recorrente (90 dias)

### Semanal — segunda 09:00 (você + eu)
- 5 min: você exporta CSVs (Search Terms + screenshot painel)
- 30 min: eu analiso e devolvo otimizações
- 10 min: você aplica via Google Ads Editor ou direto na web

### Mensal — primeira segunda do mês 14:00 (você + eu)
- 1h: review do mês anterior (CPL real vs alvo, conversões, qualidade dos leads)
- Decisão: continuar / migrar Smart Bidding / abrir nova campanha / pausar AG ruim
- Atualizar tabela de KPIs

### Trimestral — junho semana 4 (você sozinho ou comigo)
- 2h: revisão de estratégia
- Decisões grandes: dobrar budget se ROI bom, mudar canal se não, mudar mensagem se mercado não responde

---

## 🚨 Gatilhos de atenção (kill switches automáticos)

Estes valores acionam ação imediata, sem esperar a segunda do ritual:

| Sinal | Ação imediata |
|---|---|
| CPC > R$ 50 (planejado R$ 22-30) | Baixar max CPC em 20% no AG |
| Anúncio reprovado | Investigar em 1h, ajustar e reenviar |
| Gasto diário > R$ 80 | Pausar campanha, investigar histórico |
| Nenhuma impressão após 24h | Aumentar bid em 30% |
| CTR < 1% após 500 impressões | Pausar pior RSA do AG |
| Form submit sem evento no GA4 | Validar tag GTM imediatamente |
| Campanha antiga (das 5 pausadas) reativada por engano | Pausar imediato |

---

## 📚 Documentação de apoio (já no repo)

- `RUNBOOK-dday-segunda.md` — passo a passo do D-Day
- `setup-gtm-ga4-conversoes.md` — referência GTM/GA4 caso precise reconfigurar
- `campanhas-google-ads.md` — racional completo da estratégia atual
- `audit-round3-producao-real.md` — estado técnico do site com headers reais
- `mensagem-slack-equipe.md` — comunicação pra time
- `google-ads-editor/` — 8 CSVs prontos pra import

---

## 🎬 Resumo executivo

**Sexta 24/04 · 2h corridas:** HSTS + CSVs + Key Events + conversões + revisão. Tudo num bloco só.

**Segunda 27/04 · 5 min:** ativar.

**Semana 1:** observa sem mexer.

**Toda segunda às 9h:** ritual de 45 min comigo (você passa dado, eu devolvo otimização).

**Mês 2:** Smart Bidding entra quando tiver 15 conversões.

**Mês 3:** se KPIs bater, abre Brand + Retargeting.

**Mês 4+:** LinkedIn e PMax pra escalar.

Tudo escrito, datado, com gatilho. Sem fim de semana, sem firefighting.
