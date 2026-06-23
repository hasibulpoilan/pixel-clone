import fs from 'fs';

const files = ['index.html', 'about.html', 'services.html', 'portfolio.html', 'work.html', 'contact.html'];
const header = fs.readFileSync('src/partials/header.html', 'utf8');
const footer = fs.readFileSync('src/partials/footer.html', 'utf8');

for (const file of files) {
  let html = fs.readFileSync(file, 'utf8');
  if (html.includes('global-header')) {
    console.log('skip', file);
    continue;
  }
  html = html.replace(/<body>\r?\n/, `<body>\n${header}\n`);
  html = html.replace(
    /\r?\n\s*<\/main>\r?\n(?:\s*<!--[\s\S]*?-->\r?\n)?\s*<script type="module"/,
    `\n    </main>\n\n${footer}\n    <script type="module"`
  );
  fs.writeFileSync(file, html);
  console.log('updated', file);
}
