import { useParams } from "react-router";
import Button from "../../../components/ui/Button";
import { GrCheckmark, GrCircleQuestion, GrCopy, GrDirections, GrFormNextLink, GrGrommet, GrPhone, GrSchedule } from "react-icons/gr";
import { MapView } from "../../maps";
import ProgressTrip from "./ProgressTrip";

function ViewTrip() {

    const id = useParams().id;

    const origen: [number, number] = [-43.1375, -73.6400];
    const destino: [number, number] = [-42.1350, -73.6400];

    return (
        <div className="relative bg-bgp h-full w-full flex flex-col justify-start items-start">
            <div className="grid grid-cols-12 gap-5  w-full h-full">
                <div className="col-span-5 px-5 flex flex-col items-start justify-start gap-2 bg-w ">
                    <div className="w-full p-2">
                        {/* Inicio Top menu informacion rapdia de viaje */}
                        <div className="bg-bg py-1 w-full col-span-8 flex justify-start items-center gap-5 border-b border-gray/20 pb-3 ">
                            <div className="flex text-nowrap justify-start items-center gap-3 bg-gray/30 px-2 ps-4 pe-4 rounded-full py-1">
                                <GrGrommet className="text-primary animate-pulse" />
                                <h3>Recorrido #00{id} </h3>
                                <div className="text-white font-semibold flex justify-center items-center gap-2 bg-bgp  rounded-full px-4 py-1 text-xs">
                                    <GrDirections className="text-white" />
                                    E-20050006
                                </div>
                            </div>
                            <div className="flex justify-end items-center gap-2 text-nowrap">
                                <Button rounded="full" className="text-gray flex justify-center items-center gap-2 mx-2 hover:bg-bgt">
                                    <GrCircleQuestion size={20} />
                                    <p>Ayuda y contacto</p>
                                </Button>
                                <Button rounded="full" className="text-gray flex justify-center items-center gap-2 mx-2 hover:bg-bgt">
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
                            <WidgetV />
                        </div>
                        {/* Fin Top menu informacion rapdia de viaje */}
                        <RutaTracking />
                    </div>
                    <div className="p-2 w-full h-full mt-20">
                        <div className="w-full h-full rounded-2xl flex flex-col gap-5 p-2">
                            <h3>Información <span className="block text-xs text-secondary">del recorrido</span></h3>
                            <div className="grid grid-cols-2 gap-2 w-full text-nowrap">
                                <div className="grid grid-cols-2 border border-gray/20 rounded-xl p-2 gap-x-5 gap-y-2">
                                    <p className="text-gray">Estado del viaje</p>
                                    <p className="text-primary">En camino</p>
                                    <p className="text-gray">Conductor 1</p>
                                    <p>Cristofer Castro</p>
                                    <p className="text-gray">Conductor 2</p>
                                    <p>Roberto Fernandez</p>
                                    <p className="text-gray">Fecha de registro</p>
                                    <p>24/06/2025</p>
                                    <p className="text-gray">Fecha de Salida</p>
                                    <p>24/06/2025</p>
                                    <p className="text-gray">Fecha de Llegada</p>
                                    <p>24/06/2025</p>
                                </div>
                                <div className="grid grid-cols-2 border border-gray/20 rounded-xl p-2 gap-x-5 gap-y-2">
                                    <p className="text-gray">Origen</p>
                                    <p>Castro</p>
                                    <p className="text-gray">Destino</p>
                                    <p>Puerto Montt</p>
                                    <p className="text-gray">Hora salida</p>
                                    <p>11:30:00</p>
                                    <p className="text-gray">Hora llegada</p>
                                    <p>15:30:00</p>
                                    <p className="text-gray">Empresa</p>
                                    <p>Yadran</p>
                                    <p className="text-gray">Transporte</p>
                                    <p>Transportes Cristian</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-3 bg-bgp w-full h-ful p-1">
                    <div className="bg-bgs/50 w-full h-full rounded-2xl p-5">
                        <h3>Logística</h3>
                        <h5 className="text-gray">Trazabilidad del cargamento</h5>
                        <div className="w-full my-5">
                            <div className="border-s border-dashed border-gray/50 flex flex-col gap-2 p-2">
                                <div className="border border-dashed border-gray/30 py-3 px-4 rounded-lg flex flex-col">
                                    <small className="text-xs text-gray text-end">22 de marzo 11:30 a.m.  </small>
                                    <small className="text-white/80">Entrega de carga centro cultivo</small>
                                    <div className="flex gap-1 place-items-baseline">
                                        <h5 className="font-bold text-warning">5700 Kg</h5>
                                        <small>Salmones carga refrigerada<span className="text-secondary"> (-2 °C a 0 °C)</span></small>
                                    </div>
                                    <div className="py-2 grid grid-cols-2">
                                        <div className="">
                                            <small className="text-gray">Aprobaciones</small>
                                            <div className="flex justify-start items-center gap-2">
                                                <GrCheckmark className="text-sm text-success" />
                                                <GrCheckmark className="text-sm text-success" />
                                                <GrCheckmark className="text-sm text-success" />
                                                <GrCheckmark className="text-sm text-success" />
                                                <GrCheckmark className="text-sm text-success" />
                                            </div>
                                        </div>
                                        <div className="">
                                            <small className="text-gray">Documentos</small>
                                            <div className="flex items-center gap-1">
                                                <small>5/5 Certificados
                                                </small>
                                                <GrCopy />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="border border-dashed border-gray/30 py-3 px-4 rounded-lg flex flex-col">
                                    <small className="text-xs text-gray text-end">22 de marzo 12:00 p.m.  </small>
                                    <small className="text-white/80">En transito hacia el destino</small>
                                    <div className="flex gap-1 place-items-baseline">
                                        <small>8 bines de salmones, total 5700 kg cargados</small>
                                    </div>
                                    <div className="py-2 grid grid-cols-2">
                                        <div className="">
                                            <small className="text-gray">Próxima parada</small>
                                            <div className="flex justify-start items-center gap-2">
                                                <small>Ancud, 12:45 p.m</small>
                                            </div>
                                        </div>
                                        <div className="">
                                            <small className="text-gray">Encargado carga</small>
                                            <div className="flex items-center gap-1">
                                                <small className="text-success">Cristofer Castro
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <small className="text-white flex items-center gap-1">
                                    <GrSchedule />
                                    Ver trazabilidad completa
                                </small>
                            </div>
                        </div>
                        <h5 className="text-gray">Detalle</h5>
                        <div className="w-full grid grid-cols-2 gap-2 mt-3">
                            <div className="bg-bgp border border-gray/20 rounded p-1 w-full" >
                                <small className="text-[11px] ps-2 uppercase  text-gray ">Carga</small>
                                <div className="px-2">
                                    <h5 className="text-white font-bold">Pescados</h5>
                                </div>
                            </div>
                            <div className="bg-bgp border border-gray/20 rounded p-1 w-full" >
                                <small className="text-[11px] ps-2 uppercase  text-gray ">Peso Carga</small>
                                <div className="px-2">
                                    <h5 className="text-white font-bold">5700 Kg</h5>
                                </div>
                            </div>
                            <div className="py-5 w-full">
                                <h5>Documentos y certificados</h5>
                                <div className="grid grid-cols-2 gap-5 w-full">
                                    <div className="bg-bgp border border-gray/20 rounded p-1 w-full" >
                                        <small className="text-[11px] ps-2 uppercase  text-gray ">Certificado</small>
                                        <div className="px-2">
                                            <h5 className="text-white font-bold">Certificado</h5>
                                        </div>
                                    </div>
                                    <div className="bg-bgp border border-gray/20 rounded p-1 w-full" >
                                        <small className="text-[11px] ps-2 uppercase  text-gray ">Certificado</small>
                                        <div className="px-2">
                                            <h5 className="text-white font-bold">Certificado</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative col-span-4 h-full overflow-hidden">
                    <MapView tripOrigin={origen} tripDestination={destino} height="740px" />
                </div>
            </div>
        </div >
    )
}

