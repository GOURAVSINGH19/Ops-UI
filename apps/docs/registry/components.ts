export const components = [
    {
        id: "button",
        name: "Button",
        category: "Form",
        framework: "react",
        version: "1.0.0",
        status: "stable",
        tags: ["action", "cta"],
        source: {
            type: "local",
            path: "components/docs/ButtonVarients.tsx"
        },
        dependencies: ["clsx", "tailwind-merge"],
        docs: {
            slug: "/components/button",
            title: "Button",
            description: "Used for user actions"
        }
    },
    {
        id: "menu",
        name: "Menu",
        category: "Navigation",
        framework: "react",
        version: "1.0.0",
        status: "stable",
        tags: ["navigation", "sidebar"],
        source: {
            type: "local",
            path: "components/docs/Menu.tsx"
        },
        dependencies: ["lucide-react", "react-router-dom"],
        docs: {
            slug: "/components/menu",
            title: "Menu",
            description: "Docs sidebar navigation component"
        }
    },
]