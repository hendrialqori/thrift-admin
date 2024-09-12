import { useParams, useNavigate } from "react-router-dom"
import { FaArrowRight } from "react-icons/fa6";

export default function ItemCard() {
    const { productId } = useParams()
    const navigate = useNavigate()

    const to = "/products/" + productId + "/items/" + 1
    const navigateTo = () => navigate(to)

    return (
        <figure className="relative border cursor-pointer" onClick={navigateTo}>
            <img
                src="/baju.jpg"
                alt="item-card"
                className="size-full rounded-lg"
                loading="lazy"
            />
            <figcaption className="absolute left-1/2 -translate-x-1/2 bottom-10 flex gap-1 w-10/12 md:w-9/12 xl:w-7/12 mx-auto">
                <span
                    className="text-xs font-medium rounded-lg bg-white px-4 py-2 w-full text-center"
                    role="presentation"
                    aria-hidden="true"
                >
                    SX-2321-11A
                </span>
                <button
                    className="bg-white rounded-lg px-2"
                >
                    <FaArrowRight className="text-sm" />
                </button>
            </figcaption>
        </figure>
    )
}