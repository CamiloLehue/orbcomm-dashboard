import { useParams } from "react-router";
import Button from "../../../components/ui/Button";
import { GrCircleQuestion, GrDirections, GrFormNextLink, GrPhone } from "react-icons/gr";
import { MapView } from "../../maps";



function ViewTrip() {

    const id = useParams().id;

    return (
        <div className="relative h-full w-full flex flex-col justify-start items-start">
            <div className="grid grid-cols-12 gap-5  w-full h-full">
                <div className="col-span-7 flex flex-col items-start justify-start gap-2 ">
                    <div className="bg-gray/20 w-full col-span-8 flex justify-between items-center gap-5 px-4 py-5">
                        <div className="flex text-nowrap justify-start items-center gap-3 bg-gray/30 px-2 ps-4 rounded-full py-1">
                            <h3>Recorrido Nº {id} </h3>
                            <div className="text-white font-semibold  flex justify-center items-center gap-2 bg-bgp  rounded-full px-4 py-1 text-xs">
                                <GrDirections className="text-white" />
                                Puerto Montt - Chiloé
                            </div>
                        </div>
                        <div className="flex justify-center items-center gap-2">
                            <h3 className="text-white flex items-center justify-center gap-1">Transporte: <span className="text-primary">E-20050006</span></h3>
                        </div>
                        <div className="flex justify-end items-center gap-2 text-nowrap">
                            <Button rounded="full" className="flex justify-center items-center gap-2 px-4 mx-2 hover:bg-bgp">
                                <GrCircleQuestion size={20} />
                                <p>Ayuda y contacto</p>
                            </Button>
                            <Button rounded="full" className="flex justify-center items-center gap-2 px-4 mx-2 hover:bg-bgp">
                                <GrPhone size={20} />
                                <p>Llamar cliente</p>
                            </Button>
                        </div>
                    </div>
                    <div className="flex justify-between items-center w-full p-2 px-5">
                        <div className="flex justify-start items-center gap-2">
                            <h3 className="text-white/80">Puerto Montt </h3>
                            <GrFormNextLink className="text-primary" />
                            <h3 className="text-white">Castro </h3>
                        </div>
                        <div className="flex justify-center items-center gap-10">
                            <div className="text-white/50 flex flex-col items-center justify-center">
                                <small>Fecha de registro</small>
                                <small>25/06/2025</small>
                            </div>
                            <div className="text-white/50 flex flex-col items-center justify-center">
                                <small>Fecha de Salida</small>
                                <small>25/06/2025</small>
                            </div>
                            <div className="text-white/50 flex flex-col items-center justify-center">
                                <small>Fecha de llegada</small>
                                <small>25/06/2025</small>
                            </div>
                        </div>
                        <div className="flex justify-end items-center gap-5">
                            <div className="text-white text-center px-5 rounded-md  border-secondary/50 bg-bgp py-1">
                                <small>Llegada al destino</small>
                                <h4 className="animate-pulse">23:24 horas</h4>
                            </div>
                        </div>
                    </div>
                    <RutaTracking />
                    <div className="p-5 w-full">
                        <h3>Notificaciones <span className="text-danger text-xs font-bold">(1)</span></h3>
                        <div className="w-full h-20 bg-danger/20 border border-danger rounded-xl mt-4 p-3">
                            <h4 className="text-white">Desvío en la ruta 5-Sur</h4>
                            <p>El sistema a detectado un desvío en la ruta de la carretera. Se recomienda que se tome la decisión de continuar con la ruta.</p>
                        </div>
                    </div>
                    <div className="p-5 w-full h-full">
                        <div className="w-full h-full rounded-2xl bg-gray/30 flex flex-col gap-5 p-5">
                            <h3>Información <span className="block text-xs text-secondary">del recorrido</span></h3>
                            <div className="grid grid-cols-3 gap-10 w-full text-nowrap">
                                <div className="grid grid-cols-2 gap-x-5 gap-y-2">
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
                                <div className="grid grid-cols-2 gap-x-5 gap-y-2">
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
                                <div className="grid grid-cols-2 gap-x-5 gap-y-2">
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
        <div className="w-full min-h-50 py-5 bg-gray/20">
            <div className="relative w-full flex flex-col gap-3 mx-5  h-25 ">
                <div className="h-11 w-0.5 bg-gray absolute left-[6.5px] top-1 "></div>
                <div className="flex justify-start items-center gap-3 ps-0.5">
                    <div className="absolute top-1 left-0.5 w-3 h-3 bg-gray rounded-full"></div>
                    <h5 className="absolute left-5 top-1 "><span className="text-primary">11:30hrs.</span> Salida desde <span className="font-bold">Terminal Sur Puerto Montt</span></h5>
                </div>
                <div className="flex justify-start items-center gap-3 ">
                    <div className="absolute left-0.5 top-11 w-3 h-3 bg-gray rounded-full"></div>
                    <h5 className="absolute left-5 top-10 "><span className="text-primary">11:30hrs.</span> Entrada a <span className="font-bold">Castro</span></h5>
                </div>
                <img src="/dashboard/truck.png" alt="vehiculopng" className="absolute right-20 w-[17%]" />
            </div>
            <div className="relative w-full px-5">
                <div className="relative">
                    <div className="absolute w-full h-0.5 bg-gray">
                    </div>
                    <div className="absolute w-[50%] h-0.5 bg-white">
                    </div>
                </div>
                <div className="absolute -top-1 left-5 w-3 h-3 bg-white rounded-full">
                    <div className="absolute top-5  text-center">
                        <h5 className="text-nowrap">Puerto Montt</h5>
                        <small className="text-gray">hace 1 hora</small>
                    </div>
                </div>
                <div className="absolute -top-1 left-[30%] w-3 h-3 bg-white rounded-full">
                    <div className="absolute -left-8 top-5 text-center ">
                        <h5 className="text-nowrap">Pargua, Chile</h5>
                        <small className="text-primary animate-pulse">16:30:00 </small>
                    </div>
                </div>
                <div className="absolute -top-1 left-[65%] w-3 h-3 bg-gray rounded-full">
                    <div className="absolute -left-8 top-5  text-center">
                        <h5 className="text-nowrap">Ancud, Chile</h5>
                        <small className="text-gray">a las 17:30 </small>
                    </div>
                </div>
                <div className="absolute -top-1 right-5 w-3 h-3 bg-gray rounded-full">
                    <div className="absolute top-5 right-0 text-center ">
                        <h5 className="text-nowrap">Castro, Chile</h5>
                        <small className="text-gray">a las 18:00</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewTrip