import { Input } from "#/components/ui/input";
import { FiSearch } from "react-icons/fi";
import { useSearchParams } from "react-router-dom";
import { FILTER_BY_PARAMS } from "#/constant";

export default function InputSearchTransactions() {
    const [searchParams, setSearchParams] = useSearchParams()

    const filterBy = searchParams.get(FILTER_BY_PARAMS) as string

    function setQueryParams(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value
        setSearchParams((prev) => {
            prev.set(FILTER_BY_PARAMS, value)
            return prev
        })
    }

    return (
        <div className="relative">
            <Input 
                value={filterBy} 
                onChange={setQueryParams}
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