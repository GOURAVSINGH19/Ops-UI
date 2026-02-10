import { SidebarNavItem } from "../../types/nav"
import React from "react"
import { IconFile, IconFolders, IconStarSparkle } from "nucleo-glass"
type CodeThemeName = "default" | "min" | "vitesse" | "slack" | "nord" | "dracula" | "one-dark-pro" | "catppuccin"

interface DocsConfig {
    sidebarNav: SidebarNavItem[]
    codeTheme?: CodeThemeName
}

export const docsConfig: DocsConfig = {
    codeTheme: (process.env.CODE_THEME as CodeThemeName) || "nord",
    sidebarNav: [
        {
            title: "Getting Started",
            items: [
                {
                    title: "Introduction",
                    href: "/docs/introduction",
                    items: []
                },
                {
                    title: "Installation",
                    href: "/docs/installation",
                    items: [],
                },
                {
                    title: "Style",
                    href: "/docs/style/style",
                    items: [],
                    icon: <IconStarSparkle size={14} />
                }
            ],
            icon: <IconFile size={16} />
        },
        {
            title: "Components",
            items: [
                {
                    title: "Table",
                    href: "/docs/components/table",
                    items: [],
                },
                {
                    title: "Skeleton",
                    href: "/docs/components/skeleton",
                    items: [],
                }
            ],
            icon: <IconFolders size={16} />
        },
    ],
}
