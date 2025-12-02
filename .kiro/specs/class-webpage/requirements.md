# Requirements Document

## Introduction

Trang web lớp học tĩnh (static) dành cho các thành viên trong lớp có thể xem thông tin lớp, thông tin thành viên và bộ sưu tập hình ảnh kỷ niệm. Trang web được xây dựng bằng HTML, CSS và JavaScript thuần túy, với nội dung hiển thị bằng tiếng Việt. Trang web sẽ được triển khai trên GitHub Pages với thiết kế đẹp mắt, hiện đại và tối ưu cho mobile.

## Glossary

- **Class_Webpage**: Trang web tĩnh hiển thị thông tin lớp học, được triển khai trên GitHub Pages
- **Member**: Thành viên của lớp học với thông tin cá nhân
- **Memory_Gallery**: Bộ sưu tập hình ảnh kỷ niệm của lớp
- **Navigation**: Hệ thống điều hướng giữa các trang/phần của website
- **GitHub_Pages**: Dịch vụ hosting tĩnh miễn phí của GitHub
- **Visual_Theme**: Hệ thống thiết kế giao diện bao gồm màu sắc, typography và hiệu ứng

## Requirements

### Requirement 1

**User Story:** Là một thành viên lớp, tôi muốn xem trang chủ với thông tin tổng quan về lớp, để nắm bắt được thông tin cơ bản của lớp học.

#### Acceptance Criteria

1. WHEN a user visits the homepage THEN the Class_Webpage SHALL display the class name, school year, and a welcome message in Vietnamese
2. WHEN the homepage loads THEN the Class_Webpage SHALL display a hero section with a representative class photo
3. WHEN a user views the homepage THEN the Class_Webpage SHALL provide Navigation links to all main sections (Members, Gallery, About)

### Requirement 2

**User Story:** Là một thành viên lớp, tôi muốn xem danh sách tất cả thành viên trong lớp, để biết thông tin về bạn bè cùng lớp.

#### Acceptance Criteria

1. WHEN a user navigates to the members section THEN the Class_Webpage SHALL display a grid of all Member cards
2. WHEN displaying a Member card THEN the Class_Webpage SHALL show the member's photo, name, and role (if any)
3. WHEN a user clicks on a Member card THEN the Class_Webpage SHALL display detailed information including nickname, birthday, and contact info
4. WHEN the members list loads THEN the Class_Webpage SHALL sort members alphabetically by name

### Requirement 3

**User Story:** Là một thành viên lớp, tôi muốn xem bộ sưu tập hình ảnh kỷ niệm, để ôn lại những khoảnh khắc đẹp của lớp.

#### Acceptance Criteria

1. WHEN a user navigates to the gallery section THEN the Memory_Gallery SHALL display images organized by event or date
2. WHEN displaying gallery images THEN the Memory_Gallery SHALL show thumbnail previews in a responsive grid layout
3. WHEN a user clicks on a thumbnail THEN the Memory_Gallery SHALL open a lightbox showing the full-size image with caption
4. WHEN viewing the lightbox THEN the Memory_Gallery SHALL provide navigation controls to browse previous and next images
5. WHEN a user presses the Escape key or clicks outside the lightbox THEN the Memory_Gallery SHALL close the lightbox view

### Requirement 4

**User Story:** Là một thành viên lớp, tôi muốn trang web hiển thị đẹp trên mọi thiết bị, để có thể xem trên điện thoại hoặc máy tính.

#### Acceptance Criteria

1. WHEN the Class_Webpage is viewed on a mobile device (width < 768px) THEN the Class_Webpage SHALL adapt the layout to single-column format with touch-friendly spacing
2. WHEN the Class_Webpage is viewed on a tablet (768px - 1024px) THEN the Class_Webpage SHALL display 2-column layouts for member grids and gallery
3. WHEN the Class_Webpage is viewed on desktop (width > 1024px) THEN the Class_Webpage SHALL display 3-4 column layouts for optimal content viewing
4. WHEN the Navigation is accessed on mobile THEN the Class_Webpage SHALL provide a hamburger menu with smooth slide-in animation
5. WHEN touch gestures are used on mobile gallery THEN the Memory_Gallery SHALL support swipe left/right to navigate images

### Requirement 6

**User Story:** Là một thành viên lớp, tôi muốn trang web có giao diện đẹp mắt và hiện đại, để cảm thấy tự hào khi chia sẻ với người khác.

#### Acceptance Criteria

1. WHEN the Class_Webpage loads THEN the Visual_Theme SHALL apply a cohesive color palette with primary, secondary, and accent colors
2. WHEN displaying text content THEN the Visual_Theme SHALL use Vietnamese-friendly fonts with proper diacritics support
3. WHEN a user hovers over interactive elements THEN the Class_Webpage SHALL display smooth hover animations and transitions
4. WHEN sections scroll into view THEN the Class_Webpage SHALL apply subtle fade-in or slide-up animations
5. WHEN displaying Member cards THEN the Visual_Theme SHALL apply card shadows, rounded corners, and hover lift effects
6. WHEN the page loads THEN the Class_Webpage SHALL display a gradient or decorative header background

### Requirement 7

**User Story:** Là một quản trị viên, tôi muốn triển khai trang web trên GitHub Pages, để mọi thành viên có thể truy cập miễn phí.

#### Acceptance Criteria

1. WHEN the project is structured THEN the Class_Webpage SHALL use relative paths for all assets to ensure GitHub_Pages compatibility
2. WHEN deploying to GitHub_Pages THEN the Class_Webpage SHALL work correctly from both root and subdirectory URLs
3. WHEN the repository is configured THEN the Class_Webpage SHALL include an index.html file at the root level
4. WHEN images are loaded THEN the Class_Webpage SHALL use optimized image formats and lazy loading for fast page load

### Requirement 5

**User Story:** Là một thành viên lớp, tôi muốn điều hướng dễ dàng giữa các phần của trang web, để tìm thông tin nhanh chóng.

#### Acceptance Criteria

1. WHEN a user is on any page THEN the Navigation SHALL remain visible and accessible at the top of the viewport
2. WHEN a user clicks a Navigation link THEN the Class_Webpage SHALL smoothly scroll or navigate to the corresponding section
3. WHEN a user scrolls down the page THEN the Navigation SHALL remain fixed at the top (sticky navigation)
4. WHEN a Navigation link corresponds to the current section THEN the Navigation SHALL highlight that link as active
