<div align="center">

<br/>

# ✦ VELOUR SALON
### Luxury Beauty Studio — Official Website

<br/>

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Responsive](https://img.shields.io/badge/Responsive-Design-C9837A?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-C4A35A?style=for-the-badge)

<br/>

> *A modern, luxury, and fully responsive informational salon website built with pure HTML, CSS, and JavaScript — no frameworks, no dependencies.*

<br/>

[🌐 Live Demo](https://velour-salon-02964169-30eb4.web.app/) &nbsp;·&nbsp; [📸 Screenshots](#-screenshots) &nbsp;·&nbsp; [🚀 Quick Start](#-quick-start) &nbsp;·&nbsp; [📁 File Structure](#-file-structure) &nbsp;·&nbsp; [🛠 Customization](#-customization)

<br/>

---

</div>

<br/>

## 📌 Overview

**Velour Salon** is a premium, fully responsive informational website designed for a luxury beauty studio. It features a sleek dark-and-rose-gold aesthetic, elegant animations, and a smooth user experience across all devices — from mobile phones to 4K desktops.

This project was built to attract clients, showcase services professionally, build brand trust, and encourage appointment bookings.

<br/>

## ✨ Key Features

| Feature | Description |
|--------|-------------|
| 🏠 **3 Full Pages** | Home, About Us, Services — each fully designed |
| 🎨 **Luxury UI** | Rose gold + charcoal palette, Playfair Display typography |
| 📱 **Mobile-First** | Fully responsive on all screen sizes |
| 🔝 **Sticky Navbar** | Transparent on hero, frosted glass on scroll |
| ☰ **Mobile Menu** | Animated hamburger with smooth open/close |
| 🎞 **Scroll Animations** | Fade-in, fade-left, fade-right via IntersectionObserver |
| 🌟 **Hero Section** | Animated glowing orbs, gradient overlay, badge, dual CTA |
| 📊 **Stats Strip** | 12+ years, 8K+ clients, 24 stylists, 98% satisfaction |
| 💈 **Services Filter** | Filter by Hair, Makeup, Skin, Nails, Spa, Bridal |
| 💬 **Testimonials Carousel** | Auto-slides + manual prev/next controls |
| 🖼 **Gallery Grid** | Masonry-style with hover zoom and overlay effects |
| 📅 **Booking Form** | Full appointment form with validation |
| 👥 **Team Section** | 4 stylists with roles and social links |
| 🕰 **Timeline** | Salon journey from 2013 to 2025 |
| 📧 **Newsletter** | Subscription with confirmation feedback |
| 💬 **WhatsApp Button** | Floating direct chat integration |
| 🔼 **Back to Top** | Smooth scroll-to-top button |
| 🔍 **SEO Ready** | Semantic HTML5, meta tags, alt attributes |

<br/>

## 📸 Screenshots

<div align="center">

| Page | Preview |
|------|---------|
| 🏠 Home — Hero | *(Add screenshot here)* |
| 🏠 Home — Services | *(Add screenshot here)* |
| 🏠 Home — Testimonials | *(Add screenshot here)* |
| 👤 About — Story & Team | *(Add screenshot here)* |
| 💈 Services — Filter Grid | *(Add screenshot here)* |
| 📅 Booking Form | *(Add screenshot here)* |

> 💡 **Tip:** Use [Screely](https://screely.com) or [Shots.so](https://shots.so) to create beautiful browser mockup screenshots for your README.

</div>

<br/>

## 📁 File Structure

```
velour-salon/
│
├── 📄 index.html                  ← Home Page
│
├── 📂 pages/
│   ├── 📄 about.html              ← About Us Page
│   └── 📄 services.html           ← Services Page (with filter)
│
├── 📂 css/
│   ├── 🎨 base.css                ← CSS variables, resets, global buttons
│   ├── 🎨 navbar.css              ← Sticky navbar & mobile menu
│   ├── 🎨 hero.css                ← Hero section, orbs, scroll indicator
│   ├── 🎨 sections.css            ← Stats, gallery, booking, testimonials
│   ├── 🎨 cards.css               ← Feature, service & team cards
│   ├── 🎨 footer.css              ← Footer layout & newsletter
│   ├── 🎨 animations.css          ← Fade-in/left/right animation classes
│   └── 🎨 responsive.css          ← Mobile & tablet breakpoints
│
├── 📂 js/
│   ├── ⚙️ navbar.js               ← Sticky behavior + hamburger toggle
│   ├── ⚙️ animations.js           ← IntersectionObserver scroll animations
│   ├── ⚙️ slider.js               ← Testimonials auto-carousel
│   ├── ⚙️ filter.js               ← Services category filter
│   └── ⚙️ booking.js              ← Form validation & newsletter
│
├── 📂 assets/
│   ├── 📂 images/                 ← Add your salon photos here
│   └── 📂 icons/                  ← Custom SVG icons (if needed)
│
└── 📄 README.md                   ← Project documentation
```

<br/>

## 🎨 Design System

### Color Palette

| Name | Hex | Usage |
|------|-----|-------|
| Rose | `#C9837A` | Primary brand color, buttons, accents |
| Rose Light | `#E8B4AE` | Hover states, soft highlights |
| Rose Pale | `#F5E8E6` | Section backgrounds |
| Rose Dark | `#8B4A44` | Hover darken, headings |
| Gold | `#C4A35A` | Accent, icons, logo dot |
| Gold Light | `#E2CC96` | Dark section text accents |
| Charcoal | `#2C2520` | Dark backgrounds, footer |
| Cream | `#FAF6F1` | Light section backgrounds |
| Warm White | `#FFFCF9` | Page background |

### Typography

| Role | Font | Weight |
|------|------|--------|
| Display / Headings | Playfair Display | 400, 600, 700 |
| Subheadings / Quotes | Cormorant Garamond | 300, 400, 500 |
| Body / UI | Jost | 300, 400, 500, 600 |

<br/>

## 🚀 Quick Start

### Option 1 — Open Directly in Browser

```bash
# Clone the repository
git clone https://github.com/yourusername/velour-salon.git

# Navigate into project
cd velour-salon

# Open in browser
open index.html        # macOS
start index.html       # Windows
xdg-open index.html    # Linux
```

### Option 2 — VS Code Live Server

1. Open the project folder in **VS Code**
2. Install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension
3. Right-click `index.html` → **Open with Live Server**
4. Site opens at `http://127.0.0.1:5500`

### Option 3 — Python Local Server

```bash
cd velour-salon

# Python 3
python -m http.server 8080

# Visit: http://localhost:8080
```

<br/>

## 🌐 Deployment

### ▶ Netlify (Recommended — Free & Fast)

1. Go to [netlify.com](https://netlify.com) and sign up
2. Click **"Add new site" → "Deploy manually"**
3. Drag and drop the entire `velour-salon/` folder
4. Your site is live instantly with a free `.netlify.app` URL

### ▶ GitHub Pages (Free)

1. Push this repository to GitHub
2. Go to **Settings → Pages**
3. Set **Source** to `main` branch, `/ (root)` folder
4. Click **Save** — site goes live at:

```
https://yourusername.github.io/velour-salon
```

### ▶ Vercel (Free)

```bash
npm install -g vercel
cd velour-salon
vercel
```

### ▶ Traditional Hosting (cPanel / Hostinger / GoDaddy)

1. Log into your hosting control panel
2. Open **File Manager → public_html**
3. Upload all project files
4. Your site is live at your custom domain

<br/>

## 🛠 Customization

### 🔤 Change Salon Name

Find and replace `Velour` across all HTML files with your salon name.

### 🎨 Change Brand Colors

Edit CSS variables in `css/base.css`:

```css
:root {
  --rose:       #C9837A;   /* Primary color */
  --rose-dark:  #8B4A44;   /* Darker shade */
  --gold:       #C4A35A;   /* Accent color */
  --charcoal:   #2C2520;   /* Dark sections */
  --cream:      #FAF6F1;   /* Light backgrounds */
}
```

### 📞 Update Contact Information

Search and replace in HTML files:

| Placeholder | Replace With |
|-------------|--------------|
| `+91 9876 543 210` | Your phone number |
| `hello@veloursalon.in` | Your email address |
| `42 Fashion Street, Civil Lines, Meerut, UP` | Your full address |
| `wa.me/919876543210` | Your WhatsApp number |

### 🖼 Add Real Images

Replace emoji placeholders in `.service-img-inner` divs:

```html
<!-- Before -->
<div class="service-img-inner">✂️</div>

<!-- After -->
<img src="../assets/images/hair-styling.jpg" alt="Hair Styling" loading="lazy" />
```

**Recommended image dimensions:**

| Section | Recommended Size |
|---------|-----------------|
| Hero Background | 1920 × 1080 px |
| Service Cards | 600 × 400 px |
| Team Photos | 400 × 500 px |
| Gallery Images | 800 × 800 px |

### 💰 Update Service Pricing

Search for `₹` in the HTML files and update prices inside `.service-price` spans.

<br/>

## 📄 Pages Breakdown

### 🏠 `index.html` — Home Page
- Luxury hero with animated glowing orbs and dual CTA buttons
- "Why Choose Us" — 4 feature cards with hover glow
- Stats counter strip on dark background
- Services preview (3 cards + link to full services)
- Auto-sliding testimonials carousel
- Masonry-style salon gallery with hover overlays
- CTA booking banner
- Full appointment booking form with validation

### 👤 `pages/about.html` — About Us
- Page hero with gradient background
- Salon story section with floating achievement badge
- Interactive vertical timeline (2013–2025)
- Mission & Vision feature cards
- Stats strip
- Team section — 4 stylist cards with roles and social links

### 💈 `pages/services.html` — Services
- Page hero
- Category filter buttons (All, Hair, Makeup, Skin, Nails, Spa, Bridal)
- 15 service cards with pricing, duration, and descriptions
- Smooth filter transitions with animation re-trigger
- Full appointment booking form

<br/>

## 🧩 JavaScript Modules

| File | Responsibility |
|------|---------------|
| `navbar.js` | Sticky nav on scroll, hamburger toggle with animation, click-outside-close |
| `animations.js` | IntersectionObserver — triggers `.visible` on scroll enter |
| `slider.js` | Testimonial carousel — auto-slide every 4.5s, manual prev/next, resize reset |
| `filter.js` | Service filter — shows/hides cards by `data-cat` attribute with re-animation |
| `booking.js` | Form validation, inline error messages, newsletter subscribe feedback |

<br/>

## 📱 Browser Support

| Browser | Version | Support |
|---------|---------|---------|
| Chrome | 80+ | ✅ Full |
| Firefox | 75+ | ✅ Full |
| Safari | 13+ | ✅ Full |
| Edge | 80+ | ✅ Full |
| Opera | 67+ | ✅ Full |
| IE 11 | — | ❌ Not supported |

<br/>

## ⚡ Performance

- CSS split into **8 focused files** for easy maintenance
- Images use `loading="lazy"` attribute
- Google Fonts loaded with `display=swap` to prevent FOUT
- Animations use **CSS transitions + IntersectionObserver** — no heavy animation libraries
- **Zero dependencies** — no jQuery, no React, no build tools required

<br/>

## 🔮 Future Enhancements

- [ ] Add real salon photos to `assets/images/`
- [ ] Connect booking form to [EmailJS](https://emailjs.com) or a backend
- [ ] Add Google Maps embed in the contact section
- [ ] Integrate Instagram feed via Instagram Basic Display API
- [ ] Add before/after transformation image slider
- [ ] Implement dark / light mode toggle
- [ ] Add a Blog / Tips section
- [ ] Online payment integration (Razorpay / Stripe)
- [ ] Membership plans and gift card pages
- [ ] Progressive Web App (PWA) support

<br/>

## 📜 License

This project is licensed under the **MIT License** — free to use, modify, and distribute for personal or commercial projects.

```
MIT License — Copyright (c) 2026 Velour Salon

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software to deal in the Software without restriction, including the
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
sell copies of the Software.
```

<br/>

## 🙌 Acknowledgements

- [Google Fonts](https://fonts.google.com) — Playfair Display, Cormorant Garamond, Jost
- [Font Awesome 6](https://fontawesome.com) — UI Icons
- [Netlify](https://netlify.com) — Free static site hosting
- [Shields.io](https://shields.io) — README badges

<br/>

---

<div align="center">

Made with ♥ for beauty &nbsp;|&nbsp; © 2026 Velour Salon

<br/>

⭐ **If you found this useful, please give the repo a star!** ⭐

</div>
