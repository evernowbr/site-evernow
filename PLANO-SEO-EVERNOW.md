# Plano de Correção de SEO — evernow.com.br

> **Para o Claude Code:** Este é um plano de execução completo. Trabalhe os blocos em ordem (Fase 1 → 2 → 3). Antes de começar cada fase, confirme com o usuário. Não pule etapas. No final de cada fase, peça ao usuário para validar localmente antes de fazer commit.

---

## 📋 Contexto do problema

**Situação atual no Google Search Console:**
- 676 páginas não indexadas
- 215 "Página alternativa com tag canônica adequada"
- 132 "Página com redirecionamento"
- 288 "Detectada, mas não indexada"
- 31 "Rastreada, mas não indexada"
- 4 erros 404, 4 bloqueadas por robots.txt, 1 noindex, 1 erro 403

**Causa raiz identificada:**

1. **Inconsistência de URLs canônicas:** o site serve as mesmas páginas em duas variantes (`/about` e `/about.html`). O `.html` redireciona 308 para a versão sem extensão, mas:
   - O sitemap mistura os dois padrões (146 URLs com `.html`, 162 sem)
   - Links internos da home usam `.html` (passam por redirect)
   - A canônica das páginas declara o formato sem `.html`

2. **Hreflang duplicado no sitemap:** cada par PT/EN aparece como duas entradas separadas, ambas declarando o mesmo bloco hreflang. Isso faz o Google enxergar 215 páginas como "alternativa canônica" — contadas como não indexadas.

3. **Crawl budget desperdiçado:** com 308 URLs no sitemap (sendo metade redirects), o Google está gastando orçamento de rastreamento em duplicatas e não chega às páginas reais.

**Decisão arquitetural:** padronizar TUDO no formato **sem `.html`** (URLs limpas, modernas, mais fáceis de manter). Toda URL `.html` passa a ser 301 → versão limpa.

---

## 🎯 Fase 1 — Auditoria do repositório (faça isso primeiro)

**Objetivo:** entender a estrutura atual do projeto antes de modificar qualquer coisa.

### Tarefa 1.1 — Mapear o projeto

Execute:

```bash
# Listar estrutura geral
ls -la
find . -name "*.html" -not -path "./node_modules/*" | head -30
find . -name "sitemap.xml" -not -path "./node_modules/*"
find . -name "robots.txt" -not -path "./node_modules/*"
find . -name ".htaccess" -o -name "nginx.conf" -o -name "_redirects" -o -name "vercel.json" -o -name "netlify.toml" 2>/dev/null
```

Reporte ao usuário:
- Quantos arquivos `.html` totais existem
- Onde está o sitemap (gerado dinamicamente ou estático?)
- Que servidor/plataforma o site usa (Apache, Nginx, Vercel, Netlify, Cloudflare Pages?)
- Se há um build system (Jekyll, 11ty, Hugo, Astro, script custom?)

### Tarefa 1.2 — Identificar como os redirects 308 são gerados

Atualmente `evernow.com.br/about.html` retorna 308 para `/about`. Descubra **onde** essa regra está definida:

```bash
# Procurar configurações de redirect
grep -rn "rewrite\|redirect\|RewriteRule" --include="*.conf" --include=".htaccess" --include="*.toml" --include="*.json" --include="*.yaml" --include="*.yml" . 2>/dev/null | head -20

# Se for site estático em Cloudflare Pages, verificar:
cat _redirects 2>/dev/null
cat _headers 2>/dev/null

# Se for Vercel:
cat vercel.json 2>/dev/null

# Se for Netlify:
cat netlify.toml 2>/dev/null
```

**Pare e reporte ao usuário:** "Encontrei a configuração de redirects em [arquivo]. O padrão atual é 308 (Permanent Redirect). Vou alterar para 301 (Moved Permanently) — o Google trata os dois de forma equivalente, mas 301 é o padrão histórico para SEO e algumas ferramentas legadas o reconhecem melhor. Confirma?"

### Tarefa 1.3 — Inventariar URLs canônicas reais

