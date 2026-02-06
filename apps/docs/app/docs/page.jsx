// import React from "react"
// import { Link, useParams } from "react-router-dom"
// import { mdxComponents } from "../../src/mdx-component"
// import {
//   ArrowLeft,
//   ArrowRight,
//   ArrowBigUp,
// } from "lucide-react"

// import { source } from "../../src/lib/source"
// import { Badge } from "@workspace/ui/components/ui/badge"
// import { docsConfig } from "../../src/config/docs"

// function flattenNav(items) {
//   const result = []
//   for (const item of items) {
//     if (item.href) {
//       result.push({ url: item.href, name: item.title })
//     }
//     if (item.items && item.items.length > 0) {
//       result.push(...flattenNav(item.items))
//     }
//   }
//   return result
// }

// function findNeighboursFromConfig(currentUrl) {
//   const pages = docsConfig.sidebarNav.flatMap(section => flattenNav(section.items))
//   const currentIndex = pages.findIndex(p => p.url === currentUrl)

//   if (currentIndex === -1) return { previous: null, next: null }

//   return {
//     previous: currentIndex > 0 ? pages[currentIndex - 1] : null,
//     next: currentIndex < pages.length - 1 ? pages[currentIndex + 1] : null,
//   }
// }

// export default function Page() {
//   const params = useParams()
//   const slug = params["*"]
//   const page = source.getPage(slug)

//   if (!page) {
//     return (
//       <div className="flex items-center justify-center h-full">
//         <h1 className="text-2xl font-bold">Page Not Found</h1>
//       </div>
//     )
//   }

//   const doc = page.data
//   const MDX = doc.body

//   const neighbours = findNeighboursFromConfig(page.url)
//   const links = doc.links

//   return (
//     <div
//       data-slot="docs"
//       className="flex items-stretch text-[1.05rem] sm:text-[15px] xl:w-full pt-4"
//     >
//       <div className="flex min-w-0 flex-1 flex-col">
//         <div className="h-(--top-spacing) shrink-0" />
//         <div className="mx-auto flex w-full max-w-6xl min-w-0 flex-1 flex-col gap-8 px-4 py-6 text-neutral-800 lg:py-8 lg:px-4 dark:text-neutral-300 bg-[#101010] rounded-md ring-[.5px] ring-white/20">
//           <div className="flex flex-col gap-2">
//             <div className="flex flex-col gap-2">
//               <div className="flex items-center justify-between">
//                 <h1 className="scroll-m-20 text-2xl lg:text-4xl font-semibold tracking-tight sm:text-3xl xl:text-4xl">
//                   {doc.title}
//                 </h1>
//                 <div className="docs-nav fixed inset-x-0 bottom-0 isolate z-50 flex items-center gap-2 px-6 py-4 backdrop-blur-sm static sm:z-0 sm:border-t-0 sm:bg-transparent sm:px-0 sm:pt-1.5 sm:backdrop-blur-none">
//                   {neighbours.previous &&
//                     <Link to={neighbours.previous.url}>
//                       <button className='rounded-full py-2 px-2 button-3 bg-[var(--bg)] flex items-center gap-2 w-max shadow-[var(--shadow-m)] cursor-pointer hover:shadow-[var(--shadow-l)]'>
//                         <ArrowLeft className="w-3 h-3 text-neutral-400" />
//                       </button>
//                     </Link>
//                   }
//                   {neighbours.next &&
//                     <Link to={neighbours.next.url}>
//                       <button className='rounded-full py-2 px-2  button-3 bg-[var(--bg)] flex items-center gap-2 w-max shadow-[var(--shadow-m)] cursor-pointer hover:shadow-[var(--shadow-l)]'>
//                         <ArrowRight className="w-3 h-3 text-neutral-400" />
//                       </button>
//                     </Link>}
//                 </div>
//               </div>
//               {doc.description && (
//                 <p className="text-muted-foreground text-[1.05rem] text-balance sm:text-base">
//                   {doc.description}
//                 </p>
//               )}
//             </div>
//             {links ? (
//               <div className="flex items-center space-x-2 pt-4">
//                 {links?.doc && (
//                   <Badge variant="secondary">
//                     <Link to={links.doc} target="_blank" rel="noreferrer">
//                       Docs <ArrowBigUp />
//                     </Link>
//                   </Badge>
//                 )}
//                 {links?.api && (
//                   <Badge variant="secondary">
//                     <Link to={links.api} target="_blank" rel="noreferrer">
//                       API Reference <ArrowBigUp />
//                     </Link>
//                   </Badge>
//                 )}
//               </div>
//             ) : null}
//           </div>
//           <div className="w-full flex-1 *:data-[slot=alert]:first:mt-0]">
//             <MDX components={mdxComponents} />
//           </div>
//         </div>
//         <div className="w-full hidden h-16 max-w-screen-xl items-center justify-between px-4 sm:flex md:px-2">
//           {neighbours.previous &&
//             <Link to={neighbours.previous.url}>
//               <button className='rounded-full py-2 px-4 button-3 bg-[var(--bg)] flex items-center gap-2 w-max shadow-[var(--shadow-s)] cursor-pointer hover:shadow-[var(--shadow-m)]'>
//                 <ArrowLeft className="w-4 h-4 text-neutral-400" />
//                 <span className='text-sm text-[#ffffff68]'>{neighbours.previous.name}</span>
//               </button>
//             </Link>
//           }
//           {neighbours.next &&
//             <Link to={neighbours.next.url}>
//               <button className='rounded-full  py-2 px-6  button-3 bg-[var(--bg)] flex items-center gap-2 w-max shadow-[var(--shadow-s)] cursor-pointer hover:shadow-[var(--shadow-m)]'>
//                 <span className='text-sm text-[#ffffff68]'>{neighbours.next?.name}</span>
//                 <ArrowRight className="w-4 h-4 text-neutral-400" />
//               </button>
//             </Link>}
//         </div>
//       </div>
//     </div >
//   )
// }
