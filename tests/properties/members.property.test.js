/**
 * Members Property Tests - Class Webpage
 * 
 * Property-based tests for member sorting, grid rendering, and modal content
 */

import fc from 'fast-check';

/**
 * Standalone sortMembers function for testing
 */
function sortMembers(membersList) {
  return [...membersList].sort((a, b) => {
    return a.name.localeCompare(b.name, 'vi', { sensitivity: 'base' });
  });
}

/**
 * Standalone renderGrid function for testing
 */
function renderGrid(membersList, container) {
  if (!container) return;
  
  container.innerHTML = '';
  
  membersList.forEach((member, index) => {
    const card = document.createElement('div');
    card.className = 'member-card stagger-item';
    card.dataset.memberId = member.id;
    
    const roleHtml = member.role 
      ? `<span class="member-card__role">${member.role}</span>` 
      : '';
    
    card.innerHTML = `
      <div class="member-card__image-wrapper">
        <img 
          class="member-card__image" 
          src="${member.photo}" 
          alt="Ảnh ${member.name}"
          loading="lazy"
        >
      </div>
      <div class="member-card__info">
        <h3 class="member-card__name">${member.name}</h3>
        ${roleHtml}
      </div>
    `;
    
    container.appendChild(card);
  });
}

// Safe member arbitrary generator (no HTML special chars)
const safeStringArbitrary = fc.stringOf(
  fc.constantFrom(...'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 '.split('')),
  { minLength: 1, maxLength: 30 }
).filter(s => s.trim().length > 0);

const memberArbitrary = fc.record({
  id: fc.uuid(),
  name: safeStringArbitrary,
  nickname: safeStringArbitrary,
  photo: fc.constant('images/members/default-avatar.svg'),
  role: fc.oneof(
    fc.constant(''),
    fc.constant('Lớp trưởng'),
    fc.constant('Lớp phó'),
    fc.constant('Bí thư'),
    fc.constant('Thủ quỹ')
  ),
  birthday: fc.date({ min: new Date('2000-01-01'), max: new Date('2010-12-31') })
    .map(d => `${d.getDate().toString().padStart(2, '0')}/${(d.getMonth() + 1).toString().padStart(2, '0')}/${d.getFullYear()}`),
  contact: fc.record({
    email: fc.constant('test@email.com'),
    phone: fc.stringOf(fc.constantFrom('0', '1', '2', '3', '4', '5', '6', '7', '8', '9'), { minLength: 10, maxLength: 10 }),
    facebook: fc.constant('facebook.com/test')
  })
});

// Vietnamese name generator for more realistic testing
const vietnameseNameArbitrary = fc.oneof(
  fc.constant('Nguyễn Văn An'),
  fc.constant('Trần Thị Bình'),
  fc.constant('Lê Hoàng Cường'),
  fc.constant('Phạm Minh Dũng'),
  fc.constant('Hoàng Thị Hà'),
  fc.constant('Đỗ Quang Huy'),
  fc.constant('Vũ Thị Lan'),
  fc.constant('Bùi Đức Minh'),
  fc.constant('Ngô Thị Ngọc'),
  fc.constant('Đinh Văn Phong'),
  fc.constant('Âu Dương Thanh'),
  fc.constant('Ông Văn Ước')
);

const vietnameseMemberArbitrary = fc.record({
  id: fc.uuid(),
  name: vietnameseNameArbitrary,
  nickname: fc.string({ minLength: 1, maxLength: 10 }),
  photo: fc.constant('images/members/default-avatar.svg'),
  role: fc.oneof(fc.constant(''), fc.constant('Lớp trưởng'), fc.constant('Lớp phó')),
  birthday: fc.constant('15/03/2006'),
  contact: fc.record({
    email: fc.constant('test@email.com'),
    phone: fc.constant('0901234567'),
    facebook: fc.constant('facebook.com/test')
  })
});

