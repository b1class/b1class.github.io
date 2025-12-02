/**
 * Members Module - Class Webpage
 * Handles member grid rendering, sorting, and modal functionality
 */

import { membersData } from './data/members-data.js';

// DOM Elements
let membersGrid, memberModal, modalOverlay, modalClose, modalBody;

// Current members data
let members = [];

/**
 * Initialize members module
 */
export function initMembers() {
  // Get DOM elements
  membersGrid = document.getElementById('members-grid');
  memberModal = document.getElementById('member-modal');
  modalOverlay = document.getElementById('modal-overlay');
  modalClose = document.getElementById('modal-close');
  modalBody = document.getElementById('modal-body');
  
  // Load and sort members
  members = sortMembers([...membersData]);
  
  // Render members grid
  renderGrid(members);
  
  // Setup modal events
  setupModalEvents();
  
  // Update member count in about section
  updateMemberCount();
}

/**
 * Sort members alphabetically by name using Vietnamese locale
 * @param {Array} membersList - Array of member objects
 * @returns {Array} - Sorted array of members
 */
export function sortMembers(membersList) {
  return membersList.sort((a, b) => {
    return a.name.localeCompare(b.name, 'vi', { sensitivity: 'base' });
  });
}

/**
 * Render member cards to the grid
 * @param {Array} membersList - Array of member objects to render
 */
export function renderGrid(membersList) {
  if (!membersGrid) return;
  
  membersGrid.innerHTML = '';
  
  membersList.forEach((member, index) => {
    const card = createMemberCard(member, index);
    membersGrid.appendChild(card);
  });
}

/**
 * Create a member card element
 * @param {Object} member - Member data object
 * @param {number} index - Index for staggered animation
 * @returns {HTMLElement} - Member card element
 */
function createMemberCard(member, index) {
  const card = document.createElement('div');
  card.className = 'member-card stagger-item';
  card.dataset.memberId = member.id;
  card.style.transitionDelay = `${index * 50}ms`;
  
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
        onerror="this.src='images/members/default-avatar.svg'"
      >
    </div>
    <div class="member-card__info">
      <h3 class="member-card__name">${member.name}</h3>
      ${roleHtml}
    </div>
  `;
  
  card.addEventListener('click', () => openModal(member.id));
  
  return card;
}

/**
 * Open member detail modal
 * @param {string} memberId - ID of the member to display
 */
export function openModal(memberId) {
  const member = members.find(m => m.id === memberId);
  if (!member) return;
  
  renderModalContent(member);
  memberModal.classList.add('show');
  document.body.classList.add('no-scroll');
}

/**
 * Close member detail modal
 */
export function closeModal() {
  memberModal.classList.remove('show');
  document.body.classList.remove('no-scroll');
}

/**
 * Render modal content for a member
 * @param {Object} member - Member data object
 */
function renderModalContent(member) {
  if (!modalBody) return;
  
  const roleHtml = member.role 
    ? `<p class="modal__role">${member.role}</p>` 
    : '';
  
  const contactHtml = member.contact ? `
    <div class="modal__contact">
      <h4>Thông tin liên hệ</h4>
      ${member.contact.email ? `
        <p><strong>Email:</strong> <a href="mailto:${member.contact.email}">${member.contact.email}</a></p>
      ` : ''}
      ${member.contact.phone ? `
        <p><strong>Điện thoại:</strong> <a href="tel:${member.contact.phone}">${member.contact.phone}</a></p>
      ` : ''}
      ${member.contact.facebook ? `
        <p><strong>Facebook:</strong> <a href="https://${member.contact.facebook}" target="_blank" rel="noopener">${member.contact.facebook}</a></p>
      ` : ''}
    </div>
  ` : '';
  
  modalBody.innerHTML = `
    <div class="modal__header">
      <img 
        class="modal__image" 
        src="${member.photo}" 
        alt="Ảnh ${member.name}"
        onerror="this.src='images/members/default-avatar.svg'"
      >
      <div class="modal__title-group">
        <h3 class="modal__name">${member.name}</h3>
        ${member.nickname ? `<p class="modal__nickname">Biệt danh: ${member.nickname}</p>` : ''}
        ${roleHtml}
      </div>
    </div>
    <div class="modal__details">
      ${member.birthday ? `<p><strong>Ngày sinh:</strong> ${member.birthday}</p>` : ''}
      ${contactHtml}
    </div>
  `;
}

/**
 * Setup modal event listeners
 */
function setupModalEvents() {
  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }
  
  if (modalOverlay) {
    modalOverlay.addEventListener('click', closeModal);
  }
  
  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && memberModal.classList.contains('show')) {
      closeModal();
    }
  });
}

/**
 * Update member count in about section
 */
function updateMemberCount() {
  const memberCountEl = document.getElementById('member-count');
  if (memberCountEl) {
    memberCountEl.textContent = members.length;
  }
}

// Export for testing
export { members, createMemberCard, renderModalContent };
