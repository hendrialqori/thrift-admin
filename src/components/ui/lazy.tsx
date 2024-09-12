import React from "react";
import { AnimatePresence, motion } from "framer-motion"
import { CgSpinner } from "react-icons/cg";

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
    if (show) {
        return (
            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0.5 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0.5 }}
                    transition={{ duration: 0.2 }}
                    className="fixed inset-0 flex justify-center items-center bg-black/80"
                >
                    {children}
                </motion.div>
            </AnimatePresence>
        )
    }
}