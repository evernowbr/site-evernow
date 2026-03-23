const { EleventyI18nPlugin } = require("@11ty/eleventy");
const path = require("path");

module.exports = function (eleventyConfig) {
  // Configuro a cópia estática dos assets
  eleventyConfig.addPassthroughCopy("src/assets");

  // Habilita o plugin i18n
  eleventyConfig.addPlugin(EleventyI18nPlugin, {
    defaultLanguage: "pt",
    errorMode: "allow-fallback"
  });

  // Função central de tradução
  const translate = function (key) {
    const lang = this.ctx?.lang || this.page?.lang || "pt";
    let translations = {};
    try {
      translations = require(path.resolve(`./src/_data/i18n/${lang}.json`));
    } catch (e) {
      try {
        translations = require(path.resolve(`./src/_data/i18n/pt.json`));
      } catch (_) {}
    }
    const value = key.split(".").reduce((obj, k) => (obj && obj[k] !== undefined ? obj[k] : null), translations);
    return value !== null ? value : key;
  };

  eleventyConfig.addShortcode("t", translate);
  eleventyConfig.addFilter("t", translate);

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["html", "njk", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
