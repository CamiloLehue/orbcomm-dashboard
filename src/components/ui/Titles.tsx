type TitlesProps = {
    title: string;
    subtitle?: string;
}

function Titles({ title, subtitle = "" }: TitlesProps) {
    return (
        <div className="relative left-[50%] -translate-x-1/2 z-[2000] 
                bg-linear-90 from-bgt via-bgt/50 to-bgt backdrop-blur 
                h-10 w-full flex flex-col justify-center items-center shadow-xl shadow-bgp/50">
            <h5 className="text-white uppercase">{title}</h5>
            <small className="hidden">{subtitle}</small>
        </div>
    )
}

export default Titles