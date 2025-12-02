# Search Feature Design Document

## Overview

The search feature adds real-time filtering capability to the members section of the Vietnamese class webpage. Users can search by name, nickname, or role with full Vietnamese diacritics support. The search integrates seamlessly with the existing members module and maintains the established visual design.

## Architecture

```mermaid
flowchart TD
    A[Search Input] -->|keyup event| B[searchMembers function]
    B --> C{Query empty?}
    C -->|Yes| D[Return all members sorted]
    C -->|No| E[Filter by name/nickname/role]
    E --> F[Maintain Vietnamese sort order]
    F --> G[renderGrid with results]
    G --> H{Results empty?}
    H -->|Yes| I[Show "Không tìm thấy" message]
    H -->|No| J[Display member cards]
```

## Components and Interfaces

### Search Module (js/search.js)

```javascript
/**
 * Filter members based on search query
 * @param {Array} members - Array of member objects
 * @param {string} query - Search query string
 * @returns {Array} - Filtered and sorted array of members
 */
export function searchMembers(members, query);

/**
 * Check if a member matches the search query
 * @param {Object} member - Member object with name, nickname, role
 * @param {string} query - Search query string
 * @returns {boolean} - True if member matches query
 */
export function memberMatchesQuery(member, query);

/**
 * Normalize string for Vietnamese comparison
 * @param {string} str - Input string
 * @returns {string} - Lowercase string for comparison
 */
export function normalizeForSearch(str);

/**
 * Initialize search functionality
 * Attaches event listeners to search input
 */
export function initSearch();
```

### HTML Structure

```html
<div class="search-container">
  <div class="search-wrapper">
    <svg class="search-icon"><!-- search icon --></svg>
    <input 
      type="text" 
      id="search-input" 
      class="search-input"
      placeholder="Tìm kiếm thành viên..."
      aria-label="Tìm kiếm thành viên"
    >
    <button id="search-clear" class="search-clear" aria-label="Xóa tìm kiếm">
      <svg><!-- clear icon --></svg>
    </button>
  </div>
</div>

<div id="search-no-results" class="search-no-results hidden">
  <p>Không tìm thấy thành viên nào</p>
</div>
```

## Data Models

### Search Query Processing

The search uses the existing member data structure:

```javascript
{
  id: string,
  name: string,        // Searchable
  nickname: string,    // Searchable
  role: string,        // Searchable
  photo: string,
  birthday: string,
  contact: object
}
```

### Search State

```javascript
{
  query: string,           // Current search query
  results: Member[],       // Filtered results
  isSearching: boolean     // Whether search is active
}
```

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system-essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

Based on the prework analysis, the following properties were identified:

### Property 1: Search Results Contain Query
*For any* member list and search query, all members in the filtered results should have at least one searchable field (name, nickname, or role) that contains the query string (case-insensitive).

**Validates: Requirements 1.1, 2.1, 2.2**

### Property 2: No Duplicate Results
*For any* member list and search query, each member should appear at most once in the results, even if multiple fields match the query.

**Validates: Requirements 2.3**

### Property 3: Clear Search Restores Original List
*For any* member list, filtering with any query and then filtering with an empty string should return the same result as the original sorted list.

**Validates: Requirements 1.3**

### Property 4: Filtered Results Maintain Sort Order
*For any* filtered result set, the members should remain in Vietnamese alphabetical order by name.

**Validates: Requirements 3.3**

### Property 5: Vietnamese Case-Insensitive Matching
*For any* Vietnamese string with diacritics, searching with different case variations should produce the same results.

**Validates: Requirements 1.2**

## Error Handling

| Scenario | Handling |
|----------|----------|
| Empty search query | Return all members in sorted order |
| No matching results | Display "Không tìm thấy" message |
| Null/undefined member fields | Treat as empty string for comparison |
| Special characters in query | Escape for safe comparison |

## Testing Strategy

### Property-Based Testing

The project uses **fast-check** for property-based testing, consistent with existing tests.

Each property test will:
- Generate random member lists with Vietnamese names
- Generate random search queries
- Verify the property holds across 100+ iterations
- Tag tests with format: `**Feature: search-feature, Property {number}: {property_text}**`

### Unit Tests

Unit tests will cover:
- Specific edge cases (empty strings, whitespace-only queries)
- Integration with existing renderGrid function
- UI state changes (showing/hiding no-results message)

### Test File Structure

```
tests/
  properties/
    search.property.test.js    # Property-based tests
```

