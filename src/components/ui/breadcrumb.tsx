import React from "react";
import { cn } from "#/lib/utils";
import { CgFormatSlash } from "react-icons/cg";

const Breadcrumb = React.forwardRef<HTMLUListElement, React.ComponentPropsWithoutRef<"ul">>(
    ({ className, ...props }, refs) => {

        return <ul ref={refs} className={cn("flex justify-center items-center gap-1", className)} {...props} />

    })

const BreadcrumbItem = React.forwardRef<HTMLLIElement, React.ComponentPropsWithoutRef<"li">>(
    ({ className, ...props }, refs) => {

        return <li ref={refs} className={cn("text-black/50 hover:text-black transition-colors duration-300 text-sm cursor-pointer")} {...props} />
    }
)

const BreadcrumbPage = React.forwardRef<HTMLSpanElement, React.ComponentPropsWithoutRef<"span">>(
    ({ className, ...props }, refs) => {

        return <span
            ref={refs}
            className={cn("text-black text-sm")}
            {...props}

            aria-hidden="true"
            role="presentation"
        />
    }
)

const BreadcrumbSeparator = React.forwardRef<HTMLLIElement, React.ComponentPropsWithoutRef<"li">>(
    ({ className, children, ...props }, refs) => {

        return (
            <li
                ref={refs}
                className={cn("text-black/50 hover:text-black transition-colors duration-300 text-sm")}
                {...props}
            >
                {children ?? <CgFormatSlash className="text-xl"/>}
            </li>
        )
    }
)

export { Breadcrumb, BreadcrumbItem, BreadcrumbSeparator, BreadcrumbPage }