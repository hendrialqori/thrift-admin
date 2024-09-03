import React from "react";
import BatchCard from "#/modules/products/batch-card"
import Header from "#/modules/products/header";

export default function Products() {
    return (
        <React.Fragment>
            <Header />
            <div className="p-9 flex flex-col gap-4">
                <BatchCard />
                <BatchCard />
                <BatchCard />
            </div>
        </React.Fragment>
    )
}