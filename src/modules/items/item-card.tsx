import { Image } from "#/components/ui/image"
import { Link, useParams } from "react-router-dom"
import { FaArrowRight } from "react-icons/fa6";


export default function ItemCard() {
    const { productId } = useParams()

    const to = "/products/" + productId + "/items/" + 1

    return (
        <Link to={to} className="w-max">
            <figure className="relative">
                <Image
                    src="/baju.jpg"
                    alt="item-card"
                    className="size-full rounded-lg"
                />
                <figcaption className="absolute left-1/2 -translate-x-1/2 bottom-10 flex gap-1">
                    <span
                        className="text-xs font-medium rounded-lg bg-white px-4 py-1"
                        role="presentation"
                        aria-hidden="true"
                    >
                        SX-2321-11A
                    </span>
                   <button className="bg-white rounded-lg px-2">
                    <FaArrowRight className="text-sm" />
                   </button>
                </figcaption>
            </figure>
        </Link>
    )
}