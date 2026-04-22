const fs = require('fs');
const path = require('path');

module.exports = function() {
  const vendors = JSON.parse(fs.readFileSync(path.join(__dirname, 'vendors.json'), 'utf8'));
  return vendors.flatMap(v => ['pt', 'en'].map(lang => ({ ...v, lang })));
};
