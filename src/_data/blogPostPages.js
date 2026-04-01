'use strict';

const getBlogPosts = require('./blogPosts.js');

// Returns the cross-product of posts × locales so Eleventy can paginate
// over it and generate /blog/[slug].html (pt) and /en/blog/[slug].html (en).
module.exports = async function getBlogPostPages() {
  const posts = await getBlogPosts();
  const locales = ['pt', 'en'];
  return posts.flatMap(post =>
    locales.map(lang => ({ ...post, lang }))
  );
};
