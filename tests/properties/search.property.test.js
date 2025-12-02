/**
 * Search Property Tests - Class Webpage
 * 
 * Property-based tests for search functionality
 * Feature: search-feature
 */

import fc from 'fast-check';

/**
 * Standalone normalizeForSearch function for testing
 */
function normalizeForSearch(str) {
  if (str === null || str === undefined) {
    return '';
  }
  return String(str).toLowerCase();
}

/**
 * Standalone memberMatchesQuery function for testing
 */
function memberMatchesQuery(member, query) {
  if (!query || query.trim() === '') {
    return true;
  }
  
  const normalizedQuery = normalizeForSearch(query);
  
  const name = normalizeForSearch(member.name);
  if (name.includes(normalizedQuery)) {
    return true;
  }
  
  const nickname = normalizeForSearch(member.nickname);
  if (nickname.includes(normalizedQuery)) {
    return true;
  }
  
  const role = normalizeForSearch(member.role);
  if (role.includes(normalizedQuery)) {
    return true;
  }
  
  return false;
}

/**
 * Standalone sortMembers function for testing
 */
function sortMembers(membersList) {
  return [...membersList].sort((a, b) => {
    return a.name.localeCompare(b.name, 'vi', { sensitivity: 'base' });
  });
}

/**
 * Standalone searchMembers function for testing
 */
function searchMembers(members, query) {
  if (!members || !Array.isArray(members)) {
    return [];
  }
  
  if (!query || query.trim() === '') {
    return sortMembers([...members]);
  }
  
  const filtered = members.filter(member => memberMatchesQuery(member, query));
  return sortMembers(filtered);
}

// Vietnamese name components for generating realistic test data
const vietnameseFirstNames = [
  'An', 'Bình', 'Cường', 'Dũng', 'Hà', 'Huy', 'Lan', 'Minh', 'Ngọc', 'Phong',
  'Quân', 'Thảo', 'Tuấn', 'Uyên', 'Việt', 'Xuân', 'Yến', 'Ánh', 'Đức', 'Hương'
];

const vietnameseLastNames = [
  'Nguyễn', 'Trần', 'Lê', 'Phạm', 'Hoàng', 'Huỳnh', 'Phan', 'Vũ', 'Võ', 'Đặng',
  'Bùi', 'Đỗ', 'Hồ', 'Ngô', 'Dương', 'Lý', 'Đinh', 'Trương', 'Cao', 'Lưu'
];

const roles = [
  'Lớp trưởng', 'Lớp phó học tập', 'Lớp phó văn thể', 'Bí thư', 'Thủ quỹ', ''
];

// Arbitrary for generating Vietnamese member objects
const memberArbitrary = fc.record({
  id: fc.uuid(),
  name: fc.tuple(
    fc.constantFrom(...vietnameseLastNames),
    fc.constantFrom(...vietnameseFirstNames)
  ).map(([last, first]) => `${last} ${first}`),
  nickname: fc.constantFrom(...vietnameseFirstNames),
  role: fc.constantFrom(...roles),
  photo: fc.constant('images/members/default-avatar.svg'),
  birthday: fc.constant('01/01/2006'),
  contact: fc.constant({ email: 'test@email.com' })
});

// Arbitrary for generating member lists
const memberListArbitrary = fc.array(memberArbitrary, { minLength: 1, maxLength: 20 });

// Arbitrary for search queries (substrings from Vietnamese names)
const searchQueryArbitrary = fc.oneof(
  fc.constantFrom(...vietnameseFirstNames),
  fc.constantFrom(...vietnameseLastNames),
  fc.constantFrom(...roles.filter(r => r !== ''))
);

