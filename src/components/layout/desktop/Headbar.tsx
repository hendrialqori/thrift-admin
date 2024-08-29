function Headbar({ children }: { children: React.ReactNode }) {
    return (
        <header className="w-full flex justify-between items-center border-b border-[#EDEDF0] px-5 h-14 border">
            {children}
        </header>
    )
}

function Item({ children }: { children: React.ReactNode }) {
    return (
        <div>
            {children}
        </div>
    )
}

Headbar.Item = Item

export default Headbar