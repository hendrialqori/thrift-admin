import React from "react"
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider, Navigate
} from "react-router-dom"
import * as Page from "@/pages"
import Layout from "@/components/layout"

function appRoutes() {
    return createBrowserRouter(
        createRoutesFromElements(
            <React.Fragment>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Navigate to="/products" />} />
                    <Route path="products" element={<Page.Product />} />
                    <Route path="transactions" element={<Page.Transaction />} />
                </Route>
            </React.Fragment>
        )
    )
}

export default function AppRoute() {
    return <RouterProvider router={appRoutes()} />
}