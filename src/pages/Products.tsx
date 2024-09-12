import React from "react";
import BatchCard from "#/modules/products/batch-card"
import Header from "#/modules/products/header";

export default function Products() {
    return (
        <React.Fragment>
            <Header />
            <div className="p-bodyPaddingMd xl:p-bodyPadding flex flex-col gap-4 mt-4 xl:mt-0">
                <BatchCard />
                <BatchCard />
                <BatchCard />
            </div>
        </React.Fragment>
    )
}