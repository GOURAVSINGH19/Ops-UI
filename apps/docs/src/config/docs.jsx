import React from "react"
import { IconFolders } from "nucleo-glass"

export const docsConfig = {
    codeTheme: "nord",
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
            ],
        },
        {
            title: "Components",
            items: [
                {
                    title: "Buttons",
                    href: "/docs/components/button",
                    items: []
                },
                {
                    title: "Table",
                    href: "/docs/components/Table",
                    items: []
                }, {
                    title: "Skeleton",
                    href: "/docs/components/skeleton",
                    items: []
                },
            ],
            icon: <IconFolders size={16} />
        },
    ],
}
