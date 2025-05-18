import { useParams } from "react-router";
import Button from "../../../components/ui/Button";
import { GrCircleQuestion, GrDirections, GrFormNextLink, GrGrommet, GrPhone } from "react-icons/gr";
import { MapView } from "../../maps";
import Notification from "../../notification/components/Notification";
import ProgressTrip from "./ProgressTrip";

function ViewTrip() {

    const id = useParams().id;

    const origen: [number, number] = [-43.1375, -73.6400];
    const destino: [number, number] = [-42.1350, -73.6400];

    return (
        <div className="relative h-full w-full flex flex-col justify-start items-start">
            <div className="grid grid-cols-12 gap-5  w-full h-full">
                <div className="col-span-5 px-5 flex flex-col items-start justify-start gap-2 bg-w ">
                    <div className="w-full p-2">
                        {/* Inicio Top menu informacion rapdia de viaje */}
                        <div className="bg-bg py-1 w-full col-span-8 flex justify-between items-center gap-5 border-b border-gray/20 pb-3 ">
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
                            <WidgetV />
                        </div>
                        {/* Fin Top menu informacion rapdia de viaje */}
                        <RutaTracking />
                    </div>
                    <div className="p-2 w-full h-full mt-10">
                        <div className="py-2 w-full ">
                            <h3>Logística <span className="block text-xs text-secondary">del cargamento</span></h3>
                            <div className="w-full h-40   grid grid-cols-7">
                                <div className="col-span-2 flex flex-col justify-center items-center gap-4">
                                    <div className="flex flex-col justify-center items-center w-full ">
                                        <h5 className="text-white font-light">Peso transportado</h5>
                                        <h2 className="text-warning text-5xl">2000.00</h2>
                                        <small>kílogramos</small>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                <div className="col-span-3">
                    <Notification />
                </div>
                <div className="relative col-span-4 h-full overflow-hidden">
                    <MapView tripOrigin={origen} tripDestination={destino} height="800px" />
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
                className="absolute -inset-1 rounded-xl bg-gradient-to-r from-gray via-gray to-gray opacity-10 blur-xl transition-all duration-500 group-hover:opacity-20 group-hover:blur-2xl"
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