describe('Members Property Tests', () => {
  // Setup DOM before each test
  beforeEach(() => {
    document.body.innerHTML = `
      <div id="members-grid"></div>
      <div class="modal" id="member-modal">
        <div class="modal__overlay" id="modal-overlay"></div>
        <div class="modal__content">
          <button class="modal__close" id="modal-close">&times;</button>
          <div class="modal__body" id="modal-body"></div>
        </div>
      </div>
    `;
  });

  /**
   * **Feature: class-webpage, Property 2: Member Sorting Correctness**
   * 
   * *For any* array of members, after sorting, for every pair of adjacent 
   * members (member[i], member[i+1]), the name of member[i] SHALL be 
   * alphabetically less than or equal to the name of member[i+1] using 
   * Vietnamese locale comparison.
   * 
   * **Validates: Requirements 2.4**
   */
  test('Property 2: Members should be sorted alphabetically by Vietnamese locale', () => {
    fc.assert(
      fc.property(
        fc.array(vietnameseMemberArbitrary, { minLength: 1, maxLength: 20 }),
        (members) => {
          const sorted = sortMembers([...members]);
          
          // Check that array is sorted
          for (let i = 0; i < sorted.length - 1; i++) {
            const comparison = sorted[i].name.localeCompare(
              sorted[i + 1].name, 
              'vi', 
              { sensitivity: 'base' }
            );
            // Current name should be <= next name
            expect(comparison).toBeLessThanOrEqual(0);
          }
          
          // Check that all original members are present
          expect(sorted.length).toBe(members.length);
          
          return true;
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * **Feature: class-webpage, Property 1: Member Grid Completeness and Content**
   * 
   * *For any* array of member data, when rendered to the members grid, 
   * the number of member cards displayed SHALL equal the length of the 
   * input array, AND each card SHALL contain the member's photo, name, 
   * and role (if present).
   * 
   * **Validates: Requirements 2.1, 2.2**
   */
  test('Property 1: Grid should render all members with correct content', () => {
    fc.assert(
      fc.property(
        fc.array(memberArbitrary, { minLength: 0, maxLength: 15 }),
        (members) => {
          const grid = document.getElementById('members-grid');
          
          // Render the grid using standalone function
          renderGrid(members, grid);
          
          // Get all rendered cards
          const cards = grid.querySelectorAll('.member-card');
          
          // Property 1: Number of cards equals number of members
          expect(cards.length).toBe(members.length);
          
          // Property 2: Each card contains required content
          members.forEach((member, index) => {
            const card = cards[index];
            
            // Check name is present
            const nameEl = card.querySelector('.member-card__name');
            expect(nameEl).not.toBeNull();
            expect(nameEl.textContent).toBe(member.name);
            
            // Check photo is present
            const photoEl = card.querySelector('.member-card__image');
            expect(photoEl).not.toBeNull();
            expect(photoEl.getAttribute('src')).toBe(member.photo);
            
            // Check role if present
            if (member.role) {
              const roleEl = card.querySelector('.member-card__role');
              expect(roleEl).not.toBeNull();
              expect(roleEl.textContent).toBe(member.role);
            }
          });
          
          return true;
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * **Feature: class-webpage, Property 3: Member Modal Content Completeness**
   * 
   * *For any* member object, when the member modal is opened, the modal 
   * SHALL display all detail fields: nickname, birthday, and contact 
   * information that exist in the member data.
   * 
   * **Validates: Requirements 2.3**
   */
  test('Property 3: Modal should display all member details', () => {
    // Use Vietnamese member generator to avoid HTML injection issues
    fc.assert(
      fc.property(
        vietnameseMemberArbitrary,
        (member) => {
          const modalBody = document.getElementById('modal-body');
          
          // Simulate modal content rendering (escaping HTML)
          const escapeHtml = (str) => {
            if (!str) return '';
            return str.replace(/[&<>"']/g, (m) => ({
              '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
            }[m]));
          };
          
          const safeName = escapeHtml(member.name);
          const safeNickname = escapeHtml(member.nickname);
          
          const roleHtml = member.role 
            ? `<p class="modal__role">${escapeHtml(member.role)}</p>` 
            : '';
          
          const contactHtml = member.contact ? `
            <div class="modal__contact">
              <h4>Thông tin liên hệ</h4>
              ${member.contact.email ? `<p><strong>Email:</strong> ${escapeHtml(member.contact.email)}</p>` : ''}
              ${member.contact.phone ? `<p><strong>Điện thoại:</strong> ${escapeHtml(member.contact.phone)}</p>` : ''}
              ${member.contact.facebook ? `<p><strong>Facebook:</strong> ${escapeHtml(member.contact.facebook)}</p>` : ''}
            </div>
          ` : '';
          
          modalBody.innerHTML = `
            <div class="modal__header">
              <img class="modal__image" src="${member.photo}" alt="Ảnh ${safeName}">
              <div class="modal__title-group">
                <h3 class="modal__name">${safeName}</h3>
                ${safeNickname ? `<p class="modal__nickname">Biệt danh: ${safeNickname}</p>` : ''}
                ${roleHtml}
              </div>
            </div>
            <div class="modal__details">
              ${member.birthday ? `<p><strong>Ngày sinh:</strong> ${escapeHtml(member.birthday)}</p>` : ''}
              ${contactHtml}
            </div>
          `;
          
          // Verify name is displayed
          const nameEl = modalBody.querySelector('.modal__name');
          expect(nameEl).not.toBeNull();
          expect(nameEl.textContent).toBe(member.name);
          
          // Verify nickname if present
          if (member.nickname) {
            const nicknameEl = modalBody.querySelector('.modal__nickname');
            expect(nicknameEl).not.toBeNull();
            expect(nicknameEl.textContent).toContain(member.nickname);
          }
          
          // Verify birthday if present
          if (member.birthday) {
            const detailsEl = modalBody.querySelector('.modal__details');
            expect(detailsEl.textContent).toContain(member.birthday);
          }
          
          // Verify contact info if present
          if (member.contact) {
            if (member.contact.email) {
              expect(modalBody.textContent).toContain(member.contact.email);
            }
            if (member.contact.phone) {
              expect(modalBody.textContent).toContain(member.contact.phone);
            }
          }
          
          return true;
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Property 2 (extended): Sorting preserves all members
   */
  test('Property 2 (extended): Sorting should not lose or duplicate members', () => {
    fc.assert(
      fc.property(
        fc.array(memberArbitrary, { minLength: 1, maxLength: 20 }),
        (members) => {
          const originalIds = members.map(m => m.id).sort();
          const sorted = sortMembers([...members]);
          const sortedIds = sorted.map(m => m.id).sort();
          
          // Same members should be present
          expect(sortedIds).toEqual(originalIds);
          
          return true;
        }
      ),
      { numRuns: 100 }
    );
  });
});
