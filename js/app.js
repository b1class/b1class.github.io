/**
 * Class Webpage - Single File Application
 * All JavaScript bundled for static hosting (GitHub Pages)
 */

// ==================== DATA ====================

const membersData = [
  {
    id: "member-001",
    name: "Hồ Thị Thu Huyền",
    nickname: "Huyền",
    photo: "images/members/default-avatar.svg",
    role: "",
    birthday: "",
    contact: { email: "", phone: "", facebook: "" }
  },
  {
    id: "member-002",
    name: "Lê Thanh Vũ",
    nickname: "Vũ",
    photo: "images/members/default-avatar.svg",
    role: "Lớp trưởng",
    birthday: "",
    contact: { email: "", phone: "", facebook: "" }
  },
  {
    id: "member-003",
    name: "Bùi Quang Hiếu",
    nickname: "Hiếu",
    photo: "images/members/default-avatar.svg",
    role: "",
    birthday: "",
    contact: { email: "", phone: "", facebook: "" }
  },
  {
    id: "member-004",
    name: "Nguyễn Thị Mỹ Trinh",
    nickname: "Trinh",
    photo: "images/members/default-avatar.svg",
    role: "",
    birthday: "",
    contact: { email: "", phone: "", facebook: "" }
  },
  {
    id: "member-005",
    name: "Lê Bảo Hưng",
    nickname: "Hưng",
    photo: "images/members/default-avatar.svg",
    role: "",
    birthday: "",
    contact: { email: "", phone: "", facebook: "" }
  },
  {
    id: "member-006",
    name: "Lê Thị Thu Hồng",
    nickname: "Hồng",
    photo: "images/members/default-avatar.svg",
    role: "",
    birthday: "",
    contact: { email: "", phone: "", facebook: "" }
  },
  {
    id: "member-007",
    name: "Nguyễn Thị Huyền Trang",
    nickname: "Trang",
    photo: "images/members/default-avatar.svg",
    role: "",
    birthday: "",
    contact: { email: "", phone: "", facebook: "" }
  },
  {
    id: "member-008",
    name: "Trần Ngọc Anh",
    nickname: "Anh",
    photo: "images/members/default-avatar.svg",
    role: "",
    birthday: "",
    contact: { email: "", phone: "", facebook: "" }
  },
  {
    id: "member-009",
    name: "Trần Thị Thái Hà",
    nickname: "Hà",
    photo: "images/members/default-avatar.svg",
    role: "",
    birthday: "",
    contact: { email: "", phone: "", facebook: "" }
  },
  {
    id: "member-010",
    name: "Trần Xuân Thành",
    nickname: "Thành",
    photo: "images/members/default-avatar.svg",
    role: "",
    birthday: "",
    contact: { email: "", phone: "", facebook: "" }
  },
  {
    id: "member-011",
    name: "Phạm Thị Linh",
    nickname: "Linh",
    photo: "images/members/default-avatar.svg",
    role: "",
    birthday: "",
    contact: { email: "", phone: "", facebook: "" }
  },
  {
    id: "member-012",
    name: "Phan Thị Hằng",
    nickname: "Hằng",
    photo: "images/members/default-avatar.svg",
    role: "",
    birthday: "",
    contact: { email: "", phone: "", facebook: "" }
  },
  {
    id: "member-013",
    name: "Lê Công Nghĩa",
    nickname: "Nghĩa",
    photo: "images/members/default-avatar.svg",
    role: "",
    birthday: "",
    contact: { email: "", phone: "", facebook: "" }
  },
  {
    id: "member-014",
    name: "Võ Thị Kim Oanh",
    nickname: "Oanh",
    photo: "images/members/default-avatar.svg",
    role: "",
    birthday: "",
    contact: { email: "", phone: "", facebook: "" }
  },
  {
    id: "member-015",
    name: "Nguyễn Quang Đạt",
    nickname: "Đạt",
    photo: "images/members/default-avatar.svg",
    role: "",
    birthday: "",
    contact: { email: "", phone: "", facebook: "" }
  },
  {
    id: "member-016",
    name: "Lê Văn Duy",
    nickname: "Duy",
    photo: "images/members/default-avatar.svg",
    role: "",
    birthday: "",
    contact: { email: "", phone: "", facebook: "" }
  },
  {
    id: "member-017",
    name: "Mai Đức Huy",
    nickname: "Huy",
    photo: "images/members/default-avatar.svg",
    role: "",
    birthday: "",
    contact: { email: "", phone: "", facebook: "" }
  },
  {
    id: "member-018",
    name: "Nguyễn Xuân Khánh",
    nickname: "Khánh",
    photo: "images/members/default-avatar.svg",
    role: "",
    birthday: "",
    contact: { email: "", phone: "", facebook: "" }
  },
  {
    id: "member-019",
    name: "Nguyễn Thị Thanh Thảo",
    nickname: "Thảo",
    photo: "images/members/default-avatar.svg",
    role: "",
    birthday: "",
    contact: { email: "", phone: "", facebook: "" }
  },
  {
    id: "member-020",
    name: "Nguyễn Hữu Vũ",
    nickname: "Vũ",
    photo: "images/members/default-avatar.svg",
    role: "",
    birthday: "",
    contact: { email: "", phone: "", facebook: "" }
  },
  {
    id: "member-021",
    name: "Tăng Bảo Ngọc",
    nickname: "Ngọc",
    photo: "images/members/default-avatar.svg",
    role: "Phó học tập",
    birthday: "",
    contact: { email: "", phone: "", facebook: "" }
  },
  {
    id: "member-022",
    name: "Nguyễn Thị Thảo",
    nickname: "Thảo",
    photo: "images/members/default-avatar.svg",
    role: "",
    birthday: "",
    contact: { email: "", phone: "", facebook: "" }
  }
];

