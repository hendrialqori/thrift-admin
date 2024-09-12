import { useNavigate } from "react-router-dom"

type Props = {
    image: string;
    date: string;
    phone: string;
    paymentMethod: string;
}

export default function TransactionCard() {
    const navigate = useNavigate()
    const navigateTo = () => navigate(`/transactions/49rj2p3oifm`)

    return (
        <figure
            className="rounded-2xl flex size-full overflow-hidden min-h-52 cursor-pointer"
            onClick={navigateTo}
            aria-label="transaction-card"
        >
            <div className="w-5/12">
                <img
                    src="/baju-1.jpg"
                    alt="transaction-product-image"
                    className="size-full object-cover"
                />
            </div>
            <figcaption className="w-7/12 h-full bg-background pl-4 flex flex-col justify-center items-start space-y-1">
                <Item
                    label="Name"
                    value="Hendri Alqori"
                />
                <Item
                    label="Date"
                    value="20 Jan 2024"
                />
                <Item
                    label="Phone"
                    value="+62 987-2212-1221"
                />
                <Item
                    label="Payment method"
                    value="Cash"
                />
            </figcaption>
        </figure>
    )
}

function Item(props: { label: string, value: string }) {
    return (
        <div className="font-medium -space-y-1">
            <span className="text-[0.6rem] md:text-[0.8rem] text-gray-600" role="presentation" aria-hidden>
                {props.label}
            </span>
            <p className="text-[0.8rem] md:text-sm">{props.value}</p>
        </div>
    )
}