import React from "react";
import Header from "#/modules/transaction-id/header";
import TransactionCard from "#/modules/transactions/transaction-card";
import TransactionList from "#/modules/transactions/transaction-list";

export default function TransactionId() {
    return (
        <React.Fragment>
            <Header />
            <TransactionList>
                <TransactionCard />
                <TransactionCard />
                <TransactionCard />
                <TransactionCard />
            </TransactionList>
        </React.Fragment>
    )
}