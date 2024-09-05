import { Button } from "#/components/ui/button";
import { TbPencil } from "react-icons/tb";
import { Breadcrumb, BreadcrumbItem, BreadcrumbPage, BreadcrumbSeparator } from "#/components/ui/breadcrumb";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { IS_UPDATE_TRANSACTION_PARAMS } from "#/constant";

export default function Header() {
    const { transactionId } = useParams()
    const [_, setSearchParams] = useSearchParams()

    function setQueryParams() {
        setSearchParams((prev) => {
            prev.set(IS_UPDATE_TRANSACTION_PARAMS, "true")
            return prev
        })
    }


    return (
        <header className="w-full flex justify-between items-center border-b border-[#EDEDF0] px-5 h-14 border">
            <Breadcrumb>
                <BreadcrumbItem>
                    <Link to="/transactions">
                        Transaction
                    </Link>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbPage>
                        {transactionId}
                    </BreadcrumbPage>
                </BreadcrumbItem>
            </Breadcrumb>
            <Button variant="secondary" onClick={setQueryParams}>
                <div className="flex items-center gap-x-4">
                    <TbPencil className="text-xl" />
                    <span>Update transaction</span>
                </div>
            </Button>
        </header>
    )
}
