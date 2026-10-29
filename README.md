# Upket Landing

Landing page cho **upket.com**. Mỗi app là một file `.md`, gồm một thẻ trên trang chủ và một trang riêng tại `/apps/<tên-file>/`. Site dùng Jekyll, GitHub Pages tự build.

## Cấu trúc

```
index.md          # tiêu đề + 1 câu giới thiệu
_products/*.md    # MỖI FILE = 1 APP (thẻ trang chủ + trang /apps/<tên-file>/)
_posts/*.md       # MỖI FILE = 1 BÀI VIẾT (trang /writing/<slug>/, 3 bài mới nhất hiện ở trang chủ)
writing/index.md  # trang /writing/ (danh sách bài + lọc theo tag)
about.md          # trang /about/
contact.md        # trang /contact/ (email, FAQ)
privacy/index.md  # trang /privacy/ (nguyên tắc chung + thẻ link tới từng app)
privacy/<app>.*   # chính sách riêng của từng app, layout policy (link này dùng cho store listing)
_config.yml       # tên site, email, link GitHub
assets/images/    # ảnh chụp màn hình (+ badges/ là badge App Store, Google Play)
assets/videos/    # video demo
assets/css/site.css    # không đặt tên style.css, vì theme mặc định của GitHub Pages sẽ ghi đè
_layouts/app.html # template trang app
CNAME             # tên miền upket.com
```

## Thêm app

Tạo `_products/<ten>.md`. Tên file sẽ thành đường dẫn `/apps/<ten>/` và tên trong terminal ở trang chủ. Chỉ `name` là bắt buộc:

```yaml
---
name: Tally
order: 1                        # thứ tự trên trang chủ
platforms: [iOS, Android]
version: 2.3.0                  # hiện ở bảng thông số
updated: 2026-10-02
license: MIT
device: phone                   # khung ảnh: phone | desktop | browser | plain (ảnh gốc, không khung)
image: /assets/images/tally/home.png   # ảnh bìa trên trang chủ (và ảnh poster của video)
# covers: [/assets/.../a.png, /assets/.../b.png]   # hoặc nhiều ảnh bìa cạnh nhau (khi không có video)
video: /assets/videos/tally.mp4        # video ngắn, tự chạy lặp, không tiếng
# youtube: dQw4w9WgXcQ                 # hoặc YouTube (id), bấm mới phát
screenshots:                    # dải ảnh trên trang app (video đứng đầu)
  - /assets/images/tally/home.png
  - /assets/images/tally/stats.png
install: brew install --cask tally     # lệnh cài, có nút copy
app_store: https://apps.apple.com/app/id...
google_play: https://play.google.com/store/apps/details?id=...
privacy: /privacy/tally/                # link "Privacy policy" trên thẻ + trang app
facts:                                 # dòng thêm trong bảng thông số
  internet: none — works fully offline
links:
  Join TestFlight: https://...
---
Đoạn đầu tiên = mô tả ngắn (hiện trên thẻ trang chủ, đầu trang app và meta description cho SEO).

## Features

Phần còn lại (Markdown: danh sách, bảng, code...) chỉ hiện trên trang app.
```

Ghi chú:
- Ảnh phone theo tỉ lệ ~390×844 (chụp từ máy là vừa). Ảnh desktop/browser theo tỉ lệ 16:10.
- Video tự host nên ngắn (< 30s), vài MB. Video dài thì dùng YouTube. Lệnh nén mẫu:
  `ffmpeg -i in.mov -vf scale=-2:1080 -c:v libx264 -crf 28 -movflags +faststart -an out.mp4`
- Badge App Store / Google Play là artwork chính thức. Không sửa badge, theo quy định của Apple và Google.
- `assets/images/sample/`, `assets/videos/sample/` là **nội dung mẫu**. 3 app thật (`upket-keyboard`, `upket-browser`, `up-clicker`) dùng ảnh trong `assets/images/<tên-app>/`, lấy từ Google Play.

## Chính sách riêng tư của app

Tạo `privacy/<ten-app>.md` (hoặc `.html`). Trang tự hiện thành thẻ trên `/privacy/`:

```yaml
---
layout: policy
permalink: /privacy/tally/
app: tally                      # trùng tên file trong _products/
app_name: Tally
platforms: [iOS, Android]
order: 2                        # thứ tự thẻ trên /privacy/
summary: Offline first, optional sync to your own cloud.
contact: privacy@upket.com
effective: 2026-10-28
# languages: [vi, en]           # nhiều ngôn ngữ: mỗi thứ tiếng 1 <div class="lang-panel" data-lang="..">, xem privacy/upket-keyboard.html
---
```

Link tới tab tiếng Anh: `/privacy/upket-keyboard/#en`. 3 chính sách trong `privacy/` chuyển nguyên văn từ privacy-policy.upket.com (repo `upket/upket.github.io`).

## Viết bài (writing)

Tạo `_posts/YYYY-MM-DD-<slug>.md`. Đường dẫn là `/writing/<slug>/`, RSS tự sinh ở `/feed.xml` (plugin `jekyll-feed`).

```yaml
---
title: How Tally stays fast offline
tags: [tally, engineering]      # hiện thành nút lọc ở /writing/
excerpt: Một câu tóm tắt cho danh sách bài và RSS.
---
Nội dung Markdown. Code block ```kotlin được tô màu sẵn.
```

3 bài trong `_posts/` là **nội dung mẫu**.

## Chạy local

```sh
bundle install
bundle exec jekyll serve   # http://localhost:4000
```

## Deploy lên GitHub Pages

1. Push repo lên GitHub.
2. Settings → Pages → Source: **Deploy from a branch**, chọn `main` và `/ (root)`.
3. Custom domain: `upket.com` (đã có file `CNAME`). Ở DNS, trỏ `A` record về
   `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`.
4. Bật **Enforce HTTPS** khi DNS đã nhận.

Nếu deploy dạng `<user>.github.io/<repo>`: đặt `baseurl: "/<repo>"` trong `_config.yml` và xoá `CNAME`.
