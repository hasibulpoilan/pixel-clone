import './style.css';
import './src/css/layout.css';
import { injectGlobalLayout } from './src/js/components.js';
import { initAnimations } from './src/js/animations.js';

// Inject Header, Footer, and WhatsApp FAB
document.addEventListener('DOMContentLoaded', () => {
  injectGlobalLayout();
  initAnimations();
});
