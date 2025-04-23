import { GrAdd, GrAppsRounded, GrFlag, GrLocation } from "react-icons/gr"
import { MapView } from "../maps"

function Content() {
    return (
        <div className="relative w-full h-full text-zinc-50">
            <div className="h-20 flex justify-start items-center  gap-5 ">
                <div className="flex items-center gap-2">
                    <h4 className="rounded px-2">AST-DEMO</h4>
                    <p className="font-bold">Cuenta: <span className="font-light">AST Networks & Tecnoservicios</span></p>
                </div>
                <div className="flex items-center gap-5 bg-zinc-900/30 text-stone-400 h-8 rounded-full px-10">
                    <GrAppsRounded size={20} />
                    <GrAdd size={20} />
                    <GrLocation />
                    <GrFlag size={20} />
                </div>
            </div>
            <MapView />
        </div>
    )
}



export default Content