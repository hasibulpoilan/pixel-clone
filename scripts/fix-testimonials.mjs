import fs from 'fs';

let html = fs.readFileSync('index.html', 'utf8');

html = html.replace(
  /\s*<!-- Duplicates for seamless infinite scrolling -->[\s\S]*?(?=\n            <\/div>\n          <\/div>\n        <\/div>\n      <\/section>)/,
  ''
);

html = html.replace(/<strong>/g, '<span class="client-name">');
html = html.replace(/<\/strong>/g, '</span>');

fs.writeFileSync('index.html', html);
console.log('Removed duplicates and updated client names');
