# Setup GTM + GA4 + Conversões — passo a passo

**Objetivo:** configurar em 90 min toda a camada de medição que faz o Google Ads funcionar com R$ 2.000/mês sem queimar budget.

**Por que é obrigatório antes de ativar Ads:** sem GA4 + conversões importadas, o Google Ads faz Smart Bidding no escuro — CPC fica 40-80% mais caro e Maximize Conversions não funciona. É a diferença entre 5 leads/mês e 2 leads/mês com o mesmo budget.

---

## Etapa 1 — Confirmar GA4 (ou criar se não existir) · 10 min

### 1.1 Ir em analytics.google.com
- Fazer login com a conta Google da Evernow
- Canto superior esquerdo → Admin (ícone de engrenagem)
- Coluna "Propriedade" → ver se existe propriedade `Evernow` com fluxo de dados ativo

### 1.2 Se NÃO existir propriedade GA4
- Admin → Criar Propriedade
- Nome: `Evernow`
- Fuso: Brasília (GMT−03:00)
- Moeda: BRL
- Continuar → Informações de Negócios:
  - Setor: **Computadores e Eletrônica** (ou Consultoria)
  - Tamanho: 1-10 ou 11-100 conforme realidade
- Objetivos de negócio: marcar **Gerar Leads** + **Examinar comportamento do usuário**
- Criar → Fluxo de dados Web
  - URL: `https://evernow.com.br`
  - Nome: `Evernow Web`
  - Criar fluxo
- **Copiar o Measurement ID** (`G-XXXXXXXXXX`) — vamos usar no GTM

### 1.3 Se JÁ existir propriedade GA4
- Clicar na propriedade → Fluxos de dados → Web → copiar o Measurement ID
- Ir direto à Etapa 2

---

## Etapa 2 — Adicionar Tag GA4 no GTM · 10 min

### 2.1 Ir em tagmanager.google.com
- Abrir container `GTM-W6PP4HHP` (já instalado no site)
- Menu esquerdo → **Tags**

### 2.2 Verificar se já existe tag GA4

Procurar na lista uma tag cujo tipo seja `Google Analytics: GA4 Configuration` ou `Google Tag`.

**Se já existir:** abrir, validar que o Measurement ID bate com o copiado na Etapa 1.3, e que o trigger é "All Pages". Pular para Etapa 3.

### 2.3 Se NÃO existir, criar

1. Botão **Novo** → Nomear: `GA4 - Configuration`
2. Clique no bloco **Configuração da Tag** → Google Tag
3. ID da Tag: colar o Measurement ID (`G-XXXXXXXXXX`)
4. Clique no bloco **Acionamento** → escolher `All Pages` (trigger pré-existente padrão)
5. **Salvar**

### 2.4 Publicar

Canto superior direito → **Enviar** → Publicar:
- Nome da versão: `v2 - GA4 Configuration`
- Descrição: `Adiciona GA4 measurement principal`
- Publicar

**Validação:** abrir evernow.com.br em janela anônima → F12 → Console → digitar `dataLayer` → deve existir. E na aba **Network** filtrar `collect` → deve aparecer request para `google-analytics.com/g/collect`.

---

## Etapa 3 — Criar 3 conversões no GTM · 30 min

Três conversões primárias que você quer importar pro Google Ads:

1. **Clique em CTA "Fale com especialista"**
2. **Submit do formulário HubSpot**
3. **Clique em telefone `tel:`** (mobile)

### 3.1 Preparar: habilitar built-in variables

GTM → Variáveis → seção "Built-in Variables" → **Configurar** → marcar:
- [x] Click URL
- [x] Click Classes
- [x] Click ID
- [x] Click Element
- [x] Click Target
- [x] Page URL
- [x] Page Path
- [x] Page Title

### 3.2 Conversão A — Clique no CTA

**Trigger:**
- Triggers → Novo → Nome: `Click - CTA Fale com Especialista`
- Tipo: **Click - All Elements**
- Acionamento: **Alguns cliques**
- Condição: `Click Classes` **contém** `contact-btn`
- Salvar

**Tag:**
- Tags → Novo → Nome: `GA4 Event - lead_cta_click`
- Tipo: **Google Analytics: GA4 Event**
- Measurement ID: colar o `G-XXXXXXXXXX`
- Event Name: `lead_cta_click`
- Parameters (+ Add Row):
  - `click_text` → `{{Click Text}}`
  - `click_url` → `{{Click URL}}`
  - `page_path` → `{{Page Path}}`
