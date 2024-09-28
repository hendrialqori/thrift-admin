import React from "react";
import { CgSpinner } from "react-icons/cg";
import Portal from "./portal";

export const PageLoading = () => {
    return (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <div className="flex flex-col justify-center items-center px-2 md:px-0">
                <CgSpinner className="animate-spin text-2xl" />
                <p className="text-sm text-center">Sedang mengunduh halaman, mohon tunggu sebentar</p>
            </div>
        </div>
    )
}

export const OverlayLoading = ({ show, children }: { show: boolean, children: React.ReactNode }) => {
    return (
        <Portal isOpen={show}>
            {children}
        </Portal>
    )
}