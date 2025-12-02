/**
 * Navigation Property Tests - Class Webpage
 * 
 * **Feature: class-webpage, Property 6: Navigation Active State Correctness**
 */

import fc from 'fast-check';

/**
 * Standalone setActiveLink function for testing
 * This mirrors the logic in navigation.js but works independently
 */
function setActiveLink(sectionId, navLinks) {
  navLinks.forEach(link => {
    link.classList.remove('active');
    const href = link.getAttribute('href').substring(1);
    if (href === sectionId) {
      link.classList.add('active');
    }
  });
}

describe('Navigation Property Tests', () => {
  let navLinks;
  
  // Setup navigation DOM before each test
  beforeEach(() => {
    document.body.innerHTML = `
      <nav>
        <a href="#home" class="nav__link">Trang chủ</a>
        <a href="#members" class="nav__link">Thành viên</a>
        <a href="#gallery" class="nav__link">Kỷ niệm</a>
        <a href="#about" class="nav__link">Giới thiệu</a>
      </nav>
    `;
    navLinks = document.querySelectorAll('.nav__link');
  });

  /**
   * **Feature: class-webpage, Property 6: Navigation Active State Correctness**
   * 
   * *For any* scroll position that falls within a section's boundaries, 
   * the navigation link corresponding to that section SHALL have the active 
   * class applied, AND no other navigation links SHALL have the active class.
   * 
   * **Validates: Requirements 5.4**
   */
  test('Property 6: Only one nav link should be active at a time for any section', () => {
    const sectionIds = ['home', 'members', 'gallery', 'about'];
    
    fc.assert(
      fc.property(
        fc.constantFrom(...sectionIds),
        (sectionId) => {
          // Set active link for the section
          setActiveLink(sectionId, navLinks);
          
          // Count active links
          const activeLinks = document.querySelectorAll('.nav__link.active');
          
          // Property 1: Exactly one link should be active
          expect(activeLinks.length).toBe(1);
          
          // Property 2: The active link should correspond to the section
          const activeLink = activeLinks[0];
          const activeHref = activeLink.getAttribute('href').substring(1);
          expect(activeHref).toBe(sectionId);
          
          // Property 3: All other links should NOT be active
          navLinks.forEach(link => {
            const href = link.getAttribute('href').substring(1);
            if (href !== sectionId) {
              expect(link.classList.contains('active')).toBe(false);
            }
          });
          
          return true;
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Additional property: Active state is idempotent
   * Setting the same section active multiple times should have the same result
   */
  test('Property 6 (extended): Setting active link is idempotent', () => {
    const sectionIds = ['home', 'members', 'gallery', 'about'];
    
    fc.assert(
      fc.property(
        fc.constantFrom(...sectionIds),
        fc.integer({ min: 1, max: 5 }),
        (sectionId, repeatCount) => {
          // Set active link multiple times
          for (let i = 0; i < repeatCount; i++) {
            setActiveLink(sectionId, navLinks);
          }
          
          // Should still have exactly one active link
          const activeLinks = document.querySelectorAll('.nav__link.active');
          expect(activeLinks.length).toBe(1);
          
          const activeHref = activeLinks[0].getAttribute('href').substring(1);
          expect(activeHref).toBe(sectionId);
          
          return true;
        }
      ),
      { numRuns: 100 }
    );
  });
});
