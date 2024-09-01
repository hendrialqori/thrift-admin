import { InputSearch } from "#/components/ui/input";
import { useSearchParams } from "react-router-dom";

const defaultParams = {
    name: ""
}

export default function InputSearchItems() {
    const [searchParams, setSearchParams] = useSearchParams(defaultParams)

    const name = searchParams.get("name") as string

    function handleSetParams(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value
        setSearchParams((prev) => {
            prev.set("name", value)
            return prev

        }, { replace: true })
    }

    return (
        <InputSearch
            value={name}
            onChange={handleSetParams}
            placeholder="Search.."
            wrapperClass="w-full lg:w-1/2 xl:w-1/3"
        />
    )

}