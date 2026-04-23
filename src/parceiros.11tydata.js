module.exports = {
  eleventyComputed: {
    seoTitle: data => data.lang === 'en'
      ? "Certified Cybersecurity Partners | Evernow"
      : "Parceiros Certificados de Cibersegurança | Evernow",
    seoDescription: data => data.lang === 'en'
      ? "Evernow is a certified partner of the leading cybersecurity platforms. Implementation, POC, training, and managed operations — from licensing to delivery."
      : "A Evernow é parceira certificada das principais plataformas de cibersegurança do mercado. Implementação, POC, treinamento e operação gerenciada, do licenciamento à entrega."
  }
};
