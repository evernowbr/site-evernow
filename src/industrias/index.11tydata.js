module.exports = {
  eleventyComputed: {
    langPtUrl: data => '/industrias/',
    langEnUrl: data => '/en/industries/',
    seoTitle: data => data.lang === 'en'
      ? "Cybersecurity by Industry | Financial, Healthcare and Tech | Evernow"
      : "Cibersegurança por Setor | Financeiro, Saúde e Tech | Evernow",
    seoDescription: data => data.lang === 'en'
      ? "Specialized cybersecurity solutions for financial, healthcare, retail, technology, and government. Evernow understands the threats and regulations of each sector."
      : "Soluções de cibersegurança especializadas para financeiro, saúde, varejo, tecnologia e governo. A Evernow entende as ameaças e regulações de cada setor."
  }
};
