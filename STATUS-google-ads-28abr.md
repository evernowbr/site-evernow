# Status Google Ads — 28/04/2026 (publicação concluída)

## ✅ Concluído hoje

As 3 campanhas novas foram criadas e publicadas no Google Ads (conta Evernow 785-517-9598) via Google Ads Editor desktop, em estado **PAUSADO** — não geram custo até serem ativadas manualmente.

### Resumo da publicação (Editor → Google Ads)

| Item | Quantidade |
|---|---|
| Campanhas | 3/3 |
| Grupos de anúncios | 7/7 |
| Palavras-chave | 29/29 |
| Locais (segmentação) | 3/3 |
| Sitelinks (extensions) | 4/4 |
| Frases de destaque (callouts) | 5/5 |
| Anúncios responsivos (RSAs) | 13 (importados) |
| Negative keywords | 90 (importados) |

### Campanhas criadas (todas PAUSED)

1. **Pentest - Preço e Compra** — R$ 33,33/dia (~R$ 1k/mês) — bidding CPC manual
2. **Pentest - Compliance** — R$ 20,00/dia (~R$ 600/mês) — bidding CPC manual
3. **DevSecOps - BOFU** — R$ 13,33/dia (~R$ 400/mês) — bidding CPC manual

Todas com:
- Tipo de orçamento: Médio diário
- Tipo de campanha: Rede de pesquisa (Display desativado, Parceiros desativado)
- Anúncios políticos UE: Não ✓
- Data de início: 28/04/2026
- Data de término: nenhuma

## ✅ Concluído via navegador (Claude executou no Chrome)

### GA4 Key Events (✅ DONE)
3 eventos marcados como Key Events no GA4 property "Evernow" (401896816):
- `lead_phone_click` ⭐
- `lead_form_submit` ⭐
- `lead_cta_click` ⭐

### Importação conversões GA4 → Google Ads (✅ DONE)
3 ações de conversão criadas em Google Ads (785-517-9598):
- **Lead telefônico** [Principal] — origem: GA4 Evernow `lead_phone_click`
- **Contato** [Principal] — origem: GA4 Evernow `lead_cta_click`
- **Solicitar cotação** [Principal] — origem: GA4 Evernow `lead_form_submit`

GA4 property linkada: 401896816 (Evernow). Wizard de "Medir conversões em um site" concluído.

## 🔴 Pendente do Ney (manual)

### 1. HSTS no Cloudflare (BLOQUEADO via OAuth do Ney)
A conta Cloudflare logada via Google OAuth (ney.piacentini@evernow.com.br) é PESSOAL e está vazia (0 domínios, 0 projetos). evernow.com.br está em outra conta Cloudflare que não consegui acessar.

**Ação manual:**
- Logar na conta Cloudflare correta (provavelmente via login direto/SSO da Evernow)
- Selecionar o domínio evernow.com.br
- SSL/TLS → Edge Certificates → HSTS → Enable
- Max-age: 6 meses, Include Subdomains: ON, Preload: ON

### 2. Ativar campanhas (1 min — quando estiver pronto)
- ads.google.com → Campaigns → status filter "Paused"
- 3 novas campanhas: clicar status dropdown → "Enabled"
- Recomendação: ativar segunda 8h pra observar primeira hora ao vivo

## 📊 Próximos 90 dias (referência: PLANO-ads-90dias.md)

- **Semana 1 (29/04 - 05/05)**: Observar Search Terms diariamente, adicionar negativos descobertos. Não mexer em bid/budget.
- **Semana 2 (06/05 - 12/05)**: Pausar keywords com 0 conversões + alto custo, ajustar bid keywords ROAS positivo
- **Semana 3-4**: Migrar para Smart Bidding (Maximize Conversions) se tivermos ≥30 conversões/mês
- **Mês 2-3**: Adicionar Performance Max + expandir keywords TOFU

## 🔧 Avisos do Editor (não bloqueantes)

- "5 ⚠️ A campanha está usando o modelo de lance manual" — recomendação para Smart Bidding (executar após acumular dados)
- 1 keyword duplicada no callout (5/6 publicadas, sem impacto)

---

**Site novo já em produção:** evernow.com.br (Cloudflare Pages, 11ty)
**Tracking ativo:** GTM (GTM-W6PP4HHP) + GA4 (G-E7PYGWQBW4) com 3 conversões configuradas
**Container GTM:** publicado com 17 mudanças (versão atual)
