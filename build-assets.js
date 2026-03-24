const esbuild = require('esbuild');
const fs = require('fs');
const path = require('path');

const srcDir = path.join(process.cwd(), 'src/assets');

// JS Bundling
const jsFiles = [
  'js/jquery-3.6.0.min.js',
  'js/popper.min.js',
  'js/bootstrap.min.js',
  'js/wow.js'
].map(f => path.join(srcDir, f)).filter(f => fs.existsSync(f));

console.log('Bundling JS...');
const jsCombined = '/tmp/combined.js';
fs.writeFileSync(jsCombined, jsFiles.map(f => fs.readFileSync(f, 'utf8')).join('\n'));

esbuild.buildSync({
  entryPoints: [jsCombined],
  bundle: false,
  minify: true,
  outfile: path.join(srcDir, 'js/main.min.js'),
  sourcemap: false,
  target: ['es2015'],
});
console.log('JS bundled to', path.join(srcDir, 'js/main.min.js'));

// CSS Bundling (using esbuild for CSS too!)
const cssFiles = [
  'css/animate.css',
  'bootstrap/bootstrap.min.css',
  'css/super-classes.css',
  'css/style.css',
  'css/mobile.css',
  'css/custom-style.css'
].map(f => path.join(srcDir, f)).filter(f => fs.existsSync(f));

console.log('Bundling CSS...');
// For CSS, we create a temporary entry point that imports all files
const cssEntry = '/tmp/entry.css';
const cssContent = cssFiles.map(f => `@import "${f}";`).join('\n');
fs.writeFileSync(cssEntry, cssContent);

esbuild.buildSync({
  entryPoints: [cssEntry],
  bundle: true,
  minify: true,
  outfile: path.join(srcDir, 'css/main.min.css'),
  loader: {
    '.png': 'file',
    '.jpg': 'file',
    '.svg': 'file',
    '.gif': 'file',
    '.woff': 'file',
    '.woff2': 'file',
    '.ttf': 'file',
    '.eot': 'file',
  },
  external: ['*.woff', '*.woff2', '*.ttf', '*.eot'], // Don't try to bundle fonts if relative
});
console.log('CSS bundled to', path.join(srcDir, 'css/main.min.css'));
