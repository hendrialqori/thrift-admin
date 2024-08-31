import React from "react"
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider, Navigate
} from "react-router-dom"
import * as Page from "#/pages"
import SharedLayout from "#/layouts/shared"

function appRoutes() {
    return createBrowserRouter(
        createRoutesFromElements(
            <React.Fragment>
                <Route path="/" element={<SharedLayout />}>
                    <Route path="/" element={<Navigate to="/products" />} />
                    <Route path="products">
                        <Route index element={<Page.Products />} />
                        <Route path=":productId/items" element={<Page.Items />} />
                        <Route path="add" element={<Page.AddBatch />} />
                    </Route>
                    <Route path="transactions" element={<Page.Transactions />} />
                </Route>
            </React.Fragment>
        )
    )
}

export default function AppRoute() {
    return <RouterProvider router={appRoutes()} />
}