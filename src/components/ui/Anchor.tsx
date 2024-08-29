import { Link } from "react-router-dom"
import { useLocalStorage } from "usehooks-ts"
import { ACTIVE_ANCHOR } from "@/constant";

type AnchorProps = {
    path: string
    identity: string
    children: React.ReactNode
}

function Anchor(props: AnchorProps) {
    const pathname = window.location.pathname;

    const [get, set] = useLocalStorage(ACTIVE_ANCHOR, pathname.replace("/", ""))

    function handleActive() { set(props.identity) }

    const activeClasss =
        get === props.identity ? "bg-primary text-white" : "bg-white text-black hover:outline hover:outline-gray-200 hover:bg-gray-100"

    return (
        <Link to={props.path} onClick={handleActive}>
            <div className={`flex items-center justify-start px-2 rounded-lg py-3 gap-3 ${activeClasss}`}>
                {props.children}
            </div>
        </Link>
    )
}

function Icon(props: { children: React.ReactNode }) {
    return (
        <div>
            {props.children}
        </div>
    )
}

function Label(props: { children: React.ReactNode }) {
    return (
        <p className="text-sm">
            {props.children}
        </p>
    )
}

Anchor.Icon = Icon

Anchor.Label = Label

export default Anchor