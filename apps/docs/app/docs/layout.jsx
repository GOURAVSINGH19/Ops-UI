import { docsConfig } from "../../src/config/docs"
import { DocsSidebarNav } from "../../src/components/sidebar/Sidenav"
import { cn } from "@workspace/ui/lib/utils"
import { ScrollArea } from "@workspace/ui/components/ui/scroll-area"
import { Outlet } from "react-router-dom"


export default function DocsLayout() {
  return (
    <div className="border-b pt-10 md:pt-7">
      <div className="flex-1 items-start px-2 sm:px-4 md:grid md:grid-cols-[150px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[200px_minmax(0,1fr)] lg:gap-1 pt-4">
        <aside
          className={cn(
            "sticky top-14 z-30 -ml-2 hidden w-full shrink-0 md:block",
            "h-[calc(100svh-3.5rem)]"
          )}
        >
          <div className="h-full py-6 pr-2 lg:py-6 overflow-y-auto">
            <ScrollArea className="h-full">
              <DocsSidebarNav
                items={docsConfig.sidebarNav}
                className="text-white"
              />
            </ScrollArea>
          </div>
        </aside>
        <Outlet />
      </div>
    </div>
  )
}


