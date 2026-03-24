const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imageDir = path.join(process.cwd(), 'src/assets/image');

async function optimizeImages(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.lstatSync(fullPath).isDirectory()) {
      if (file !== 'uploads') { // Recursively optimize except if we want to skip uploads
          await optimizeImages(fullPath);
      }
      continue;
    }

    const ext = path.extname(file).toLowerCase();
    if (ext === '.png' || ext === '.jpg' || ext === '.jpeg') {
      console.log(`Optimizing ${file}...`);
      const tempPath = fullPath + '.tmp';
      try {
        let instance = sharp(fullPath);
        if (ext === '.png') {
          await instance.png({ palette: true, quality: 80 }).toFile(tempPath);
        } else {
          await instance.jpeg({ quality: 80, progressive: true }).toFile(tempPath);
        }
        
        const oldSize = fs.statSync(fullPath).size;
        const newSize = fs.statSync(tempPath).size;
        
        if (newSize < oldSize) {
          fs.renameSync(tempPath, fullPath);
          console.log(`  Saved ${((oldSize - newSize) / 1024).toFixed(2)} KB (${((1 - newSize / oldSize) * 100).toFixed(1)}%)`);
        } else {
          fs.unlinkSync(tempPath);
          console.log(`  No savings for ${file}`);
        }
      } catch (e) {
        console.error(`  Error optimizing ${file}: ${e.message}`);
        if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
      }
    }
  }
}

optimizeImages(imageDir).then(() => console.log('Optimization complete.'));
