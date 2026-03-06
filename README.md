# 🛒 ShopHub - Modern E-commerce Platform

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js" alt="Next.js">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript" alt="TypeScript">
  <img src="https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma" alt="Prisma">
  <img src="https://img.shields.io/badge/Stripe-635BFF?style=for-the-badge&logo=stripe" alt="Stripe">
  <img src="https://img.shields.io/badge/Zustand-764ABC?style=for-the-badge" alt="Zustand">
</p>

> 🔥 **Production-ready E-commerce Platform** — A modern, full-featured online store with shopping cart, checkout, and admin dashboard.

## ✨ Features

### 🛍️ Shopping Experience
- **Product Catalog** — Beautiful grid layout with filters and search
- **Product Details** — High-quality images, variants, and descriptions
- **Shopping Cart** — Full-featured cart with quantity management
- **Checkout Flow** — Stripe integration for payments
- **User Accounts** — Order history and profile management

### 🎨 Modern UI/UX
- **Dark Theme** — Professional dark mode design
- **Responsive** — Works perfectly on mobile, tablet, and desktop
- **Animations** — Smooth transitions with Framer Motion
- **Tailwind CSS** — Utility-first styling

### 🔧 Technical Features
- **Next.js 14** — App Router, Server Actions
- **TypeScript** — Full type safety
- **Prisma ORM** — Type-safe database access
- **Zustand** — Lightweight state management
- **Stripe** — Secure payment processing

## 📸 Preview

<div align="center">
  <img src="/images/home.png" alt="Home Page" width="100%">
</div>

<div align="center">
  <img src="/images/products.png" alt="Products Page" width="100%">
</div>

<div align="center">
  <img src="/images/cart.png" alt="Shopping Cart" width="100%">
</div>

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/nguyenduchuynet/ecommerce-platform.git
cd ecommerce-platform

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env

# Initialize database
npx prisma migrate dev

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the store.

## 📁 Project Structure

```
├── prisma/
│   └── schema.prisma        # Database schema
├── src/
│   ├── app/
│   │   ├── api/           # API endpoints
│   │   ├── cart/          # Shopping cart page
│   │   ├── products/      # Products page
│   │   ├── layout.tsx     # Root layout
│   │   └── page.tsx       # Home page
│   ├── components/
│   │   └── store/         # Store components
│   │       ├── Header.tsx
│   │       ├── Footer.tsx
│   │       ├── Hero.tsx
│   │       └── ProductCard.tsx
│   └── lib/
│       ├── prisma.ts      # Prisma client
│       ├── store.ts       # Zustand cart store
│       └── utils.ts       # Utility functions
├── public/
│   └── images/            # Preview images
├── .env.example
├── package.json
└── README.md
```

## 🔌 API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/products` | GET | List all products |
| `/api/products` | POST | Create product (admin) |
| `/api/orders` | GET | List orders |
| `/api/orders` | POST | Create order |

## 💳 Stripe Integration

This platform includes Stripe integration for:
- Secure checkout
- Payment processing
- Webhook handling

Set up your Stripe keys in `.env`:
```
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
```

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 🛒 Demo Products

The platform includes demo products for showcase:
- Premium Wireless Headphones - $299.99
- Smart Watch Pro - $449.99
- Minimalist Backpack - $89.99
- Mechanical Keyboard - $179.99

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

MIT License — see [LICENSE](LICENSE) for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org) — React framework
- [Stripe](https://stripe.com) — Payment infrastructure
- [Tailwind CSS](https://tailwindcss.com) — Styling
- [Zustand](https://zustand-demo.pmnd.rs) — State management
- [Lucide React](https://lucide.dev) — Icons

---

<p align="center">
  Built with ❤️ by <a href="https://github.com/nguyenduchuynet">Huy Nguyen</a>
</p>

<p align="center">
  <a href="https://twitter.com/intent/tweet?text=Check+out+this+amazing+E-commerce+Platform!&url=https://github.com/nguyenduchuynet/ecommerce-platform">
    <img src="https://img.shields.io/badge/Tweet-Share-1DA1F2?style=for-the-badge&logo=twitter" alt="Tweet">
  </a>
</p>
