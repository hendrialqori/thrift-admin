import { Suspense } from "react";
import { Sidebar } from "#/modules/sidebar";
import { Outlet } from "react-router-dom"

export default function SharedLayout() {
    return (
        <main className="flex font-Inter">
            <Sidebar />
            <Suspense fallback={<p>Loading ...</p>}>
                <Outlet />
            </Suspense>
        </main>
    )
}