- Triggering: selecionar o trigger que acabou de criar `Click - CTA Fale com Especialista`
- Salvar

### 3.3 Conversão B — Form submit HubSpot

HubSpot dispara um evento `onFormSubmit` via postMessage — GTM capta isso com trigger tipo "Custom Event" ou "Form Submission".

**Forma mais robusta (funciona em qualquer versão do HubSpot):** escutar o `message` do iframe.

**Tag HTML (adicionar primeiro):**
- Tags → Novo → Nome: `HTML - HubSpot Form Listener`
- Tipo: **Custom HTML**
- HTML:
```html
<script>
(function(){
  window.addEventListener('message', function(e){
    if (e.data && e.data.type === 'hsFormCallback' && e.data.eventName === 'onFormSubmitted') {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'hubspot_form_submit',
        form_id: e.data.id || '',
        form_name: (e.data.data && e.data.data.formName) || ''
      });
    }
  });
})();
</script>
```
- Trigger: `All Pages`
- Salvar

**Trigger para capturar o evento:**
- Triggers → Novo → Nome: `Event - HubSpot Form Submit`
- Tipo: **Custom Event**
- Event name: `hubspot_form_submit`
- Salvar

**Tag GA4:**
- Tags → Novo → Nome: `GA4 Event - lead_form_submit`
- Tipo: Google Analytics: GA4 Event
- Event Name: `lead_form_submit`
- Parameters:
  - `form_id` → `{{Custom Event Form Id}}` (criar variável Data Layer com nome `form_id`)
  - `form_name` → `{{Custom Event Form Name}}`
  - `page_path` → `{{Page Path}}`
- Triggering: `Event - HubSpot Form Submit`
- Salvar

**Variáveis auxiliares (se não criou antes):**
- Variables → Novo → **Data Layer Variable** → Name: `Custom Event Form Id`, Data Layer Variable Name: `form_id`
- Criar outra idêntica para `form_name`

### 3.4 Conversão C — Clique telefone

**Trigger:**
- Triggers → Novo → Nome: `Click - Telefone tel:`
- Tipo: **Click - Just Links**
- Acionamento: Alguns cliques
- Condição: `Click URL` **começa com** `tel:`
- Salvar

**Tag:**
- Tags → Novo → Nome: `GA4 Event - lead_phone_click`
- Tipo: Google Analytics: GA4 Event
- Event Name: `lead_phone_click`
- Parameters:
  - `phone_number` → `{{Click URL}}`
  - `page_path` → `{{Page Path}}`
- Triggering: `Click - Telefone tel:`
- Salvar

### 3.5 Publicar tudo

Canto direito → **Enviar** → Publicar:
- Versão: `v3 - Conversions tracking`
- Descrição: `CTA click + HubSpot form + tel: click`
- Publicar

### 3.6 Validar no modo Preview

GTM → **Preview** → digitar `evernow.com.br` → Connect
- Navegar no site, clicar no botão "Fale com especialista" → deve aparecer evento `lead_cta_click` na aba esquerda
- Preencher formulário HubSpot → deve aparecer `hubspot_form_submit`
- Clicar no telefone (no mobile) → `lead_phone_click`

---

## Etapa 4 — Marcar eventos como conversões no GA4 · 5 min

GA4 envia os eventos, mas precisa marcá-los como "Key Events" (antes chamado "conversions"):

- analytics.google.com → propriedade Evernow
- Admin → **Events**
- Aguardar 24h até eventos aparecerem (pode adiantar usando DebugView)
- Quando `lead_cta_click`, `lead_form_submit` e `lead_phone_click` aparecerem na lista:
  - Clicar no botão ao lado de cada um → **Mark as key event**

**Atenção:** por padrão, o GA4 leva 24-48h pra começar a mostrar eventos. Se quiser validar imediato, usar **DebugView** (Admin → DebugView) — os eventos aparecem em segundos.

---

## Etapa 5 — Importar conversões no Google Ads · 10 min

### 5.1 Vincular Google Ads ↔ GA4 (se ainda não vinculou)

