/**
 * Gallery Module - Class Webpage
 * Handles gallery rendering, lightbox, and touch gestures
 */

import { galleryData } from './data/gallery-data.js';

// DOM Elements
let galleryContainer, lightbox, lightboxOverlay, lightboxImage, lightboxCaption;
let lightboxClose, lightboxPrev, lightboxNext;

// State
let allImages = [];
let currentImageIndex = 0;
let touchStartX = 0;
let touchEndX = 0;

/**
 * Initialize gallery module
 */
export function initGallery() {
  // Get DOM elements
  galleryContainer = document.getElementById('gallery-container');
  lightbox = document.getElementById('lightbox');
  lightboxOverlay = document.getElementById('lightbox-overlay');
  lightboxImage = document.getElementById('lightbox-image');
  lightboxCaption = document.getElementById('lightbox-caption');
  lightboxClose = document.getElementById('lightbox-close');
  lightboxPrev = document.getElementById('lightbox-prev');
  lightboxNext = document.getElementById('lightbox-next');
  
  // Flatten all images for lightbox navigation
  allImages = galleryData.flatMap(event => 
    event.images.map(img => ({ ...img, eventName: event.name }))
  );
  
  // Render gallery
  renderGallery(galleryData);
  
  // Setup lightbox events
  setupLightboxEvents();
  
  // Update counts in about section
  updateGalleryCounts();
}

/**
 * Render gallery grouped by events
 * @param {Array} events - Array of gallery event objects
 */
export function renderGallery(events) {
  if (!galleryContainer) return;
  
  galleryContainer.innerHTML = '';
  
  events.forEach(event => {
    const eventSection = createEventSection(event);
    galleryContainer.appendChild(eventSection);
  });
}

/**
 * Create an event section with images
 * @param {Object} event - Gallery event object
 * @returns {HTMLElement} - Event section element
 */
function createEventSection(event) {
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
    const thumbnail = createThumbnail(image, index);
    grid.appendChild(thumbnail);
  });
  
  return section;
}

/**
 * Create a thumbnail element
 * @param {Object} image - Image data object
 * @param {number} index - Index for staggered animation
 * @returns {HTMLElement} - Thumbnail element
 */
function createThumbnail(image, index) {
  const item = document.createElement('div');
  item.className = 'gallery__item stagger-item';
  item.style.transitionDelay = `${index * 50}ms`;
  
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
  
  item.addEventListener('click', () => openLightbox(image.id));
  
  return item;
}

/**
 * Open lightbox with specified image
 * @param {string} imageId - ID of the image to display
 */
export function openLightbox(imageId) {
  const index = allImages.findIndex(img => img.id === imageId);
  if (index === -1) return;
  
  currentImageIndex = index;
  updateLightboxContent();
  lightbox.classList.add('show');
  document.body.classList.add('no-scroll');
  
  // Update navigation buttons
  updateNavigationButtons();
}

/**
 * Close lightbox
 */
export function closeLightbox() {
  lightbox.classList.remove('show');
  document.body.classList.remove('no-scroll');
}

/**
 * Navigate lightbox to previous or next image
 * @param {string} direction - 'prev' or 'next'
 */
export function navigateLightbox(direction) {
  if (direction === 'prev' && currentImageIndex > 0) {
    currentImageIndex--;
  } else if (direction === 'next' && currentImageIndex < allImages.length - 1) {
    currentImageIndex++;
  }
  
  updateLightboxContent();
  updateNavigationButtons();
}

/**
 * Update lightbox image and caption
 */
function updateLightboxContent() {
  const image = allImages[currentImageIndex];
  if (!image) return;
  
  lightboxImage.src = image.src;
  lightboxImage.alt = image.caption;
  lightboxCaption.textContent = image.caption;
}

/**
 * Update navigation button states
 */
function updateNavigationButtons() {
  if (lightboxPrev) {
    lightboxPrev.disabled = currentImageIndex === 0;
    lightboxPrev.style.opacity = currentImageIndex === 0 ? '0.3' : '1';
  }
  
  if (lightboxNext) {
    lightboxNext.disabled = currentImageIndex === allImages.length - 1;
    lightboxNext.style.opacity = currentImageIndex === allImages.length - 1 ? '0.3' : '1';
  }
}

/**
 * Handle touch swipe for mobile navigation
 * @param {string} direction - 'left' or 'right'
 */
export function handleSwipe(direction) {
  if (direction === 'left') {
    navigateLightbox('next');
  } else if (direction === 'right') {
    navigateLightbox('prev');
  }
}

/**
 * Setup lightbox event listeners
 */
function setupLightboxEvents() {
  // Close button
  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }
  
  // Overlay click
  if (lightboxOverlay) {
    lightboxOverlay.addEventListener('click', closeLightbox);
  }
  
  // Navigation buttons
  if (lightboxPrev) {
    lightboxPrev.addEventListener('click', () => navigateLightbox('prev'));
  }
  
  if (lightboxNext) {
    lightboxNext.addEventListener('click', () => navigateLightbox('next'));
  }
  
  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('show')) return;
    
    switch (e.key) {
      case 'Escape':
        closeLightbox();
        break;
      case 'ArrowLeft':
        navigateLightbox('prev');
        break;
      case 'ArrowRight':
        navigateLightbox('next');
        break;
    }
  });
  
  // Touch swipe support
  if (lightbox) {
    lightbox.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    lightbox.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleTouchSwipe();
    }, { passive: true });
  }
}

/**
 * Process touch swipe gesture
 */
function handleTouchSwipe() {
  const swipeThreshold = 50;
  const diff = touchStartX - touchEndX;
  
  if (Math.abs(diff) > swipeThreshold) {
    if (diff > 0) {
      handleSwipe('left'); // Swipe left = next
    } else {
      handleSwipe('right'); // Swipe right = prev
    }
  }
}

/**
 * Update gallery counts in about section
 */
function updateGalleryCounts() {
  const photoCountEl = document.getElementById('photo-count');
  const eventCountEl = document.getElementById('event-count');
  
  if (photoCountEl) {
    photoCountEl.textContent = allImages.length;
  }
  
  if (eventCountEl) {
    eventCountEl.textContent = galleryData.length;
  }
}

// Export for testing
export { allImages, currentImageIndex, createEventSection, createThumbnail };
