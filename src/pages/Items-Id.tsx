import React from "react";
import Header from "#/modules/item-id/header";
import { Image } from "#/components/ui/image";
import { Button } from "#/components/ui/button";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
import ItemForm from "#/modules/item-id/form";

export default function ItemId() {
    return (
        <React.Fragment>
            <Header />
            <div className="p-9 grid grid-cols-6">
                <div className="col-span-2 flex flex-col items-center justify-center space-y-5">
                    <Image
                        src="/baju.jpg"
                        alt="item-card"
                        className="size-full rounded-lg"
                    />
                    <div className="flex items-center justify-center gap-7">
                        <Button variant="secondary">
                            <GrFormPrevious className="text-xl" />
                        </Button>
                        <Button variant="secondary">
                            <GrFormNext className="text-xl"/>
                        </Button>
                    </div>
                </div>
                <ItemForm />
            </div>
        </React.Fragment>
    )
}