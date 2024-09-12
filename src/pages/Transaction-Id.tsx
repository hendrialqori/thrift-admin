import React from "react";
import Header from "#/modules/transaction-id/header";
import { Image } from "#/components/ui/image";
import TransactionForm from "#/modules/transaction-id/form";

export default function TransactionId() {
    return (
        <React.Fragment>
            <Header />
            <div className="p-bodyPaddingMd xl:p-bodyPadding mt-4 xl:mt-0 grid grid-cols-6 gap-4 xl:gap-0 pb-40 xl:pb-0">
                <div className="col-span-2 flex flex-col items-center justify-center space-y-5 h-max">
                    <Image
                        src="/baju.jpg"
                        alt="item-card"
                        className="size-full rounded-lg"
                    />
                </div>
                <TransactionForm />
            </div>
        </React.Fragment>
    )
}