describe('Search Feature - Property Tests', () => {
  
  /**
   * **Feature: search-feature, Property 1: Search Results Contain Query**
   * 
   * For any member list and search query, all members in the filtered results 
   * should have at least one searchable field (name, nickname, or role) that 
   * contains the query string (case-insensitive).
   * 
   * **Validates: Requirements 1.1, 2.1, 2.2**
   */
  describe('Property 1: Search Results Contain Query', () => {
    test('all results should contain the query in at least one searchable field', () => {
      fc.assert(
        fc.property(
          memberListArbitrary,
          searchQueryArbitrary,
          (members, query) => {
            const results = searchMembers(members, query);
            const normalizedQuery = normalizeForSearch(query);
            
            // Every result should match the query in at least one field
            const allMatch = results.every(member => {
              const name = normalizeForSearch(member.name);
              const nickname = normalizeForSearch(member.nickname);
              const role = normalizeForSearch(member.role);
              
              return name.includes(normalizedQuery) ||
                     nickname.includes(normalizedQuery) ||
                     role.includes(normalizedQuery);
            });
            
            expect(allMatch).toBe(true);
            return true;
          }
        ),
        { numRuns: 100 }
      );
    });
  });

  /**
   * **Feature: search-feature, Property 2: No Duplicate Results**
   * 
   * For any member list and search query, each member should appear at most 
   * once in the results, even if multiple fields match the query.
   * 
   * **Validates: Requirements 2.3**
   */
  describe('Property 2: No Duplicate Results', () => {
    test('results should contain no duplicate members', () => {
      fc.assert(
        fc.property(
          memberListArbitrary,
          searchQueryArbitrary,
          (members, query) => {
            const results = searchMembers(members, query);
            const ids = results.map(m => m.id);
            const uniqueIds = new Set(ids);
            
            // Number of unique IDs should equal total results
            expect(uniqueIds.size).toBe(results.length);
            return true;
          }
        ),
        { numRuns: 100 }
      );
    });
  });

  /**
   * **Feature: search-feature, Property 5: Vietnamese Case-Insensitive Matching**
   * 
   * For any Vietnamese string with diacritics, searching with different case 
   * variations should produce the same results.
   * 
   * **Validates: Requirements 1.2**
   */
  describe('Property 5: Vietnamese Case-Insensitive Matching', () => {
    test('search should be case-insensitive for Vietnamese text', () => {
      fc.assert(
        fc.property(
          memberListArbitrary,
          fc.constantFrom(...vietnameseFirstNames),
          (members, query) => {
            const lowerResults = searchMembers(members, query.toLowerCase());
            const upperResults = searchMembers(members, query.toUpperCase());
            const mixedResults = searchMembers(members, query);
            
            // All case variations should return same number of results
            expect(lowerResults.length).toBe(upperResults.length);
            expect(upperResults.length).toBe(mixedResults.length);
            return true;
          }
        ),
        { numRuns: 100 }
      );
    });

    test('member matching should be case-insensitive', () => {
      fc.assert(
        fc.property(
          memberArbitrary,
          (member) => {
            // Extract first part of name for query
            const namePart = member.name.split(' ')[0];
            
            const matchLower = memberMatchesQuery(member, namePart.toLowerCase());
            const matchUpper = memberMatchesQuery(member, namePart.toUpperCase());
            
            // Both should match (or both not match)
            expect(matchLower).toBe(matchUpper);
            return true;
          }
        ),
        { numRuns: 100 }
      );
    });
  });

  /**
   * **Feature: search-feature, Property 3: Clear Search Restores Original List**
   * 
   * For any member list, filtering with any query and then filtering with an 
   * empty string should return the same result as the original sorted list.
   * 
   * **Validates: Requirements 1.3**
   */
  describe('Property 3: Clear Search Restores Original List', () => {
    test('empty query should return all members sorted', () => {
      fc.assert(
        fc.property(
          memberListArbitrary,
          searchQueryArbitrary,
          (members, query) => {
            // First filter with some query (just to show it doesn't affect clear)
            searchMembers(members, query);
            
            // Then "clear" by searching with empty string
            const clearedResults = searchMembers(members, '');
            
            // Original sorted list
            const originalSorted = sortMembers([...members]);
            
            // Cleared results should match original sorted list
            expect(clearedResults.length).toBe(originalSorted.length);
            
            const idsMatch = clearedResults.every((m, i) => m.id === originalSorted[i].id);
            expect(idsMatch).toBe(true);
            return true;
          }
        ),
        { numRuns: 100 }
      );
    });

    test('whitespace-only query should return all members', () => {
      fc.assert(
        fc.property(
          memberListArbitrary,
          fc.stringOf(fc.constantFrom(' ', '\t', '\n'), { minLength: 1, maxLength: 5 }),
          (members, whitespace) => {
            const results = searchMembers(members, whitespace);
            const originalSorted = sortMembers([...members]);
            
            expect(results.length).toBe(originalSorted.length);
            return true;
          }
        ),
        { numRuns: 100 }
      );
    });
  });

  /**
   * **Feature: search-feature, Property 4: Filtered Results Maintain Sort Order**
   * 
   * For any filtered result set, the members should remain in Vietnamese 
   * alphabetical order by name.
   * 
   * **Validates: Requirements 3.3**
   */
  describe('Property 4: Filtered Results Maintain Sort Order', () => {
    test('filtered results should be sorted by Vietnamese name', () => {
      fc.assert(
        fc.property(
          memberListArbitrary,
          searchQueryArbitrary,
          (members, query) => {
            const results = searchMembers(members, query);
            
            if (results.length <= 1) {
              return true; // Trivially sorted
            }
            
            // Check that results are in Vietnamese alphabetical order
            for (let i = 0; i < results.length - 1; i++) {
              const comparison = results[i].name.localeCompare(
                results[i + 1].name, 
                'vi', 
                { sensitivity: 'base' }
              );
              expect(comparison).toBeLessThanOrEqual(0);
            }
            
            return true;
          }
        ),
        { numRuns: 100 }
      );
    });
  });

  // Edge case tests
  describe('Edge Cases', () => {
    test('should handle empty member list', () => {
      const results = searchMembers([], 'test');
      expect(results).toEqual([]);
    });

    test('should handle null/undefined member fields', () => {
      const memberWithNulls = {
        id: 'test-1',
        name: 'Test Name',
        nickname: null,
        role: undefined,
        photo: '',
        birthday: '',
        contact: {}
      };
      
      const results = searchMembers([memberWithNulls], 'Test');
      expect(results.length).toBe(1);
    });

    test('should handle special characters in query', () => {
      const members = [{
        id: 'test-1',
        name: 'Nguyễn Văn An',
        nickname: 'An',
        role: '',
        photo: '',
        birthday: '',
        contact: {}
      }];
      
      // Should not throw with special regex characters
      expect(() => searchMembers(members, '.*+')).not.toThrow();
    });

    test('should return empty array for null/undefined members', () => {
      expect(searchMembers(null, 'test')).toEqual([]);
      expect(searchMembers(undefined, 'test')).toEqual([]);
    });
  });
});
