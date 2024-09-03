import React from "react";
import Header from "#/modules/add-transaction/header";
import TransactionForm from "#/modules/add-transaction/form";

export default function AddTransaction() {
    return (
        <React.Fragment>
            <Header />
            <div className="p-9 max-w-2xl">
                <TransactionForm />
            </div>
        </React.Fragment>
    )
}