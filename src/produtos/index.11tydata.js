module.exports = {
  eleventyComputed: {
    langPtUrl: data => '/produtos/',
    langEnUrl: data => '/en/products/',
    seoTitle: data => data.lang === 'en'
      ? "Cybersecurity Portfolio | 26 Services | Evernow"
      : "Portfólio de Cibersegurança | 26 Serviços | Evernow",
    seoDescription: data => data.lang === 'en'
      ? "Explore Evernow's full portfolio: 26 cybersecurity services organized in four pillars — Secure Code, Data Shield, Assurance, and Managed Ops."
      : "Conheça todo o portfólio da Evernow: 26 serviços e produtos de cibersegurança organizados em quatro pilares, Secure Code, Data Shield, Assurance e Managed Ops."
  }
};
