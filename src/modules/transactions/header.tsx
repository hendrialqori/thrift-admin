import React from "react";
import { Button } from "#/components/ui/button";
import { IoMdAdd } from "react-icons/io";
import { Breadcrumb, BreadcrumbItem, BreadcrumbPage } from "#/components/ui/breadcrumb";
import { Link, useNavigate } from "react-router-dom";
import { HeaderMobile } from "#/components/ui/header-mobile";

export default function Header() {
    const navigate = useNavigate()

    const navigateTo = () => navigate("/transactions/add")

    return (
        <React.Fragment>

            {/* tablet & desktop */}
            <header className="w-full hidden md:flex justify-between items-center 
            border-b border-[#EDEDF0] px-5 h-14 border-y">
                <Breadcrumb>
                    <BreadcrumbItem>
                        <BreadcrumbPage>
                            Transaction
                        </BreadcrumbPage>
                    </BreadcrumbItem>
                </Breadcrumb>
                <Button variant="secondary" onClick={navigateTo}>
                    <div className="flex items-center gap-x-4">
                        <IoMdAdd className="text-xl" />
                        <span>Add new transaction</span>
                    </div>
                </Button>
            </header>

            {/* mobile */}
            <HeaderMobile
                center={<p className="text-sm font-semibold">Transaction</p>}
                right={
                    <Link to="/transactions/add">
                        <IoMdAdd className="text-xl" />
                    </Link>
                }
            />
        </React.Fragment>
    )
}
