import { GrAdd, GrAppsRounded, GrFlag, GrLocation } from "react-icons/gr";
// import { MapView } from "../maps";
import Button from "../../components/ui/Button";
import { useState } from "react";

type ContentProps = {
    origen: [number, number];
    destino: [number, number];
    origenDestinyAsigned?: [number, number][] | null;
};

const gridLayouts = [
    { label: "1 Mapa", className: "grid grid-cols-1", count: 1 },
    { label: "2x2", className: "grid grid-cols-2 grid-rows-2", count: 4 },
    { label: "3x2", className: "grid grid-cols-3 grid-rows-2", count: 6 },
    { label: "4x2", className: "grid grid-cols-4 grid-rows-2", count: 8 },
];

function Content({
    origen,
    destino,
    origenDestinyAsigned = [[-43.1375, -73.6425], [-42.1350, -73.6400]],
}: ContentProps) {
    const [gridMapOpen, setGridMapOpen] = useState(false);
    const [selectedLayout, setSelectedLayout] = useState(gridLayouts[0]);

    return (
        <div className="relative w-full h-full text-zinc-50">
            <div className="flex justify-start items-center gap-5 py-3">
                <div className="flex items-center gap-5 text-stone-400 h-8 rounded-full px-10">
                    <Button onClick={() => setGridMapOpen(!gridMapOpen)} className="relative">
                        <GrAppsRounded size={20} />
                        {gridMapOpen && (
                            <div className="absolute flex flex-col left-0 top-9 w-[400px] h-[400px] bg-bgt shadow-xl shadow-zinc-950/50 rounded-lg z-[9999]">
                                <div className="relative w-full h-10 flex justify-center items-center">
                                    <h5>Organizar Mapas</h5>
                                    <Button onClick={() => setGridMapOpen(false)} className="absolute right-2 top-2">x</Button>
                                </div>
                                <div className="grid grid-cols-2 grid-rows-2 gap-2 w-full h-full p-5">
                                    {gridLayouts.map((layout, index) => (
                                        <div
                                            key={index}
                                            onClick={() => {
                                                setSelectedLayout(layout);
                                                setGridMapOpen(false);
                                            }}
                                            className={`bg-bgp hover:bg-gray transition-all duration-150 rounded-2xl grid p-3 gap-1 ${layout.className}`}
                                        >
                                            {Array(layout.count).fill(null).map((_, i) => (
                                                <div key={i} className="relative bg-gray/60 w-full h-full rounded-xl" />
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </Button>
                    <GrAdd size={20} />
                    <GrLocation />
                    <GrFlag size={20} />
                </div>
            </div>

            <div className="relative grid grid-cols-3 gap-2">
                <div className={`col-span-3 gap-1 ${selectedLayout.className}`}>
                    {Array(selectedLayout.count).fill(null).map((_, index) => (
                        // <MapView
                        //     key={index}
                        //     tripOrigin={index === 0 ? origen : origen}
                        //     tripDestination={index === 0 ? destino : destino}
                        //     origenDestinyAsigned={index === 0 ? origenDestinyAsigned : origenDestinyAsigned}
                        //     height="340px"
                        // />
                        <div key={index} className="h-[340px] w-full bg-gray flex flex-col gap-2 justify-center items-center">
                            <h4>
                                mapa {index + 1}
                            </h4>
                            <div className="flex flex-col gap-1 text-xs">
                                <span>
                                    origen:{origen}
                                </span>
                                <span>
                                    destino:{destino}
                                </span>
                                <span>
                                    o-D:{origenDestinyAsigned}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Content;