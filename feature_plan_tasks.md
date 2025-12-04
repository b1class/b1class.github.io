# 📋 Feature Plan & Tasks - Lớp B1 Nguyễn Huệ

> Danh sách các tính năng dự kiến phát triển cho trang web lớp

---

## ✅ Đã hoàn thành

- [x] Danh sách thành viên với tìm kiếm, sắp xếp
- [x] Modal chi tiết thành viên với zoom avatar
- [x] Gallery ảnh với lightbox
- [x] Lịch sinh nhật với gift box
- [x] Quỹ lớp (Google Sheets)
- [x] Kết nối mạng xã hội (Messenger, Facebook)
- [x] Responsive design
- [x] Birthday banner thông báo
- [x] **Timeline / Lịch sử lớp** - Hiển thị các mốc quan trọng từ 2009-2025
- [x] **Reunion Event Planner** - Countdown, RSVP cho họp lớp 14 năm
- [x] **Statistics Dashboard** - Thống kê nghề nghiệp, họ, ảnh đại diện
- [x] **Dark Mode** - Chuyển đổi giao diện sáng/tối với system preference
- [x] **Member Spotlight** - Thành viên nổi bật hàng ngày trên hero section
- [x] **PWA Support** - Service Worker, offline page, manifest.json
- [x] **Quiz Game** - Trò chơi đoán tên qua ảnh với timer và điểm số

---

## 🚀 Tính năng mới đề xuất

### 1. 📅 Timeline / Lịch sử lớp ✅ DONE
**Mức độ ưu tiên:** ⭐⭐⭐ Cao

**Mô tả:** Timeline trực quan hiển thị các mốc quan trọng của lớp

**Tasks:**
- [x] Thiết kế UI timeline (vertical scroll)
- [x] Tạo data structure cho events
- [x] Render timeline với animations
- [x] Thêm ảnh và mô tả cho mỗi mốc
- [x] Responsive cho mobile

---

### 2. 🎉 Reunion Event Planner / Tổ chức họp lớp ✅ DONE
**Mức độ ưu tiên:** ⭐⭐⭐ Cao

**Mô tả:** Hệ thống tổ chức và RSVP cho các buổi họp lớp

**Tasks:**
- [x] UI hiển thị sự kiện sắp tới
- [x] Countdown timer đến ngày họp lớp
- [x] Danh sách RSVP (Tham gia / Không tham gia / Chưa xác nhận)
- [x] Thông tin chi tiết (thời gian, địa điểm, chi phí)
- [ ] Tích hợp Google Maps cho địa điểm (optional)

---

### 3. 🗺️ Member Map / Bản đồ thành viên
**Mức độ ưu tiên:** ⭐⭐ Trung bình

**Mô tả:** Bản đồ tương tác hiển thị nơi các thành viên đang sống/làm việc

**Tasks:**
- [ ] Thêm field `location` vào member data
- [ ] Tích hợp bản đồ (Leaflet.js hoặc Google Maps)
- [ ] Markers cho từng thành viên
- [ ] Popup hiển thị thông tin khi click
- [ ] Filter theo tỉnh/thành phố
- [ ] Thống kê số lượng theo vùng

---

### 4. 💬 Memory Wall / Tường kỷ niệm
**Mức độ ưu tiên:** ⭐⭐ Trung bình

**Mô tả:** Nơi thành viên có thể đăng và chia sẻ kỷ niệm

**Tasks:**
- [ ] UI dạng feed/wall
- [ ] Form đăng kỷ niệm mới
- [ ] Hiển thị ảnh, text, ngày tháng
- [ ] Tag thành viên trong bài viết
- [ ] Reactions (thích, tim, haha...)
- [ ] Lưu trữ data (localStorage hoặc backend)

**Lưu ý:** Cần backend để lưu trữ lâu dài

---

### 5. 📊 Statistics Dashboard / Thống kê lớp ✅ DONE
**Mức độ ưu tiên:** ⭐⭐ Trung bình

