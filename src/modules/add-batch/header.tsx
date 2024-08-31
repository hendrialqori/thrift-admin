import { Button } from "#/components/ui/button";
import { IoMdAdd } from "react-icons/io";
import { Breadcrumb, BreadcrumbItem, BreadcrumbPage, BreadcrumbSeparator } from "#/components/ui/breadcrumb";
import { Link } from "react-router-dom";

export default function Header() {
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
                    <BreadcrumbPage>
                        Add new Batch
                    </BreadcrumbPage>
                </BreadcrumbItem>
            </Breadcrumb>
            <Button variant="secondary">
                <div className="flex items-center gap-x-4">
                    <IoMdAdd className="text-xl" />
                    <span>Add new batch</span>
                </div>
            </Button>
        </header>
    )
}
