# Pacote Marketing — Migração AWS

Esta pasta contém todos os assets de marketing para a campanha **Migração de Billing AWS** (Evernow + TD Synnex), alinhados à landing page `src/migracao-aws.njk`.

## Arquivos

| Arquivo | Conteúdo |
|---|---|
| **01-roteiro-heygen.md** | Roteiro detalhado de 75-90s para HeyGen, com avatar, voz, B-roll, overlays e variações A/B |
| **02-google-ads-campaign.md** | Estrutura completa: Search High Intent, Defensive Brand, Performance Max, Display/YouTube Remarketing. Keywords, RSAs, extensions, negativas, budget R$ 18k/mês |
| **03-linkedin-ads-campaign.md** | LinkedIn ABM completo (Lead Gen, InMail, Conversation, Document Ads) + Meta Ads (funil completo topo/meio/fundo/retargeting). Budget combinado R$ 32k/mês |

## Como rodar

1. **Produzir o vídeo:** seguir `01-roteiro-heygen.md`, exportar em 3 formatos (16:9, 1:1, 9:16) com versões 60s/30s/15s. Subir master em `/src/assets/video/migracao-aws-hero.mp4`
2. **Publicar a LP:** o arquivo `src/migracao-aws.njk` segue o padrão Eleventy do site. Build local: `npm run build` ou `npm run dev` (ver `package.json`). URL final: `https://evernow.com.br/migracao-aws`
3. **Configurar tracking:** GTM com 5 eventos antes de subir mídia paga
4. **Lançar campanhas:** Google primeiro (semana 1) → Meta topo (semana 1) → LinkedIn (semana 2) → Retargeting (semana 4)

## Investimento e retorno esperado

| Canal | Budget/mês | Conversões/mês | CPL bruto | % MQL |
|---|---|---|---|---|
| Google Ads | R$ 18.000 | 48 | R$ 380 | 40% |
| LinkedIn Ads | R$ 22.000 | 30 | R$ 730 | 55% |
| Meta Ads | R$ 10.000 | 45 | R$ 220 | 25% |
| **TOTAL** | **R$ 50.000** | **~123 leads** | **R$ 405 blend** | **~46 MQL** |

Pipeline mensal estimado: R$ 280-300k ARR incremental (assumindo close rate 25% e ticket R$ 25k ARR).

## URLs e referências

- LP de destino: `/migracao-aws`
- Form HubSpot: `fbcedeb4-75d3-4247-a39b-b5cfe447aef9` (portal 49406327)
- Vídeo source: `/assets/video/migracao-aws-hero.mp4`
- Form de origem (referência interna): https://forms.clickup.com/9007058851/f/8cdtkx3-58191/7QWNK6VYL125710RN8
