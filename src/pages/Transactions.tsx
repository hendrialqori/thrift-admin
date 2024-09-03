import React from "react";
import DatePicker from "#/modules/transactions/date-picker";
import Header from "#/modules/transactions/header";
import InputSearchTransactions from "#/modules/transactions/input-search-transactions";

export default function Transaction() {
    return (
        <React.Fragment>
            <Header />
            <div className="p-9">
                <div className="w-full xl:max-w-2xl grid grid-cols-2 gap-3" aria-label="filter-container">
                    <InputSearchTransactions />
                    <DatePicker />
                </div>
            </div>
        </React.Fragment>
    )
}