const galleryData = [
  // TEMPORARILY HIDDEN - Uncomment when images are available
  // {
  //   name: "Khai giảng 2023",
  //   date: "05/09/2023",
  //   images: [
  //     { id: "img-001", src: "images/gallery/placeholder.svg", thumbnail: "images/gallery/placeholder.svg", caption: "Lễ khai giảng năm học mới 2023-2024" },
  //     { id: "img-002", src: "images/gallery/placeholder.svg", thumbnail: "images/gallery/placeholder.svg", caption: "Cả lớp chụp ảnh kỷ niệm" },
  //     { id: "img-003", src: "images/gallery/placeholder.svg", thumbnail: "images/gallery/placeholder.svg", caption: "Thầy cô và học sinh" }
  //   ]
  // },
  // {
  //   name: "Ngày Nhà giáo Việt Nam",
  //   date: "20/11/2023",
  //   images: [
  //     { id: "img-004", src: "images/gallery/placeholder.svg", thumbnail: "images/gallery/placeholder.svg", caption: "Tặng hoa cho thầy cô" },
  //     { id: "img-005", src: "images/gallery/placeholder.svg", thumbnail: "images/gallery/placeholder.svg", caption: "Văn nghệ chào mừng 20/11" },
  //     { id: "img-006", src: "images/gallery/placeholder.svg", thumbnail: "images/gallery/placeholder.svg", caption: "Lớp chụp ảnh cùng GVCN" },
  //     { id: "img-007", src: "images/gallery/placeholder.svg", thumbnail: "images/gallery/placeholder.svg", caption: "Tiết mục múa của các bạn nữ" }
  //   ]
  // },
  {
    name: "Tháng năm học trò",
    date: "15/05/2024",
    images: [
      { id: "img-000", src: "images/gallery/anhlop/fullclass.jpg", thumbnail: "images/gallery/anhlop/fullclass.jpg", caption: "Ảnh tập thể cả lớp" },
      { id: "img-008", src: "images/gallery/anhlop/DSC01667.JPG", thumbnail: "images/gallery/anhlop/DSC01667.JPG", caption: "Kỷ niệm dã ngoại" },
      { id: "img-009", src: "images/gallery/anhlop/DSC01702.JPG", thumbnail: "images/gallery/anhlop/DSC01702.JPG", caption: "Kỷ niệm dã ngoại" },
      { id: "img-010", src: "images/gallery/anhlop/DSC03209.JPG", thumbnail: "images/gallery/anhlop/DSC03209.JPG", caption: "Kỷ niệm dã ngoại" },
      { id: "img-011", src: "images/gallery/anhlop/DSC03239.JPG", thumbnail: "images/gallery/anhlop/DSC03239.JPG", caption: "Kỷ niệm dã ngoại" },
      { id: "img-012", src: "images/gallery/anhlop/DSC03243.JPG", thumbnail: "images/gallery/anhlop/DSC03243.JPG", caption: "Kỷ niệm dã ngoại" },
      { id: "img-013", src: "images/gallery/anhlop/DSC03245.JPG", thumbnail: "images/gallery/anhlop/DSC03245.JPG", caption: "Kỷ niệm dã ngoại" },
      { id: "img-014", src: "images/gallery/anhlop/DSC03251.JPG", thumbnail: "images/gallery/anhlop/DSC03251.JPG", caption: "Kỷ niệm dã ngoại" },
      { id: "img-015", src: "images/gallery/anhlop/DSC05452.JPG", thumbnail: "images/gallery/anhlop/DSC05452.JPG", caption: "Kỷ niệm dã ngoại" },
      { id: "img-016", src: "images/gallery/anhlop/DSC05475.JPG", thumbnail: "images/gallery/anhlop/DSC05475.JPG", caption: "Kỷ niệm dã ngoại" }
    ]
  }
];

