import Datepicker, { type DateValueType } from "react-tailwindcss-datepicker";
import { useSearchParams } from "react-router-dom";
import { START_DATE_PARAMS, END_DATE_PARAMS } from "#/constant"
import dayjs from "dayjs";
import { cn } from "#/lib/utils";

export default function DatePicker() {
    const [searchParams, setSearchParams] = useSearchParams()

    const date = {
        startDate: searchParams.get(START_DATE_PARAMS),
        endDate: searchParams.get(END_DATE_PARAMS)
    } as unknown as DateValueType

    function setQueryParams(date: DateValueType) {
        setSearchParams((prev) => {
            prev.set(START_DATE_PARAMS,
                date?.startDate ? dayjs(String(date?.startDate)).format("YYYY-MM-DD") : ""
            )
            prev.set(END_DATE_PARAMS,
                date?.startDate ? dayjs(String(date?.endDate)).format("YYYY-MM-DD") : "")
            return prev
        })
    }

    return (
        <Datepicker
            useRange={false}
            asSingle={false}
            value={date}
            onChange={setQueryParams}
            primaryColor="blue"
            separator="-"
            displayFormat="DD/MM/YYYY"
            classNames={{
                container: () => "",
                input: () => cn(
                    "h-10 w-full bg-background text-sm rounded-lg",
                    "border border-[#EDEDF0] focus:border-[#EDEDF0] focus:bg-white focus:ring-2 focus:ring-offset-2 focus:ring-black",
                ),
                toggleButton: ({ className }: any) => cn("[&>svg]:stroke-black", className)
            }}
            placeholder="Pick your date range"
        />
    );
}