```bash
# Listar todas as páginas .html que servem conteúdo (não são apenas redirects)
find . -name "*.html" -not -path "./node_modules/*" -not -path "./.git/*" | sort > /tmp/all-html-files.txt
wc -l /tmp/all-html-files.txt

# Verificar se canonicals dentro dos HTMLs já apontam para versão sem .html
grep -l 'rel="canonical"' $(find . -name "*.html" -not -path "./node_modules/*") | head -5
grep 'rel="canonical"' $(find . -name "*.html" -not -path "./node_modules/*") | head -10
```

**Entregável da Fase 1:** crie um arquivo `AUDITORIA-SEO.md` na raiz do repo com:
- Plataforma de hospedagem identificada
- Localização das regras de redirect
- Total de páginas HTML únicas (canônicas)
- Se as tags `<link rel="canonical">` já estão consistentes

**❗ Pare aqui e mostre o `AUDITORIA-SEO.md` ao usuário antes de prosseguir.**

---

## 🔧 Fase 2 — Correções estruturais

> Só inicie esta fase após o usuário aprovar a auditoria.

### Tarefa 2.1 — Padronizar links internos para versão sem `.html`

**Problema:** a home linka `/blog/auditoria-de-aplicacoes-com-seguranca-evernow.html`, que redireciona. Cada link interno via redirect dilui sinal de SEO.

**Ação:** substituir em TODOS os arquivos HTML do site os hrefs internos `.html` por versões limpas.

**Regra de substituição:** trocar `href="X.html"` por `href="X"` apenas em links **internos** (mesmo domínio ou caminhos relativos). Não mexer em links externos.

```bash
# Backup primeiro
git status
git add -A && git commit -m "snapshot antes da padronização de URLs" || echo "nada a commitar"

# Listar todos os hrefs com .html que são internos (não começam com http externos)
grep -rohE 'href="[^"]*\.html"' --include="*.html" . | sort -u | head -30
```

**Padrão de substituição** (use sed ou edição manual com cuidado):

| Antes | Depois |
|-------|--------|
| `href="/about.html"` | `href="/about"` |
| `href="about.html"` | `href="about"` |
| `href="/blog/post-x.html"` | `href="/blog/post-x"` |
| `href="https://evernow.com.br/blog/post-x.html"` | `href="https://evernow.com.br/blog/post-x"` |

**Importante:** não trocar referências a `404.html` (essa permanece com `.html`, é uma página de erro).

Após a substituição, validar:

```bash
# Confirmar que não restou href interno com .html (exceto 404.html)
grep -rohE 'href="[^"]*\.html"' --include="*.html" . | grep -v "404.html" | sort -u
```

A saída deve estar vazia (ou conter só links externos para sites de terceiros que terminam em `.html`).

### Tarefa 2.2 — Reescrever o sitemap.xml

**Problema:** sitemap atual tem 308 URLs com mistura de padrões e duplicação de hreflang.

**Solução:** gerar um sitemap onde:
1. Cada par PT/EN aparece como **uma única entrada** (a versão PT é a `<loc>` principal, EN aparece apenas como `xhtml:link`)
2. Todas as URLs no formato sem `.html`
3. Apenas URLs canônicas (sem redirects, sem páginas alternativas)

**Estrutura correta:**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">

  <url>
    <loc>https://evernow.com.br/</loc>
    <xhtml:link rel="alternate" hreflang="pt-BR" href="https://evernow.com.br/"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://evernow.com.br/en/"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://evernow.com.br/"/>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>

  <url>
    <loc>https://evernow.com.br/about</loc>
    <xhtml:link rel="alternate" hreflang="pt-BR" href="https://evernow.com.br/about"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://evernow.com.br/en/about"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://evernow.com.br/about"/>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>

  <!-- ... e assim por diante para cada página única ... -->

