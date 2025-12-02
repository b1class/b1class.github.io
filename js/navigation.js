/**
 * Navigation Module - Class Webpage
 * Handles sticky navigation, mobile menu, smooth scroll, and active link highlighting
 */

// DOM Elements
let header, navMenu, navToggle, navClose, navLinks;

/**
 * Initialize navigation module
 */
export function initNavigation() {
  // Get DOM elements
  header = document.getElementById('header');
  navMenu = document.getElementById('nav-menu');
  navToggle = document.getElementById('nav-toggle');
  navClose = document.getElementById('nav-close');
  navLinks = document.querySelectorAll('.nav__link');
  
  // Setup event listeners
  setupMobileMenu();
  setupSmoothScroll();
  setupActiveLink();
  setupStickyHeader();
}

/**
 * Toggle mobile menu visibility
 */
export function toggleMobileMenu() {
  navMenu.classList.toggle('show-menu');
  document.body.classList.toggle('no-scroll');
}

/**
 * Close mobile menu
 */
function closeMobileMenu() {
  navMenu.classList.remove('show-menu');
  document.body.classList.remove('no-scroll');
}

/**
 * Setup mobile menu toggle functionality
 */
function setupMobileMenu() {
  if (navToggle) {
    navToggle.addEventListener('click', toggleMobileMenu);
  }
  
  if (navClose) {
    navClose.addEventListener('click', closeMobileMenu);
  }
  
  // Close menu when clicking on a nav link
  navLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });
}

/**
 * Smooth scroll to section when clicking nav links
 * @param {string} sectionId - The ID of the section to scroll to
 */
export function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    const headerHeight = header ? header.offsetHeight : 0;
    const targetPosition = section.offsetTop - headerHeight;
    
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }
}

/**
 * Setup smooth scroll for navigation links
 */
function setupSmoothScroll() {
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      scrollToSection(targetId);
    });
  });
}

/**
 * Set active navigation link based on current section
 * @param {string} sectionId - The ID of the current section
 */
export function setActiveLink(sectionId) {
  navLinks.forEach(link => {
    link.classList.remove('active');
    const href = link.getAttribute('href').substring(1);
    if (href === sectionId) {
      link.classList.add('active');
    }
  });
}

/**
 * Setup active link highlighting using Intersection Observer
 */
function setupActiveLink() {
  const sections = document.querySelectorAll('section[id]');
  
  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -80% 0px',
    threshold: 0
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setActiveLink(entry.target.id);
      }
    });
  }, observerOptions);
  
  sections.forEach(section => {
    observer.observe(section);
  });
}

/**
 * Setup sticky header with background change on scroll
 */
function setupStickyHeader() {
  const scrollThreshold = 50;
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > scrollThreshold) {
      header.classList.add('header--scrolled');
    } else {
      header.classList.remove('header--scrolled');
    }
  });
}

// Export for testing
export { closeMobileMenu, setupMobileMenu, setupSmoothScroll, setupActiveLink };
