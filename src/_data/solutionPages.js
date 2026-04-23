const fs = require('fs');
const path = require('path');

module.exports = function() {
  const solutions = JSON.parse(fs.readFileSync(path.join(__dirname, 'solutions.json'), 'utf8'));
  return solutions.flatMap(s => ['pt', 'en'].map(lang => ({ ...s, lang })));
};
