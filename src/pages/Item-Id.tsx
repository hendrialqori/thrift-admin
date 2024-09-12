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
            <div className="p-bodyPaddingMd xl:p-bodyPadding mt-4
                 xl:mt-0 grid grid-cols-6 gap-4 xl:gap-20 pb-40 xl:pb-0">
                <div className="col-span-6 md:col-span-2 
                    flex flex-col items-center justify-center space-y-5 h-max">
                    <img
                        src="/baju.jpg"
                        alt="item-card"
                        className="w-full h-48 md:size-full object-cover rounded-lg"
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