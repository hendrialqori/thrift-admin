import { Breadcrumb, BreadcrumbItem, BreadcrumbPage, BreadcrumbSeparator } from "#/components/ui/breadcrumb";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="w-full flex justify-between items-center border-b border-[#EDEDF0] px-5 h-14 border">
            <Breadcrumb>
                <BreadcrumbItem>
                    <Link to="/transactions">
                        Transaction
                    </Link>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbPage>
                        Add new Transaction
                    </BreadcrumbPage>
                </BreadcrumbItem>
            </Breadcrumb>
        </header>
    )
}
