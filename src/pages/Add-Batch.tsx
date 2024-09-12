import React from "react";
import BatchForm from "#/modules/add-batch/form";
import Header from "#/modules/add-batch/header";

export default function AddBatch() {
    return (
        <React.Fragment>
            <Header />
            <div className="p-bodyPaddingMd xl:p-bodyPadding max-w-2xl mt-4 xl:mt-0 mx-auto xl:mx-[0] mb-40 xl:mb-0">
                <BatchForm />
            </div>
        </React.Fragment>
    )
}