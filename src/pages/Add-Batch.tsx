import React from "react";
import BatchForm from "#/modules/add-batch/form";
import Header from "#/modules/add-batch/header";

export default function AddBatch() {
    return (
        <React.Fragment>
            <Header />
            <div className="p-9 max-w-2xl">
                <BatchForm />
            </div>
        </React.Fragment>
    )
}