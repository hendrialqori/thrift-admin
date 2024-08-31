import { Button } from "#/components/ui/button";
import { IoMdAdd } from "react-icons/io";
import { Breadcrumb, BreadcrumbItem, BreadcrumbPage } from "#/components/ui/breadcrumb";
import { useNavigate } from "react-router-dom";

export default function Header() {

    const navigate = useNavigate()
    const navigateTo = () => navigate("/products/add")

    return (
        <header className="w-full flex justify-between items-center border-b border-[#EDEDF0] px-5 h-14 border">
            <Breadcrumb>
                <BreadcrumbItem>
                    <BreadcrumbPage>
                        Product
                    </BreadcrumbPage>
                </BreadcrumbItem>
            </Breadcrumb>
            <Button variant="secondary" onClick={navigateTo}>
                <div className="flex items-center gap-x-4">
                    <IoMdAdd className="text-xl" />
                    <span>Add new batch</span>
                </div>
            </Button>
        </header>
    )
}
