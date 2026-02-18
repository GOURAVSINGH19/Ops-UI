export const components = [
  {
    id: "skeleton",
    name: "Skeleton",
    category: "Feedback",
    framework: "react",
    version: "1.0.0",
    status: "stable",
    tags: ["loading", "placeholder"],
    source: {
      type: "local",
      path: "components/docs/Skeleton.tsx"
    },
    dependencies: ["clsx", "tailwind-merge"],
    metadata: {
      props: ["className"],
      variants: [],
      previewUrl: "/docs/components/skeleton"
    },
    docs: {
      slug: "/components/skeleton",
      title: "Skeleton",
      description: "Used for loading states"
    }
  },
  {
    id: "table",
    name: "Table",
    category: "Data Display",
    framework: "react",
    version: "1.0.0",
    status: "stable",
    tags: ["data", "display"],
    source: {
      type: "local",
      path: "components/docs/Table.tsx"
    },
    dependencies: ["clsx", "tailwind-merge"],
    metadata: {
      props: ["data", "columns", "className"],
      variants: ["striped", "bordered"],
      previewUrl: "/docs/components/table"
    },
    docs: {
      slug: "/components/table",
      title: "Table",
      description: "Used for displaying data in tabular format"
    }
  },
  {
    id: "demo-user",
    name: "Demo User",
    category: "ui",
    framework: "react",
    version: "1.0.0",
    status: "stable",
    tags: [],
    source: {
      type: "local",
      path: "components/docs/Demo User.tsx"
    },
    dependencies: ["gg"],
    docs: {
      slug: "/components/demo-user",
      title: "Demo User",
      description: "Used for Demo User"
    }
  }
]