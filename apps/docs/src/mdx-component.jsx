
import * as React from "react"
import { Link } from "react-router-dom"

import { cn } from "@workspace/ui/lib/utils"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/ui/accordion"
import { Alert, AlertDescription, AlertTitle } from "@workspace/ui/components/ui/alert"
import { AspectRatio } from "@workspace/ui/components/ui/aspect-ratio"
import { Button } from "@workspace/ui/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@workspace/ui/components/ui/tabs"
import { getIconForLanguageExtension } from "@workspace/ui/components/ui/icons"
import { ComponentPreviewTabs } from "./components/docspagescomponent/ComponentPreview.jsx"
import { CodeCollapsibleWrapper } from "./components/docspagescomponent/CodeCollapse.jsx"
import { ComponentSource } from "./components/docspagescomponent/ComponentSource.jsx"
import { Callout } from "./components/docspagescomponent/Callout.jsx"
import { DocsCopyPage } from "./components/docspagescomponent/Doc-copy-page.jsx"
import { DocsTableOfContents } from "./components/docspagescomponent/Doc-toc.jsx"

export const mdxComponents = {
  h1: ({ className, ...props }) => (
    <h1
      className={cn(
        "font-heading mt-2 scroll-m-28 text-3xl font-bold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }) => {
    return (
      <h2
        id={props.children
          ?.toString()
          .replace(/ /g, "-")
          .replace(/'/g, "")
          .replace(/\?/g, "")
          .toLowerCase()}
        className={cn(
          "font-heading mt-8 scroll-m-28 text-xl font-medium tracking-tight first:mt-0 lg:mt-8  *:[code]:text-xl",
          className
        )}
        {...props}
      />
    )
  },
  h3: ({ className, ...props }) => (
    <h3
      className={cn(
        "font-heading mt-8 scroll-m-28 text-lg font-medium tracking-tight *:[code]:text-xl",
        className
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }) => (
    <h4
      className={cn(
        "font-heading mt-8 scroll-m-28 text-base font-medium tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h5: ({ className, ...props }) => (
    <h5
      className={cn(
        "mt-8 scroll-m-28 text-base font-medium tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h6: ({ className, ...props }) => (
    <h6
      className={cn(
        "mt-8 scroll-m-28 text-base font-medium tracking-tight",
        className
      )}
      {...props}
    />
  ),
  a: ({ className, ...props }) => (
    <a
      className={cn("font-medium underline underline-offset-4", className)}
      {...props}
    />
  ),
  p: ({ className, ...props }) => (
    <p
      className={cn("leading-relaxed [&:not(:first-child)]:mt-6", className)}
      {...props}
    />
  ),
  strong: ({ className, ...props }) => (
    <strong className={cn("font-medium", className)} {...props} />
  ),
  ul: ({ className, ...props }) => (
    <ul className={cn("my-6 ml-6 list-disc", className)} {...props} />
  ),
  ol: ({ className, ...props }) => (
    <ol className={cn("my-6 ml-6 list-decimal", className)} {...props} />
  ),
  li: ({ className, ...props }) => (
    <li className={cn("mt-2", className)} {...props} />
  ),
  blockquote: ({ className, ...props }) => (
    <blockquote
      className={cn("mt-6 border-l-2 pl-6 italic", className)}
      {...props}
    />
  ),
  img: ({ className, alt, ...props }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img className={cn("rounded-md", className)} alt={alt} {...props} />
  ),
  hr: ({ ...props }) => (
    <hr className="my-4 md:my-8" {...props} />
  ),
  table: ({ className, ...props }) => (
    <div className="my-6 w-full overflow-y-auto">
      <table
        className={cn(
          "relative w-full overflow-hidden border-none text-sm",
          className
        )}
        {...props}
      />
    </div>
  ),
  tr: ({ className, ...props }) => (
    <tr
      className={cn("last:border-b-none m-0 border-b", className)}
      {...props}
    />
  ),
  th: ({ className, ...props }) => (
    <th
      className={cn(
        "px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }) => (
    <td
      className={cn(
        "px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  pre: ({ className, children, ...props }) => {
    return (
      <pre
        className={cn(
          "no-scrollbar min-w-0 overflow-x-auto px-4 py-3.5 outline-none has-[[data-highlighted-line]]:px-0 has-[[data-line-numbers]]:px-0 has-[[data-slot=tabs]]:p-0",
          className
        )}
        {...props}
      >
        {children}
      </pre>
    )
  },
  figure: ({ className, ...props }) => {
    return <figure className={cn(className)} {...props} />
  },
  figcaption: ({
    className,
    children,
    ...props
  }) => {
    const iconExtension =
      "data-language" in props && typeof props["data-language"] === "string"
        ? getIconForLanguageExtension(props["data-language"])
        : null

    return (
      <figcaption
        className={cn(
          "text-code-foreground [&_svg]:text-code-foreground flex items-center gap-2 [&_svg]:size-4 [&_svg]:opacity-70",
          className
        )}
        {...props}
      >
        {iconExtension}
        {children}
      </figcaption>
    )
  },
  Step: ({ className, ...props }) => (
    <h3
      className={cn(
        "font-heading mt-8 scroll-m-32 text-xl font-medium tracking-tight",
        className
      )}
      {...props}
    />
  ),
  Steps: ({ ...props }) => (
    <div
      className="[&>h3]:step steps mb-12 [counter-reset:step] *:[h3]:first:!mt-0"
      {...props}
    />
  ),
  image: ({
    src,
    className,
    width,
    height,
    alt,
    ...props
  }) => (
    <img
      className={cn("mt-6 rounded-md border", className)}
      src={typeof src === 'string' ? src : ''}
      width={Number(width)}
      height={Number(height)}
      alt={alt || ""}
      {...props}
    />
  ),
  Tabs: ({ className, ...props }) => {
    return <Tabs className={cn("relative mt-6 w-full", className)} {...props} />
  },
  TabsList: ({
    className,
    ...props
  }) => (
    <TabsList
      className={cn(
        "justify-start gap-4 rounded-none bg-transparent px-0",
        className
      )}
      {...props}
    />
  ),
  TabsTrigger: ({
    className,
    ...props
  }) => (
    <TabsTrigger
      className={cn(
        "text-muted-foreground data-[state=active]:text-foreground data-[state=active]:border-primary dark:data-[state=active]:border-primary hover:text-primary rounded-none border-0 border-b-2 border-transparent bg-transparent px-0 pb-3 text-base data-[state=active]:bg-transparent data-[state=active]:shadow-none dark:data-[state=active]:bg-transparent",
        className
      )}
      {...props}
    />
  ),
  TabsContent: ({
    className,
    ...props
  }) => (
    <TabsContent
      className={cn(
        "relative [&_h3.font-heading]:text-base [&_h3.font-heading]:font-medium *:[figure]:first:mt-0 [&>.steps]:mt-6",
        className
      )}
      {...props}
    />
  ),
  Tab: ({ className, ...props }) => (
    <div className={cn(className)} {...props} />
  ),
  Button,
  Callout,
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Alert,
  AlertTitle,
  AlertDescription,
  AspectRatio,
  // CodeTabs,
  ComponentPreviewTabs,
  ComponentSource,
  CodeCollapsibleWrapper,
  DocsCopyPage,
  DocsTableOfContents,
  // ComponentsList,
  Link: ({ className, href, ...props }) => (
    <Link
      to={href}
      className={cn("font-medium underline underline-offset-4", className)}
      {...props}
    />
  ),
  LinkedCard: ({ className, href, ...props }) => (
    <Link
      to={href}
      className={cn(
        "bg-surface text-surface-foreground hover:bg-surface/80 flex w-full flex-col items-center rounded-xl p-6 transition-colors sm:p-10",
        className
      )}
      {...props}
    />
  ),
  CitationList: ({ className, ...props }) => (
    <ul className={cn("list-none pl-0", className)} {...props} />
  ),
  CitationItem: ({ className, ...props }) => (
    <li
      className={cn(" flex items-start text-muted-foreground", className)}
      {...props}
    />
  ),
  CitationLink: ({ className, ...props }) => (
    <a className={cn(" ml-1 hover:underline", className)} {...props} />
  ),
  Citations: ({ className, ...props }) => (
    <div
      className={cn(
        "my-6 rounded-md border-l-4 border-border bg-transparent p-4 ",
        className
      )}
      {...props}
    />
  ),
}
