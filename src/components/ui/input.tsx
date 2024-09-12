import React from "react"
import { cn, merge } from "#/lib/utils";

export const Input = React.forwardRef<HTMLInputElement, React.ComponentPropsWithoutRef<"input">>(
   ({ className, ...props }, refs) => {
      return (
         <input
            ref={refs}
            className={merge(
               cn(
                  "block w-full rounded-lg text-xs md:text-sm h-10 px-3 py-3 md:py-2 placeholder:text-gray-500 bg-background",
                  "border border-[#EDEDF0] focus:border-[#EDEDF0] focus:bg-white focus:ring-2 focus:ring-offset-2 focus:ring-black",
                  "placeholder:text-[0.8rem] md:placeholder:text-sm",
                  className)
            )}
            {...props}
         />
      )
   })

