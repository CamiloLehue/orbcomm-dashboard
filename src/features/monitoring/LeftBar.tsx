import { GrFormDown, GrFormNextLink, GrGrommet } from "react-icons/gr"
import Button from "../../components/ui/Button"

type LeftBarProps = {
    setOrigenDestinyAsigned: (value: [number[], number[]] | null) => void;
}

function LeftBar({ setOrigenDestinyAsigned }: LeftBarProps) {
    return (
        <div className="min-h-full rounded-b-2xl rounded h-full  w-full max-w-[400px] ">
            <div className="ps-4 w-full h-10 flex justify-between items-center px-1">
                <h4 className="text-center font-light">Activos</h4>
                <small className="text-gray">1 - 2 de 2 recorridos</small>
                <div>
                    <Button className=" rounded text-zinc-400">
                        <GrFormDown />
                    </Button>
                </div>
            </div>
            <CardViajes setOrigenDestinyAsigned={setOrigenDestinyAsigned} />
        </div>
    )
}


const CardViajes = ({ setOrigenDestinyAsigned }: LeftBarProps) => {

    const origen3: [number, number] = [-43.12962, -73.643237];
    const destino3: [number, number] = [-43.123219, -73.642924];

    return (
        <div className="p-1 flex flex-col gap-3 max-h-[700px] overflow-y-auto">
            <div className="flex flex-col gap-1 rounded-xl  min-h-[500px] ">
                {
                    Array(8).fill(0).map((_, i) => {
                        return (
                            <Button key={i} onClick={() => { setOrigenDestinyAsigned([origen3, destino3]) }} rounded="lg" className="group cursor-pointer relative w-full rounded-lg bg-gray/5 hover:bg-transparent hover:border-transparent border border-gray/25  px-5 py-2 flex flex-col gap-5 text-gray transition-all duration-200">
                                <div className="relative  rounded-full py-1 flex justify-center items-center w-full">
                                    <h4 className="text-white/70">GPS E-{2005000 + i}</h4>
                                    <div className="absolute right-0 top-0">
                                        <GrGrommet className="text-primary animate-pulse text-xs" />
                                    </div>
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                    <span className="font-bold group-hover:text-white/80 transition-all duration-200">Salida origen</span>
                                    <small className="group-hover:text-primary transition-all duration-200"> 02/04/2025 04:00:00</small>
                                </div>
                                <div className="flex justify-center items-center gap-2 bg-bgt rounded-full group-hover:bg-transparent w-full">
                                    <h3 className="text-white/70">Puerto Montt </h3>
                                    <GrFormNextLink className="text-primary" />
                                    <h3 className="text-white">Castro </h3>
                                </div>
                            </Button >
                        )
                    })
                }
            </div>
        </div>
    )
}
export default LeftBar