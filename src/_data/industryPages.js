const fs = require('fs');
const path = require('path');

module.exports = function() {
  const industries = JSON.parse(fs.readFileSync(path.join(__dirname, 'industries.json'), 'utf8'));
  return industries.flatMap(i => ['pt', 'en'].map(lang => ({ ...i, lang })));
};
