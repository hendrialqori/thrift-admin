import Header from "#/modules/items/header";
import InputSearchItems from "#/modules/items/input-search-items";
import ItemList from "#/modules/items/item-list";

export default function Items() {
    return (
        <section className="w-full">
            <Header />
            <div className="p-9 space-y-11">
                <InputSearchItems />
                <ItemList />
            </div>
        </section>
    )
}