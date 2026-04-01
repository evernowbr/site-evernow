'use strict';

const getPublishedPosts = require('./publishedPosts.js');
// blogPostPages.js still uses getBlogPosts() (all posts) so every future URL is pre-built

const PER_PAGE = 9;
const LOCALES  = ['pt', 'en'];

function pageUrl(lang, pageNum) {
  const prefix = lang === 'en' ? '/en' : '';
  return pageNum === 1
    ? `${prefix}/blog.html`
    : `${prefix}/blog/pagina-${pageNum}.html`;
}

module.exports = async function getBlogListPages() {
  const posts      = await getPublishedPosts();
  const totalPages = Math.ceil(posts.length / PER_PAGE);
  const pages      = [];

  for (const lang of LOCALES) {
    for (let n = 1; n <= totalPages; n++) {
      const start = (n - 1) * PER_PAGE;
      pages.push({
        lang,
        pageNum:    n,
        totalPages,
        posts:      posts.slice(start, start + PER_PAGE),
        prevUrl:    n > 1          ? pageUrl(lang, n - 1) : null,
        nextUrl:    n < totalPages ? pageUrl(lang, n + 1) : null,
      });
    }
  }

  return pages;
};
