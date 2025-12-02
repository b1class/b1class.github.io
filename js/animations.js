/**
 * Animations Module - Class Webpage
 * Handles scroll-triggered animations using Intersection Observer
 */

// Observer instance
let scrollObserver;

/**
 * Initialize animations module
 */
export function initAnimations() {
  // Check for Intersection Observer support
  if (!('IntersectionObserver' in window)) {
    // Fallback: show all elements immediately
    showAllElements();
    return;
  }
  
  setupScrollObserver();
  observeElements();
}

/**
 * Setup Intersection Observer for scroll animations
 */
function setupScrollObserver() {
  const options = {
    root: null,
    rootMargin: '0px 0px -10% 0px',
    threshold: 0.1
  };
  
  scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateElement(entry.target);
        // Unobserve after animation to improve performance
        scrollObserver.unobserve(entry.target);
      }
    });
  }, options);
}

/**
 * Observe elements that should animate on scroll
 */
export function observeElements() {
  // Observe scroll-animate elements
  const scrollAnimateElements = document.querySelectorAll('.scroll-animate');
  scrollAnimateElements.forEach(el => {
    scrollObserver.observe(el);
  });
  
  // Observe stagger items with delay
  const staggerItems = document.querySelectorAll('.stagger-item');
  staggerItems.forEach(el => {
    scrollObserver.observe(el);
  });
}

/**
 * Apply animation class to element
 * @param {HTMLElement} element - Element to animate
 */
export function animateElement(element) {
  element.classList.add('visible');
}

/**
 * Fallback: Show all elements immediately (for browsers without IO support)
 */
function showAllElements() {
  const elements = document.querySelectorAll('.scroll-animate, .stagger-item');
  elements.forEach(el => {
    el.classList.add('visible');
  });
}

/**
 * Re-observe new elements (useful after dynamic content is added)
 */
export function refreshObserver() {
  if (scrollObserver) {
    observeElements();
  }
}

// Export for testing
export { scrollObserver, setupScrollObserver };
