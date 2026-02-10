# 🎨 UI Component Library

A modern, comprehensive component library built with Next.js, React, and TypeScript. This monorepo contains a fully documented, production-ready UI library with interactive examples and best practices.

---

## ✨ Features

- 🎯 **Pre-built Components** - Ready-to-use React components built on shadcn/ui
- 📚 **Interactive Documentation** - Live component previews and code examples
- 🎨 **Customizable Theming** - Flexible theming system with multiple color schemes
- 📱 **Fully Responsive** - Mobile-first design approach
- ♿ **Accessible** - WCAG compliant components
- 🚀 **Performance Optimized** - Built with Next.js 16 and Turbopack
- 📦 **Monorepo Structure** - Organized packages for easy maintenance

---

## 🏗️ Architecture

### Tech Stack

| Technology | Purpose |
|-----------|---------|
| [Next.js 16](https://nextjs.org/) | React framework with App Router |
| [TypeScript](https://www.typescriptlang.org/) | Type-safe development |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first styling |
| [shadcn/ui](https://ui.shadcn.com/) | Accessible component primitives |
| [Framer Motion](https://www.framer.com/motion/) | Smooth animations |
| [GSAP](https://gsap.com/) | Advanced animations |
| [Jotai](https://jotai.org/) | Lightweight state management |
| [Fumadocs](https://fumadocs.vercel.app/) | Documentation framework |
| [Turborepo](https://turbo.build/) | Monorepo build system |
| [pnpm](https://pnpm.io/) | Fast, disk-efficient package manager |

### Project Structure

```
ui-library/
├── apps/
│   └── web/                      # Main Next.js documentation app
│       ├── components/           # React components & layouts
│       ├── content/              # MDX documentation files
│       ├── app/                  # Next.js App Router
│       ├── public/               # Static assets
│       └── config/               # App configuration
│
├── packages/
│   ├── ui/                       # Shared UI component library
│   │   ├── src/components/       # Reusable components
│   │   ├── src/lib/              # Utilities & helpers
│   │   └── src/styles/           # Global styles
│   ├── eslint-config/            # Shared ESLint rules
│   └── typescript-config/        # Shared TypeScript configs
│
├── .github/
│   └── workflows/                # CI/CD pipelines
│
└── turbo.json                    # Turborepo configuration
```

---

## 🚀 Quick Start

### Prerequisites

Before getting started, ensure you have:

- **Node.js** ≥ 20.0.0 ([Download](https://nodejs.org/))
- **pnpm** ≥ 10.0.0 ([Install](https://pnpm.io/installation))

Enable pnpm with Corepack:
```bash
corepack enable pnpm
```

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/GOURAVSINGH19/UI.git
   cd UI
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start development server**
   ```bash
   pnpm dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser to see the documentation.

---

## 📖 Available Commands

### Development

```bash
# Start all apps in development mode
pnpm dev

# Start specific app
pnpm dev --filter=@workspace/web
```

### Building

```bash
# Build all apps and packages
pnpm build

# Build specific package
pnpm build --filter=@workspace/ui
```

### Linting & Formatting

```bash
# Run ESLint across all packages
pnpm lint

# Format code with Prettier
pnpm format

# Run type checking
pnpm type-check
```

### Testing

```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test:watch
```

---

## 📚 Components Available

### Currently Documented

- **Table** - Feature-rich data table with sorting, filtering, and pagination
- **Skeleton** - Loading placeholder component with multiple variants
- **Button** - Accessible button component with multiple variants

### Using Components

Import components from the shared UI library:

```tsx
import { Button } from "@workspace/ui/components/ui/button"
import { Table } from "@workspace/ui/components/docs/Table"
import Skeleton from "@workspace/ui/components/docs/Skeleton"

export default function MyComponent() {
  return (
    <div>
      <Button>Click me</Button>
      <Skeleton variant="text" width="100%" height={16} />
    </div>
  )
}
```

### Adding New Components

To add a new shadcn component:

```bash
pnpm dlx shadcn@latest add component-name
```

Components will be automatically added to the appropriate location.

---

## 🎨 Documentation

### Live Preview

Visit [http://localhost:3000/docs](http://localhost:3000/docs) to view:

- ✅ Interactive component previews
- ✅ Live code examples
- ✅ Component API documentation
- ✅ Best practices and patterns
- ✅ Accessibility guidelines

### Adding Documentation

Documentation files are located in `apps/web/content/docs/components/`:

```mdx
---
title: Component Name
description: Brief description
---

import { ComponentPreviewTabs } from "@/components/ComponentPreview";
import ComponentName from "@/components/usage/component-name";

## Overview
Component description...

## Usage
<ComponentPreviewTabs
  component={<ComponentName />}
  source={
    <>
```tsx
// Code example
```
    </>
  }
/>
```

---

## 🔧 Configuration

### Theme Configuration

Edit color schemes and themes in:
- `apps/web/config/docs.tsx` - Documentation theme
- `packages/ui/src/styles/` - Component styles

### Environment Variables

Create `.env.local` in the `apps/web` directory:

```env
# Add any environment variables needed
```

---

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Vercel will automatically deploy on every push to `main`

### Manual Build

```bash
# Build for production
pnpm build

# Preview production build locally
pnpm start
```

---

## 📦 Monorepo Workspace Structure

### Using Workspace

Reference packages in your dependencies:

```json
{
  "dependencies": {
    "@workspace/ui": "*",
    "@workspace/eslint-config": "*"
  }
}
```

### Workspace Commands

```bash
# Run command in specific package
pnpm --filter=@workspace/ui build

# Run command in all packages
pnpm -r lint
```

---

## 🤝 Contributing

### Development Workflow

1. Create a feature branch
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes and commit
   ```bash
   git commit -m "feat: add new component"
   ```

3. Push to your fork and create a Pull Request

### Code Quality

- Write TypeScript for type safety
- Follow the existing code style
- Test your changes thoroughly
- Update documentation for new features
- Ensure accessibility compliance

---

## 📋 Checklist for New Components

- [ ] Component TypeScript types defined
- [ ] Component is properly exported
- [ ] Documentation file created (.mdx)
- [ ] Usage examples provided
- [ ] Props documented in README
- [ ] Accessibility tested
- [ ] Mobile responsiveness verified
- [ ] Dark mode compatibility checked

---

## 🐛 Troubleshooting

### Common Issues

**Issue: `pnpm: command not found`**
```bash
corepack enable pnpm
```

**Issue: Port 3000 already in use**
```bash
pnpm dev -- -p 3001
```

**Issue: Dependencies not installing**
```bash
# Clear pnpm store
pnpm store prune

# Reinstall
pnpm install
```

**Issue: Build errors**
```bash
# Clean build cache
pnpm turbo clean

# Rebuild
pnpm build
```

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 👨‍💻 Author

**Gourav Singh**
- GitHub: [@GOURAVSINGH19](https://github.com/GOURAVSINGH19)

---

## 🔗 Useful Links

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [Turborepo Documentation](https://turbo.build/repo/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

---

## 📊 Project Status

- ✅ Core components built
- ✅ Documentation system live
- ✅ CI/CD pipeline configured
- 🚧 Component library expansion in progress
- 🚧 Additional examples being added

---

**Last Updated:** January 2026#