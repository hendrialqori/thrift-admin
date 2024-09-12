import { ACTIVE_ANCHOR } from "#/constant";
import { cn } from "#/lib/utils";
import { PiTShirt } from "react-icons/pi";
import { PiCurrencyCircleDollar } from "react-icons/pi";
import { Link } from "react-router-dom";
import { useLocalStorage } from "usehooks-ts";

export const StickyMenu = () => {

    return (
        <nav className="xl:hidden flex fixed left-0 right-0 bottom-0">
            <NavItem path="/products" identity="products">
                <PiTShirt className="text-2xl" />
                <span className="text-sm" aria-hidden role="presentation">Product</span>
            </NavItem>
            <NavItem path="/transactions" identity="transactions">
                <PiCurrencyCircleDollar className="text-2xl" />
                <span className="text-sm" aria-hidden role="presentation">Transaction</span>
            </NavItem>
        </nav>
    )
}

const NavItem = ({ path, identity, children }: {
    path: string;
    identity: string;
    children: React.ReactNode
}) => {
    const pathname = window.location.pathname;

    const [get, set] = useLocalStorage(ACTIVE_ANCHOR, pathname.replace("/", ""))

    function handleActive() { set(identity) }

    const activeClasss =
        get === identity ? "bg-primary text-white" : "bg-[#EDEDF0] text-black hover:bg-gray-100"

    return (
        <Link
            to={path}
            onClick={handleActive}
            className="flex-1"
        >
            <div className={cn(" justify-center py-1.5 flex flex-col items-center", activeClasss)}>
                {children}
            </div>
        </Link>
    )
}