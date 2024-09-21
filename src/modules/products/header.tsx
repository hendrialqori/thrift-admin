import React from "react";
import { Button } from "#/components/ui/button";
import { IoMdAdd } from "react-icons/io";
import { Breadcrumb, BreadcrumbItem, BreadcrumbPage } from "#/components/ui/breadcrumb";
import { useNavigate, Link } from "react-router-dom";
import { HeaderMobile } from "#/components/ui/header-mobile";

export default function Header() {

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
                        <BreadcrumbPage>
                            Product
                        </BreadcrumbPage>
                    </BreadcrumbItem>
                </Breadcrumb>
                <Button
                    variant="secondary"
                    onClick={navigateTo("/products/batch")}
                >
                    <div className="flex items-center gap-x-2 lg:gap-x-4">
                        <IoMdAdd className="text-xl" />
                        <span aria-hidden role="presentation">Add new batch</span>
                    </div>
                </Button>
            </header>

            {/* mobile */}
            <HeaderMobile
                center={<p className="text-sm font-semibold">Product</p>}
                right={
                    <Link to="/products/batch">
                        <IoMdAdd className="text-xl" />
                    </Link>
                }
            />
        </React.Fragment>
    )
}
