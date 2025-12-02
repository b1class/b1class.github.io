/**
 * Jest Setup File - Class Webpage Tests
 */

// Setup DOM environment for tests
beforeEach(() => {
  // Reset document body before each test
  document.body.innerHTML = '';
});

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor(callback) {
    this.callback = callback;
  }
  observe() { return null; }
  unobserve() { return null; }
  disconnect() { return null; }
};

// Mock scrollTo
window.scrollTo = () => {};
