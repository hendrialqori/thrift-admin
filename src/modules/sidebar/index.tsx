import { Menu, MenuIcon, MenuLabel } from "./menu";
import { PiTShirt } from "react-icons/pi";
import { PiCurrencyCircleDollar } from "react-icons/pi";

function Sidebar() {
    return (
        <aside className="hidden xl:block sticky top-0 w-[250px] h-dvh border-2 border-r border-[#EDEDF0] px-5">
            <h1 className="text-2xl font-bold tracking-tighter mt-2">Thrifting.</h1>
            <div className="space-y-4 mt-10">
                <h2 className="text-sm opacity-50">Main menu</h2>
                <nav className="flex flex-col gap-2">
                    <Menu path="/products" identity="products">
                        <MenuIcon>
                            <PiTShirt className="text-xl" />
                        </MenuIcon>
                        <MenuLabel>
                            Product
                        </MenuLabel>
                    </Menu>
                    <Menu path="/transactions" identity="transactions">
                        <MenuIcon>
                            <PiCurrencyCircleDollar className="text-xl" />
                        </MenuIcon>
                        <MenuLabel>
                            Transaction
                        </MenuLabel>
                    </Menu>
                </nav>
            </div>
        </aside>
    )
}


export { Sidebar }