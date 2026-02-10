# 🎨 UI Component Library

A modern, comprehensive component library built with React, TypeScript, and Turborepo. This monorepo contains a fully documented, production-ready UI library with interactive examples and best practices.

---

## ✨ Features

- 🎯 **Pre-built Components** - Ready-to-use React components built on shadcn/ui primitives.
- 📚 **Interactive Documentation** - Live component previews and MDX-powered documentation via Fumadocs.
- 🎨 **Customizable Theming** - Flexible styling with Tailwind CSS 4.
- 📱 **Fully Responsive** - Mobile-first design approach.
- ♿ **Accessible** - WCAG compliant components using Radix UI.
- 🚀 **Performance Optimized** - Fast builds with Turborepo and Vite.
- 📦 **Monorepo Structure** - Organized workspaces for apps and packages.

---

## 🏗️ Architecture

### Tech Stack

| Technology | Purpose |
|-----------|---------|
| [React 19](https://react.dev/) | Core UI framework |
| [TypeScript](https://www.typescriptlang.org/) | Type-safe development |
| [Tailwind CSS 4](https://tailwindcss.com/) | Modern utility-first styling |
| [Radix UI](https://www.radix-ui.com/) | Accessible component primitives |
| [Framer Motion](https://www.framer.com/motion/) | Smooth animations |
| [GSAP](https://gsap.com/) | Advanced animations |
| [Jotai](https://jotai.org/) | Lightweight state management |
| [Fumadocs](https://fumadocs.vercel.app/) | Documentation framework |
| [Turborepo](https://turbo.build/) | Monorepo build system |
| [Vite](https://vitejs.dev/) | Frontend build tool |
| [pnpm](https://pnpm.io/) | Fast, disk-efficient package manager |

### Project Structure

```
my-turborepo/
├── apps/
│   ├── docs/                     # Documentation app (Vite + Fumadocs)
│   │   ├── src/components/       # Docs-specific components
│   │   ├── src/content/          # MDX documentation files
│   │   └── src/app/              # App routing & layouts
│   ├── backend/                  # Backend services
│   └── test/                     # Test & playground app
│
├── packages/
│   ├── ui/                       # Shared UI component library
│   │   ├── src/components/ui/    # shadcn/ui components
│   │   └── src/styles/           # Global styles & Tailwind config
│   ├── cli/                      # Project CLI tools
│   ├── eslint-config/            # Shared ESLint rules
│   └── typescript-config/        # Shared TypeScript configs
│
├── turbo.json                    # Turborepo configuration
└── pnpm-workspace.yaml           # Workspace definitions
```

---

## 🚀 Quick Start

### Prerequisites

Before getting started, ensure you have:

- **Node.js** ≥ 18.0.0
- **pnpm** ≥ 10.0.0
- 
### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/GOURAVSINGH19/Ops-ui.git
   cd Ops-ui
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start development server**
   ```bash\npnpm dev\n```

   This will start all applications in the workspace. Open [http://localhost:5173](http://localhost:5173) for documentation.

---

## 📖 Available Commands

### Development

```bash
# Start all apps in development mode
pnpm dev

# Start specific app
pnpm dev --filter=docs
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
pnpm check-types
```

### CLI Operations

The project includes a custom CLI (`opscli`) for managing components.

```bash
# Installation the CLI locally
npm i @demouser22/opscli

# Initialize a new project piece
opscli init

# Add a component from registry
opscli add <component-name>

# List all available components
opscli list

# Help
opscli help
```

---

## 🛠️ CLI (`opscli`)

The `opscli` package provides a set of commands to streamline the development process and component management.

### Commands

| Command | Description |
|-----------|---------|
| `init` | Initializes the project with necessary directories (`components/ui`, `lib`, `types`) and base configuration (`components.json`). |
| `add <name>` | Downloads and installs a specific component from the registry into your project. |
| `list` | Displays a list of all available components in the registry. |
| `help` | Shows help information for any command. |

---

## 📚 Components Available

### Currently Documented

- **Button** - Highly customizable button component.
- **Table** - Highly customizable Table component.
- **Dropdown** - Contextual menus.
- ... and more in `packages/ui/src/components/ui`

### Using Components

Import components from the shared UI library:

```tsx
import { Button } from "@workspace/ui/components/ui/button"

export default function MyComponent() {
  return (
    <Button variant="primary">Click me</Button>
  )
}
```

---

## 🎨 Documentation

### Live Preview

Visit the documentation app to view:

- ✅ Interactive component previews
- ✅ Live code examples
- ✅ Component API documentation
- ✅ Accessibility guidelines

### Adding Documentation

Documentation files are located in `apps/docs/src/content/docs/`:

```mdx
---
title: Component Name
description: Brief description
---

## Overview
Component description...

## Usage
Add your code examples here.
```

---

## 🤝 Contributing

1. Create a feature branch: `git checkout -b feature/your-feature-name`
2. Make your changes and commit: `git commit -m "feat: add new component"`
3. Push to your fork and create a Pull Request.

---

## ‍💻 Author

**Gourav Singh**
- GitHub: [@GOURAVSINGH19](https://github.com/GOURAVSINGH19)

---

**Last Updated:** February 2026
