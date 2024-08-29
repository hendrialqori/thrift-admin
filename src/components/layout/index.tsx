import { Suspense } from "react";
import Sidebar from "./desktop/Sidebar";
import { Outlet } from "react-router-dom"

export default function Layout() {
    return (
        <main className="flex font-Inter">
            <Sidebar />
            <Suspense fallback={<p>Loading ...</p>}>
                <Outlet />
            </Suspense>
        </main>
    )
}