# AUDITORIA-SEO.md — evernow.com.br
**Data:** 29/04/2026 | **Fase:** 1 — Auditoria do Repositório

---

## 1. Plataforma e Build System

| Item | Detalhe |
|------|---------|
| **Hospedagem** | Cloudflare Pages |
| **Build system** | Eleventy (11ty) v3.1.5 |
| **Repositório** | GitHub (`evernowbr/site-evernow`) — branch `dev` → deploy automático |
| **Source dir** | `src/` |
| **Output dir** | `_site/` |

---

## 2. Redirects — Tarefa 1.2

### Onde estão definidos

**Arquivo:** `src/_redirects` (copiado para `_site/_redirects` pelo Eleventy passthrough)

Formato Cloudflare Pages. O arquivo atual contém apenas redirects **nominais e específicos** (WordPress legacy, trailing-slash, aliases amigáveis). Exemplo:

```
/pentest/        /pentest    301
/contato         /contact    301
/sobre           /about      301
/* /404.html 404    ← fallback final
```

### Origem dos redirects 308 (problema central)

Os 308s **não estão no `_redirects`** — vêm do **"Clean URLs" automático do Cloudflare Pages**.

Quando o Cloudflare Pages serve um arquivo estático gerado como `about.html`, ele disponibiliza a URL limpa `/about` E faz **308 (Permanent Redirect)** de `/about.html` → `/about` automaticamente, em nível de plataforma, sem regra explícita no `_redirects`.

**Como corrigir:** adicionar uma regra explícita `/*.html → /:splat 301` no `_redirects` **antes do fallback `/* /404.html 404`**. Uma regra explícita tem prioridade sobre o comportamento automático da plataforma e garante o código 301 correto para SEO.

> ⚠️ Exceções obrigatórias: `404.html` e `/en/404.html` não podem ser redirecionados (são páginas de erro servidas diretamente pelo Cloudflare).

### Blog posts — caso especial

Os posts do blog têm permalink com `.html` **por design** no Eleventy (`/blog/slug.html`). Eles **não** passam por Clean URLs — são servidos na URL `.html` diretamente e assim declarados nas canonicals. Isso está consistente internamente, mas é inconsistente com o restante do site (que usa URLs limpas). Decisão de Fase 2: manter `.html` nos posts ou migrar também.

---

## 3. Inventário de URLs canônicas — Tarefa 1.3

### Sitemap atual

**Arquivo gerador:** `src/sitemap.njk` (template Eleventy dinâmico)
**Sitemap gerado:** `_site/sitemap.xml`

| Métrica | Valor |
|---------|-------|
| Total de `<url>` no sitemap | **308** |
| URLs com `.html` na `<loc>` | **146** (todos posts de blog, 73 pares PT/EN) |
| URLs sem `.html` na `<loc>` | **162** (81 pares PT/EN — páginas, produtos, guias, etc.) |
| **Total de páginas canônicas únicas** | **~154** (308 ÷ 2 idiomas) |

### O problema estrutural do sitemap

O gerador emite **duas entradas separadas** para cada par PT/EN:

```xml
<!-- Entrada PT -->
<url>
  <loc>https://evernow.com.br/about</loc>
  <xhtml:link hreflang="pt-BR" href="https://evernow.com.br/about"/>
  <xhtml:link hreflang="en"    href="https://evernow.com.br/en/about"/>
  <xhtml:link hreflang="x-default" href="https://evernow.com.br/about"/>
</url>

<!-- Entrada EN — PROBLEMA: Google vê como página separada alternativa -->
<url>
  <loc>https://evernow.com.br/en/about</loc>
  <xhtml:link hreflang="pt-BR" href="https://evernow.com.br/about"/>
  <xhtml:link hreflang="en"    href="https://evernow.com.br/en/about"/>
  <xhtml:link hreflang="x-default" href="https://evernow.com.br/about"/>
</url>
```

Isso faz o Google ver a página EN como "alternativa com canônica adequada" (a PT) — e por isso **não a indexa**. São as **215 páginas "Página alternativa com tag canônica adequada"** no GSC.

