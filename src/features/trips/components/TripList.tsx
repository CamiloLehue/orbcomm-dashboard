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
    const delayed = Trips.filter(trip => trip.current_status === "retrasado").length;
    const scheduled = Trips.filter(trip => trip.current_status === "agendado").length;

    return (
        <div className="relative flex flex-col justify-between h-full rounded-xs bg-bgp border border-bgt/20 overflow-hidden">
            <div>
                <div className="flex flex-col w-full p-5 ">
                    <h4 className="leading-4">Seguimiento</h4>
                    <small className="text-xs text-gray">de vehículos activos</small>
                </div>
                <div className="relative  grid grid-cols-5 gap-2   pb-2 ">
                    <div className="flex flex-col justify-center items-center">
                        <h2 className="text-gray">{paused}</h2>
                        <small className="text-xs">Detenidos</small>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <h2 className="text-gray">{count}</h2>
                        <small className="text-xs">Circulación</small>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <h2 className="text-gray">{delayed}</h2>
                        <small className="text-xs">Atrasado</small>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <h2 className="text-gray">{disconnected}</h2>
                        <small className="text-xs">Desconectado</small>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <h2 className="text-gray">{scheduled}</h2>
                        <small className="text-xs">agendado</small>
                    </div>
                </div>

                <div className="max-h-[178px] overflow-y-auto px-1 ps-2">
                    <div className="w-full relative flex flex-col gap-1 pb-8 overflow-hidden ">
                        {Trips.map((trip, i) => {
                            const progress_completed = trip.progress_completed;
                            // const status_trip = trip.current_status;                    // Obtener el primer y último registro de data para cada viaje

                            // Nombres de ciudades
                            const cityOrigen = trip.origin.name || "Origen desconocido";
                            const cityDestino = trip.destination.name || "Destino desconocido";
                            const status = trip.current_status || "Sin Estado";

                            const colorType = (progress_completed: number) => (
                                clsx({
                                    "linear-gradient(to right, #ff0000, #ff0000)": progress_completed >= 0 && progress_completed < 10,
                                    "linear-gradient(to right, #ff0000, #ff9900)": progress_completed >= 10 && progress_completed < 25,
                                    "linear-gradient(to right, #ff9900, #ccff00)": progress_completed >= 25 && progress_completed < 50,
                                    "linear-gradient(to right, #00ffc4, #00ffc4)": progress_completed >= 50 && progress_completed < 75,
                                    "linear-gradient(to right, #00dcff, #00ffc4)": progress_completed >= 75 && progress_completed <= 100,
                                })
                            )

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

                            return (
                                <div
                                    key={i}
                                    onClick={() => navigate(`/viajes/ver/${trip.trip_id}`)}
                                    className="relative group overflow-hidden bg-bgp w-full hover:bg-transparent cursor-pointer  h-10 rounded-xs grid grid-cols-6 px-2 py-1"

                                >
                                    <div className={clsx(`absolute left-0 bottom-0 h-0.5  blur-2xl `)}
                                        style={{
                                            backgroundImage: `${colorType(progress_completed)}`,
                                            width: progress_completed + "%",
                                            height: 100 + "%",
                                        }}>
                                    </div>
                                    <div className='absolute left-0 bottom-0 h-0.5  bg-gray'
                                        style={{
                                            width: 100 + "%",
                                        }}>
                                    </div>
                                    <div className={`absolute left-0 bottom-0 h-0.5 `}
                                        style={{
                                            backgroundImage: `${colorType(progress_completed)}`,
                                            width: progress_completed + "%",
                                        }}>
                                    </div>
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

                {/* <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-bgt from-55%"></div> */}
            </div>
        </div>
    );
}

export default TripList;