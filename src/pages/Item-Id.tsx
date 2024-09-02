import React from "react";
import Header from "#/modules/item-id/header";
import { Image } from "#/components/ui/image";
import { Button } from "#/components/ui/button";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
import ItemForm from "#/modules/item-id/form";
import { useSearchParams } from "react-router-dom";
import { IS_UPDATE_ITEM_PARAMS } from "#/constant";

export default function ItemId() {
    const [searchParams] = useSearchParams()
    const isUpdateItem = JSON.parse(searchParams.get(IS_UPDATE_ITEM_PARAMS)!)

    return (
        <React.Fragment>
            <Header />
            <div className="p-9 grid grid-cols-6">
                <div className="col-span-2 flex flex-col items-center justify-center space-y-5 h-max">
                    <Image
                        src="/baju.jpg"
                        alt="item-card"
                        className="size-full rounded-lg"
                    />
                    {!isUpdateItem && (
                        <div className="flex items-center justify-center gap-7">
                            <Button variant="secondary">
                                <GrFormPrevious className="text-xl" />
                            </Button>
                            <Button variant="secondary">
                                <GrFormNext className="text-xl" />
                            </Button>
                        </div>
                    )}
                </div>
                <ItemForm />
            </div>
        </React.Fragment>
    )
}