import { Image } from "#/components/ui/image"

export default function Avatar() {
    return (
        <div>
            <Image
                src="/baju.jpg"
                alt="item-card"
                className="size-full rounded-lg"
            />
        </div>
    )
}