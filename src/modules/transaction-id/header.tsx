import React from "react";
import { Button } from "#/components/ui/button";
import { TbPencil } from "react-icons/tb";
import { Breadcrumb, BreadcrumbItem, BreadcrumbPage, BreadcrumbSeparator } from "#/components/ui/breadcrumb";
import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { IS_UPDATE_TRANSACTION_PARAMS } from "#/constant";
import { HeaderMobile } from "#/components/ui/header-mobile";
import { GrFormPrevious } from "react-icons/gr";

export default function Header() {
    const { transactionId } = useParams()
    const [_, setSearchParams] = useSearchParams()
    const navigate = useNavigate()

    function setQueryParams() {
        setSearchParams((prev) => {
            prev.set(IS_UPDATE_TRANSACTION_PARAMS, "true")
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

            {/* mobile */}
            <HeaderMobile
                left={
                    <Link to="/transactions">
                        <GrFormPrevious className="text-2xl" />
                    </Link>
                }
                center={<p className="text-sm font-semibold">Update transaction</p>}
                right={
                    <button onClick={setQueryParams}>
                        <TbPencil className="text-2xl" />
                    </button>
                }
            />
        </React.Fragment>
    )
}
