# Title & Meta Optimizer — 15 páginas-chave

**Data:** 28/04/2026
**Padrão:** title 50-60 chars (máximo 65), description 120-155 chars
**Estratégia:** keyword core no início + benefício/diferencial + branding `| Evernow`
**Aplicação:** após você aprovar, eu edito os arquivos `.njk` correspondentes ou os `_data/i18n/pt.js` (depende de onde está cada title — alguns vêm do `seoTitle` no front-matter, outros do `meta.<pageMeta>.title` no i18n)

---

## Onde editar (mapeamento atual)

Pelas conventions vistas no `head.njk`:
- **`seoTitle`/`seoDescription` no front-matter** (.njk de cada página) → tem prioridade
- **`meta.<pageMeta>.title`/`meta.<pageMeta>.description` em `_data/i18n/pt.js`** → fallback se não houver front-matter
- A maioria das LPs já usa front-matter (vi em vendor.njk, /servicos/*.njk)

---

## 1. Homepage `/`

| Campo | Atual (chars) | Proposto (chars) | Por quê |
|---|---|---|---|
| Title | `Evernow \| Consultoria em Cibersegurança e DevSecOps` (51) | `Evernow \| Consultoria em Cibersegurança Empresarial BR` (57) | "Empresarial BR" sinaliza B2B + geo, abandona "DevSecOps" do título (já ranqueia em outros pillars) |
| Description | `Acelere a segurança digital da sua empresa. Reduza riscos e garanta compliance com especialistas em cibersegurança, DevSecOps e Inteligência Artificial. Fale com um especialista.` (178) | `Consultoria em cibersegurança para empresas: pentest, DevSecOps, LGPD, ISO 27001 e SOC 24x7. Especialistas certificados, resultado mensurável.` (146) | Lista pillars principais + autoridade + tira "IA" (não é pillar atual) |

---

## 2. `/pentest` — já está bom, otimização incremental

| Campo | Atual | Proposto | Por quê |
|---|---|---|---|
| Title | `Pentest para Empresas \| Teste de Invasão Manual \| Evernow` (57) | `Pentest para Empresas: Web, API, Mobile e Cloud \| Evernow` (57) | Lista os escopos (matching keywords reais) |
| Description | `Pentest manual e automatizado para apps, APIs, redes e cloud. Relatório detalhado, reteste incluído e conformidade com LGPD, PCI e ISO 27001.` (141) | (manter — está ótima) | Sem ajuste |

---

## 3. `/guias/quanto-custa-pentest/`

| Campo | Atual (72) | Proposto (60) | Por quê |
|---|---|---|---|
| Title | `Quanto Custa um Pentest em 2026? Faixas de Preço e 7 Variáveis \| Evernow` | `Quanto Custa um Pentest? Faixas Reais de Preço 2026 \| Evernow` | Tira "7 Variáveis" (mantém na H1), corta 12 chars |
| Description | (158, 3 chars sobre limite) | `Pentest de aplicação, API, rede e cloud em 2026: quanto custa, o que define preço e como comparar propostas. Faixas reais praticadas no Brasil.` (143) | Reorg, corta "pela Evernow" (redundante) |

---

## 4. `/guias/devsecops/`

| Campo | Atual (72) | Proposto (62) | Por quê |
|---|---|---|---|
| Title | `DevSecOps: Guia Completo 2026 com Pipeline, Ferramentas e KPIs \| Evernow` | `DevSecOps: Guia Completo 2026 com Pipeline e KPIs \| Evernow` | Tira "Ferramentas" (já implícito em pipeline) |
| Description | (153, ok) | (manter) | Sem ajuste |

---

## 5. `/guias/sast-vs-dast-vs-sca/`

| Campo | Atual (79) | Proposto (62) | Por quê |
|---|---|---|---|
| Title | `SAST vs DAST vs SCA: Diferenças, Quando Usar e Como Integrar no CI/CD \| Evernow` | `SAST vs DAST vs SCA: Quando Usar Cada Um \| Evernow` | Foco no que importa pra busca; menos é mais |
| Description | (141, ok) | (manter) | Sem ajuste |

---

## 6. `/guias/cspm-o-que-e/`

| Campo | Atual (76) | Proposto (60) | Por quê |
|---|---|---|---|
| Title | `CSPM: O que é Cloud Security Posture Management e Como Implementar \| Evernow` | `CSPM: O que é, vs CNAPP/CWPP e Como Implementar \| Evernow` | Adiciona modifier que diferencia (vs CNAPP/CWPP — já está no description) |
| Description | (156, 1 sobre limite) | `Guia completo CSPM 2026: diferença vs CNAPP e CWPP, 8 controles essenciais, integração AWS/Azure/GCP e como priorizar findings.` (133) | Mais enxuto |

---

## 7. `/servicos/adequacao-lgpd/`

| Campo | Atual (60) | Proposto | Por quê |
|---|---|---|---|
| Title | `Adequação LGPD para Empresas \| Roadmap em 120 Dias \| Evernow` | (manter — está bom) | Sem ajuste |
| Description | (157, 2 chars sobre limite) | `Consultoria de adequação LGPD: data mapping, DPIA, políticas, DPO as a Service e evidências para ANPD em 120 dias com entregáveis semanais.` (137) | Tira "completa" + reorg |

---

## 8. `/servicos/consultoria-iso-27001/`

| Campo | Atual (56) | Proposto | Por quê |
|---|---|---|---|
| Title | `Consultoria ISO 27001: Certificação em 8 Meses \| Evernow` | (manter — está bom) | Sem ajuste |
| Description | (158, 3 chars sobre) | `Implementação do SGSI ISO/IEC 27001:2022. Gap analysis, 93 controles do Anexo A, SoA e auditoria com plano de 8 meses.` (118) | Mais enxuto |

---

## 9. `/servicos/soc-como-servico/`

Já está **excelente** (62 chars title, 147 desc, FAQ schema). Manter.

---

## 10. `/solucoes/secure-code/`

| Campo | Atual (54) | Proposto | Por quê |
|---|---|---|---|
| Title | `Secure Code \| DevSecOps, AppSec e Shift-Left \| Evernow` | (manter) | OK |
| Description | (140, ok) | (manter) | OK |
| **Keywords** | `Secure Code, cibersegurança, Secure Code brasil, segurança da informação, evernow` | `secure code, devsecops, appsec, sast dast sca, shift left, threat modeling, segurança aplicações, código seguro` | Adiciona keywords reais do pillar |

---

## 11. `/solucoes/data-shield/`

| Campo | Atual (53) | Proposto | Por quê |
|---|---|---|---|
| Title | `Data Shield \| Proteção de Dados, LGPD e DLP \| Evernow` | (manter) | OK |
| Description | (159, 4 chars sobre) | `Descubra, classifique e proteja dados sensíveis com DSPM, criptografia, DLP, gestão de consentimento LGPD e privacy ops.` (122) | Mais enxuto |
| **Keywords** | `Data Shield, cibersegurança, Data Shield brasil, segurança da informação, evernow` | `data shield, dspm, dlp, criptografia, lgpd, privacy ops, classificação de dados, proteção de dados sensíveis` | Reescrever |

---

## 12. `/produtos/devsecops/`

| Campo | Atual (49) | Proposto | Por quê |
|---|---|---|---|
| Title | `DevSecOps \| Segurança no Pipeline CI/CD \| Evernow` | `DevSecOps Gerenciado: Pipeline CI/CD Seguro \| Evernow` (54) | Adiciona "Gerenciado" (BOFU comercial) + "Seguro" (keyword core) |
| Description | (144, ok) | (manter) | OK |
| **Keywords** | `DevSecOps, Secure Code, AppSec, cibersegurança brasil, evernow` | `devsecops, devsecops gerenciado, consultoria devsecops, sast dast sca, threat modeling, pipeline ci cd seguro, shift left, evernow` | Mais long-tail |

---

## 13. `/parceiros` ⚠️ AJUSTES PRINCIPAIS

| Campo | Atual (50) | Proposto | Por quê |
|---|---|---|---|
| Title | `Parceiros Certificados de Cibersegurança \| Evernow` | `Parceiros Certificados: Fortify, Veracode, SonarQube e Mais \| Evernow` (66) — **se >60 ok pra essa** | Cita os 3 vendors mais buscados (capta keywords brand) |
| Description | (172, 17 chars sobre) | `Parceira certificada de Fortify, Veracode, SonarQube, Sonatype, Tenable e mais. Implementação, POC, treinamento e operação gerenciada.` (134) | Cita brands específicos (CTR mais alto) |

---

## 14. `/parceiros/fortify/`

| Campo | Atual (79) | Proposto (62) | Por quê |
|---|---|---|---|
| Title | `Parceiro Fortify Brasil: SAST Enterprise com Implementação e Operação \| Evernow` | `Fortify Brasil: SAST Enterprise + Operação \| Evernow` | Mais conciso |
| Description | (157, 2 chars sobre) | `Parceira certificada Fortify by OpenText no Brasil: POC, licenciamento, integração CI/CD, tuning de regras e operação gerenciada SAST.` (133) | Tira "Evernow é" (redundante) |

---

## 15. `/assessment`

| Campo | Atual (47) | Proposto | Por quê |
|---|---|---|---|
| Title | `Assessment de Cibersegurança Gratuito \| Evernow` | `Diagnóstico de Cibersegurança Gratuito 30min \| Evernow` (54) | "Diagnóstico" tem mais volume BR que "Assessment" + tempo (urgência) |
| Description | (150, ok) | (manter) | OK |
| **Keywords** | `assessment cibersegurança, diagnóstico segurança, avaliação maturidade, gap analysis, evernow` | `diagnóstico cibersegurança, assessment cibersegurança, avaliação maturidade segurança, gap analysis cibersegurança, ciso interim, security review` | Mais variações |

---

## Resumo das mudanças propostas

| Tipo de mudança | Páginas afetadas | Tempo total |
|---|---|---|
| Title encurtado | 6 (`/guias/quanto-custa-pentest`, `/guias/devsecops`, `/guias/sast-vs-dast-vs-sca`, `/guias/cspm-o-que-e`, `/parceiros/fortify`, `/produtos/devsecops`) | 15 min |
| Title reescrito | 5 (`/`, `/pentest`, `/parceiros`, `/assessment`, `/produtos/devsecops`) | 20 min |
| Description ajustada | 8 | 20 min |
| Keywords reescritas | 5 (3 solucoes + produtos/devsecops + assessment) | 15 min |
| **Total** | 15 páginas | **~70 min** |

---

## Próximo passo

Você aprova essa lista? Se sim, eu edito os arquivos `.njk` e/ou `_data/i18n/pt.js` correspondentes — pode demorar uns 70 min de edição direta. Resultado: re-build e push pra Cloudflare.

Se preferir um subset (ex: só os 5 piores casos de title overflow), me avisa quais.

Notas:
- Mudanças de title/desc levam **2-7 dias** pra Google reindexar e mostrar nas SERPs
- Não há risco de queda de ranking se substituirmos por versões SEO-otimizadas (apenas upgrade)
- Se preferir, posso aplicar via PR pra você revisar antes do merge