const RutaTracking = () => {


    return (
        <div className="relative flex flex-col place-items-center w-full  py-2 mt-10  ">
            <TripFast />
        </div>
    )
}


const TripFast = () => {
    const origen = "Castro";
    const destino = "Puerto Montt";
    const numeroViaje = "E-20050006";
    const patenteVehiculo = "XXXX-00";
    const patenteRampa = "XXXX-00";
    const horaSalida = "11:30:00";
    const horaLlegada = "18:00:00";
    const trayectoRecorrido = 20;
    const zonePoints = [
        {
            id: 1,
            name: origen,
            hours: "11:30:00",
            lat: -33.448889,
            lng: -70.669265,
            estado: true,
            progress: 0,
            nextPoint: 25,
        },
        {
            id: 2,
            name: "Ancud",
            hours: "13:30:00",
            lat: -33.453944,
            lng: -70.672517,
            estado: true,
            progress: 50,
            nextPoint: 50,
        },
        {
            id: 3,
            name: destino,
            hours: "15:30:00",
            lat: -33.453944,
            lng: -70.672517,
            estado: true,
            progress: 100,
            nextPoint: 100,
        },

    ]

    return (
        <ProgressTrip
            origen={origen}
            destino={destino}
            numeroViaje={numeroViaje}
            patenteVehiculo={patenteVehiculo}
            patenteRampa={patenteRampa}
            horaSalida={horaSalida}
            horaLlegada={horaLlegada}
            trayectoRecorrido={trayectoRecorrido}
            estado="En Camino"
            zonePoints={zonePoints}
        />
    )
}



