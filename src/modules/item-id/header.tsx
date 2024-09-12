import React from "react";
import { Button } from "#/components/ui/button";
import { TbPencil } from "react-icons/tb";
import { GrFormPrevious } from "react-icons/gr";
import { Breadcrumb, BreadcrumbItem, BreadcrumbPage, BreadcrumbSeparator } from "#/components/ui/breadcrumb";
import { Link, useParams, useSearchParams, useNavigate } from "react-router-dom";
import { IS_UPDATE_ITEM_PARAMS } from "#/constant";
import { HeaderMobile } from "#/components/ui/header-mobile";

export default function Header() {
    const { productId, itemId } = useParams()
    const [_, setSearchParams] = useSearchParams()
    const navigate = useNavigate()

    function setParams() {
        setSearchParams((prev) => {
            prev.set(IS_UPDATE_ITEM_PARAMS, "true")
            return prev
        })
    }

    return (
        <React.Fragment>

            {/* tablet & desktop */}
            <header className="w-full hidden md:flex justify-between items-center
             border-b border-[#EDEDF0] px-5 h-14 border-y">
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

            {/* mobile */}
            <HeaderMobile
                left={
                    <button onClick={() => navigate(-1)}>
                        <GrFormPrevious className="text-2xl" />
                    </button>
                }
                center={<p className="text-sm font-semibold">Product</p>}
                right={
                    <button onClick={setParams}>
                        <TbPencil className="text-2xl" />
                    </button>
                }
            />
        </React.Fragment>
    )
}
