import fs from 'fs';

const pages = {
  'index.html': {
    description: "Pixel Solution — India's web design & software development agency. Custom websites, apps and digital solutions that drive leads and revenue.",
    canonical: 'https://pixelsolution.in/',
  },
  'about.html': {
    description: 'Meet Pixel Solution — a Kolkata web design and software team helping Indian businesses scale with strategy, design and development.',
    canonical: 'https://pixelsolution.in/about.html',
  },
  'services.html': {
    description: 'Web design, software development, SEO, ads and AI solutions by Pixel Solution. End-to-end digital services for Indian businesses.',
    canonical: 'https://pixelsolution.in/services.html',
  },
  'portfolio.html': {
    description: 'Pixel Solution portfolio — web design and software projects with real ROI for e-commerce, B2B and SaaS clients in India.',
    canonical: 'https://pixelsolution.in/portfolio.html',
  },
  'contact.html': {
    description: 'Contact Pixel Solution for a free strategy call. Web design & software agency in Kolkata, India. Call +91 8240017974.',
    canonical: 'https://pixelsolution.in/contact.html',
  },
};

for (const [file, { description, canonical }] of Object.entries(pages)) {
  let html = fs.readFileSync(file, 'utf8');

  html = html.replace(
    /<meta name="description" content="[^"]*" \/>/,
    `<meta name="description" content="${description}" />`
  );

  if (!html.includes('rel="canonical"')) {
    html = html.replace(
      /<meta name="description" content="[^"]*" \/>/,
      `<meta name="description" content="${description}" />\n    <link rel="canonical" href="${canonical}" />`
    );
  } else {
    html = html.replace(
      /<link rel="canonical" href="[^"]*" \/>/,
      `<link rel="canonical" href="${canonical}" />`
    );
  }

  html = html.replace(
    '<a href="/contact.html" class="btn btn-accent">Book a Free Strategy Call</a>',
    '<a href="/contact.html" class="btn btn-accent">Schedule a Call</a>'
  );

  html = html.replace(
    `<div class="link-group">
            <h3>Company</h3>
            <a href="/about.html">About Us</a>
            <a href="/portfolio.html">Case Studies</a>
            <a href="/contact.html">Contact</a>`,
    `<div class="link-group">
            <h3>Company</h3>
            <a href="/about.html">Our Story</a>
            <a href="/portfolio.html">Case Studies</a>
            <a href="/contact.html">Get in Touch</a>`
  );

  fs.writeFileSync(file, html);
  console.log('Updated', file);
}

let footer = fs.readFileSync('src/partials/footer.html', 'utf8');
footer = footer.replace(
  '<a href="/contact.html" class="btn btn-accent">Book a Free Strategy Call</a>',
  '<a href="/contact.html" class="btn btn-accent">Schedule a Call</a>'
);
footer = footer.replace(
  `<div class="link-group">
            <h3>Company</h3>
            <a href="/about.html">About Us</a>
            <a href="/portfolio.html">Case Studies</a>
            <a href="/contact.html">Contact</a>`,
  `<div class="link-group">
            <h3>Company</h3>
            <a href="/about.html">Our Story</a>
            <a href="/portfolio.html">Case Studies</a>
            <a href="/contact.html">Get in Touch</a>`
);
fs.writeFileSync('src/partials/footer.html', footer);
console.log('Updated src/partials/footer.html');
