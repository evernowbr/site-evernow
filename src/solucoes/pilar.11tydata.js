module.exports = {
  eleventyComputed: {
    lang:           data => data.solution?.lang || 'pt',
    seoTitle: data => {
      if (!data.solution) return "Soluções de Cibersegurança | Evernow";
      if (data.solution.lang === 'en') return `${data.solution.titulo} | Cybersecurity Solution | Evernow`;
      return data.solution.titleTag || "Soluções de Cibersegurança | Evernow";
    },
    seoDescription: data => {
      if (data.solution?.lang === 'en') return data.solution?.en?.metaDescription || data.solution?.metaDescription || "";
      return data.solution?.metaDescription || "";
    },
    seoImage:       data => data.solution?.heroImage ? "https://evernow.com.br" + data.solution.heroImage : null,
    seoKeywords:    data => {
      if (!data.solution) return null;
      if (data.solution.lang === 'en') return `${data.solution.titulo}, cybersecurity, ${data.solution.titulo} brazil, information security, evernow`;
      return `${data.solution.titulo}, cibersegurança, ${data.solution.titulo} brasil, segurança da informação, evernow`;
    },
  }
};
