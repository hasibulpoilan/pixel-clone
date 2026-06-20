export function initAnimations() {
  // Intersection Observer for scroll reveals (Tactile Brutalism "reveal" effect)
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const hiddenElements = document.querySelectorAll('.hidden-reveal');
  hiddenElements.forEach(el => revealObserver.observe(el));

  // Counter animation
  const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = +counter.getAttribute('data-target');
        const duration = 2000; // ms
        const increment = target / (duration / 16); // 60fps

        let current = 0;
        const updateCounter = () => {
          current += increment;
          if (current < target) {
            counter.innerText = Math.ceil(current) + (counter.getAttribute('data-suffix') || '');
            requestAnimationFrame(updateCounter);
          } else {
            counter.innerText = target + (counter.getAttribute('data-suffix') || '');
          }
        };

        updateCounter();
        observer.unobserve(counter);
      }
    });
  }, observerOptions);

  const counters = document.querySelectorAll('.counter-value');
  counters.forEach(c => counterObserver.observe(c));

  // Services Slider Logic
  const slideLeftBtn = document.getElementById('slideLeftBtn');
  const slideRightBtn = document.getElementById('slideRightBtn');
  const scrollWrapper = document.getElementById('servicesScrollWrapper');

  if (slideLeftBtn && slideRightBtn && scrollWrapper) {
    slideLeftBtn.addEventListener('click', () => {
      // scroll left by width of one card + gap approx
      scrollWrapper.scrollBy({ left: -380, behavior: 'smooth' });
    });

    slideRightBtn.addEventListener('click', () => {
      // scroll right by width of one card + gap approx
      scrollWrapper.scrollBy({ left: 380, behavior: 'smooth' });
    });
  }
}
