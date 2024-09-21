import React from "react";
import Header from "#/modules/add-item/header";
import Camera from "#/modules/add-item/camera";

export default function AddProduct() {
    return (
        <React.Fragment>
            <Header />
            <div className="p-bodyPaddingMd xl:p-bodyPadding max-w-2xl mt-4 xl:mt-0 mx-auto flex items-center justify-center">
                <Camera />
            </div>
        </React.Fragment>
    )
}