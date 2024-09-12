import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button } from "#/components/ui/button";
import { IoMdAdd } from "react-icons/io";
import { GrFormPrevious } from "react-icons/gr";
import { Breadcrumb, BreadcrumbItem, BreadcrumbPage, BreadcrumbSeparator } from "#/components/ui/breadcrumb";
import { HeaderMobile } from "#/components/ui/header-mobile"

export default function Header() {
    const { productId } = useParams()
    const navigate = useNavigate()

    const navigateTo = (target: string) =>
        () => navigate(target)

    return (
        <React.Fragment>

            {/*  tablet & desktop  */}
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
                        <BreadcrumbPage>
                            Items
                        </BreadcrumbPage>
                    </BreadcrumbItem>
                </Breadcrumb>
                <Button
                    variant="secondary"
                    onClick={navigateTo("/product/add")}
                >
                    <div className="flex items-center gap-x-4">
                        <IoMdAdd className="text-xl" />
                        <span>Add new batch</span>
                    </div>
                </Button>
            </header>

            {/* mobile */}
            <HeaderMobile
                left={
                    <Link to="/products">
                        <GrFormPrevious className="text-2xl" />
                    </Link>
                }
                center={<p className="font-semibold text-sm">Product</p>}
                right={
                    <Link to="/products/add">
                        <IoMdAdd className="text-xl" />
                    </Link>
                }
            />
        </React.Fragment>

    )
}
