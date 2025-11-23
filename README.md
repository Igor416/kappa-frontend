# Kappa - Multi-Brand Product Showcase Platform

A modern, responsive web application built with React and TypeScript, designed to showcase products across multiple brands with internationalization support and a sleek user interface.

## 🚀 Features

- **Multi-Brand Support**: Dynamic routing for brand-specific product pages
- **Internationalization (i18n)**: Full support for multiple languages with automatic language detection
- **Responsive Design**: Built with Material-UI for a consistent, mobile-first experience
- **Modern UI/UX**: Smooth animations powered by Motion (Framer Motion) and interactive carousels
- **Type-Safe**: Fully typed with TypeScript for better developer experience and code reliability
- **RESTful API Integration**: Clean API layer for fetching product data
- **Component-Based Architecture**: Modular, reusable components for maintainability

## 🛠️ Tech Stack

### Core
- **React 19** - Latest React with modern hooks and concurrent features
- **TypeScript 5.7** - Type-safe development
- **Vite 6** - Fast build tool and development server

### UI & Styling
- **Material-UI (MUI) 6** - Comprehensive component library
- **Emotion** - CSS-in-JS styling solution
- **Motion (Framer Motion) 12** - Smooth animations and transitions
- **React Slick** - Carousel/slider components

### Routing & State
- **React Router DOM 7** - Client-side routing
- **Custom Hooks** - Reusable logic for routes, images, and window management

### Internationalization
- **i18next** - Internationalization framework
- **react-i18next** - React bindings for i18next
- **i18next-browser-languagedetector** - Automatic language detection
- **i18next-http-backend** - Load translations from server

### Development Tools
- **ESLint** - Code linting with TypeScript support
- **TypeScript ESLint** - Type-aware linting rules

## 📁 Project Structure

```
frontend/
├── src/
│   ├── app.tsx              # Main app layout with routing
│   ├── main.tsx             # Application entry point
│   ├── providers.tsx        # Context providers setup
│   ├── theme.ts             # Material-UI theme configuration
│   │
│   ├── components/          # Reusable UI components
│   │   ├── container.tsx
│   │   ├── footer.tsx
│   │   ├── image.tsx
│   │   ├── menu.tsx
│   │   └── index.tsx
│   │
│   ├── root/                # Home page components
│   │   ├── index.tsx
│   │   ├── banner.tsx
│   │   ├── about.tsx
│   │   ├── brands.tsx
│   │   ├── catalog.tsx
│   │   └── texts.tsx
│   │
│   ├── brand/               # Brand-specific pages
│   │   ├── index.tsx
│   │   ├── products.tsx
│   │   └── productBackdrop.tsx
│   │
│   ├── hooks/               # Custom React hooks
│   │   ├── image.tsx
│   │   ├── urlRoot.tsx
│   │   ├── useRoutes.tsx
│   │   └── useWindow.ts
│   │
│   ├── i18n/                # Internationalization setup
│   │   ├── i18n.ts
│   │   └── translation.tsx
│   │
│   └── utils/               # Utility functions
│       ├── api.ts           # API client
│       └── JSONTypes.ts     # TypeScript type definitions
│
├── static/                  # Static assets
├── index.html
├── vite.config.ts
└── package.json
```

## 🚦 Getting Started

### Prerequisites

- **Node.js** (v18 or higher recommended)
- **npm** or **yarn**

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the next available port).

### Build for Production

```bash
npm run build
```

The production build will be generated in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 📜 Available Scripts

- `npm run dev` - Start development server with hot module replacement
- `npm run build` - Build for production (TypeScript compilation + Vite build)
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## 🎨 Key Highlights

### Architecture
- **Component-driven development** with clear separation of concerns
- **Custom hooks** for reusable business logic
- **Type-safe API layer** with TypeScript interfaces
- **Centralized theme configuration** for consistent styling

### Performance
- **Code splitting** with React Router
- **Optimized images** with custom image handling hooks
- **Fast refresh** during development
- **Production-optimized builds** with Vite

### Developer Experience
- **TypeScript** for type safety and better IDE support
- **ESLint** configuration for code quality
- **Modular structure** for easy navigation and maintenance
- **Modern React patterns** (hooks, functional components)

## 🌐 Internationalization

The application supports multiple languages with:
- Automatic language detection based on browser settings
- Server-side translation loading
- Fallback to English if translations are unavailable
- Easy extension for additional languages

## 📝 Notes

This is a commercial project showcasing modern frontend development practices. The codebase demonstrates:
- Clean, maintainable code structure
- Modern React patterns and best practices
- TypeScript for type safety
- Responsive design principles
- Internationalization implementation
- API integration patterns

---

**Built with ❤️ using React, TypeScript, and Vite**
