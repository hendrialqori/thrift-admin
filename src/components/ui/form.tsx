import { cn } from "#/lib/utils"
import React from "react"

export const Form = React.forwardRef<HTMLFormElement, React.ComponentPropsWithoutRef<"form">>(
    ({ className, ...props }, refs) => {
        return (
            <form ref={refs} className={cn("space-y-6", className)} {...props} />
        )
    })

type FormItemProps = Omit<React.ComponentPropsWithoutRef<"div">, "children"> & {
    children: (itemId: string) => React.ReactNode
}

export const FormItem = React.forwardRef<HTMLDivElement, FormItemProps>(
    ({ className, children, ...props }, refs) => {

        const itemId = React.useId()
        return (
            <div ref={refs} className={cn("space-y-1", className)} {...props}>
                {children(itemId)}
            </div>
        )
    })

export const FormLabel = React.forwardRef<HTMLLabelElement, React.ComponentPropsWithoutRef<"label">>(
    ({ className, ...props }, refs) => {
        return (
            <label ref={refs} className={cn("text-[0.8rem] font-medium select-none", className)} {...props} />
        )
    })

type FormFieldErrorProps = React.ComponentPropsWithoutRef<"p"> & {
    hasError: boolean
}

export const FormFieldError = React.forwardRef<HTMLParagraphElement, FormFieldErrorProps>(
    ({ hasError, className, ...props }, refs) => {

        if (!hasError) return null

        return (
            <p ref={refs} className={cn("text-red-500 text-[0.8rem] font-medium", className)} {...props} />
        )
    })

export const FormFielDescription = React.forwardRef<HTMLSpanElement, React.ComponentPropsWithoutRef<"span">>(
    ({ className, ...props }, refs) => {
        return (
            <span ref={refs} className={cn("text-gray-500 text-sm", className)} {...props} />
        )
    })