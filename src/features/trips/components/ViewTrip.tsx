import { useParams } from "react-router";
import Button from "../../../components/ui/Button";
import { GrCircleQuestion, GrContactInfo, GrDirections, GrFormNextLink, GrGrommet, GrLinkDown, GrLinkUp, GrPhone, GrSatellite } from "react-icons/gr";
import { MapView } from "../../maps";

function ViewTrip() {

    const id = useParams().id;

    return (
        <div className="relative h-full w-full flex flex-col justify-start items-start">
            <div className="grid grid-cols-12 gap-5  w-full h-full">
                <div className="col-span-7 px-5 flex flex-col items-start justify-start gap-2 bg-w ">
                    <div className="bg-gradient-to-t from-bgt  w-full rounded-b-3xl p-2">
                        {/* Inicio Top menu informacion rapdia de viaje */}
                        <div className=" py-1 w-full col-span-8 flex justify-between items-center gap-5 border-b border-gray/20 pb-3 ">
                            <div className="flex text-nowrap justify-start items-center gap-3 bg-gray/30 px-2 ps-4 pe-4 rounded-full py-1">
                                <GrGrommet className="text-primary animate-pulse" />
                                <h3>Recorrido #00{id} </h3>
                                <div className="text-white font-semibold flex justify-center items-center gap-2 bg-bgp  rounded-full px-4 py-1 text-xs">
                                    <GrDirections className="text-white" />
                                    E-20050006
                                </div>
                            </div>
                            <div className="flex justify-end items-center gap-2 text-nowrap">
                                <Button rounded="full" className="text-gray flex justify-center items-center gap-2 px-4 mx-2 hover:bg-bgt">
                                    <GrCircleQuestion size={20} />
                                    <p>Ayuda y contacto</p>
                                </Button>
                                <Button rounded="full" className="text-gray flex justify-center items-center gap-2 px-4 mx-2 hover:bg-bgt">
                                    <GrPhone size={20} />
                                    <p>Llamar cliente</p>
                                </Button>
                            </div>
                        </div>
                        <div className="flex justify-between items-center w-full px-5 py-2">
                            <div className="flex justify-start items-center gap-2">
                                <h3 className="text-white/70">Puerto Montt </h3>
                                <GrFormNextLink className="text-primary" />
                                <h3 className="text-white">Castro </h3>
                            </div>
                            <div className="flex justify-center items-center gap-2 font-light">
                                <h5 className="text-gray flex items-center justify-center gap-1 bg-bgp shadow shadow-gray/30 px-4 py-1 rounded-full">
                                    <GrContactInfo size={19} />
                                    <span className="font-bold">Camilo Lehue</span>
                                </h5>
                                <h5 className="text-gray flex items-center justify-center gap-1 bg-bgp shadow shadow-gray/30 px-4 py-1 rounded-full">
                                    <GrLinkUp />
                                    <span className="font-bold">XXXX-00</span>
                                </h5>
                                <h5 className="text-gray flex items-center justify-center gap-1 bg-bgp shadow shadow-gray/30 px-4 py-1 rounded-full">
                                    <GrLinkDown />
                                    <span className="font-bold">XXXX-99</span>
                                </h5>
                                <h5 className="text-gray flex items-center justify-center gap-1 bg-bgp shadow shadow-gray/30 px-4 py-1 rounded-full">
                                    <GrSatellite />
                                    <span className="font-bold">E-20050006</span>
                                </h5>
                            </div>
                        </div>
                        {/* Fin Top menu informacion rapdia de viaje */}
                        <RutaTracking />
                    </div>
                    <div className="p-2 w-full">
                        <h3>Notificaciones <span className="text-danger text-xs font-bold">(1)</span></h3>
                        <div className="w-full h-20 bg-danger/20 border border-danger rounded-xl mt-4 p-3">
                            <h4 className="text-white">Desvío en la ruta 5-Sur</h4>
                            <p>El sistema a detectado un desvío en la ruta de la carretera. Se recomienda que se tome la decisión de continuar con la ruta.</p>
                        </div>
                    </div>
                    <div className="p-2 w-full h-full">
                        <div className="w-full h-full rounded-2xl flex flex-col gap-5 p-2">
                            <h3>Información <span className="block text-xs text-secondary">del recorrido</span></h3>
                            <div className="grid grid-cols-3 gap-2 w-full text-nowrap">
                                <div className="grid grid-cols-2 border border-gray/20 rounded-xl p-2 gap-x-5 gap-y-2">
                                    <p className="text-gray">Estado del viaje</p>
                                    <p className="text-primary">En camino</p>
                                    <p className="text-gray">Conductor 1</p>
                                    <p>Camilo Lehue</p>
                                    <p className="text-gray">Conductor 2</p>
                                    <p>Camilo L.</p>
                                    <p className="text-gray">Fecha de registro</p>
                                    <p>24/06/2025</p>
                                    <p className="text-gray">Fecha de Salida</p>
                                    <p>24/06/2025</p>
                                    <p className="text-gray">Fecha de Llegada</p>
                                    <p>24/06/2025</p>
                                </div>
                                <div className="grid grid-cols-2 border border-gray/20 rounded-xl p-2 gap-x-5 gap-y-2">
                                    <p className="text-gray">Origen</p>
                                    <p>Puerto Montt</p>
                                    <p className="text-gray">Destino</p>
                                    <p>Castro</p>
                                    <p className="text-gray">Hora salida</p>
                                    <p>11:30:00</p>
                                    <p className="text-gray">Hora llegada</p>
                                    <p>18:00:00</p>
                                    <p className="text-gray">Empresa</p>
                                    <p>Yadran</p>
                                    <p className="text-gray">Transporte</p>
                                    <p>Transportes Cristian</p>
                                </div>
                                <div className="grid grid-cols-2 border border-gray/20 rounded-xl p-2 gap-x-5 gap-y-2">
                                    <p className="text-gray">Código viaje</p>
                                    <p className="text-primary">E-20050006</p>
                                    <p className="text-gray">Alertas</p>
                                    <p className="text-warning">Desvío en la ruta 5-Sur</p>
                                    <p className="text-gray">Latitud</p>
                                    <p>-43.1375</p>
                                    <p className="text-gray">Longitud</p>
                                    <p>-71.5325</p>
                                    <p className="text-gray">Ruta</p>
                                    <p>5 Sur</p>
                                    <p className="text-gray">Kilometro</p>
                                    <p>V-230</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative col-span-5 h-full overflow-hidden">
                    <MapView tripOrigin={[0, 0]} tripDestination={[0, 0]} height="800px" />
                </div>
            </div>
        </div >
    )
}


