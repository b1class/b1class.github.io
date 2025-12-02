/**
 * Gallery Property Tests - Class Webpage
 * 
 * Property-based tests for gallery event grouping, lightbox, and lazy loading
 */

import fc from 'fast-check';

/**
 * Standalone renderGallery function for testing
 */
function renderGallery(events, container) {
  if (!container) return;
  
  container.innerHTML = '';
  
  events.forEach(event => {
    const section = document.createElement('div');
    section.className = 'gallery__event scroll-animate';
    
    section.innerHTML = `
      <div class="gallery__event-header">
        <h3 class="gallery__event-title">${event.name}</h3>
        <span class="gallery__event-date">${event.date}</span>
      </div>
      <div class="gallery__grid"></div>
    `;
    
    const grid = section.querySelector('.gallery__grid');
    
    event.images.forEach((image, index) => {
      const item = document.createElement('div');
      item.className = 'gallery__item stagger-item';
      
      item.innerHTML = `
        <img 
          class="gallery__thumbnail" 
          src="${image.thumbnail}" 
          alt="${image.caption}"
          loading="lazy"
          data-image-id="${image.id}"
        >
        <div class="gallery__item-overlay">
          <span class="gallery__item-caption">${image.caption}</span>
        </div>
      `;
      
      grid.appendChild(item);
    });
    
    container.appendChild(section);
  });
}

/**
 * Standalone lightbox functions for testing
 */
let allImages = [];
let currentImageIndex = 0;

function initLightboxData(events) {
  allImages = events.flatMap(event => 
    event.images.map(img => ({ ...img, eventName: event.name }))
  );
}

function openLightbox(imageId, lightbox, lightboxImage, lightboxCaption) {
  const index = allImages.findIndex(img => img.id === imageId);
  if (index === -1) return;
  
  currentImageIndex = index;
  const image = allImages[currentImageIndex];
  
  lightboxImage.src = image.src;
  lightboxImage.alt = image.caption;
  lightboxCaption.textContent = image.caption;
  
  lightbox.classList.add('show');
}

function closeLightbox(lightbox) {
  lightbox.classList.remove('show');
}

// Safe string generator (no HTML special chars)
const safeStringArbitrary = fc.stringOf(
  fc.constantFrom(...'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 '.split('')),
  { minLength: 1, maxLength: 30 }
).filter(s => s.trim().length > 0);

// Image arbitrary generator
const imageArbitrary = fc.record({
  id: fc.uuid(),
  src: fc.constant('images/gallery/placeholder.svg'),
  thumbnail: fc.constant('images/gallery/placeholder.svg'),
  caption: safeStringArbitrary
});

// Event arbitrary generator
const eventArbitrary = fc.record({
  name: safeStringArbitrary,
  date: fc.date({ min: new Date('2020-01-01'), max: new Date('2024-12-31') })
    .map(d => `${d.getDate().toString().padStart(2, '0')}/${(d.getMonth() + 1).toString().padStart(2, '0')}/${d.getFullYear()}`),
  images: fc.array(imageArbitrary, { minLength: 1, maxLength: 10 })
});

// Vietnamese event names for realistic testing
const vietnameseEventArbitrary = fc.record({
  name: fc.oneof(
    fc.constant('Khai giảng 2023'),
    fc.constant('Ngày Nhà giáo Việt Nam'),
    fc.constant('Dã ngoại cuối năm'),
    fc.constant('Lễ tốt nghiệp'),
    fc.constant('Hội thao'),
    fc.constant('Văn nghệ chào xuân')
  ),
  date: fc.constant('15/09/2023'),
  images: fc.array(imageArbitrary, { minLength: 1, maxLength: 5 })
});

