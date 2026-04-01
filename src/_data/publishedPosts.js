'use strict';

const getBlogPosts = require('./blogPosts.js');

// Returns only posts whose date is on or before today (build time).
// Used by: blog listing, post sidebar, home strip.
// blogPostPages.js still uses getBlogPosts() (all posts) so every post URL is pre-built.
module.exports = async function getPublishedPosts() {
  const today = new Date();
  today.setHours(23, 59, 59, 999);

  const posts = await getBlogPosts();
  return posts.filter(p => new Date(p.date) <= today);
};
