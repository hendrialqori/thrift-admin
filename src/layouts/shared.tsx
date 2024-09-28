import { Suspense } from "react";
import { Sidebar } from "#/modules/sidebar";
import { Outlet } from "react-router-dom"
import { PageLoading } from "#/components/ui/lazy";
import { StickyMenu } from "#/modules/sticky-menu";

export default function SharedLayout() {
    return (
        <main className="flex font-Inter">
            {/* desktop mode */}
            <Sidebar />

            {/* container */}
            <section className="relative w-full min-h-screen max-w-7xl mx-auto" aria-label="container-page">
                <Suspense fallback={<PageLoading />}>
                    <Outlet />
                </Suspense>
            </section>
            {/* end container */}

            {/* table and mobile mode */}
            {/* <StickyMenu /> */}
        </main>
    )
}