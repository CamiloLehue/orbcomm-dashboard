import { GrMap, GrSync } from "react-icons/gr"
import Button from "../ui/Button"
import MapView from "./MapView"
import InfoPanel from "../../features/dashboard/InfoPanel"

function MapInterface() {
    return (
        <div className="relative h-full w-full flex justify-center items-center ">
            <div className="grid grid-cols-3 gap-2 w-full h-full border border-zinc-100/5 p-2 rounded-3xl">
                <div className="col-span-2 flex flex-col">
                    <div className="bg-zinc-900 w-full flex justify-between items-center px-5 h-15 rounded-t-2xl">
                        <h3 className="font-light text-zinc-400 flex  items-center gap-2">
                            <GrMap />
                            Mapa Sincronizado
                        </h3>
                        <Button className="text-xs flex items-center gap-2 text-zinc-500 hover:text-zinc-400">
                            <GrSync />
                            Sincronizar
                        </Button>
                    </div>
                    <MapView />
                </div>
                <InfoPanel />
            </div>
        </div>
    )
}

export default MapInterface