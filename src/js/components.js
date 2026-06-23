// src/js/components.js

export function initGlobalLayout() {
  initHeaderScroll();
  initProposalModal();
  initFormHandling();
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

function initFormHandling() {
  const forms = document.querySelectorAll('form[action="https://api.web3forms.com/submit"]');
  forms.forEach(form => {
    form.addEventListener('submit', async function(e) {
      e.preventDefault();
      const formData = new FormData(form);
      const submitBtn = form.querySelector('button[type="submit"]') || form.querySelector('button');
      const originalText = submitBtn ? submitBtn.textContent : 'Submit';
      
      if (submitBtn) {
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
      }

      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData
        });
        const data = await response.json();
        
        if (data.success) {
          // Construct WhatsApp Message
          const name = formData.get('name') || 'there';
          const service = formData.get('service');
          const subject = formData.get('subject');
          
          let waText = `Hi Pixel Solution! My name is ${name}.`;
          if (service) {
            waText += ` I am interested in ${service}.`;
          } else if (subject) {
            waText += ` I am reaching out regarding: ${subject}.`;
          } else {
            waText += ` I would like to discuss a project with you.`;
          }
          
          const waUrl = `https://wa.me/918240017974?text=${encodeURIComponent(waText)}`;
          
          form.reset();
          
          // Redirect to WhatsApp
          window.location.href = waUrl;
          
        } else {
          alert('❌ Something went wrong. Please try again.');
        }
      } catch (error) {
        alert('❌ Something went wrong. Please check your internet connection and try again.');
      } finally {
        if (submitBtn) {
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
        }
        
        // Close modal if it's the modal form
        const modal = form.closest('.modal-overlay');
        if (modal) {
          modal.classList.remove('active');
          document.body.style.overflow = '';
        }
      }
    });
  });
}
