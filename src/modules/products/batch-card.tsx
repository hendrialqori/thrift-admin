import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

type Props = {
    id: number
    name: string;
    pieces: string;
    date: string;
}

export const BatchCard = () => {
    return (
        <Link to={`/products/1/items`} aria-label="batch-card">
            <div className="w-full flex justify-between items-center border border-[#EDEDF0] p-8 rounded-2xl hover:bg-[#F8F8F8] transition duration-300">
                <div>
                    <p className="font-medium text-lg">Batch 1</p>
                    <span className="opacity-50">20 April 2023 - (200 pcs)</span>
                </div>
                <button className="rounded-full size-8 bg-primary flex items-center justify-center">
                    <FaArrowRight className="text-white text-lg" />
                </button>
            </div>
        </Link>
    )
}