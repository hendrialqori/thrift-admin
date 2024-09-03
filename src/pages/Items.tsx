import React from "react";
import Header from "#/modules/items/header";
import InputSearchItems from "#/modules/items/input-search-items";
import ItemList from "#/modules/items/item-list";

export default function Items() {
    return (
        <React.Fragment>
            <Header />
            <div className="p-9 space-y-11">
                <InputSearchItems />
                <ItemList />
            </div>
        </React.Fragment>
    )
}