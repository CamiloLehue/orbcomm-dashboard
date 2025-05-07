
type CardTypeProps = {
    children: React.ReactNode
    title?: string
    subtitle?: string
    subChildren?: React.ReactNode
}


function CardType({ children, title, subtitle }: CardTypeProps) {
    return (
        <div className="relative bg-gradient-to-br to-transparent  p-[1.5px] ">
            <div className="relative flex flex-col py-4 justify-center items-center  rounded-xl my-1">
                <h4 className="">{title}</h4>
                <small className="font-light text-secondary">{subtitle}</small>
            </div>
            <div className="relative h-full  p-2 flex flex-col gap-5 rounded-xl">
                <div>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default CardType