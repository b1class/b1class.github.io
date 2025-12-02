# Implementation Plan

## 1. Create Search Module Core Functions

- [ ] 1.1 Create search module with core filtering logic
  - Create js/search.js module
  - Implement `normalizeForSearch(str)` function for Vietnamese text normalization
  - Implement `memberMatchesQuery(member, query)` function to check if member matches
  - Implement `searchMembers(members, query)` function to filter and return sorted results
  - Handle null/undefined fields gracefully
  - _Requirements: 1.1, 1.2, 2.1, 2.2, 2.3_

- [ ] 1.2 Write property test for search results contain query
  - **Property 1: Search Results Contain Query**
  - **Validates: Requirements 1.1, 2.1, 2.2**

- [ ] 1.3 Write property test for no duplicate results
  - **Property 2: No Duplicate Results**
  - **Validates: Requirements 2.3**

- [ ] 1.4 Write property test for Vietnamese case-insensitive matching
  - **Property 5: Vietnamese Case-Insensitive Matching**
  - **Validates: Requirements 1.2**

## 2. Implement Search UI Components

- [ ] 2.1 Add search input HTML structure to index.html
  - Add search container with input field in members section
  - Add search icon SVG
  - Add clear button with icon
  - Add hidden "Không tìm thấy" message element
  - Ensure proper aria-labels for accessibility
  - _Requirements: 1.4, 4.1_

- [ ] 2.2 Add search CSS styles
  - Style search container and input field
  - Style search and clear icons
  - Add focus states with visual feedback
  - Style "Không tìm thấy" message
  - Add responsive styles for mobile (min 44px tap target)
  - _Requirements: 3.2, 4.1, 4.2_

## 3. Integrate Search with Members Module

- [ ] 3.1 Implement search initialization and event handling
  - Add `initSearch()` function to search.js
  - Attach keyup event listener to search input
  - Implement clear button functionality
  - Call `renderGrid()` with filtered results
  - Show/hide "Không tìm thấy" message based on results
  - _Requirements: 1.3, 1.4, 3.1_

- [ ] 3.2 Write property test for clear search restores original list
  - **Property 3: Clear Search Restores Original List**
  - **Validates: Requirements 1.3**

- [ ] 3.3 Write property test for filtered results maintain sort order
  - **Property 4: Filtered Results Maintain Sort Order**
  - **Validates: Requirements 3.3**

## 4. Wire Up and Bundle

- [ ] 4.1 Integrate search module into app.js
  - Import search module in app.js
  - Call `initSearch()` after members initialization
  - Ensure search has access to members data
  - _Requirements: 3.1, 4.3_

## 5. Final Checkpoint

- [ ] 5. Final Checkpoint
  - Ensure all tests pass, ask the user if questions arise.