</urlset>
```

**Procedimento:**

1. Se o sitemap é gerado por script de build, edite o gerador para emitir o novo formato
2. Se é estático, escreva um script Node/Python que percorra o `find . -name "*.html"`, identifique pares PT/EN (qualquer arquivo em `/en/` é a versão EN do mesmo path raiz) e gere o sitemap único
3. **Resultado esperado:** ~150 URLs (não 308) no novo sitemap

```bash
# Após gerar, validar:
grep -c "<url>" sitemap.xml          # Deve ser ~150, não 300+
grep -c "\.html</loc>" sitemap.xml   # Deve ser 0 (nenhuma URL canônica com .html)
xmllint --noout sitemap.xml && echo "XML válido"
```

### Tarefa 2.3 — Atualizar redirects para 301

Localizar a configuração identificada na Tarefa 1.2 e ajustar:

**Apache (.htaccess):**
```apache
# Redirect 301 de qualquer .html para versão limpa (exceto 404.html e en/404.html)
RewriteEngine On
RewriteCond %{REQUEST_URI} !^/404\.html$
RewriteCond %{REQUEST_URI} !^/en/404\.html$
RewriteCond %{REQUEST_URI} \.html$
RewriteRule ^(.+)\.html$ /$1 [R=301,L]
```

**Cloudflare Pages (`_redirects`):**
```
/404.html      /404.html      200
/en/404.html   /en/404.html   200
/*.html        /:splat        301
```

**Nginx:**
```nginx
location ~ ^/(.+)\.html$ {
    if ($request_uri !~ ^/(en/)?404\.html$) {
        return 301 /$1;
    }
}
```

**Vercel (`vercel.json`):**
```json
{
  "redirects": [
    {
      "source": "/((?!404|en/404).+)\\.html",
      "destination": "/$1",
      "permanent": true
    }
  ]
}
```

Após aplicar, testar localmente:

```bash
# Testar redirect (deve retornar 301, não 308)
curl -sI https://evernow.com.br/about.html | head -3
# Esperado: HTTP/2 301 + location: /about
```

### Tarefa 2.4 — Validar tags canônicas em todos os HTMLs

Cada página deve ter:

```html
<link rel="canonical" href="https://evernow.com.br/CAMINHO-SEM-HTML" />
<link rel="alternate" hreflang="pt-BR" href="https://evernow.com.br/CAMINHO" />
<link rel="alternate" hreflang="en" href="https://evernow.com.br/en/CAMINHO" />
<link rel="alternate" hreflang="x-default" href="https://evernow.com.br/CAMINHO" />
```

Verificar:

```bash
# Listar todos os canonicals e identificar inconsistências
grep -rh 'rel="canonical"' --include="*.html" . | sort -u

# Procurar canonicals que ainda apontam para .html (errado)
grep -rl 'rel="canonical"[^>]*\.html"' --include="*.html" .
```

Qualquer arquivo retornado pela última busca precisa ser corrigido — a canônica deve apontar para a URL sem `.html`.

**Entregável da Fase 2:** abra um PR (ou prepare commit) com:
- Links internos padronizados
- Novo sitemap.xml
- Redirects atualizados para 301
- Canonicals consistentes
- Mensagem de commit: `fix(seo): padroniza URLs canônicas, corrige sitemap e hreflang`

**❗ Pare aqui. Peça ao usuário para fazer deploy de staging e testar antes de mergear.**

---

## 🚀 Fase 3 — Pós-deploy: ações no Google Search Console

> Estas tarefas são **manuais** no GSC — o Claude Code não consegue executá-las. Liste-as ao usuário como checklist.

### 3.1 — Reenviar sitemap

1. Ir em **Search Console > Sitemaps**
2. Remover o sitemap antigo (se aparecer com erros)
3. Adicionar novamente: `https://evernow.com.br/sitemap.xml`
4. Aguardar processamento (24-72h)

### 3.2 — Validar correções

Para cada motivo de não indexação no GSC:
1. Clicar no motivo
2. Clicar em **"Validar correção"**
3. O Google vai re-rastrear e atualizar status em 1-4 semanas

Fazer isso para:
- "Página com redirecionamento" (132)
- "Página alternativa com tag canônica adequada" (215)
- "Detectada, mas não indexada" (288)

### 3.3 — Inspecionar URLs prioritárias manualmente

Pegar as 10 páginas mais estratégicas (home, /solucoes/, /produtos/ principais, posts do blog mais importantes) e:
1. Colar URL no campo de busca do GSC
2. Clicar **"Solicitar indexação"**

Limite do Google: ~10-15 solicitações por dia.

### 3.4 — Corrigir os 9 erros pontuais

- **4 erros 404:** exportar lista no GSC, identificar se são URLs antigas. Para cada uma, decidir: criar redirect 301 para o equivalente atual OU deixar como 410 Gone.
- **1 erro 403:** investigar permissões de arquivo no servidor.
- **4 bloqueadas por robots.txt:** confirmar com o usuário se foi intencional. O `robots.txt` atual só bloqueia `/404.html` e `/en/404.html`, então essas 4 podem ser falsos positivos do GSC após reprocessamento.
- **1 noindex:** confirmar se foi intencional.

---

## 📈 Fase 4 — Médio prazo (próximas 4-8 semanas)

> Esta fase resolve o problema mais difícil: as **288 "Detectadas mas não indexadas"**, que sinalizam **baixa autoridade do domínio**. Não há solução técnica única — requer trabalho contínuo de conteúdo e link building.

### 4.1 — Aumentar densidade de links internos

Cada página de produto (você tem ~22) deve receber links de pelo menos 3 outros lugares:
- Da página de solução-mãe (ex: `/solucoes/secure-code/` linka todos os produtos de Secure Code)
- De pelo menos 2 artigos de blog relacionados
- Do menu de navegação principal

Ação para o Claude Code: gerar um relatório de "páginas órfãs" no repo:

```bash
# Para cada página /produtos/X, contar quantos outros HTMLs a linkam
for page in $(find ./produtos -name "*.html" 2>/dev/null); do
  basename=$(basename "$page" .html)
  count=$(grep -rl "produtos/$basename" --include="*.html" . | grep -v "$page" | wc -l)
  echo "$count   $page"
done | sort -n | head -20
```

Páginas com 0 ou 1 link interno são prioridade para receber links de outros lugares.

### 4.2 — Aumentar profundidade dos posts do blog

Posts curtos (<800 palavras) raramente são indexados em sites de baixa autoridade. Auditar:

```bash
# Listar posts e contar palavras aproximadas
for post in blog/*.html; do
  words=$(cat "$post" | sed 's/<[^>]*>//g' | wc -w)
  echo "$words   $post"
done | sort -n
```

Posts abaixo de 800 palavras: priorizar expansão com:
- Dados originais (cases dos seus clientes — DASA, Cielo)
- Exemplos de código (você é cibersegurança, isso ajuda)
- Imagens/diagramas próprios
- Seção FAQ ao final

### 4.3 — Estratégia de backlinks (não é código, é off-page)

Listar para o usuário (não executar):
- Pedir menções nos sites de parceiros (você lista 22 parceiros, vários grandes)
- Publicar guest posts em portais de TI: TI Inside, ItForum, CISO Advisor, Convergência Digital
- Participar de podcasts: Mente Binária, Segurança Legal, Hipsters.tech
- Submeter palestras: BSides, Hackers to Hackers Conference (H2HC), Mind The Sec

---

## ✅ Critérios de sucesso

**Após 1 semana do deploy da Fase 2:**
- Curl em qualquer URL `.html` retorna 301 (não 308) → versão sem extensão
- Sitemap válido com ~150 URLs (não 300+)
- Nenhum link interno do site passa por redirect

**Após 4 semanas:**
- "Página com redirecionamento" no GSC: cair de 132 para <20
- "Página alternativa com tag canônica adequada" no GSC: cair de 215 para <50
- Páginas indexadas: subir pelo menos 30%

**Após 12 semanas (com Fase 4 em andamento):**
- "Detectada, mas não indexada" cair de 288 para <100
- Tráfego orgânico do GA aumentar consistentemente

---

## 🛑 Coisas para NÃO fazer

- ❌ Não usar `noindex` em massa para "limpar" páginas — vai piorar
- ❌ Não bloquear nada novo no `robots.txt` (o atual está correto)
- ❌ Não comprar backlinks — pode resultar em penalização manual
- ❌ Não mudar o padrão de URL de novo no futuro — cada migração custa 3-6 meses de SEO
- ❌ Não usar redirects em cadeia (A→B→C) — sempre direto (A→C)

---

## 📞 Quando parar e perguntar ao usuário

- Antes de iniciar a Fase 2 (após apresentar AUDITORIA-SEO.md)
- Se encontrar arquivos de configuração que não reconhecer
- Antes de fazer commit de mudanças em massa (>10 arquivos)
- Se algum redirect que parecia simples tiver lógica condicional complexa
- Antes de mexer em qualquer arquivo na pasta `/en/` (versão internacional pode ter regras próprias)
