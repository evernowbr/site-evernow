const path = require('path');
const enSlugs = require(path.join(__dirname, '../_data/enSlugs.js'));

module.exports = {
  eleventyComputed: {
    lang:           data => data.industry?.lang || 'pt',
    langPtUrl:      data => data.industry ? `/industrias/${data.industry.slug}/` : null,
    langEnUrl:      data => {
      if (!data.industry) return null;
      const enSlug = enSlugs.industries[data.industry.slug] || data.industry.slug;
      return `/en/industries/${enSlug}/`;
    },
    seoTitle: data => {
      if (!data.industry) return "Cibersegurança por Setor | Evernow";
      if (data.industry.lang === 'en') return `${data.industry.titulo} Cybersecurity | Compliance and Security | Evernow`;
      return data.industry.titleTag || "Cibersegurança por Setor | Evernow";
    },
    seoDescription: data => data.industry?.metaDescription || "",
    seoKeywords:    data => data.industry ? `cibersegurança ${data.industry.titulo}, segurança da informação ${data.industry.titulo}, evernow` : null,
  }
};