// ==================== NAVIGATION ====================

const Navigation = {
  header: null,
  navMenu: null,
  navToggle: null,
  navClose: null,
  navLinks: null,

  init() {
    this.header = document.getElementById('header');
    this.navMenu = document.getElementById('nav-menu');
    this.navToggle = document.getElementById('nav-toggle');
    this.navClose = document.getElementById('nav-close');
    this.navLinks = document.querySelectorAll('.nav__link');

    this.setupMobileMenu();
    this.setupSmoothScroll();
    this.setupActiveLink();
    this.setupStickyHeader();
  },

  toggleMobileMenu() {
    this.navMenu.classList.toggle('show-menu');
    document.body.classList.toggle('no-scroll');
  },

  closeMobileMenu() {
    this.navMenu.classList.remove('show-menu');
    document.body.classList.remove('no-scroll');
  },

  setupMobileMenu() {
    if (this.navToggle) {
      this.navToggle.addEventListener('click', () => this.toggleMobileMenu());
    }
    if (this.navClose) {
      this.navClose.addEventListener('click', () => this.closeMobileMenu());
    }
    this.navLinks.forEach(link => {
      link.addEventListener('click', () => this.closeMobileMenu());
    });
  },

  scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerHeight = this.header ? this.header.offsetHeight : 0;
      const targetPosition = section.offsetTop - headerHeight;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
  },

  setupSmoothScroll() {
    this.navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        this.scrollToSection(targetId);
      });
    });
  },

  setActiveLink(sectionId) {
    this.navLinks.forEach(link => {
      link.classList.remove('active');
      const href = link.getAttribute('href').substring(1);
      if (href === sectionId) {
        link.classList.add('active');
      }
    });
  },

  setupActiveLink() {
    const sections = document.querySelectorAll('section[id]');
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -80% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.setActiveLink(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
  },

  setupStickyHeader() {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        this.header.classList.add('header--scrolled');
      } else {
        this.header.classList.remove('header--scrolled');
      }
    });
  }
};

// ==================== MEMBERS ====================

