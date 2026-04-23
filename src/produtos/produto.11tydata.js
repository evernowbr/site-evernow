const path = require('path');
const enSlugs = require(path.join(__dirname, '../_data/enSlugs.js'));

module.exports = {
  eleventyComputed: {
    lang:           data => data.product?.lang || 'pt',
    langPtUrl:      data => data.product ? `/produtos/${data.product.slug}/` : null,
    langEnUrl:      data => {
      if (!data.product) return null;
      const enSlug = enSlugs.products[data.product.slug] || data.product.slug;
      return `/en/products/${enSlug}/`;
    },
    seoTitle: data => {
      if (!data.product) return "Portfólio de Cibersegurança | Evernow";
      if (data.product.lang === 'en') return `${data.product.titulo} | Cybersecurity Service | Evernow`;
      return data.product.titleTag || "Portfólio de Cibersegurança | Evernow";
    },
    seoDescription: data => {
      if (data.product?.lang === 'en') return data.product?.en?.metaDescription || data.product?.metaDescription || "";
      return data.product?.metaDescription || "";
    },
    seoKeywords:    data => data.product ? `${data.product.titulo}, ${data.product.pilarNome}, ${data.product.categoria}, cibersegurança brasil, evernow` : null,
  }
};
