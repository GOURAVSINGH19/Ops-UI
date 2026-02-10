# 📘 Client Integration Guide

This guide explains how to add new components to the library, use the custom CLI, and update the documentation sidebar.

---

## 🛠️ 1. Using the CLI (`opscli`)

The `opscli` is a custom tool located in `packages/cli` that simplifies project management.

### Setup
Before using the CLI for the first time, build it:
```bash
pnpm --filter opscli build
```

### Commands
- **Initialize**: `opscli init` - Setup standard directories and config.
- **Add Component**: `opscli add <name>` - Pull a component from the registry.
- **List Components**: `opscli list` - See what's available.
- **Help**: `opscli help` - Show help information for any command.
---

## 🧩 2. Integrating a New Component

To add a new component to the UI library and make it available in the docs, follow these steps:

### Step A: Add Component to UI Package
Place your component source code in:
`packages/ui/src/components/ui/`

Example: `packages/ui/src/components/ui/my-new-component.tsx`

### Step B: (Optional) Register for CLI/Registry
If your project uses a registry (check `apps/docs/scripts/build-registry.ts`), you may need to run:
```bash
pnpm --filter docs build:registry
```

### Step C: Create Documentation Page
Add a new `.mdx` file in:
`apps/docs/src/content/docs/components/`

Example: `my-component.mdx`

```mdx
---
title: My Component
description: A brief description of what it does.
---

## Usage

```tsx
import { MyComponent } from "@workspace/ui/components/ui/my-component"

export default function Example() {
  return <MyComponent />
}
\```
```

---

## 📂 3. Updating the Sidebar

The documentation sidebar is controlled by a configuration file.

### Location
`apps/docs/src/config/docs.tsx`

### How to update
Add a New entry to the `sidebarNav` array:

```tsx
export const docsConfig = {
  sidebarNav: [
    {
      title: "Components",
      items: [
        {
          title: "Buttons",
          href: "/docs/components/button",
        },
        // ADD YOUR NEW COMPONENT HERE:
        {
          title: "My Component",
          href: "/docs/components/my-component",
        },
      ],
    },
  ],
}
```

---

## 📚 4. Using Documentation Tools

This project uses **Fumadocs** for generating documentation.

### Why Fumadocs?
- **MDX Support**: Write documentation using Markdown with embedded React components.
- **Search**: Built-in search functionality.
- **Performance**: Static site generation for lightning-fast docs.

### Previewing Changes
Run the development server to see your documentation changes in real-time:
```bash
pnpm dev --filter docs
```

---

## 📋 Checklist for New Components

- [ ] Component handles both light and dark modes.
- [ ] TypeScript interfaces are exported for all props.
- [ ] MDX documentation file includes at least one usage example.
- [ ] Sidebar link added to `docs.tsx`.
- [ ] Accessibility (ARIA labels, keyboard navigation) is verified.
