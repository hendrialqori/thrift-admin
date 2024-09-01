import { Button } from "#/components/ui/button";
import { TbPencil } from "react-icons/tb";
import { Breadcrumb, BreadcrumbItem, BreadcrumbPage, BreadcrumbSeparator } from "#/components/ui/breadcrumb";
import { Link, useParams } from "react-router-dom";

export default function Header() {

    const { productId, itemId } = useParams()

    return (
        <header className="w-full flex justify-between items-center border-b border-[#EDEDF0] px-5 h-14 border">
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
            <Button variant="secondary">
                <div className="flex items-center gap-x-4">
                    <TbPencil className="text-xl" />
                    <span>Update product</span>
                </div>
            </Button>
        </header>
    )
}