- ads.google.com → Ferramentas → Setup → **Contas vinculadas**
- Buscar `Google Analytics (GA4)` → **Link**
- Escolher propriedade Evernow → Vincular

### 5.2 Importar conversões

- ads.google.com → Ferramentas → **Conversões**
- Botão **+ Nova ação de conversão**
- Escolher: **Importar** → `Google Analytics 4 properties` → `Eventos da Web`
- Selecionar os 3 eventos marcados como key event: `lead_cta_click`, `lead_form_submit`, `lead_phone_click`
- Importar

### 5.3 Configurar cada conversão

Para cada conversão importada:

| Conversão | Categoria | Contagem | Janela de conversão | Valor |
|---|---|---|---|---|
| `lead_form_submit` | **Envio de lead** | Uma única | 30 dias | R$ 500 (valor médio por lead qualificado) |
| `lead_cta_click` | Envio de lead (secundária) | Uma única | 30 dias | R$ 50 |
| `lead_phone_click` | Envio de lead (secundária) | Uma única | 7 dias | R$ 200 |

**Configurar `lead_form_submit` como Conversão PRIMÁRIA** e as outras duas como **secundárias** — o Google Ads otimiza só pra primárias, mas registra secundárias como sinal adicional.

---

## Etapa 6 — Enhanced Conversions (opcional mas recomendado) · 10 min

Dobra a precisão da medição passando email do lead (hasheado, privacidade preservada) do HubSpot pro Google.

### 6.1 No Google Ads
- Ferramentas → Conversões → abrir `lead_form_submit`
- Rolar até **Enhanced conversions** → **Turn on**
- Escolher método: **Google Tag Manager**
- Aceitar termos

### 6.2 No GTM — passar email hasheado
- Editar tag `GA4 Event - lead_form_submit`
- Em "More Settings" → **User Properties** → adicionar:
  - `email` → variável que captura email do formulário HubSpot

A variável do email precisa ser criada via DOM Element (selecionar `input[type=email]` no form após submit) — isso é mais complexo e depende da estrutura do form HubSpot. **Deixar isso para a Semana 2 de otimização**, depois que o básico já estiver rodando.

---

## Checklist de validação antes de ativar Ads

```
[ ] GA4 ativo com measurement ID definido
[ ] Tag GA4 Configuration publicada no GTM
[ ] Trigger + Tag de CTA click criado e publicado
[ ] Tag HTML de HubSpot listener + Trigger + Tag GA4 publicados
[ ] Trigger + Tag de tel: click criado e publicado
[ ] 3 eventos apareceram na lista de Events do GA4 (aguardar 24h ou usar DebugView)
[ ] 3 eventos marcados como Key Events no GA4
[ ] Google Ads linkado a GA4
[ ] 3 conversões importadas no Google Ads
[ ] lead_form_submit marcada como PRIMÁRIA, outras como secundárias
[ ] Valor monetário configurado em cada (R$ 500 / R$ 200 / R$ 50)
[ ] Teste manual: fez um envio de form de teste no site → conversão apareceu no Google Ads em 3-24h
```

---

## Troubleshooting rápido

**Evento não aparece no DebugView GA4?**
- Verificar no GTM Preview se o trigger disparou
- Se sim mas não chega ao GA4 → reabrir tag → confirmar Measurement ID correto
- Checar se o consent SDK (Securiti) está bloqueando por default — se sim, o GA4 só dispara após consent do usuário

**Conversão aparece no GA4 mas não é importada no Google Ads?**
- Aguardar 24h após marcar como Key Event
- Validar vínculo Ads↔GA4 ativo em Ferramentas → Contas vinculadas

**CPC continua alto mesmo com GA4 + conversões ativas?**
- Esperar 7 dias de dados (mínimo)
- Confirmar que conversão `lead_form_submit` foi marcada como PRIMÁRIA (não secundária)
- Se < 15 conversões em 30 dias, Smart Bidding ainda não tem volume → manter Manual CPC

---

## Resultado esperado após 14 dias rodando

Com GA4 + conversões ativas antes do Ads rodar:
- Google Ads coleta dados desde o primeiro clique
- Smart Bidding entra em funcionamento na semana 3
- CPC médio cai 25-40% vs rodar sem essa camada
- Relatórios passam a mostrar jornada completa: clique do anúncio → formulário submetido → valor monetário
