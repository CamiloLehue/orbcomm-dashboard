import { GrAdd, GrAppsRounded, GrFlag, GrLocation } from "react-icons/gr";
import Button from "../../../components/ui/Button";
import { MapView } from "../../maps";

interface ContentProps {
    origin: [number, number] | null;
    destination: [number, number] | null;
}

function Content({ origin, destination }: ContentProps) {
    return (
        <div className="relative w-full h-full text-zinc-50">
            <div className="h-20 flex justify-start items-center  gap-5 ">
                <div className="flex items-center gap-2">
                    <h4 className="rounded px-2">AST-DEMO</h4>
                    <p className="font-bold">Cuenta: <span className="font-light">AST Networks & Tecnoservicios</span></p>
                </div>
                <div className="flex items-center gap-5 bg-zinc-900/30 text-stone-400 h-8 rounded-full px-10">
                    <Button>
                        <GrAppsRounded size={20} />
                    </Button>
                    <GrAdd size={20} />
                    <GrLocation />
                    <GrFlag size={20} />
                </div>
            </div>
            <div className="relative grid grid-cols-3 gap-2">
                <div className="col-span-2">
                    <MapView tripOrigin={origin} tripDestination={destination} />
                </div>
            </div>
        </div>
    );
}

export default Content;