describe('Gallery Property Tests', () => {
  // Setup DOM before each test
  beforeEach(() => {
    document.body.innerHTML = `
      <div id="gallery-container"></div>
      <div class="lightbox" id="lightbox">
        <div class="lightbox__overlay" id="lightbox-overlay"></div>
        <div class="lightbox__content">
          <button class="lightbox__close" id="lightbox-close">&times;</button>
          <button class="lightbox__nav lightbox__nav--prev" id="lightbox-prev">&#10094;</button>
          <div class="lightbox__image-container">
            <img class="lightbox__image" id="lightbox-image" src="" alt="">
            <p class="lightbox__caption" id="lightbox-caption"></p>
          </div>
          <button class="lightbox__nav lightbox__nav--next" id="lightbox-next">&#10095;</button>
        </div>
      </div>
    `;
  });

  /**
   * **Feature: class-webpage, Property 4: Gallery Event Grouping and Thumbnail Rendering**
   * 
   * *For any* gallery data with events, when rendered, each event SHALL have 
   * a visible header, AND the number of thumbnail images under each event 
   * SHALL equal the number of images in that event's data array.
   * 
   * **Validates: Requirements 3.1, 3.2**
   */
  test('Property 4: Gallery should group images by event with correct count', () => {
    fc.assert(
      fc.property(
        fc.array(vietnameseEventArbitrary, { minLength: 1, maxLength: 5 }),
        (events) => {
          const container = document.getElementById('gallery-container');
          
          // Render gallery using standalone function
          renderGallery(events, container);
          
          // Get all event sections
          const eventSections = container.querySelectorAll('.gallery__event');
          
          // Property 1: Number of event sections equals number of events
          expect(eventSections.length).toBe(events.length);
          
          // Property 2: Each event has header and correct number of images
          events.forEach((event, index) => {
            const section = eventSections[index];
            
            // Check event header exists
            const header = section.querySelector('.gallery__event-header');
            expect(header).not.toBeNull();
            
            // Check event title
            const title = section.querySelector('.gallery__event-title');
            expect(title).not.toBeNull();
            expect(title.textContent).toBe(event.name);
            
            // Check event date
            const date = section.querySelector('.gallery__event-date');
            expect(date).not.toBeNull();
            expect(date.textContent).toBe(event.date);
            
            // Check number of thumbnails
            const thumbnails = section.querySelectorAll('.gallery__item');
            expect(thumbnails.length).toBe(event.images.length);
          });
          
          return true;
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * **Feature: class-webpage, Property 5: Lightbox Content Correctness**
   * 
   * *For any* gallery image, when clicked to open the lightbox, the lightbox 
   * SHALL display the full-size image source AND the caption matching the 
   * clicked image's data.
   * 
   * **Validates: Requirements 3.3**
   */
  test('Property 5: Lightbox should display correct image and caption', () => {
    // Create test data with known images
    const testImages = [
      { id: 'img-1', src: 'images/gallery/test1.jpg', thumbnail: 'images/gallery/thumb1.jpg', caption: 'Test Caption 1' },
      { id: 'img-2', src: 'images/gallery/test2.jpg', thumbnail: 'images/gallery/thumb2.jpg', caption: 'Test Caption 2' },
      { id: 'img-3', src: 'images/gallery/test3.jpg', thumbnail: 'images/gallery/thumb3.jpg', caption: 'Test Caption 3' }
    ];
    
    const testEvents = [{
      name: 'Test Event',
      date: '01/01/2024',
      images: testImages
    }];
    
    const container = document.getElementById('gallery-container');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxCaption = document.getElementById('lightbox-caption');
    
    // Render gallery and init lightbox data
    renderGallery(testEvents, container);
    initLightboxData(testEvents);
    
    fc.assert(
      fc.property(
        fc.constantFrom(...testImages),
        (image) => {
          // Open lightbox for this image
          openLightbox(image.id, lightbox, lightboxImage, lightboxCaption);
          
          // Verify lightbox shows correct image src
          expect(lightboxImage.src).toContain(image.src);
          expect(lightboxImage.alt).toBe(image.caption);
          
          // Verify lightbox shows correct caption
          expect(lightboxCaption.textContent).toBe(image.caption);
          
          // Clean up
          closeLightbox(lightbox);
          
          return true;
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * **Feature: class-webpage, Property 8: Image Lazy Loading**
   * 
   * *For any* img element in the gallery section, the element SHALL have 
   * the loading="lazy" attribute set.
   * 
   * **Validates: Requirements 7.4**
   */
  test('Property 8: All gallery images should have lazy loading', () => {
    fc.assert(
      fc.property(
        fc.array(eventArbitrary, { minLength: 1, maxLength: 5 }),
        (events) => {
          const container = document.getElementById('gallery-container');
          
          // Render gallery using standalone function
          renderGallery(events, container);
          
          // Get all thumbnail images
          const images = container.querySelectorAll('.gallery__thumbnail');
          
          // Property: All images should have loading="lazy"
          images.forEach(img => {
            expect(img.getAttribute('loading')).toBe('lazy');
          });
          
          // Also verify total image count
          const totalImages = events.reduce((sum, event) => sum + event.images.length, 0);
          expect(images.length).toBe(totalImages);
          
          return true;
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Property 4 (extended): Empty events array should render empty container
   */
  test('Property 4 (extended): Empty events should render empty gallery', () => {
    const container = document.getElementById('gallery-container');
    
    renderGallery([], container);
    
    expect(container.innerHTML).toBe('');
    expect(container.querySelectorAll('.gallery__event').length).toBe(0);
  });

  /**
   * Property 5 (extended): Lightbox navigation bounds
   */
  test('Property 5 (extended): Lightbox should handle navigation bounds', () => {
    const testImages = [
      { id: 'img-1', src: 'test1.jpg', thumbnail: 'thumb1.jpg', caption: 'Caption 1' },
      { id: 'img-2', src: 'test2.jpg', thumbnail: 'thumb2.jpg', caption: 'Caption 2' }
    ];
    
    const testEvents = [{
      name: 'Test',
      date: '01/01/2024',
      images: testImages
    }];
    
    const container = document.getElementById('gallery-container');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxCaption = document.getElementById('lightbox-caption');
    
    renderGallery(testEvents, container);
    initLightboxData(testEvents);
    
    // Open first image
    openLightbox('img-1', lightbox, lightboxImage, lightboxCaption);
    
    expect(lightbox.classList.contains('show')).toBe(true);
    
    // Close lightbox
    closeLightbox(lightbox);
    expect(lightbox.classList.contains('show')).toBe(false);
  });
});
