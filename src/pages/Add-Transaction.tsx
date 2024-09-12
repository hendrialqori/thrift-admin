import React from "react";
import Header from "#/modules/add-transaction/header";
import TransactionForm from "#/modules/add-transaction/form";

export default function AddTransaction() {
    return (
        <React.Fragment>
            <Header />
            <div className="p-bodyPaddingMd xl:p-bodyPadding mt-4 xl:mt-0 max-w-2xl mx-auto xl:mx-[0] pb-40 xl:pb-0">
                <TransactionForm />
            </div>
        </React.Fragment>
    )
}