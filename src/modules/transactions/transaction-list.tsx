
export default function TransactionList({ children }: { children: React.ReactNode }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 p-bodyPaddingMd xl:p-bodyPadding">
            {children}
        </div>
    )
}