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
                    <Route index element={<Navigate to="/products" />} />

                    <Route path="products">
                        <Route index element={<Page.Products />} />

                        <Route path=":productId/items">
                            <Route index element={<Page.Items />} />

                            <Route path=":itemId" element={<Page.ItemId />} />
                        </Route>

                        <Route path="add" element={<Page.AddBatch />} />
                    </Route>

                    <Route path="transactions">
                        <Route index element={<Page.Transactions />} />

                        <Route path=":transactionId" element={<Page.TransactionId />} />

                        <Route path="add" element={<Page.AddTransaction />} />
                    </Route>
                </Route>
            </React.Fragment>
        )
    )
}

export default function AppRoute() {
    return <RouterProvider router={appRoutes()} />
}