const WidgetV = () => {
    return (
        <button className="group relative">
            <div
                className="absolute -inset-1 rounded-xl bg-gradient-to-r from-secondary via-secondary to-primary opacity-10 blur-xl transition-all duration-500 group-hover:opacity-40 group-hover:blur-2xl"
            ></div>

            <div
                className="relative flex items-center gap-2 rounded-xl  p-1 pr-4"
            >
                <div className="flex items-center gap-3 rounded-lg  px-3 py-2">
                    <div className="relative">
                        <div
                            className="absolute -inset-1 rounded-lg bg-bgt blur-sm transition-all duration-300 group-hover:bg-primary/30 group-hover:blur-md"
                        ></div>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex items-center gap-1">
                            <span className="text-lg font-bold text-white">89.3%</span>

                        </div>
                        <span className="text-[10px] font-medium text-slate-400">Progreso</span>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="flex gap-3">
                        <div className="flex flex-col items-center gap-1">
                            <div className="h-8 w-1.5 rounded-full  p-[2px]">
                                <div
                                    className="h-4 w-full rounded-full bg-primary transition-all duration-300 group-hover:h-6"
                                ></div>
                            </div>
                            <span className="text-[10px] font-medium text-slate-400">Combustible</span>
                        </div>

                        <div className="flex flex-col items-center gap-1">
                            <div className="h-8 w-1.5 rounded-full p-[2px]">
                                <div
                                    className="h-6 w-full rounded-full bg-secondary transition-all duration-300 group-hover:h-7"
                                ></div>
                            </div>
                            <span className="text-[10px] font-medium text-slate-400">Refrigerante</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-1.5">
                        <div
                            className="h-2 w-2 rounded-full bg-primary shadow-lg shadow-primary/50"
                        ></div>
                        <span className="text-xs font-semibold text-slate-300">OPTIMO</span>
                    </div>
                </div>

                <div
                    className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-gray/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                ></div>
            </div>
        </button>
    )
}

export default ViewTrip