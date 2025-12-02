/**
 * Search Module - Class Webpage
 * Handles member search functionality with Vietnamese locale support
 * 
 * Feature: search-feature
 */

import { membersData } from './data/members-data.js';
import { sortMembers, renderGrid } from './members.js';

// DOM Elements
let searchInput, searchClear, noResultsMessage, membersGrid;

// All members (sorted)
let allMembers = [];

/**
 * Normalize string for Vietnamese comparison
 * Converts to lowercase for case-insensitive matching
 * @param {string} str - Input string
 * @returns {string} - Lowercase string for comparison
 */
export function normalizeForSearch(str) {
  if (str === null || str === undefined) {
    return '';
  }
  return String(str).toLowerCase();
}

/**
 * Check if a member matches the search query
 * Searches across name, nickname, and role fields
 * @param {Object} member - Member object with name, nickname, role
 * @param {string} query - Search query string (already normalized)
 * @returns {boolean} - True if member matches query
 */
export function memberMatchesQuery(member, query) {
  if (!query || query.trim() === '') {
    return true;
  }
  
  const normalizedQuery = normalizeForSearch(query);
  
  // Check name
  const name = normalizeForSearch(member.name);
  if (name.includes(normalizedQuery)) {
    return true;
  }
  
  // Check nickname
  const nickname = normalizeForSearch(member.nickname);
  if (nickname.includes(normalizedQuery)) {
    return true;
  }
  
  // Check role
  const role = normalizeForSearch(member.role);
  if (role.includes(normalizedQuery)) {
    return true;
  }
  
  return false;
}

/**
 * Filter members based on search query
 * Returns filtered results maintaining Vietnamese sort order
 * @param {Array} members - Array of member objects
 * @param {string} query - Search query string
 * @returns {Array} - Filtered and sorted array of members
 */
export function searchMembers(members, query) {
  if (!members || !Array.isArray(members)) {
    return [];
  }
  
  // If query is empty, return all members sorted
  if (!query || query.trim() === '') {
    return sortMembers([...members]);
  }
  
  // Filter members that match the query
  const filtered = members.filter(member => memberMatchesQuery(member, query));
  
  // Return sorted results (maintains Vietnamese alphabetical order)
  return sortMembers(filtered);
}

/**
 * Handle search input changes
 * Updates the grid with filtered results
 */
function handleSearchInput() {
  const query = searchInput.value;
  const results = searchMembers(allMembers, query);
  
  // Show/hide clear button
  if (searchClear) {
    searchClear.style.display = query.length > 0 ? 'flex' : 'none';
  }
  
  // Show/hide no results message
  if (noResultsMessage) {
    if (results.length === 0 && query.trim() !== '') {
      noResultsMessage.classList.remove('hidden');
      if (membersGrid) {
        membersGrid.classList.add('hidden');
      }
    } else {
      noResultsMessage.classList.add('hidden');
      if (membersGrid) {
        membersGrid.classList.remove('hidden');
      }
    }
  }
  
  // Render filtered results
  renderGrid(results);
}

/**
 * Clear search input and restore all members
 */
function handleClearSearch() {
  if (searchInput) {
    searchInput.value = '';
    searchInput.focus();
  }
  handleSearchInput();
}

/**
 * Initialize search functionality
 * Attaches event listeners to search input
 */
export function initSearch() {
  // Get DOM elements - using members-search-input for inline search
  searchInput = document.getElementById('members-search-input');
  searchClear = document.getElementById('members-search-clear');
  noResultsMessage = document.getElementById('members-no-results');
  membersGrid = document.getElementById('members-grid');
  
  // Load all members sorted
  allMembers = sortMembers([...membersData]);
  
  // Setup event listeners
  if (searchInput) {
    searchInput.addEventListener('input', handleSearchInput);
    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        handleClearSearch();
      }
    });
  }
  
  if (searchClear) {
    searchClear.addEventListener('click', handleClearSearch);
    // Initially hide clear button
    searchClear.style.display = 'none';
  }
}

// Export for testing
export { allMembers };
