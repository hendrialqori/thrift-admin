
export default function TransactionList({ children }: { children: React.ReactNode }) {
    return (
        <div className="grid grid-cols-4 gap-4 p-9">
            {children}
        </div>
    )
}