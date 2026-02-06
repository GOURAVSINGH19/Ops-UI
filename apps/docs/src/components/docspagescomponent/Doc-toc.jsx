import React from "react"
import { cn } from "@workspace/ui/lib/utils"
export function DocsTableOfContents({ toc }) {
  return (
    <div className="space-y-2">
      <h4 className="text-sm font-medium">On this page</h4>
      <ul className="space-y-1">
        {toc.map((item) => (
          <li key={item.url}>
            <a
              href={item.url}
              className={cn(
                "block text-sm text-muted-foreground hover:text-foreground transition-colors"
              )}
            >
              {item.title}
            </a>
            {item.children && (
              <ul className="ml-4 mt-1 space-y-1">
                {item.children.map((child) => (
                  <li key={child.url}>
                    <a
                      href={child.url}
                      className={cn(
                        "block text-sm text-muted-foreground hover:text-foreground transition-colors"
                      )}
                    >
                      {child.title}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
