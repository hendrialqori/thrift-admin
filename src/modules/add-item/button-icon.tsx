import { merge } from "#/lib/utils";

export default function ButtonIcon({ className, icon, ...rest }:
    React.ComponentPropsWithoutRef<"button"> & { icon: React.ReactNode }) {
    return (
        <button
            className={merge(
                "rounded-full size-7 lg:size-10",
                "bg-primary active:bg-primary/70 transition duration-300 flex items-center justify-center disabled:opacity-50",
                className
            )}
            {...rest}
        >
            {icon}
        </button>
    )
}