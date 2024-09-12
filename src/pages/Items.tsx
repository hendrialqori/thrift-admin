import React from "react";
import Header from "#/modules/items/header";
import InputSearchItems from "#/modules/items/input-search-items";
import ItemList from "#/modules/items/item-list";

export default function Items() {
    return (
        <React.Fragment>
            <Header />
            <div className="p-bodyPaddingMd xl:p-bodyPadding space-y-11 mt-4 xl:mt-0 pb-40 xl:pb-0">
                <InputSearchItems />
                <ItemList />
            </div>
        </React.Fragment>
    )
}