import fs from 'fs';

const htmlFiles = ['index.html', 'about.html', 'services.html', 'work.html', 'contact.html', 'portfolio.html'];
const icons = fs.readFileSync('src/partials/head-icons.html', 'utf8');

for (const file of htmlFiles) {
  if (!fs.existsSync(file)) continue;
  let html = fs.readFileSync(file, 'utf8');
  if (!html.includes('rel="icon"')) {
    html = html.replace(
      /<meta name="viewport" content="width=device-width, initial-scale=1.0" \/>\r?\n/,
      `<meta name="viewport" content="width=device-width, initial-scale=1.0" />\n${icons}`
    );
  }
  html = html.replaceAll('/work.html', '/portfolio.html');
  html = html.replaceAll('>Our Work<', '>Portfolio<');
  fs.writeFileSync(file, html);
}

const partials = ['src/partials/header.html', 'src/partials/footer.html'];
for (const file of partials) {
  let html = fs.readFileSync(file, 'utf8');
  html = html.replaceAll('/work.html', '/portfolio.html');
  html = html.replace('>Our Work<', '>Portfolio<');
  fs.writeFileSync(file, html);
}

console.log('Batch SEO updates applied');
