import { BatchCard } from "#/modules/products/batch-card"
import Header from "#/modules/products/header";

export default function Products() {
    return (
        <section className="w-full">
            <Header />
            <div className="p-9 flex flex-col gap-4">
                <BatchCard />
                <BatchCard />
                <BatchCard />
            </div>
        </section>
    )
}