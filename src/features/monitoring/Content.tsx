import { GrAdd, GrAppsRounded, GrFlag, GrLocation } from "react-icons/gr"
import { MapView } from "../maps"
// import InfoPanel from "./InfoPanel"
import Button from "../../components/ui/Button"
import { useState } from "react";

function Content() {

    const [gridMap, setGridMap] = useState<boolean | null>(false);
    const [gridType, setGridType] = useState<string | null>("grid grid-cols-1");

    return (
        <div className="relative w-full h-full text-zinc-50">
            <div className="h-20 flex justify-start items-center  gap-5 ">
                <div className="flex items-center gap-2">
                    <h4 className="rounded px-2">AST-DEMO</h4>
                    <p className="font-bold">Cuenta: <span className="font-light">AST Networks & Tecnoservicios</span></p>
                </div>
                <div className="flex items-center gap-5 bg-zinc-900/30  text-stone-400 h-8 rounded-full px-10">
                    <Button onClick={() => { setGridMap(!gridMap) }} className="relative">
                        <GrAppsRounded size={20} />
                        {
                            gridMap && (
                                <div className="absolute flex flex-col left-0 top-9 w-[400px] h-[400px] bg-stone-900 shadow-xl shadow-zinc-950/50 rounded-lg z-[9999]">
                                    <div className="relative w-full h-10 flex justify-center items-center ">
                                        <h5>Organizar Mapas</h5>
                                        <Button onClick={() => { setGridMap(false) }} className="absolute right-2 top-2">
                                            x
                                        </Button>
                                    </div>
                                    <div className="grid grid-cols-2 grid-rows-2 gap-2 w-full h-full p-5">
                                        <div onClick={() => { setGridType("grid grid-cols-1") }} className="flex justify-center items-center bg-stone-800 hover:bg-stone-600 transition-all duration-150 rounded-2xl p-3">
                                            <div className="relative bg-stone-700 w-full h-full rounded-xl">

                                            </div>
                                        </div>
                                        <div onClick={() => { setGridType("grid grid-cols-2 grid-rows-2") }} className="bg-stone-800 hover:bg-stone-600 transition-all duration-150 rounded-2xl grid grid-cols-2 grid-rows-2 p-3 gap-1">
                                            <div className="relative bg-stone-700 w-full h-full rounded-lg">

                                            </div>
                                            <div className="relative bg-stone-700 w-full h-full rounded-lg">

                                            </div>
                                            <div className="relative bg-stone-700 w-full h-full rounded-lg">

                                            </div>
                                            <div className="relative bg-stone-700 w-full h-full rounded-lg">

                                            </div>
                                        </div>
                                        <div onClick={() => { setGridType("grid grid-cols-3 grid-rows-2") }} className="bg-stone-800 hover:bg-stone-600 transition-all duration-150 rounded-2xl grid grid-cols-2 grid-rows-3 p-3 gap-1">
                                            <div className="relative bg-stone-700 w-full h-full rounded">

                                            </div>
                                            <div className="relative bg-stone-700 w-full h-full rounded">

                                            </div>
                                            <div className="relative bg-stone-700 w-full h-full rounded">

                                            </div>
                                            <div className="relative bg-stone-700 w-full h-full rounded">

                                            </div>
                                            <div className="relative bg-stone-700 w-full h-full rounded">

                                            </div>
                                            <div className="relative bg-stone-700 w-full h-full rounded">

                                            </div>
                                            <div className="relative bg-stone-700 w-full h-full rounded">

                                            </div>
                                            <div className="relative bg-stone-700 w-full h-full rounded">

                                            </div>
                                        </div>
                                        <div onClick={() => { setGridType("grid grid-cols-4 grid-rows-2") }} className="bg-stone-800 hover:bg-stone-600 transition-all duration-150 rounded-2xl grid grid-cols-2 grid-rows-4 p-3 gap-1">
                                            <div className="relative bg-stone-700 w-full h-full rounded">

                                            </div>
                                            <div className="relative bg-stone-700 w-full h-full rounded">

                                            </div>
                                            <div className="relative bg-stone-700 w-full h-full rounded">

                                            </div>
                                            <div className="relative bg-stone-700 w-full h-full rounded">

                                            </div>
                                            <div className="relative bg-stone-700 w-full h-full rounded">

                                            </div>
                                            <div className="relative bg-stone-700 w-full h-full rounded">

                                            </div>
                                            <div className="relative bg-stone-700 w-full h-full rounded">

                                            </div>
                                            <div className="relative bg-stone-700 w-full h-full rounded">

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </Button>
                    <GrAdd size={20} />
                    <GrLocation />
                    <GrFlag size={20} />
                </div>
            </div>
            <div className={`relative grid grid-cols-3 gap-2 `}>
                <div className={`col-span-3 ${gridType}`}>
                    {
                        gridType === "grid grid-cols-1" && <MapView tripOrigin={null} tripDestination={null} />
                        || gridType === "grid grid-cols-2 grid-rows-2" && (
                            <>
                                {
                                    Array(4).fill(null).map((_, index) => (
                                        <MapView key={index} tripOrigin={null} tripDestination={null} height="349px" />
                                    ))
                                }
                            </>
                        )
                        || gridType === "grid grid-cols-3 grid-rows-2" && <>
                            {
                                Array(6).fill(null).map((_, index) => (
                                    <MapView key={index} tripOrigin={null} tripDestination={null} height="349px" />
                                ))
                            }
                        </>
                        || gridType === "grid grid-cols-4 grid-rows-2" && <>
                            {
                                Array(8).fill(null).map((_, index) => (
                                    <MapView key={index} tripOrigin={null} tripDestination={null} height="349px" />
                                ))
                            }
                        </>
                    }
                </div>
                {/* <div className="absolute right-0 top-0 w-[500px] h-full z-400">
                    <InfoPanel />
                </div> */}
            </div>
        </div>
    )
}



export default Content