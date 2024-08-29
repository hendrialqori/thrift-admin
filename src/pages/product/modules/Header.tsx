import Headbar from "@/components/layout/desktop/Headbar"
import { IoMdAdd } from "react-icons/io";

export default function Header() {
    return (
        <Headbar>
            <Headbar.Item>
                <span className="text-xs font-medium">Product</span>
            </Headbar.Item>
            <Headbar.Item>
                <button className="text-sm bg-[#F8F8F8] hover:bg-gray-100 border border-[#EDEDF0] rounded-md py-2 px-3 active:outline outline-gray-300">
                    <div className="flex items-center gap-x-4">
                        <IoMdAdd className="text-xl" />
                        <span>Add new batch</span>
                    </div>
                </button>
            </Headbar.Item>
        </Headbar>
    )
}