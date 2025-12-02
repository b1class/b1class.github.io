# Trang Web Lớp Học - Class Webpage

Trang web tĩnh dành cho lớp học, nơi các thành viên có thể xem thông tin lớp, danh sách thành viên và bộ sưu tập hình ảnh kỷ niệm.

## 🌟 Tính năng

- **Trang chủ**: Hiển thị thông tin tổng quan về lớp với hero section đẹp mắt
- **Danh sách thành viên**: Grid hiển thị thẻ thành viên với ảnh, tên và vai trò
- **Chi tiết thành viên**: Modal popup hiển thị thông tin chi tiết khi click vào thẻ
- **Bộ sưu tập ảnh**: Gallery hình ảnh được nhóm theo sự kiện
- **Lightbox**: Xem ảnh lớn với điều hướng và hỗ trợ swipe trên mobile
- **Responsive**: Tương thích tốt trên mobile, tablet và desktop
- **Animations**: Hiệu ứng scroll mượt mà và hover effects

## 📁 Cấu trúc dự án

```
class-webpage/
├── index.html              # Trang HTML chính
├── css/
│   ├── variables.css       # CSS custom properties (colors, spacing, etc.)
│   ├── styles.css          # Styles chính và animations
│   ├── components.css      # Styles cho các components
│   └── responsive.css      # Media queries cho responsive
├── js/
│   ├── main.js             # Entry point
│   ├── navigation.js       # Navigation logic
│   ├── members.js          # Members grid và modal
│   ├── gallery.js          # Gallery và lightbox
│   ├── animations.js       # Scroll animations
│   └── data/
│       ├── members-data.js # Dữ liệu thành viên
│       └── gallery-data.js # Dữ liệu gallery
├── images/
│   ├── hero/               # Ảnh hero section
│   ├── members/            # Ảnh thành viên
│   └── gallery/            # Ảnh gallery
├── tests/                  # Property-based tests
└── README.md
```

## 🚀 Cài đặt và chạy

### Chạy local

**Cách 1: Mở trực tiếp (đơn giản nhất)**
- Chỉ cần mở file `index.html` bằng trình duyệt (double-click)
- Trang web sẽ hoạt động ngay lập tức!

**Cách 2: Sử dụng local server (tùy chọn)**
```bash
# Clone repository
git clone https://github.com/your-username/class-webpage.git
cd class-webpage

# Sử dụng Python
python3 -m http.server 8080

# Hoặc sử dụng Node.js
npx serve
```

Truy cập `http://localhost:8080`

### Chạy tests

```bash
npm install
npm test
```

## 📝 Tùy chỉnh nội dung

### Thay đổi thông tin lớp

Chỉnh sửa file `index.html`:
- Thay đổi tên lớp trong `<title>` và `.hero__title`
- Cập nhật niên khóa trong `.hero__subtitle`
- Chỉnh sửa nội dung welcome message

### Thêm/sửa thành viên

Chỉnh sửa file `js/data/members-data.js`:

```javascript
{
  id: "member-xxx",
  name: "Họ và Tên",
  nickname: "Biệt danh",
  photo: "images/members/ten-file.jpg",
  role: "Vai trò (hoặc để trống)",
  birthday: "DD/MM/YYYY",
  contact: {
    email: "email@example.com",
    phone: "0123456789",
    facebook: "facebook.com/username"
  }
}
```

### Thêm ảnh gallery

1. Thêm ảnh vào thư mục `images/gallery/`
2. Chỉnh sửa file `js/data/gallery-data.js`:

```javascript
{
  name: "Tên sự kiện",
  date: "DD/MM/YYYY",
  images: [
    {
      id: "img-xxx",
      src: "images/gallery/ten-file.jpg",
      thumbnail: "images/gallery/ten-file-thumb.jpg",
      caption: "Mô tả ảnh"
    }
  ]
}
```

### Tùy chỉnh màu sắc

Chỉnh sửa CSS variables trong `css/variables.css`:

```css
:root {
  --color-primary: #4F46E5;      /* Màu chính */
  --color-secondary: #F59E0B;    /* Màu phụ */
  --gradient-hero: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

## 🌐 Deploy lên GitHub Pages

1. Push code lên GitHub repository

2. Vào Settings > Pages

3. Chọn Source: "Deploy from a branch"

4. Chọn Branch: `main` (hoặc `master`) và folder: `/ (root)`

5. Click Save

6. Trang web sẽ có địa chỉ: `https://your-username.github.io/repository-name/`

### Lưu ý khi deploy

- ✅ **100% Static** - Không cần server, chỉ cần HTML/CSS/JS
- ✅ Tất cả asset paths đều là relative paths
- ✅ Trang web hoạt động tốt từ cả root và subdirectory URLs
- ✅ Hình ảnh sử dụng lazy loading để tối ưu performance
- ✅ Có thể mở trực tiếp file `index.html` trong trình duyệt

## 🛠 Công nghệ sử dụng

- HTML5
- CSS3 (Custom Properties, Flexbox, Grid)
- JavaScript ES6+ (Modules)
- Intersection Observer API
- Touch Events API

## 📱 Responsive Breakpoints

- Mobile: < 768px (1 cột)
- Tablet: 768px - 1024px (2 cột)
- Desktop: > 1024px (3-4 cột)

## 📄 License

MIT License - Tự do sử dụng và chỉnh sửa cho mục đích cá nhân và giáo dục.
