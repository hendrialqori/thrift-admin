import React from "react"
import { cn, merge } from "#/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Calendar } from "./calendar";
import { IoCalendarClearOutline } from "react-icons/io5";

export const Input = React.forwardRef<HTMLInputElement, React.ComponentPropsWithoutRef<"input">>(
   ({ className, ...props }, refs) => {
      return (
         <input
            ref={refs}
            className={merge(
               cn(
                  "block w-full rounded-lg text-sm h-10 px-3 py-2 placeholder:text-gray-500 placeholder:text-sm bg-background",
                  "border border-[#EDEDF0] focus:border-[#EDEDF0] focus:bg-white focus:ring-2 focus:ring-offset-2 focus:ring-black",
                  className)
            )}
            {...props}
         />
      )
   })

export const InputDate = ({ selected, onSelect }: { selected: Date, onSelect: (date: Date | undefined) => void }) => {
   return (
      <Popover>
         <PopoverTrigger asChild>
            <button className={cn(
               "w-full rounded-lg text-sm h-10 px-3 py-2 bg-background",
               "border border-[#EDEDF0] focus:border-[#EDEDF0] focus:bg-white focus:ring-2 focus:ring-offset-2 focus:ring-black",
               "flex justify-between items-center"
            )}>
               <span>Pick a date</span>
               <IoCalendarClearOutline className="text-gray-500" />
            </button>
         </PopoverTrigger>
         <PopoverContent>
            <Calendar
               mode="single"
               selected={selected}
               onSelect={onSelect}
               className="w-full"
            />
         </PopoverContent>
      </Popover>
   )
}