import Anchor from "@/components/ui/Anchor";
import { PiTShirt } from "react-icons/pi";
import { PiCurrencyCircleDollar } from "react-icons/pi";

export default function Sidebar() {
    return (
        <aside className="sticky top-0 min-w-[250px] h-dvh border-2 border-r border-[#EDEDF0] px-5">
            <h1 className="text-2xl font-bold tracking-tighter mt-2">Thrifting.</h1>
            <div className="space-y-4 mt-10">
                <h2 className="text-sm opacity-50">Main menu</h2>
                <nav className="flex flex-col gap-2">
                    <Anchor path="/products" identity="products">
                        <Anchor.Icon>
                            <PiTShirt className="text-xl" />
                        </Anchor.Icon>
                        <Anchor.Label>
                            Product
                        </Anchor.Label>
                    </Anchor>
                    <Anchor path="/transactions" identity="transactions">
                        <Anchor.Icon>
                            <PiCurrencyCircleDollar className="text-xl" />
                        </Anchor.Icon>
                        <Anchor.Label>
                            Transaction
                        </Anchor.Label>
                    </Anchor>
                </nav>
            </div>
        </aside>
    )
}


