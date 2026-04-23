const fs = require('fs');
const path = require('path');

module.exports = function() {
  const products = JSON.parse(fs.readFileSync(path.join(__dirname, 'products.json'), 'utf8'));
  return products.flatMap(p => ['pt', 'en'].map(lang => ({ ...p, lang })));
};
