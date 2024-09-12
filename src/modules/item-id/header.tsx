import { Button } from "#/components/ui/button";
import { TbPencil } from "react-icons/tb";
import { Breadcrumb, BreadcrumbItem, BreadcrumbPage, BreadcrumbSeparator } from "#/components/ui/breadcrumb";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { IS_UPDATE_ITEM_PARAMS } from "#/constant";

export default function Header() {
    const { productId, itemId } = useParams()
    const [_, setSearchParams] = useSearchParams()

    function setParams() {
        setSearchParams((prev) => {
            prev.set(IS_UPDATE_ITEM_PARAMS, "true")
            return prev
        })
    }

    return (
        <header className="w-full flex justify-between items-center border-b border-[#EDEDF0] px-5 h-14 border-y">
            <Breadcrumb>
                <BreadcrumbItem>
                    <Link to="/products">
                        Product
                    </Link>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <Link to="/products">
                        {productId}
                    </Link>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <Link to={`/products/${productId}/items`}>
                        Items
                    </Link>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbPage>
                        {itemId}
                    </BreadcrumbPage>
                </BreadcrumbItem>
            </Breadcrumb>
            <Button variant="secondary" onClick={setParams}>
                <div className="flex items-center gap-x-4">
                    <TbPencil className="text-xl" />
                    <span>Update product</span>
                </div>
            </Button>
        </header>
    )
}