const Members = {
  membersGrid: null,
  memberModal: null,
  modalOverlay: null,
  modalClose: null,
  modalBody: null,
  members: [],

  init() {
    this.membersGrid = document.getElementById('members-grid');
    this.memberModal = document.getElementById('member-modal');
    this.modalOverlay = document.getElementById('modal-overlay');
    this.modalClose = document.getElementById('modal-close');
    this.modalBody = document.getElementById('modal-body');

    this.members = this.sortMembers([...membersData]);
    this.renderGrid();
    this.setupModalEvents();
    this.updateMemberCount();
  },

  sortMembers(membersList) {
    return membersList.sort((a, b) => a.name.localeCompare(b.name, 'vi', { sensitivity: 'base' }));
  },

  renderGrid() {
    if (!this.membersGrid) return;
    this.membersGrid.innerHTML = '';

    this.members.forEach((member, index) => {
      const card = document.createElement('div');
      card.className = 'member-card stagger-item';
      card.dataset.memberId = member.id;
      card.style.transitionDelay = `${index * 50}ms`;

      const roleHtml = member.role ? `<span class="member-card__role">${member.role}</span>` : '';

      card.innerHTML = `
        <div class="member-card__image-wrapper">
          <img class="member-card__image" src="${member.photo}" alt="Ảnh ${member.name}" loading="lazy" onerror="this.src='images/members/default-avatar.svg'">
        </div>
        <div class="member-card__info">
          <h3 class="member-card__name">${member.name}</h3>
          ${roleHtml}
        </div>
      `;

      card.addEventListener('click', () => this.openModal(member.id));
      this.membersGrid.appendChild(card);
    });
  },

  openModal(memberId) {
    const member = this.members.find(m => m.id === memberId);
    if (!member) return;

    this.renderModalContent(member);
    this.memberModal.classList.add('show');
    document.body.classList.add('no-scroll');
  },

  closeModal() {
    this.memberModal.classList.remove('show');
    document.body.classList.remove('no-scroll');
  },

  renderModalContent(member) {
    if (!this.modalBody) return;

    const roleHtml = member.role ? `<p class="modal__role">${member.role}</p>` : '';
    const contactHtml = member.contact ? `
      <div class="modal__contact">
        <h4>Thông tin liên hệ</h4>
        ${member.contact.email ? `<p><strong>Email:</strong> <a href="mailto:${member.contact.email}">${member.contact.email}</a></p>` : ''}
        ${member.contact.phone ? `<p><strong>Điện thoại:</strong> <a href="tel:${member.contact.phone}">${member.contact.phone}</a></p>` : ''}
        ${member.contact.facebook ? `<p><strong>Facebook:</strong> <a href="https://${member.contact.facebook}" target="_blank" rel="noopener">${member.contact.facebook}</a></p>` : ''}
      </div>
    ` : '';

    this.modalBody.innerHTML = `
      <div class="modal__header">
        <img class="modal__image" src="${member.photo}" alt="Ảnh ${member.name}" onerror="this.src='images/members/default-avatar.svg'">
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
  },

  setupModalEvents() {
    if (this.modalClose) {
      this.modalClose.addEventListener('click', () => this.closeModal());
    }
    if (this.modalOverlay) {
      this.modalOverlay.addEventListener('click', () => this.closeModal());
    }
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.memberModal.classList.contains('show')) {
        this.closeModal();
      }
    });
  },

  updateMemberCount() {
    const el = document.getElementById('member-count');
    if (el) el.textContent = this.members.length;
  }
};

// ==================== GALLERY ====================

const Gallery = {
  galleryContainer: null,
  lightbox: null,
  lightboxOverlay: null,
  lightboxImage: null,
  lightboxCaption: null,
  lightboxClose: null,
  lightboxPrev: null,
  lightboxNext: null,
  allImages: [],
  currentImageIndex: 0,
  touchStartX: 0,
  touchEndX: 0,

  init() {
    this.galleryContainer = document.getElementById('gallery-container');
    this.lightbox = document.getElementById('lightbox');
    this.lightboxOverlay = document.getElementById('lightbox-overlay');
    this.lightboxImage = document.getElementById('lightbox-image');
    this.lightboxCaption = document.getElementById('lightbox-caption');
    this.lightboxClose = document.getElementById('lightbox-close');
    this.lightboxPrev = document.getElementById('lightbox-prev');
    this.lightboxNext = document.getElementById('lightbox-next');

    this.allImages = galleryData.flatMap(event => 
      event.images.map(img => ({ ...img, eventName: event.name }))
    );

    this.renderGallery();
    this.setupLightboxEvents();
    this.updateGalleryCounts();
  },

  renderGallery() {
    if (!this.galleryContainer) return;
    this.galleryContainer.innerHTML = '';

    galleryData.forEach(event => {
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
        // First image is featured (larger)
        const isFeatured = index === 0;
        item.className = `gallery__item stagger-item${isFeatured ? ' gallery__item--featured' : ''}`;
        item.style.transitionDelay = `${index * 80}ms`;

        item.innerHTML = `
          <img class="gallery__thumbnail" src="${image.thumbnail}" alt="${image.caption}" loading="lazy" data-image-id="${image.id}">
          <div class="gallery__item-icon">🔍</div>
          <div class="gallery__item-overlay">
            <span class="gallery__item-caption">${image.caption}</span>
          </div>
        `;

        item.addEventListener('click', () => this.openLightbox(image.id));
        grid.appendChild(item);
      });

      this.galleryContainer.appendChild(section);
    });
  },

  openLightbox(imageId) {
    const index = this.allImages.findIndex(img => img.id === imageId);
    if (index === -1) return;

    this.currentImageIndex = index;
    this.updateLightboxContent();
    this.lightbox.classList.add('show');
    document.body.classList.add('no-scroll');
    this.updateNavigationButtons();
  },

  closeLightbox() {
    this.lightbox.classList.remove('show');
    document.body.classList.remove('no-scroll');
  },

  navigateLightbox(direction) {
    if (direction === 'prev' && this.currentImageIndex > 0) {
      this.currentImageIndex--;
    } else if (direction === 'next' && this.currentImageIndex < this.allImages.length - 1) {
      this.currentImageIndex++;
    }
    this.updateLightboxContent();
    this.updateNavigationButtons();
  },

  updateLightboxContent() {
    const image = this.allImages[this.currentImageIndex];
    if (!image) return;
    this.lightboxImage.src = image.src;
    this.lightboxImage.alt = image.caption;
    this.lightboxCaption.textContent = image.caption;
  },

  updateNavigationButtons() {
    if (this.lightboxPrev) {
      this.lightboxPrev.disabled = this.currentImageIndex === 0;
      this.lightboxPrev.style.opacity = this.currentImageIndex === 0 ? '0.3' : '1';
    }
    if (this.lightboxNext) {
      this.lightboxNext.disabled = this.currentImageIndex === this.allImages.length - 1;
      this.lightboxNext.style.opacity = this.currentImageIndex === this.allImages.length - 1 ? '0.3' : '1';
    }
  },

  handleSwipe(direction) {
    if (direction === 'left') this.navigateLightbox('next');
    else if (direction === 'right') this.navigateLightbox('prev');
  },

  setupLightboxEvents() {
    if (this.lightboxClose) {
      this.lightboxClose.addEventListener('click', () => this.closeLightbox());
    }
    if (this.lightboxOverlay) {
      this.lightboxOverlay.addEventListener('click', () => this.closeLightbox());
    }
    if (this.lightboxPrev) {
      this.lightboxPrev.addEventListener('click', () => this.navigateLightbox('prev'));
    }
    if (this.lightboxNext) {
      this.lightboxNext.addEventListener('click', () => this.navigateLightbox('next'));
    }

    document.addEventListener('keydown', (e) => {
      if (!this.lightbox.classList.contains('show')) return;
      if (e.key === 'Escape') this.closeLightbox();
      else if (e.key === 'ArrowLeft') this.navigateLightbox('prev');
      else if (e.key === 'ArrowRight') this.navigateLightbox('next');
    });

    // Touch swipe
    if (this.lightbox) {
      this.lightbox.addEventListener('touchstart', (e) => {
        this.touchStartX = e.changedTouches[0].screenX;
      }, { passive: true });

      this.lightbox.addEventListener('touchend', (e) => {
        this.touchEndX = e.changedTouches[0].screenX;
        const diff = this.touchStartX - this.touchEndX;
        if (Math.abs(diff) > 50) {
          this.handleSwipe(diff > 0 ? 'left' : 'right');
        }
      }, { passive: true });
    }
  },

  updateGalleryCounts() {
    const photoEl = document.getElementById('photo-count');
    const eventEl = document.getElementById('event-count');
    if (photoEl) photoEl.textContent = this.allImages.length;
    if (eventEl) eventEl.textContent = galleryData.length;
  }
};

// ==================== ANIMATIONS ====================

const Animations = {
  observer: null,

  init() {
    if (!('IntersectionObserver' in window)) {
      this.showAllElements();
      return;
    }
    this.setupObserver();
    this.observeElements();
  },

  setupObserver() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          this.observer.unobserve(entry.target);
        }
      });
    }, { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.1 });
  },

  observeElements() {
    document.querySelectorAll('.scroll-animate, .stagger-item').forEach(el => {
      this.observer.observe(el);
    });
  },

  showAllElements() {
    document.querySelectorAll('.scroll-animate, .stagger-item').forEach(el => {
      el.classList.add('visible');
    });
  }
};

// ==================== INIT ====================
// ==================== PARTICLES ====================

const Particles = {
  container: null,
  particleCount: 20,

  init() {
    this.container = document.getElementById('particles');
    if (!this.container) return;
    this.createParticles();
  },

  createParticles() {
    for (let i = 0; i < this.particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      // Random properties
      const size = Math.random() * 10 + 5;
      const left = Math.random() * 100;
      const delay = Math.random() * 15;
      const duration = Math.random() * 10 + 10;
      
      particle.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${left}%;
        animation-delay: ${delay}s;
        animation-duration: ${duration}s;
        opacity: ${Math.random() * 0.5 + 0.2};
      `;
      
      this.container.appendChild(particle);
    }
  }
};

// ==================== COUNTER ANIMATION ====================

const CounterAnimation = {
  init() {
    this.animateCounters();
  },

  animateCounters() {
    const counters = document.querySelectorAll('.stat__number');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const finalValue = parseInt(target.textContent) || 0;
          this.animateValue(target, 0, finalValue, 1500);
          observer.unobserve(target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
  },

  animateValue(element, start, end, duration) {
    const startTime = performance.now();
    
    const update = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(start + (end - start) * easeOutQuart);
      
      element.textContent = current;
      
      if (progress < 1) {
        requestAnimationFrame(update);
      }
    };
    
    requestAnimationFrame(update);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  Navigation.init();
  Members.init();
  Gallery.init();
  Animations.init();
  Particles.init();
  CounterAnimation.init();
  console.log('Class Webpage initialized!');
});
