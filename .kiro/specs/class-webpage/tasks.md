# Implementation Plan

## 1. Project Setup and Base Structure

- [ ] 1.1 Create project directory structure and base files
  - Create folders: css/, js/, js/data/, images/, images/hero/, images/members/, images/gallery/
  - Create index.html with HTML5 boilerplate and Vietnamese lang attribute
  - Create css/variables.css with design tokens (colors, typography, spacing)
  - Create css/styles.css importing variables
  - Create js/main.js as entry point
  - _Requirements: 7.1, 7.3_

- [ ] 1.2 Set up CSS reset and base styles
  - Add CSS reset/normalize styles
  - Configure box-sizing, font-family with Vietnamese support
  - Set up responsive breakpoint variables
  - _Requirements: 6.2_

## 2. Navigation Component

- [ ] 2.1 Implement HTML structure for navigation
  - Create sticky header with logo/class name
  - Add navigation links: Trang chủ, Thành viên, Kỷ niệm, Giới thiệu
  - Add hamburger menu button for mobile
  - _Requirements: 1.3, 5.1_

- [ ] 2.2 Implement navigation CSS styles
  - Style sticky header with backdrop blur
  - Style nav links with hover effects
  - Style hamburger menu icon
  - Add mobile menu slide-in animation
  - _Requirements: 5.3, 6.3, 4.4_

- [ ] 2.3 Implement navigation JavaScript functionality
  - Create js/navigation.js module
  - Implement toggleMobileMenu() with animation
  - Implement scrollToSection() with smooth scroll
  - Implement setActiveLink() based on scroll position using Intersection Observer
  - _Requirements: 5.2, 5.4_

- [ ] 2.4 Write property test for navigation active state
  - **Property 6: Navigation Active State Correctness**
  - **Validates: Requirements 5.4**

## 3. Hero Section

- [ ] 3.1 Implement hero section HTML and CSS
  - Create hero section with gradient background
  - Add class name, school year, welcome message in Vietnamese
  - Add placeholder for class photo with overlay
  - Style responsive hero layout
  - Add entry animations (fade-in, slide-up)
  - _Requirements: 1.1, 1.2, 6.1, 6.4, 6.6_

## 4. Members Component

- [ ] 4.1 Create members data structure
  - Create js/data/members-data.js with sample member data
  - Include all fields: id, name, nickname, photo, role, birthday, contact
  - Add 5-10 sample members for testing
  - _Requirements: 2.1_

- [ ] 4.2 Implement members grid HTML structure
  - Create members section with heading
  - Add container for dynamic member cards
  - _Requirements: 2.1_

- [ ] 4.3 Implement members JavaScript module
  - Create js/members.js module
  - Implement sortMembers() function with Vietnamese locale (localeCompare with 'vi')
  - Implement renderGrid() to create member cards dynamically
  - Implement openModal() and closeModal() for member details
  - _Requirements: 2.1, 2.2, 2.3, 2.4_

- [ ] 4.4 Write property test for member sorting
  - **Property 2: Member Sorting Correctness**
  - **Validates: Requirements 2.4**

- [ ] 4.5 Write property test for member grid rendering
  - **Property 1: Member Grid Completeness and Content**
  - **Validates: Requirements 2.1, 2.2**

- [ ] 4.6 Write property test for member modal content
  - **Property 3: Member Modal Content Completeness**
  - **Validates: Requirements 2.3**

- [ ] 4.7 Implement members CSS styles
  - Style responsive grid (1/2/3-4 columns based on viewport)
  - Style member cards with photo, name, role
  - Add card shadows, rounded corners, hover lift effect
  - Style member detail modal with overlay
  - _Requirements: 4.1, 4.2, 4.3, 6.5_

## 5. Checkpoint - Members Complete

- [ ] 5. Checkpoint
  - Ensure all tests pass, ask the user if questions arise.

## 6. Gallery Component

- [ ] 6.1 Create gallery data structure
  - Create js/data/gallery-data.js with sample gallery events
  - Include events with images: id, src, thumbnail, caption
  - Add 2-3 sample events with 3-5 images each
  - _Requirements: 3.1_

- [ ] 6.2 Implement gallery HTML structure
  - Create gallery section with heading
  - Add container for event groups
  - Add lightbox modal structure (hidden by default)
  - _Requirements: 3.1, 3.2_

- [ ] 6.3 Implement gallery JavaScript module
  - Create js/gallery.js module
  - Implement renderGallery() to group images by event
  - Implement openLightbox() with full image and caption
  - Implement closeLightbox() on Escape key and outside click
  - Implement navigateLightbox() for prev/next navigation
  - Implement handleSwipe() for mobile touch gestures
  - Add lazy loading attribute to all gallery images
  - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 4.5, 7.4_

- [ ] 6.4 Write property test for gallery event grouping
  - **Property 4: Gallery Event Grouping and Thumbnail Rendering**
  - **Validates: Requirements 3.1, 3.2**

- [ ] 6.5 Write property test for lightbox content
  - **Property 5: Lightbox Content Correctness**
  - **Validates: Requirements 3.3**

- [ ] 6.6 Write property test for image lazy loading
  - **Property 8: Image Lazy Loading**
  - **Validates: Requirements 7.4**

- [ ] 6.7 Implement gallery CSS styles
  - Style responsive thumbnail grid
  - Style event headers and grouping
  - Style lightbox overlay with navigation controls
  - Add hover effects on thumbnails
  - _Requirements: 4.1, 4.2, 4.3, 6.3_

## 7. Checkpoint - Gallery Complete

- [ ] 7. Checkpoint
  - Ensure all tests pass, ask the user if questions arise.

## 8. Animations and Polish

- [ ] 8.1 Implement scroll animations
  - Create js/animations.js module
  - Set up Intersection Observer for scroll detection
  - Add fade-in and slide-up animations to sections
  - Add staggered animations for grid items
  - _Requirements: 6.4_

- [ ] 8.2 Implement responsive styles
  - Create css/responsive.css with media queries
  - Mobile (< 768px): single column, hamburger menu
  - Tablet (768px - 1024px): 2 columns
  - Desktop (> 1024px): 3-4 columns
  - Ensure touch-friendly spacing on mobile
  - _Requirements: 4.1, 4.2, 4.3, 4.4_

## 9. Footer and Final Integration

- [ ] 9.1 Implement footer section
  - Add footer with class info and copyright
  - Add social links if applicable
  - Style footer with consistent theme
  - _Requirements: 6.1_

- [ ] 9.2 Wire up main.js entry point
  - Import and initialize all modules
  - Set up event listeners
  - Handle page load initialization
  - _Requirements: 1.1, 1.3_

## 10. GitHub Pages Optimization

- [ ] 10.1 Verify asset paths and optimize for deployment
  - Audit all asset paths to ensure relative paths
  - Add placeholder images for demo
  - Verify index.html is at root level
  - Test with base href for subdirectory deployment
  - _Requirements: 7.1, 7.2, 7.3_

- [ ] 10.2 Write property test for asset path relativity
  - **Property 7: Asset Path Relativity**
  - **Validates: Requirements 7.1**

- [ ] 10.3 Create README.md with setup instructions
  - Document project structure
  - Add instructions for customizing content
  - Add GitHub Pages deployment guide
  - _Requirements: 7.2_

## 11. Final Checkpoint

- [ ] 11. Final Checkpoint
  - Ensure all tests pass, ask the user if questions arise.
