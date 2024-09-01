import { Suspense } from "react";
import { Sidebar } from "#/modules/sidebar";
import { Outlet } from "react-router-dom"
import { PageLoading } from "#/components/ui/lazy";

export default function SharedLayout() {
    return (
        <main className="flex font-Inter">
            <Sidebar />
            <section className="relative w-full" aria-label="container-page">
                <Suspense fallback={<PageLoading />}>
                    <Outlet />
                </Suspense>
            </section>
        </main>
    )
}