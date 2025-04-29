import { GrAdd, GrFormClose, GrFlag, GrLocation, GrPhone, GrFormClock } from "react-icons/gr";
import { MapView } from "../../maps";
import Button from "../../../components/ui/Button";

interface ContentProps {
    origin: [number, number] | null;
    destination: [number, number] | null;
}

function Content({ origin, destination }: ContentProps) {
    return (
        <div className="relative w-full h-full text-zinc-50 ">
            <div className="h-20 flex justify-start items-center w-full gap-5 ">
                <div className="flex items-center gap-2">
                    <h4 className="rounded px-2">AST-DEMO</h4>
                    <p className="font-bold">Cuenta: <span className="font-light">AST Networks & Tecnoservicios</span></p>
                </div>
                <div className="flex items-center gap-5 bg-gradient-to-tl from-secondary/30 to-secondary/20 border border-secondary/40 text-white h-8 rounded-full px-10">
                    <GrAdd size={20} />
                    <GrLocation />
                    <GrFlag size={17} />
                </div>
            </div>
            <div className="relative grid grid-cols-2 w-full gap-5 bg-secondary/3">
                <div className="">
                    <MapView tripOrigin={origin} tripDestination={destination} />
                </div>
                <div className=" border border-secondary/10 rounded-lg ">
                    <div className="border-b border-secondary/10  h-15 flex flex-col justify-center items-center">
                        <h2 className="bg-gradient-to-r from-zinc-400 to-white text-clip text-transparent bg-clip-text font-light text-xl">
                            Información del viaje
                        </h2>
                    </div>
                    <div className="flex flex-col py-4 gap-5 ">
                        <article className={`grid grid-cols-3 gap-2  `}>
                            <p className="text-center text-gray">Conductor</p>
                            <p>Camilo L.</p>
                        </article>
                        <article className={`grid grid-cols-3 gap-2  `}>
                            <p className="text-center text-gray">Origen</p>
                            <p>Puerto Montt</p>
                        </article>
                        <article className={`grid grid-cols-3 gap-2  `}>
                            <p className="text-center text-gray">Destino</p>
                            <p>Chiloé</p>
                        </article>
                        <article className={`grid grid-cols-3 gap-2  `}>
                            <p className="text-center text-gray">Tiempo estimado</p>
                            <p>5 horas</p>
                        </article>
                        <article className={`grid grid-cols-3 gap-2  `}>
                            <p className="text-center text-gray">Kílometros O - D</p>
                            <p>300km</p>
                        </article>
                        <article className={`grid grid-cols-3 gap-2  `}>
                            <p className="text-center text-gray">Hora de Salida</p>
                            <p>23:15 horas</p>
                        </article>
                        <article className={`grid grid-cols-3 gap-2  `}>
                            <p className="text-center text-gray">Fecha de Salida</p>
                            <p>25/06/2025</p>
                        </article>
                        <article className={`grid grid-cols-3 gap-2  `}>
                            <p className="text-center text-gray">Hora de llegada</p>
                            <p>18:45 horas</p>
                        </article>
                        <article className={`grid grid-cols-3 gap-2  `}>
                            <p className="text-center text-gray">Fecha de llegada</p>
                            <p>25/06/2025</p>
                        </article>
                        <article className={`grid grid-cols-3 gap-2  `}>
                            <p className="text-center text-gray">Fecha creación</p>
                            <p>25/06/2025</p>
                        </article>
                    </div>
                    <div className="flex items-center justify-center gap-2 my-10 text-xs">
                        <Button rounded="lg" className=" hover:bg-bgt px-5 gap-2  ">
                            <GrPhone size={16} />
                            Llamar cliente
                        </Button>
                        <Button rounded="lg" className="group hover:bg-bgt px-5 gap-2  ">
                            <GrFormClock size={23} className=" group-hover:text-warning" />
                            Reprogramar viaje
                        </Button>
                        <Button rounded="lg" className="group hover:bg-bgp px-5 gap-2  ">
                            <GrFormClose size={23} className="group-hover:text-danger transition-all duration-500" />
                            Cancelar
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;