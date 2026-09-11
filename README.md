# Nano Power — Website doanh nghiệp

Website tĩnh cho **Công ty cổ phần Nano Power**, xây dựng với Astro 7 + Tailwind CSS v4.  
Nội dung lưu trong Markdown/YAML, quản lý qua [Pages CMS](https://pagescms.org).  
Deploy tự động lên GitHub Pages qua GitHub Actions.

**Live site:** https://phamduckhanh.github.io/nanopower-site/

---

## Cấu trúc thư mục

```
nanopower-site/
├── .github/workflows/deploy.yml  # CI/CD tự động deploy
├── .pages.yml                     # Cấu hình Pages CMS
├── public/images/covers/          # Ảnh placeholder SVG
├── src/
│   ├── components/                # 12 component tái sử dụng
│   ├── content/
│   │   ├── posts/                 # 10 bài viết (.md)
│   │   ├── solutions/             # 6 giải pháp (.md)
│   │   └── projects/              # 4 dự án tiêu biểu (.md)
│   ├── data/
│   │   ├── site.yml               # Thông tin công ty (ĐIỀN TRƯỚC)
│   │   └── home.yml               # Nội dung trang chủ
│   ├── layouts/Base.astro         # Layout chung
│   ├── pages/                     # 12 trang
│   └── utils/                     # url.ts, data.ts
├── astro.config.mjs
└── src/styles/global.css          # Tailwind + design tokens
```

---

## Chạy dự án local

```bash
cd nanopower-site
npm install
npm run dev        # http://localhost:4321/nanopower-site/
npm run build      # build production
npm run preview    # xem trước bản build
```

---

## Thêm và sửa nội dung

### Cách 1: Dùng Pages CMS (khuyến nghị)

1. Truy cập https://app.pagescms.org và đăng nhập GitHub
2. Chọn repo `phamduckhanh/nanopower-site`
3. Chỉnh sửa bài viết, giải pháp, dự án và thông tin công ty
4. Save → tự động commit + deploy

### Cách 2: Sửa file trực tiếp

**Thêm bài viết:** Tạo file `.md` trong `src/content/posts/`, copy frontmatter mẫu.  
**Sửa thông tin công ty:** Mở `src/data/site.yml`.

---

## Mối liên hệ .pages.yml ↔ schema code

Tên `name:` trong `.pages.yml` phải khớp CHÍNH XÁC với tên field trong `src/content.config.ts`.  
Nếu thêm field: cập nhật cả hai file cùng lúc.

---

## Cấu hình form liên hệ

Hiện tại dùng `mailto:` fallback (mở email client). Để nhận email qua backend:

**Dùng Formspree (miễn phí):**
1. Đăng ký tại https://formspree.io → tạo form → lấy endpoint `https://formspree.io/f/xxx`
2. Trong `src/pages/lien-he.astro`: thêm `action="https://formspree.io/f/xxx" method="POST"` vào `<form>`
3. Xóa thẻ `<script>` ở cuối file

---

## Deploy GitHub Pages (hướng dẫn từng bước)

### Bước 1: Tạo repo tại https://github.com/new
- Tên: `nanopower-site` | Public | Không khởi tạo README

### Bước 2: Push code

```bash
git add .
git commit -m "feat: initial website setup"
git branch -M main
git remote add origin https://github.com/phamduckhanh/nanopower-site.git
git push -u origin main
```

### Bước 3: Bật GitHub Pages

Settings → Pages → Source: **GitHub Actions** → Save

### Bước 4: Cài Pages CMS

https://app.pagescms.org → Sign in GitHub → Chọn repo

---

## Stack

Astro 7 · Tailwind CSS v4 · Be Vietnam Pro · Playfair Display · @astrojs/sitemap · @astrojs/rss · js-yaml · Pages CMS · GitHub Actions · GitHub Pages