const RutaTracking = () => {
    return (
        <div className="relative flex flex-col place-items-center w-full min-h-70 py-10  rounded-3xl bg-gradient-to-br from-green-700/30 to-red-800/10">
            <div className="relative w-[calc(100%-5rem)] flex flex-col gap-3 h-35 ">
                <div className="h-11 w-0.5 bg-primary absolute left-[7px] top-1 "></div>
                <div className="flex justify-start items-center gap-3 ps-0.5">
                    <div className="absolute top-1 left-0.5 w-3 h-3 bg-primary rounded-full"></div>
                    <h5 className="absolute left-5 top-1 "><span className="text-primary">15:30hrs.</span> Salida desde <span className="font-bold">Terminal Sur Puerto Montt</span></h5>
                </div>
                <div className="flex justify-start items-center gap-3 ">
                    <div className="absolute left-0.5 top-11 w-3 h-3 bg-primary rounded-full"></div>
                    <h5 className="absolute left-5 top-10 "><span className="text-primary">16:00hrs.</span> Entrada a <span className="font-bold">Trasbordo pargua</span></h5>
                </div>
                <div className="absolute w-70 h-30 bg-primary/30 rounded-full right-0 top-0 blur-3xl "></div>
                <img src="/dashboard/truck.png" alt="vehiculopng" className="absolute right-0 w-[17%]" />
            </div>
            <div className="relative w-[calc(100%-2rem)] px-2">
                <div className="relative">
                    <div className="absolute w-full h-0.5 bg-bgp/20">
                    </div>
                    <div className="absolute w-[65%]  h-0.5 bg-white">
                    </div>
                    <div className="absolute w-[50%] h-0.5 bg-primary">
                        <div className="absolute -top-14 -right-10.5 bg-primary min-w-20 px-5 h-7 rounded-full flex justify-center items-center">
                            <small className="text-bgp">En Camino</small>
                            <div className="absolute h-2 w-2 bg-primary rotate-45 -bottom-1">
                            </div>
                        </div>
                        <div className="absolute -top-2 right-0 w-5 h-5 border border-primary border-b-transparent animate-spin rounded-full">
                        </div>
                        <div className="absolute -top-1 right-1 w-3 h-3 bg-white border-b-transparent animate-spin rounded-full">
                        </div>
                    </div>
                </div>
                <div className="absolute -top-1 left-5 w-3 h-3 bg-primary rounded-full">
                    <div className="absolute top-5  text-center">
                        <h5 className="text-nowrap text-white">Puerto Montt</h5>
                        <small className="text-white">hace 1 hora</small>
                    </div>
                </div>
                <div className="absolute -top-1 left-[30%] w-3 h-3 bg-primary rounded-full">
                    <div className="absolute -left-8 top-5 text-center ">
                        <h5 className="text-nowrap text-white">Pargua, Chile</h5>
                        <small className="text-primary animate-pulse">16:30:00 </small>
                    </div>
                </div>
                <div className="absolute -top-1 left-[65%] rounded-full">
                    <div className="absolute -left-8 top-5  text-center">
                        <h5 className="text-nowrap text-white">Ancud, Chile</h5>
                        <small className="text-white">a las 17:30 </small>
                    </div>
                    <div
                        className="absolute -right-[5px] -top-[6px] animate-ping w-5 h-5 rounded-full border border-primary"
                        style={{
                            animation: "ping 2s ease-in-out infinite reverse",
                            animationDirection: "alternate ",
                            transform: "scale(1.5)",
                        }}
                    >
                    </div>
                    <div
                        className="absolute -right-[5px] animate-ping -top-[6px] scale-50 w-5 h-5 rounded-full border-2 border-primary"
                        style={{
                            animation: "ping 5s ease-in-out infinite reverse",
                            animationDelay: "1s",
                            animationDirection: "alternate",
                            transform: "scale(1.5)",
                        }}
                    >
                    </div>
                    <div
                        className="absolute right-0 top-[1px] w-2 h-2 rounded-full bg-white"
                        style={{
                            animation: "pulse 1s ease-in infinite",
                        }}
                    >
                    </div>
                </div>
                <div className="absolute -top-[3px] right-5 w-2 h-2 bg-bgp rounded-full">
                    <div className="absolute top-5 right-0 text-center ">
                        <h5 className="text-nowrap text-white">Castro, Chile</h5>
                        <small className="text-white">a las 18:00</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewTrip