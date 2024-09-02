import { Input } from "#/components/ui/input";
import { FiSearch } from "react-icons/fi";
import { useSearchParams } from "react-router-dom";
import { NAME_PARAMS } from "#/constant";

export default function InputSearchItems() {
    const [searchParams, setSearchParams] = useSearchParams()

    const name = searchParams.get(NAME_PARAMS) as string

    function setParams(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value
        setSearchParams((prev) => {
            prev.set(NAME_PARAMS, value)
            return prev
        })
    }

    return (
        <div className="relative w-full lg:w-1/2 xl:w-1/3">
            <Input 
                value={name} 
                onChange={setParams}
                placeholder="search.." 
                className="px-10"/>
            <span
                className="absolute top-1/2 -translate-y-1/2 left-3"
                aria-hidden="true"
                role="presentation"
            >
                <FiSearch className="text-lg" />
            </span>
        </div>
    )


}