module.exports = {
  eleventyComputed: {
    lang:           data => data.vendor?.lang || 'pt',
    langPtUrl:      data => data.vendor ? `/parceiros/${data.vendor.slug}/` : null,
    langEnUrl:      data => data.vendor ? `/en/partners/${data.vendor.slug}/` : null,
    seoTitle: data => {
      if (!data.vendor) return "Parceiros Certificados | Evernow";
      if (data.vendor.lang === 'en') return `${data.vendor.nome} | ${data.vendor.categoria} | Evernow Partner`;
      return `${data.vendor.nome} | ${data.vendor.categoria} | Parceiro Evernow`;
    },
    seoDescription: data => data.vendor?.heroSubtitle || "",
    seoKeywords:    data => data.vendor ? `${data.vendor.nome}, ${data.vendor.categoria}, ${data.vendor.pilarNome}, parceiro evernow, cibersegurança brasil` : null,
  }
};
