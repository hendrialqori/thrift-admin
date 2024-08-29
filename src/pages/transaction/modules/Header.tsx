import Headbar from "@/components/layout/desktop/Headbar"

export default function Header() {
    return (
        <Headbar>
            <Headbar.Item>
                <div className="text-xs font-medium space-x-1">
                    <span className="opacity-50">Product</span>
                    <span className="opacity-50">/</span>
                    <span>Add new batch</span>
                </div>
            </Headbar.Item>
        </Headbar>
    )
}