import React from "react"
import { Routes as ReactRouterRoutes, Route, Navigate } from "react-router-dom"
import ComponentLibraryDemo from "../components/home/Index"
import DocsLayout from "../../app/docs/layout"
// import DocsPage from "../../app/docs/page"

export const Routes = () => {
    return (
        <ReactRouterRoutes>
            <Route path="/" element={<ComponentLibraryDemo />} />
            <Route path="/docs" element={<DocsLayout />}>
                {/* <Route path="*" element={<DocsPage />} /> */}
            </Route>
        </ReactRouterRoutes>
    )
}