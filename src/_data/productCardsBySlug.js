// Lookup map { slug → card data (icon, titulo, tagline, features) }
// Built from the `produtos` arrays inside solutions.json.
// Includes `en` sub-object when EN data is available.

const solutions = require("./solutions.json");

module.exports = solutions.reduce((acc, solution) => {
  // Build EN slug→card lookup from solution.en.produtos
  const enBySlug = {};
  (solution.en?.produtos || []).forEach((p) => {
    enBySlug[p.slug] = p;
  });

  (solution.produtos || []).forEach((prod) => {
    const enProd = enBySlug[prod.slug];
    acc[prod.slug] = {
      slug:     prod.slug,
      titulo:   prod.titulo,
      icon:     prod.icon     || "fas fa-shield-alt",
      tagline:  prod.tagline  || "",
      features: prod.features || [],
      pilar:    solution.slug,
      en: enProd ? {
        titulo:   enProd.titulo  || prod.titulo,
        tagline:  enProd.tagline || prod.tagline || "",
        features: enProd.features || prod.features || [],
      } : null,
    };
  });
  return acc;
}, {});
