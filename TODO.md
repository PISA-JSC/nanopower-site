# TODO — Danh sách việc cần làm

Tất cả các chỗ còn placeholder trong dự án. Điền xong → xóa comment `# TODO:`.

---

## 1. src/data/site.yml — Thông tin công ty

| Dòng | Field | Việc cần làm |
|------|-------|--------------|
| 2 | `company_name` | Xác nhận tên đầy đủ trên giấy phép kinh doanh |
| 4 | `tagline` | Điền slogan chính thức của công ty |
| 6 | `founded_year` | Điền năm thành lập thực tế |
| 7 | `tax_code` | Điền mã số thuế thực tế |
| 8 | `address` | Điền địa chỉ đầy đủ (số nhà, phường, quận, TP) |
| 9 | `phone` | Điền số điện thoại chính thức |
| 10 | `email` | Điền email chính thức (dùng tên miền công ty) |
| 11 | `working_hours` | Xác nhận giờ làm việc thực tế |
| 13 | `map_embed_url` | Lấy link nhúng Google Maps: mở maps.google.com → tìm địa chỉ → Share → Embed a map → copy src URL |
| 15-18 | `social.*` | Điền URL các trang mạng xã hội |

---

## 2. src/data/home.yml — Trang chủ

| Dòng | Field | Việc cần làm |
|------|-------|--------------|
| 11-16 | `stats[0-5].value` | Điền 6 số liệu thực tế (năm KN, dự án, KH, kỹ sư, tỉnh thành, tỷ lệ hài lòng) |

---

## 3. src/content/projects/ — Dự án tiêu biểu

| File | Field | Việc cần làm |
|------|-------|--------------|
| `du-an-dong-goi.md` | `client` | Thay "Khách hàng A" bằng tên thật nếu được phép |
| `du-an-nuoc-thai.md` | `client` | Thay "Khách hàng B" bằng tên thật nếu được phép |
| `du-an-oee.md` | `client` | Thay "Khách hàng C" bằng tên thật nếu được phép |
| `du-an-iot-nha-kinh.md` | `client` | Thay "Khách hàng D" bằng tên thật nếu được phép |

---

## 4. src/content/posts/ — Bài viết

| File | Việc cần làm |
|------|--------------|
| `tin-cong-ty-1.md` | Viết tin tức thực tế, đổi `draft: true` → `draft: false` |
| `tin-cong-ty-2.md` | Viết tin tức thực tế, đổi `draft: true` → `draft: false` |
| `tuyen-dung-ky-su.md` | Điền mức lương và deadline tuyển dụng |

---

## 5. public/images/ — Ảnh thật

| Thư mục | Việc cần làm |
|---------|--------------|
| `public/images/covers/` | Thay các SVG placeholder bằng ảnh thật (1200×630px, JPG hoặc WebP) |
| Logo | Thêm logo thật: `public/favicon.svg` và `public/images/logo-white.svg` (phiên bản nền tối) |

---

## 6. astro.config.mjs — Cấu hình deploy

| Việc cần làm |
|--------------|
| Nếu có tên miền riêng (ví dụ `nanopower.vn`), đổi `site: 'https://phamduckhanh.github.io'` thành tên miền thật và xóa `base: '/nanopower-site'` |

---

## 7. src/pages/lien-he.astro — Form liên hệ

| Việc cần làm |
|--------------|
| Cấu hình dịch vụ nhận email (Formspree hoặc tương đương) để form thật sự gửi mail về hộp thư công ty |

---

## 8. GitHub Actions Setup (thao tác UI)

Làm tuần tự sau khi push code:

1. **Tạo repo**: https://github.com/new → tên `nanopower-site`, Public
2. **Push code** (xem hướng dẫn trong README.md)
3. **Bật GitHub Pages**: Settings → Pages → Source: GitHub Actions
4. **Cài Pages CMS**: https://app.pagescms.org → Sign in GitHub → Chọn repo

---

## 9. Tùy chọn nâng cao (sau khi site hoạt động)

- [ ] Thêm Google Analytics / Plausible analytics
- [ ] Cấu hình tên miền riêng (custom domain)
- [ ] Thêm ảnh thật cho các dự án (khi được khách hàng cho phép)
- [ ] Thêm trang cảm ơn sau khi submit form liên hệ
- [ ] Cài đặt Zalo Chat widget
