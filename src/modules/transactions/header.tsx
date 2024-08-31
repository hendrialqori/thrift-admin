import { Button } from "#/components/ui/button";
import { IoMdAdd } from "react-icons/io";
import { Breadcrumb, BreadcrumbItem, BreadcrumbPage } from "#/components/ui/breadcrumb";

export default function Header() {
    return (
        <header className="w-full flex justify-between items-center border-b border-[#EDEDF0] px-5 h-14 border">
            <Breadcrumb>
                <BreadcrumbItem>
                    <BreadcrumbPage>
                        Transaction
                    </BreadcrumbPage>
                </BreadcrumbItem>
            </Breadcrumb>
            <div>
                <Button variant="secondary">
                    <div className="flex items-center gap-x-4">
                        <IoMdAdd className="text-xl" />
                        <span>Add new transaction</span>
                    </div>
                </Button>
            </div>
        </header>
    )
}
