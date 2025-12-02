/**
 * Main Entry Point - Class Webpage
 * Initializes all modules and handles page load
 */

// Import modules (using ES6 modules)
import { initNavigation } from './navigation.js';
import { initMembers } from './members.js';
import { initGallery } from './gallery.js';
import { initAnimations } from './animations.js';

/**
 * Initialize all page components
 */
function initApp() {
  // Initialize navigation
  initNavigation();
  
  // Initialize members section
  initMembers();
  
  // Initialize gallery section
  initGallery();
  
  // Initialize scroll animations
  initAnimations();
  
  console.log('Class Webpage initialized successfully!');
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initApp);
