'use strict';

const fs   = require('fs');
const path = require('path');

// ---------------------------------------------------------------------------
// Minimal RFC-4180 CSV parser (quoted multi-line fields + "" escapes)
// ---------------------------------------------------------------------------
function parseCSV(text) {
  const rows  = [];
  let row     = [];
  let field   = '';
  let inQuote = false;
  let i       = 0;

  while (i < text.length) {
    const ch   = text[i];
    const next = text[i + 1];

    if (inQuote) {
      if (ch === '"') {
        if (next === '"') { field += '"'; i += 2; continue; }
        inQuote = false;
      } else {
        field += ch;
      }
    } else {
      if (ch === '"') {
        inQuote = true;
      } else if (ch === ',') {
        row.push(field); field = '';
      } else if (ch === '\r' && next === '\n') {
        row.push(field); if (row.length) rows.push(row);
        row = []; field = ''; i += 2; continue;
      } else if (ch === '\n' || ch === '\r') {
        row.push(field); if (row.length) rows.push(row);
        row = []; field = '';
      } else {
        field += ch;
      }
    }
    i++;
  }
  row.push(field);
  if (row.some(f => f !== '')) rows.push(row);
  return rows;
}

function toObjects(rows) {
  if (rows.length < 2) return [];
  const headers = rows[0].map((h, idx) =>
    idx === 0 ? h.replace(/^\uFEFF/, '').trim() : h.trim()
  );
  return rows.slice(1).map(row => {
    const obj = {};
    headers.forEach((h, i) => { obj[h] = (row[i] ?? '').trim(); });
    return obj;
  });
}

// ---------------------------------------------------------------------------
// Image helpers
// ---------------------------------------------------------------------------

const WP_UPLOADS_HTTPS = 'https://evernow.com.br/wp-content/uploads/';
const WP_UPLOADS_HTTP  = 'http://evernow.com.br/wp-content/uploads/';
const LOCAL_UPLOADS    = '/assets/image/blog/';

/** Convert a WordPress uploads URL to a flat site-relative local path (no year/month). */
function wpToLocal(url) {
  if (!url) return null;
  const path = require('path');
  if (url.startsWith(WP_UPLOADS_HTTPS)) return LOCAL_UPLOADS + path.basename(url.split('?')[0]);
  if (url.startsWith(WP_UPLOADS_HTTP))  return LOCAL_UPLOADS + path.basename(url.split('?')[0]);
  // Already local: normalise year/month subfolder to flat
  if (url.startsWith(LOCAL_UPLOADS))    return LOCAL_UPLOADS + path.basename(url.split('?')[0]);
  return url; // external non-WP link, keep as-is
}

// ---------------------------------------------------------------------------
// Content helpers
// ---------------------------------------------------------------------------

// Content is pre-cleaned in blog_data.csv; just normalise whitespace at runtime.
function cleanHTML(html) {
  return (html || '').replace(/\s{3,}/g, ' ').trim();
}

function stripTags(html) {
  return html.replace(/<[^>]+>/g, ' ').replace(/\s{2,}/g, ' ').trim();
}

function truncate(text, max = 180) {
  const plain = stripTags(text);
  if (plain.length <= max) return plain;
  return plain.slice(0, max).replace(/\s\S*$/, '') + '…';
}

function formatDate(dateStr, locale) {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  if (isNaN(d)) return dateStr;
  try {
    return d.toLocaleDateString(locale === 'en' ? 'en-US' : 'pt-BR', {
      year: 'numeric', month: 'short', day: 'numeric'
    });
  } catch (_) {
    return dateStr.slice(0, 10);
  }
}

// ---------------------------------------------------------------------------
// Main export – cached after first call
// ---------------------------------------------------------------------------
let _cache = null;

async function getBlogPosts() {
  if (_cache) return _cache;

  const allRows = toObjects(parseCSV(
    fs.readFileSync(path.resolve(__dirname, 'blog_data.csv'), 'utf8')
  ));

  // Build map: post_id → first attachment local path (featured image)
  const mediaMap = {};
  for (const r of allRows) {
    if (r.post_type === 'attachment' && r.parent_id && r.attachment_url && !mediaMap[r.parent_id]) {
      mediaMap[r.parent_id] = wpToLocal(r.attachment_url);
    }
  }

  const posts = allRows
    .filter(p => p.status === 'publish' && p.post_type === 'post')
    .sort((a, b) => new Date(b.post_date) - new Date(a.post_date))
    .slice(0, 200) // up to 200 published posts
    .map(p => {
      const content = cleanHTML(p.content  || '');
      const rawExcerpt = cleanHTML(p.excerpt || '');
      const excerpt = rawExcerpt ? truncate(rawExcerpt, 200) : truncate(content, 200);

      // Featured image: prefer explicitly linked media, then first inline image
      const featuredImage = mediaMap[p.post_id] || p.first_image || null;

      const categories = (p.categories || '').split(/[,;|]/).map(s => s.trim()).filter(Boolean);
      const tags       = (p.tags       || '').split(/[,;|]/).map(s => s.trim()).filter(Boolean);

      return {
        id:           p.post_id,
        slug:         p.slug,
        title:        p.title,
        author:       p.author,
        date:         p.post_date,
        datePt:       formatDate(p.post_date, 'pt'),
        dateEn:       formatDate(p.post_date, 'en'),
        categories,
        tags,
        excerpt,
        content,
        featuredImage,          // null when no image at all
        firstImage:   p.first_image || null,  // first inline img from content
        originalLink: p.link || '',
      };
    });

  _cache = posts;
  return posts;
}

module.exports = getBlogPosts;
