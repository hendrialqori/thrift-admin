
type Node = React.ReactNode

type Props = {
    left?: Node;
    center: Node;
    right?: Node;
}

export const HeaderMobile = (props: Props) => {
    return (
        <header className="md:hidden grid grid-cols-4 px-3 w-full h-[60px] border-b border-[#EDEDF0] ">
            <div className="col-span-1 flex items-center justify-start">
                {props.left}
            </div>
            <div className="col-span-2 text-center flex items-center justify-center">
                {props.center}
            </div>
            <div className="col-span-1 flex items-center justify-end">
                {props.right}
            </div>
        </header>
    )
}