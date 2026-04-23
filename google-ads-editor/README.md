# Google Ads Editor — CSVs prontos para upload

**Budget total:** R$ 2.000/mês · **Gasto diário total:** R$ 66,66 · **Alvo:** ROI no trimestre

## Arquivos nesta pasta

```
google-ads-editor/
├── README.md                       (este arquivo)
├── 01-campaigns.csv                (3 campanhas)
├── 02-ad-groups.csv                (7 ad groups)
├── 03-keywords.csv                 (26 keywords exact/phrase)
├── 04-ads-responsive.csv           (21 anúncios — 3 por ad group)
├── 05-negative-keywords.csv        (lista global de 150+ termos)
├── 06-sitelink-extensions.csv      (4 sitelinks)
├── 07-callout-extensions.csv       (6 callouts)
└── 08-structured-snippets.csv      (1 snippet de serviços)
```

## Como fazer upload no Google Ads Editor

1. Baixe o **Google Ads Editor** em https://ads.google.com/intl/pt_br/home/tools/ads-editor/ (grátis, Windows/Mac)
2. Abra e conecte à sua conta Evernow
3. File → **Import** → **From file** → escolha `01-campaigns.csv` primeiro
4. Review e mantenha tudo **pausado** (não ativar automaticamente)
5. Repetir para os 7 arquivos seguintes na ordem numerada
6. Dentro do Editor: revise visualmente se tudo subiu certo
7. Clique em **Post** (botão canto superior) → escolha **Review changes first** → depois **Post all changes**
8. Vá pra interface web `ads.google.com`, abra cada campanha, **verifique budget diário e targeting**, e ative MANUALMENTE na segunda-feira às 8h

## Requisitos antes do upload

- [ ] GA4 ativo (ver `setup-gtm-ga4-conversoes.md`)
- [ ] 3 conversões importadas no Google Ads
- [ ] `lead_form_submit` marcada como PRIMÁRIA
- [ ] Campanhas apontam para `evernow.com.br` (não dev.pages.dev)
- [ ] Novas URLs no ar (após cutover 11ty): `/pentest.html`, `/guias/quanto-custa-pentest/`, `/servicos/adequacao-lgpd/`, etc.

## Notas importantes

- **Nenhum anúncio Display, PMax ou YouTube** — só Search, para preservar budget em B2B
- **Lance inicial manual tCPC** — após 15 conversões, migrar pra Smart Bidding
- **Horário:** 8h-20h seg-sex (fora disso = −100%)
- **Device mobile:** −60% no mês 1, reavaliar após dados
- **Geo:** Brasil inteiro, +30% em SP/RJ/MG/RS/PR
