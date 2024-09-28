import { motion } from "framer-motion"

export default function Progress({ value }: { value: number }) {
    return (
        <div className="w-[320px] relative">
            <p className="text-white text-sm text-center mb-3">Saving product...</p>
            <motion.div
                animate={{ width: value + "%" }}
                className="h-3 rounded-lg absolute z-[2] bg-primary"
            />
            <div className="w-full h-3 rounded-lg absolute z-1 bg-white" />
        </div>
    )
}