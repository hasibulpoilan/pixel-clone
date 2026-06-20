// src/js/components.js

export function createHeader() {
  return `
    <header class="global-header glass">
      <div class="container header-container">
        <a href="/" class="brand" style="text-decoration: none; display: flex; align-items: center;">
          <!-- <span class="brand-text" style="font-family: var(--font-heading); font-weight: 800; font-size: 1.5rem; letter-spacing: -0.5px; color: var(--color-text);">PIXEL <span class="text-gradient" style="background: linear-gradient(135deg, var(--color-primary), var(--color-accent)); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">SOLUTION</span></span> -->
          <img src="/logo.png" alt="Pixel Solution Logo" class="brand-logo" />
        </a>
        <nav class="main-nav">
          <a href="/">Home</a>
          <a href="/services.html">Services</a>
          <a href="/work.html">Our Work</a>
          <a href="/about.html">About Us</a>
          <a href="/contact.html">Contact</a>
          <a href="#" class="btn btn-primary btn-sm proposal-btn">Get a Proposal</a>
        </nav>
        <button class="mobile-menu-toggle" aria-label="Toggle Menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  `;
}

export function createFooter() {
  return `
    <footer class="global-footer">
      <div class="container footer-container">
        <div class="footer-brand">
          <!-- <span class="brand-text mb-2" style="font-family: var(--font-heading); font-weight: 800; font-size: 2rem; letter-spacing: -0.5px; color: white; display: block;">PIXEL <span class="text-gradient" style="background: linear-gradient(135deg, var(--color-primary), var(--color-accent)); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">SOLUTION</span></span> -->
          <img src="/logo.png" alt="Pixel Solution Logo" class="footer-logo mb-2" />
          <h2 class="mb-2" style="color: #fff;">Ready to scale?</h2>
          <p class="mb-3 text-muted">Join 100+ Indian businesses growing their revenue with Pixel Solution.</p>
          <a href="/contact.html" class="btn btn-accent">Book a Free Strategy Call</a>
        </div>
        <div class="footer-links">
          <div class="link-group">
            <h3>Company</h3>
            <a href="/about.html">About Us</a>
            <a href="/work.html">Case Studies</a>
            <a href="/contact.html">Contact</a>
          </div>
          <div class="link-group">
            <h3>Our Services</h3>
            <a href="/services.html">Website Development</a>
            <a href="/services.html">App Development</a>
            <a href="/services.html">CRM & SaaS</a>
            <a href="/services.html">Live Calling AI Agents</a>
            <a href="/services.html">SEO & Google Ads</a>
            <a href="/services.html">Meta & LinkedIn Ads</a>
            <a href="/services.html">Brand Design</a>
          </div>
          <div class="link-group">
            <h3>Follow Us</h3>
            <div class="social-links">
              <a href="https://www.instagram.com/pixelsolutiondigitalmarketing/" target="_blank" aria-label="Instagram"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></a>
              <a href="https://www.facebook.com/profile.php?id=61557723166922" target="_blank" aria-label="Facebook"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg></a>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; ${new Date().getFullYear()} Pixel Solution. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `;
}

export function createWhatsAppButton() {
  return `
    <a href="https://wa.me/919999999999" class="fab-whatsapp" target="_blank" aria-label="Chat on WhatsApp">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="#ffffff"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.888-4.435 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.876 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
    </a>
  `;
}

export function createProposalModal() {
  return `
    <div class="modal-overlay" id="proposalModal">
      <div class="modal-content glass">
        <button class="close-modal-btn" aria-label="Close modal">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
        </button>
        <div class="modal-header">
          <h2 class="mb-1">Start Your Project</h2>
          <p class="text-muted">Fill out the form below and we'll get back to you within 24 hours.</p>
        </div>
        <form class="modal-form" action="#" method="POST">
          <div class="form-group">
            <label class="form-label">Name</label>
            <input type="text" class="form-control" placeholder="Jane Doe" required>
          </div>
          <div class="form-group">
            <label class="form-label">Email</label>
            <input type="email" class="form-control" placeholder="jane@company.com" required>
          </div>
          <div class="form-group">
            <label class="form-label">Phone</label>
            <input type="tel" class="form-control" placeholder="+91 00000 00000">
          </div>
          <div class="form-group">
            <label class="form-label">Project Details</label>
            <textarea class="form-control" placeholder="What are you looking to build?" rows="3" required></textarea>
          </div>
          <button type="submit" class="btn btn-primary" style="width:100%;">Submit Proposal</button>
        </form>
      </div>
    </div>
  `;
}

export function injectGlobalLayout() {
  const body = document.body;
  
  // Insert Header
  body.insertAdjacentHTML('afterbegin', createHeader());
  
  // Insert Footer
  body.insertAdjacentHTML('beforeend', createFooter());
  
  // Insert WhatsApp FAB
  body.insertAdjacentHTML('beforeend', createWhatsAppButton());

  // Insert Proposal Modal
  body.insertAdjacentHTML('beforeend', createProposalModal());

  // Init Header shrinking effect
  initHeaderScroll();

  // Init Proposal Modal
  initProposalModal();
}

function initProposalModal() {
  const modal = document.getElementById('proposalModal');
  const proposalBtns = document.querySelectorAll('.proposal-btn');
  const closeBtn = document.querySelector('.close-modal-btn');

  if (!modal) return;

  // Open modal
  proposalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modal.classList.add('active');
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    });
  });

  // Close modal on button click
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  // Close modal on outside click
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
}

function initHeaderScroll() {
  const header = document.querySelector('.global-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('header-shrunk');
    } else {
      header.classList.remove('header-shrunk');
    }
  });
}
