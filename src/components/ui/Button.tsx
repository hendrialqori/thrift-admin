import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot"
import { cn } from "#/lib/utils";

const buttonVariants = cva("flex justify-center items-center rounded-lg", {
    variants: {
        variant: {
            primary: "bg-primary active:outline outline-blue-600 text-white",
            secondary: "bg-[#F8F8F8] hover:bg-gray-100 border border-[#EDEDF0] active:outline outline-gray-300 text-black",
            desctruction: "bg-red-600 active:outline outline-red-700 text-white"
        },
        size: {
            default: "py-2 px-4 text-sm",
        }
    },
    defaultVariants: {
        variant: "primary",
        size: "default"
    }
})

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild, ...props }, refs) => {

        const Comp = asChild ? Slot : "button"

        return (
            <Comp
                ref={refs}
                className={cn(buttonVariants({ variant, size, className }))}
                {...props}
            />
        )
    })