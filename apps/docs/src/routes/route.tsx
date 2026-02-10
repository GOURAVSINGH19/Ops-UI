import React from "react"
import { Routes as ReactRouterRoutes, Route } from "react-router-dom"
import ComponentLibraryDemo from "../components/home/Index"
import DocsLayout from "../../app/docs/layout"

export const Routes = () => {
    return (
        <ReactRouterRoutes>
            <Route path="/" element={<ComponentLibraryDemo />} />
            <Route path="/docs" element={<DocsLayout />} />
            <Route path="/docs/*" element={<DocsLayout />} />
        </ReactRouterRoutes>
    )
}