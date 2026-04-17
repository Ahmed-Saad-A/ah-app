# ☕ A.Sa3d Café — نظام عرض أسعار المنتجات

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?style=for-the-badge&logo=tailwindcss)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?style=for-the-badge&logo=typescript)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**A smart café price display system — scan a QR code and instantly see the product name, image, and price. No cashier needed.**

*Built for ITI Menofia Branch & NTI — Ministry of Communications and Information Technology*

</div>

---

## 📌 The Problem

In the café at ITI / NTI, when the cashier is absent, students have no way to know the prices of products. This leads to confusion and delays.

## ✅ The Solution

A web app where every product has a **QR code on its bag**. Students simply scan it with their phone camera → the product image, name, and price appear instantly → they pay and go. No cashier. No waiting.

---

## ✨ Features

| Feature | Description |
|---|---|
| 📱 **QR Scanner** | Scan any product QR to view its details instantly |
| 🏷️ **Product Display** | Shows product image, name, and price clearly |
| 🗂️ **Category Tabs** | Filter by Cold Drinks, Hot Drinks, Snacks, Biscuits, Bakery, Chocolate |
| 🔍 **Search & Sort** | Search by name, sort by price ascending or descending |
| 🔐 **Admin Dashboard** | Protected admin panel — only accessible with credentials |
| 🛡️ **Middleware Auth** | Next.js middleware protects all `/admin` routes via secure cookie |
| 📄 **Custom 404** | Friendly not-found page matching the café theme |
| 📱 **Fully Responsive** | Works on mobile, tablet, and desktop |
| 🌙 **RTL Support** | Full Arabic right-to-left layout |

---

## 🗂️ Project Structure

```
src/
├── app/
│   ├── (pages)/              # Public pages (Navbar + Footer)
│   │   ├── page.tsx          # Landing page
│   │   ├── products/         # Products listing with tabs & search
│   │   └── scan/             # QR scanner
│   ├── (admin)/              # Admin pages (no public layout)
│   │   └── dashboard/        # Admin dashboard — protected
│   ├── auth/
│   │   └── login/            # Admin login page
│   ├── not-found.tsx         # Custom 404
│   ├── layout.tsx            # Root layout
│   └── globals.css
├── components/
│   └── layout/
│       ├── Navbar.tsx
│       └── Footer.tsx
├── data.tsx                  # Products, categories, types
└── middleware.ts             # Protects /admin routes
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js `18+`
- npm / yarn / pnpm

### Installation

```bash
# Clone the repo
git clone https://github.com/your-username/cafe-qr-app.git
cd cafe-qr-app

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔐 Admin Access

The admin dashboard is fully protected. Direct URL access without login redirects automatically to the login page.

```
Email:    Ahmed-Saad@gmail.com
Password: A7med@123
```

> ⚠️ These are placeholder credentials. Replace with a proper auth system before production deployment.

---

## 🛠️ Tech Stack

- **[Next.js 15](https://nextjs.org/)** — App Router, Server Components, Middleware
- **[Tailwind CSS](https://tailwindcss.com/)** — Utility-first styling
- **[TypeScript](https://www.typescriptlang.org/)** — Type safety across the entire codebase
- **[Lucide React](https://lucide.dev/)** — Icon library
- **[next/image](https://nextjs.org/docs/app/api-reference/components/image)** — Optimized image loading

---

## 📸 Pages Overview

| Page | Route | Description |
|---|---|---|
| Landing | `/` | Hero section + category tabs + how it works |
| Products | `/products` | Full product list with search, filter, sort |
| Scanner | `/scan` | QR code scanner |
| Product Detail | `/product/[id]` | Single product view + price |
| Login | `/auth/login` | Admin-only login |
| Dashboard | `/admin/dashboard` | Add / edit / delete products |

---

## 🎨 Color Palette

```css
--primary:    #C8793A  /* Warm orange — main brand color */
--dark:       #2C1A0E  /* Deep brown — text & backgrounds */
--background: #FDF8F3  /* Cream white — page background */
--muted:      #8C7B6E  /* Warm gray — secondary text */
--success:    #4A9B6F  /* Green — confirmations */
```

---

## 👨‍💻 Developer

**Ahmed Saad** — Full Stack Developer

> Built with ❤️ for ITI Menofia Branch & NTI — Ministry of Communications and Information Technology 🇪🇬