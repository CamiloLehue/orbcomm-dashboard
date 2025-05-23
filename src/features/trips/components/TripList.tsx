import { CgShapeHexagon } from 'react-icons/cg';
import { GrFormNextLink } from 'react-icons/gr';
import { useNavigate } from 'react-router';
import clsx from 'clsx';
import { useTrips } from '../hooks/useTripsHook';

function TripList() {

    const navigate = useNavigate();
    const { Trips, loading } = useTrips();

    if (loading) return <p>Cargando...</p>;
    if (!Array.isArray(Trips)) {
        return <p>No se encontraron viajes disponibles</p>;
    }

    const count = Trips.length;
    const completed = Trips.filter(trip => trip.progress_completed === 100).length;
    const inProgress = Trips.filter(trip => trip.progress_completed < 100).length;
    const disconnected = Trips.filter(trip => trip.current_status === "desconectado").length;
    const paused = Trips.filter(trip => trip.current_status === "detenido").length;
    const canceled = Trips.filter(trip => trip.current_status === "cancelado").length;
    const scheduled = Trips.filter(trip => trip.current_status === "agendado").length;

    return (
        <div className="relative flex flex-col justify-between h-full rounded-xs bg-bgp border border-bgt/20 overflow-hidden">
            <div>
                <div className="flex flex-col w-full p-5 ">
                    <h4 className="leading-4">Seguimiento ({count})</h4>
                    <small className="text-xs text-gray">de vehículos activos</small>
                </div>
                <div className="relative  grid grid-cols-6   pb-2 ">
                    <div className="flex flex-col justify-center items-center">
                        <h4 className={paused > 0 ? "text-warning" : "text-gray"}>{paused}</h4>
                        <small className={paused > 0 ? "text-warning text-xs" : "text-gray text-xs"}>Detenidos</small>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <h4 className={inProgress > 0 ? "text-white" : "text-gray"}>{inProgress}</h4>
                        <small className={inProgress > 0 ? "text-white text-xs" : "text-gray text-xs"}>Circulación</small>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <h4 className={canceled > 0 ? "text-white" : "text-gray"}>{canceled}</h4>
                        <small className={canceled > 0 ? "text-white text-xs" : "text-gray text-xs"}>Cancelado</small>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <h4 className={disconnected > 0 ? "text-danger" : "text-gray"}>{disconnected}</h4>
                        <small className={disconnected > 0 ? "text-danger text-xs" : "text-gray text-xs"}>Desconect.</small>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <h4 className={scheduled > 0 ? "text-white" : "text-gray"}>{scheduled}</h4>
                        <small className={scheduled > 0 ? "text-white text-xs" : "text-gray text-xs"}>Agendado</small>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <h4 className={completed > 0 ? "text-primary" : "text-gray"}>{completed}</h4>
                        <small className={completed > 0 ? "text-primary text-xs" : "text-gray text-xs"}>Complete</small>
                    </div>
                </div>

                <div className="max-h-[178px] overflow-y-auto px-1 ps-2">
                    <div className="w-full relative flex flex-col gap-1 pb-8 overflow-hidden ">
                        {Trips.slice()
                            .sort((a, b) => {
                                if (a.current_status === "desconectado" && b.current_status !== "desconectado") return -1;
                                if (a.current_status !== "desconectado" && b.current_status === "desconectado") return 1;
                                return 0; 
                            }).map((trip, i) => {
                                const progress_completed = trip.progress_completed;
                                // const status_trip = trip.current_status;                    // Obtener el primer y último registro de data para cada viaje

                                // Nombres de ciudades
                                const cityOrigen = trip.origin.name || "Origen desconocido";
                                const cityDestino = trip.destination.name || "Destino desconocido";

                                const colorText = (progress_completed: number) => (
                                    clsx({
                                        "#ff0000": progress_completed >= 0 && progress_completed < 10,
                                        "#ff9900": progress_completed >= 10 && progress_completed < 25,
                                        "#ccff00": progress_completed >= 25 && progress_completed < 50,
                                        "#00ffc4": progress_completed >= 50 && progress_completed < 75,
                                        "#00dcff": progress_completed >= 75 && progress_completed <= 100,
                                    })
                                )

                                const colorStates = (status: string) => (
                                    clsx({
                                        "#ff0000": status === "desconectado",
                                        "#ffb300": status === "detenido",
                                        "#00dcff": status === "en progreso",
                                        "#b2ff00": status === "completado",
                                    })
                                )

                                const getProgressColor = (percent: number): string => {
                                    const p = Math.min(Math.max(percent, 0), 100) / 100;
                                    const r = Math.round(255 * (1 - p));
                                    const g = 255;
                                    const b = 155;
                                    return `rgb(${r}, ${g}, ${b})`;
                                };

                                return (
                                    <div
                                        key={i}
                                        onClick={() => navigate(`/viajes/ver/${trip.trip_id}`)}
                                        className="relative group overflow-hidden bg-bgp w-full hover:bg-transparent cursor-pointer  h-10 rounded-xs grid grid-cols-6 px-2 py-1"

                                    >
                                        <div className={clsx(`absolute left-0 bottom-0 h-1  blur-3xl opacity-50 `)}
                                            style={{
                                                backgroundColor: getProgressColor(progress_completed),
                                                width: `${progress_completed}%`,
                                                height: 100 + "%",
                                            }}>
                                        </div>
                                        <div className='absolute left-0 bottom-0 h-1  bg-gray'
                                            style={{
                                                width: 100 + "%",
                                            }}>
                                        </div>
                                        <div
                                            className="absolute left-0 bottom-0 h-1 rounded-sm transition-all duration-300"
                                            style={{
                                                backgroundColor: getProgressColor(progress_completed),
                                                width: `${progress_completed}%`,
                                            }}
                                        ></div>
                                        <div className="col-span-2 flex justify-start items-center gap-1">
                                            <small
                                                style={{
                                                    color: colorText(progress_completed),
                                                }}>
                                                <CgShapeHexagon />
                                            </small>
                                            <div className='flex flex-col justify-center items-start'>
                                                <small className="text-xs">
                                                    {
                                                        cityOrigen
                                                    }
                                                </small>
                                                <small className="text-xs">
                                                    {
                                                        cityDestino
                                                    }
                                                </small>
                                            </div>
                                        </div>
                                        <div className=' flex justify-center items-center '>
                                            {
                                                <small
                                                    style={{
                                                        color: colorStates(trip.current_status),
                                                    }}
                                                    className="text-xs capitalize text-nowrap ">
                                                    {trip.current_status}
                                                </small>
                                            }
                                        </div>

                                        <div className="flex  col-span-2 justify-center items-center gap-1">
                                            <small className='text-'
                                                style={{
                                                    color: colorText(progress_completed),
                                                }}> {progress_completed + "%"}</small>
                                        </div>

                                        <div className="flex justify-center items-center group-hover:translate-x-1 group-hover:text-secondary transition-all duration-500">
                                            <GrFormNextLink />
                                        </div>
                                    </div>
                                )
                            }
                            )}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default TripList;