import './style.css';
import './src/css/layout.css';
import { initGlobalLayout } from './src/js/components.js';
import { initAnimations } from './src/js/animations.js';

document.addEventListener('DOMContentLoaded', () => {
  initGlobalLayout();
  initAnimations();
});
