import React from "react"
import { cn, merge } from "#/lib/utils";
import { FiSearch } from "react-icons/fi";

export const Input = React.forwardRef<HTMLInputElement, React.ComponentPropsWithoutRef<"input">>(({ className, ...props }, refs) => {
    return (
        <input
            ref={refs}
            className={merge(
                cn(
                    "block w-full rounded-lg text-sm h-10",
                    "bg-[#F4F4F4] border border-[#EDEDF0] focus:border-[#EDEDF0] focus:bg-white focus:ring-2 focus:ring-black",
                    "px-3 py-2 placeholder:text-sm placeholder:font-light",
                    className)
            )}
            {...props}
        />
    )
})

export const InputSearch = React.forwardRef<HTMLInputElement, React.ComponentPropsWithoutRef<"input"> & { wrapperClass?: string }>(({ wrapperClass, className, ...props }, refs) => {
    return (
        <div className={cn("relative", wrapperClass)}>
            <Input ref={refs} {...props} className="px-10" />
            <span
                className="absolute top-1/2 -translate-y-1/2 left-3"
                aria-hidden="true"
                role="presentation"
            >
                <FiSearch className="text-lg" />
            </span>
        </div>
    )
})