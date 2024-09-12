import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbPage, BreadcrumbSeparator } from "#/components/ui/breadcrumb";
import { HeaderMobile } from "#/components/ui/header-mobile";
import { GrFormPrevious } from "react-icons/gr";

export default function Header() {

    const navigate = useNavigate()

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
                        <BreadcrumbPage>
                            Add new Batch
                        </BreadcrumbPage>
                    </BreadcrumbItem>
                </Breadcrumb>
            </header>

            {/* mobile */}
            <HeaderMobile 
                left={
                    <button onClick={() => navigate(-1)}>
                        <GrFormPrevious className="text-2xl"/>
                    </button>
                }
                center={<p className="text-sm font-semibold">Add new Batch</p>}
            />
        </React.Fragment>
    )
}
