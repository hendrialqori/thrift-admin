import React from "react";
import DatePicker from "#/modules/transactions/date-picker";
import Header from "#/modules/transactions/header";
import InputSearchTransactions from "#/modules/transactions/input-search-transactions";
import TransactionCard from "#/modules/transactions/transaction-card";
import TransactionList from "#/modules/transactions/transaction-list";

export default function Transaction() {
    return (
        <React.Fragment>
            <Header />
            <div className="p-bodyPaddingMd xl:p-bodyPadding space-y-7 md:space-y-11 mt-4 xl:mt-0 pb-40 xl:pb-0">
                <div className="w-full xl:max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-3" aria-label="filter-container">
                    <InputSearchTransactions />
                    <DatePicker />
                </div>
                <TransactionList>
                    <TransactionCard />
                    <TransactionCard />
                    <TransactionCard />
                    <TransactionCard />
                </TransactionList>
            </div>
        </React.Fragment>
    )
}