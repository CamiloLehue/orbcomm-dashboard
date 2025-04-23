import { GrDeliver, GrFormDown, GrSearch } from "react-icons/gr"
import Button from "../../components/ui/Button"
import Input from "../../components/ui/Input"

function LeftBar() {
    return (
        <div className="min-h-full rounded-b-2xl bg-stone-900/60 rounded h-full  w-full max-w-[300px] border-e border-zinc-100/5">
            <div className="ps-4 w-full h-10 flex justify-between items-center px-1">
                <h4 className="text-center font-light">Activos</h4>
                <small className="text-zinc-500">1 - 2 de 2 recorridos</small>
                <div>
                    <Button className="bg-stone-950 rounded text-zinc-400">
                        <GrFormDown />
                    </Button>
                </div>
            </div>
            <CardViajes />
        </div>
    )
}


const CardViajes = () => {
    return (
        <div className="p-1 flex flex-col gap-3 ">
            <div className="flex items-center gap-1 border border-zinc-100/5 rounded ps-3 pe-1">
                <GrSearch />
                <Input placeholder="Busqueda..." type="text" className="w-full" />
            </div>
            <div className="flex flex-col gap-1 rounded-xl  min-h-[500px]">

                {
                    Array(3).fill(0).map((_, i) => {
                        return (
                            <article key={i} className="flex bg-zinc-950/50 flex-col justify-center items-center gap-3 p-2 border border-zinc-100/5 rounded-xl
                hover:bg-stone-800 transition-all duration-300 ease-in cursor-pointer">
                                <div>
                                    <h4 className="text-stone-500">GPS R{5507138 + i}</h4>
                                </div>
                                <div className="flex gap-2 items-center d px-2">
                                    <GrDeliver color="lime" />
                                    <small className="text-sm">
                                        {5507138 + i}
                                    </small>
                                </div>
                                <small className="font-light text-xs">02/04/2025 04:00:00</small>
                                <p className="bg-stone-800 text-zinc-300 rounded-full px-4 py-2 text-xs">
                                    Huasco, Población Esmeralda, Puerto M...
                                </p>
                            </article>
                        )
                    })
                }

            </div>

        </div>
    )
}
export default LeftBar