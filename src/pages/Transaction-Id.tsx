import React from "react";
import Header from "#/modules/transaction-id/header";
import TransactionForm from "#/modules/transaction-id/form";

export default function TransactionId() {
    return (
        <React.Fragment>
            <Header />
            <div className="p-bodyPaddingMd xl:p-bodyPadding mt-4
                 xl:mt-0 grid grid-cols-6 gap-4 xl:gap-20 pb-40 xl:pb-0">
                <div className="col-span-6 md:col-span-2 
                    flex flex-col items-center justify-center border space-y-5 h-max">
                    <img
                        src="/baju.jpg"
                        alt="item-card"
                        className="w-full h-48 md:size-full object-cover rounded-lg"
                        loading="lazy"
                    />
                </div>
                <TransactionForm />
            </div>
        </React.Fragment>
    )
}