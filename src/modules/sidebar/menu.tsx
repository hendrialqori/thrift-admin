import React from "react";
import { Link } from "react-router-dom"
import { useLocalStorage } from "usehooks-ts"
import { ACTIVE_ANCHOR } from "#/constant";
import { cn } from "#/lib/utils";

type MenuProps = {
    path: string
    identity: string
}

const Menu = React.forwardRef<HTMLDivElement, React.ComponentPropsWithRef<"div"> & MenuProps>(({ identity, path, ...props }, refs) => {
    const pathname = window.location.pathname;

    const [get, set] = useLocalStorage(ACTIVE_ANCHOR, pathname.replace("/", ""))

    function handleActive() { set(identity) }

    const activeClasss =
        get === identity ? "bg-primary text-white" : "bg-white text-black hover:bg-gray-100"

    return (
        <Link to={path} onClick={handleActive}>
            <div ref={refs} className={`flex items-center justify-start px-2 rounded-lg py-2 gap-3 ${activeClasss}`} {...props} />
        </Link>
    )
})


const MenuIcon = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<"div">>(({ ...props }, refs) => {
    return <div ref={refs} {...props} />
})

MenuIcon.displayName = "MenuIcon"

const MenuLabel = React.forwardRef<HTMLParagraphElement, React.ComponentPropsWithoutRef<"p">>(({ className, ...props }, refs) => {
    return <p ref={refs} className={cn("text-sm", className)} {...props} />
})

MenuLabel.displayName = "MenuLabel"

export { Menu, MenuIcon, MenuLabel }