**Solução correta:** o sitemap deve ter **~154 entradas** (uma por página única), cada uma com os blocos `xhtml:link` das duas línguas.

### Tags `<link rel="canonical">` — estado atual

| Métrica | Valor |
|---------|-------|
| Total de páginas com canonical | **330** |
| Canonicals **com** `.html` | **168** (todos posts de blog) |
| Canonicals **sem** `.html` | **162** (todas as outras páginas) |

**As páginas não-blog estão consistentes** — suas canonicals apontam para a URL sem `.html`, alinhada com o que o Cloudflare Pages serve como Clean URL. ✅

**Os posts do blog** têm canonical com `.html`, compatível com seus permalinks. ✅ (internamente consistente, mas diferente do padrão do restante do site)

### Links internos com `.html` no site gerado

**186 links internos** nos HTMLs gerados ainda usam `.html`, causando redirect por hop antes de chegar ao destino. Exemplos encontrados:

```
href="/about.html"
href="/assessment.html"
href="/blog.html"
href="/contact.html"
href="/blog/slug.html"  ← posts (caso especial)
href="/index.html"      ← 1 ocorrência em blog-post.njk
```

**Origem dos links problemáticos:**
- Permalinks com `.html` em **todos os templates estáticos** (`contact.njk`, `about.njk`, `assessment.njk`, `blog.njk`, `pentest.njk`, `services.njk`, `solutions.njk`, `parceiros.njk`, `ebooks.njk`, `webinars.njk`, `termos-de-uso.njk`, `politica-de-privacidade.njk`)
- Links hardcoded nos templates (`href="{{ urlPrefix }}/contact.html"`, etc.)
- `blog-post.njk` linka `index.html` e `blog.html`

---

## 4. Resumo dos problemas e impacto no GSC

| Problema | Causa raiz | Impacto no GSC |
|----------|-----------|----------------|
| Sitemap com 308 `<url>` (EN duplicadas) | `sitemap.njk` emite par PT+EN separados | 215 "Página alternativa com canônica adequada" |
| 308 em vez de 301 nas URLs `.html` | Cloudflare Pages Clean URLs automático | 132 "Página com redirecionamento" |
| 146 URLs `.html` no sitemap (blog) | Permalink de blog usa `.html` | Google rastreia `.html` que não redireciona (OK para blog, mas confuso) |
| 186 links internos via `.html` | Permalinks e hrefs hardcoded nos templates | Crawl budget desperdiçado em redirects |

---

## 5. O que NÃO está quebrado

- ✅ Tags `<link rel="canonical">` das páginas não-blog já apontam para URL limpa
- ✅ Hreflang dentro de cada página individual está correto (PT como `x-default`)
- ✅ `robots.txt` está correto (só bloqueia `404.html`)
- ✅ Nenhuma página importante está com `noindex`
- ✅ HTTPS em toda o site, sem mixed content
- ✅ Redirects específicos do WordPress legado estão corretos (301)

---

## 6. Plano de ação para Fase 2 (aguardando aprovação)

Ordem de execução proposta:

1. **`src/sitemap.njk`** — Reescrever para emitir ~154 entradas únicas (uma por página, com xhtml:link das duas línguas)
2. **`src/_redirects`** — Adicionar `/*.html /:splat 301` antes do fallback `/* /404.html 404`
3. **Permalinks dos templates estáticos** — Mudar de `about.html` para `about` em todos os `.njk` de páginas-folha (exceto `404.njk` e posts de blog)
4. **Links internos hardcoded** — Substituir `href="X.html"` por `href="X"` em todos os templates
5. **Blog posts** — Decidir: manter `.html` (sem migração) ou migrar para URL limpa (requer redirects extras para não perder backlinks)

> **Ponto de decisão para o usuário antes de Fase 2:** os posts do blog ficam em `/blog/slug.html` ou migram para `/blog/slug/`?

---

*Arquivo gerado pela auditoria da Fase 1 do PLANO-SEO-EVERNOW.md*
