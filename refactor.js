const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src', 'pt');
const files = fs.readdirSync(srcDir).filter(f => f.endsWith('.njk') && !f.includes('copy'));

files.forEach(file => {
  const filePath = path.join(srcDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Extract Title
  let title = "Evernow | Cibersegurança, IA e Automação para Empresas";
  const titleMatch = content.match(/<title>(.*?)<\/title>/i);
  if (titleMatch) title = titleMatch[1].trim();

  // Extract Banner HTML
  let bannerHTML = "";
  // Some files have explicit <!--banner-start--> and <!--banner-end-->
  const explicitBanner = content.match(/<!--banner-start-->([\s\S]*?)<!--banner-end-->/);
  if (explicitBanner) {
      bannerHTML = explicitBanner[1].trim();
  } else {
      // Find the first section with banner-main-con
      const sectionMatch = content.match(/<section class="[^\"]*banner-main-con[^\"]*"[^>]*>([\s\S]*?)<\/section>/i);
      if (sectionMatch) {
          bannerHTML = sectionMatch[0].trim();
      }
  }

  // Exclude banner from the content body search
  let mainContent = "";
  let afterHeaderSplit = content.split("<!---header-and-banner-section-->");
  let bodyContent = afterHeaderSplit.length > 1 ? afterHeaderSplit[1] : content;
  
  // Find Footer boundary
  // Some use <!-- weight-footer-section -->
  // Others have <div class="weight-footer-main-con bg-overly-img">
  let footerIndex = bodyContent.indexOf("<!-- weight-footer-section -->");
  if (footerIndex === -1) {
      footerIndex = bodyContent.indexOf('<div class="weight-footer-main-con');
      // step back to its parent section if possible
      let sectionBefore = bodyContent.lastIndexOf("<section>", footerIndex);
      if (sectionBefore !== -1 && sectionBefore > footerIndex - 100) {
          footerIndex = sectionBefore;
      }
  }

  if (footerIndex !== -1) {
      mainContent = bodyContent.substring(0, footerIndex).trim();
  } else {
      mainContent = bodyContent.trim();
  }

  // Remove trailing scripts
  mainContent = mainContent.replace(/<script src="assets\/js\/wow\.js">[\s\S]*/, '').trim();

  let replacement = `---
layout: layouts/base.njk
title: "${title}"
---
`;

  if (bannerHTML) {
      replacement += `{% set content_banner %}
${bannerHTML}
{% endset %}

`;
  }

  replacement += mainContent + '\n';
  
  // Cleanup absolute asset paths if needed (currently assets/ -> /assets/)
  replacement = replacement.replace(/(src|href)="assets\//g, '$1="/assets/');
  replacement = replacement.replace(/(src|href)="([^"]+)\.html"/g, '$1="/$2.html"');

  fs.writeFileSync(filePath, replacement);
  console.log(`Refactored ${file}`);
});
