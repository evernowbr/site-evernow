// Lookup plano { slug → card data (icon, titulo, tagline, features) }
// gerado a partir dos arrays `produtos` dentro de solutions.json.
// Usado nas páginas de produto para exibir "Serviços complementares" sem
// depender de selectattr sobre o array paginado.

const solutions = require("./solutions.json");

module.exports = solutions.reduce((acc, solution) => {
  (solution.produtos || []).forEach((prod) => {
    acc[prod.slug] = {
      slug:     prod.slug,
      titulo:   prod.titulo,
      icon:     prod.icon     || "fas fa-shield-alt",
      tagline:  prod.tagline  || "",
      features: prod.features || [],
      pilar:    solution.slug,
    };
  });
  return acc;
}, {});
