module.exports = {
  eleventyComputed: {
    lang:           data => data.vendor?.lang || 'pt',
    langPtUrl:      data => data.vendor ? `/parceiros/${data.vendor.slug}/` : null,
    langEnUrl:      data => data.vendor ? `/en/partners/${data.vendor.slug}/` : null,
    seoTitle: data => {
      if (!data.vendor) return "Parceiros Certificados | Evernow";
      // Override per-vendor: vendor.seoTitle (or vendor.en.seoTitle when EN)
      const isEn = data.vendor.lang === 'en';
      const localized = isEn ? (data.vendor.en || {}) : data.vendor;
      if (localized.seoTitle) return localized.seoTitle;
      if (isEn) return `${data.vendor.nome} | ${data.vendor.categoria} | Evernow Partner`;
      return `${data.vendor.nome} | ${data.vendor.categoria} | Parceiro Evernow`;
    },
    seoDescription: data => {
      if (!data.vendor) return "";
      const isEn = data.vendor.lang === 'en';
      const localized = isEn ? (data.vendor.en || {}) : data.vendor;
      return localized.seoDescription || localized.heroSubtitle || data.vendor.heroSubtitle || "";
    },
    seoKeywords: data => {
      if (!data.vendor) return null;
      const isEn = data.vendor.lang === 'en';
      const localized = isEn ? (data.vendor.en || {}) : data.vendor;
      if (localized.seoKeywords) return localized.seoKeywords;
      return `${data.vendor.nome}, ${data.vendor.categoria}, ${data.vendor.pilarNome}, parceiro evernow, cibersegurança brasil`;
    },
  }
};
