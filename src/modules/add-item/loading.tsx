export default function Loading() {
    return (
        <div>
            <progress value={50} max={100} className="bg-primary" />
        </div>
    )
}