**Mô tả:** Dashboard hiển thị các thống kê thú vị về lớp

**Tasks:**
- [x] Biểu đồ phân bố nghề nghiệp (bar chart)
- [x] Thống kê thành viên có/không có ảnh (pie chart)
- [x] Fun facts (họ phổ biến nhất, số thành viên...)
- [x] Animations khi scroll vào view
- [ ] Biểu đồ sinh nhật theo tháng (optional)

---

### 6. 🌙 Dark Mode / Chế độ tối ✅ DONE
**Mức độ ưu tiên:** ⭐ Thấp

**Mô tả:** Chuyển đổi giữa giao diện sáng/tối

**Tasks:**
- [x] Tạo CSS variables cho dark theme
- [x] Toggle button trên header
- [x] Lưu preference vào localStorage
- [x] Smooth transition khi chuyển theme
- [x] Respect system preference (prefers-color-scheme)

---

### 7. 📱 PWA Support / Ứng dụng offline ✅ DONE
**Mức độ ưu tiên:** ⭐ Thấp

**Mô tả:** Cho phép cài đặt như app và truy cập offline

**Tasks:**
- [x] Tạo manifest.json
- [x] Service Worker cho caching
- [x] Offline fallback page
- [x] App icons (SVG)
- [ ] Push notifications cho sinh nhật (optional - cần backend)

---

### 8. ✨ Random Member Spotlight / Thành viên nổi bật ✅ DONE
**Mức độ ưu tiên:** ⭐ Thấp

**Mô tả:** Hiển thị ngẫu nhiên một thành viên mỗi ngày/tuần

**Tasks:**
- [x] Algorithm chọn ngẫu nhiên (seed theo ngày)
- [x] UI card nổi bật trên trang chủ
- [x] Link đến profile đầy đủ
- [ ] "Did you know?" facts (optional)

---

### 9. 🎵 Class Anthem / Bài hát của lớp
**Mức độ ưu tiên:** ⭐ Thấp

**Mô tả:** Phát nhạc nền hoặc bài hát kỷ niệm của lớp

**Tasks:**
- [ ] Audio player mini
- [ ] Playlist các bài hát kỷ niệm
- [ ] Mute/unmute control
- [ ] Lưu preference

---

### 10. 🎮 Mini Games / Trò chơi nhỏ ✅ PARTIALLY DONE
**Mức độ ưu tiên:** ⭐ Thấp

**Mô tả:** Các trò chơi vui về lớp

**Ideas:**
- [x] Quiz: Đoán tên qua ảnh (với timer 15s, 10 câu hỏi)
- [ ] Quiz: Đoán nickname
- [ ] Memory game với ảnh thành viên
- [ ] Leaderboard (cần backend)

---

## 🔧 Cải tiến kỹ thuật

### Performance
- [x] Lazy loading cho ảnh gallery
- [ ] Image optimization (WebP format)
- [ ] Code splitting nếu cần

### UX/UI
- [ ] Loading skeletons
- [ ] Better error handling
- [ ] Accessibility improvements (ARIA)
- [ ] Keyboard navigation

### Data
- [ ] Cập nhật thêm thông tin thành viên
- [ ] Thêm ảnh cho gallery
- [ ] Cập nhật ngày sinh còn thiếu

---

## 📝 Ghi chú

- Ưu tiên các tính năng không cần backend trước
- Có thể dùng Google Sheets/Firebase cho data động sau này
- Test kỹ trên mobile trước khi deploy

---

## 🗓️ Changelog

| Ngày | Thay đổi |
|------|----------|
| 04/12/2024 | Tạo file feature plan |
| 04/12/2024 | ✅ Hoàn thành Timeline, Reunion Event, Statistics, Dark Mode, Member Spotlight |
| 04/12/2024 | ✅ Hoàn thành PWA Support (manifest, service worker, offline page) |
| 04/12/2024 | ✅ Hoàn thành Quiz Game - Đoán tên qua ảnh |

