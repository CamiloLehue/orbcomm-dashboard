import { useNavigate } from 'react-router';
import { useTrips } from '../../trips/hooks/useTripsHook';

function StatistictPerformance() {

    const navigate = useNavigate();

    const { Trips, loading } = useTrips();
    // const porcentajes = useMemo(() => Trips.map(() => Math.round(Math.random() * 100)), [Trips]);

    if (loading) return <p>Cargando...</p>;
    if (!Array.isArray(Trips)) {
        return <p>No se encontraron viajes disponibles</p>;
    }


    return (
        <div className="relative flex flex-col h-full gap-2 bg-bgp overflow-hidden justify-between rounded-xs ">
            <div className="flex flex-col w-full p-5 ">
                <h4 className="leading-4">
                    Rendimiento de conductores
                </h4>
                <small className="text-xs text-gray">
                    Camiones que han realizado la misma ruta
                </small>
            </div>
            <div className="relative w-full px-10 ">
                <div className='absolute opacity-25 bottom-0 right-20 w-90 h-90 blur-3xl bg-gradient-to-t from-secondary/40 to-primary/30'></div>
                <div className="max-h-[335px] overflow-y-auto rounded-xl">
                    <div className="w-full relative flex flex-col gap-1 pb-8 ">
                        {Trips.map((trip, i) => {
                            const status = trip.arrival_status || 'unknown';
                            const progress_completed = trip.progress_completed || 0;

                            const cityOrigen = trip.origin.name || "Origen desconocido";
                            const cityDestino = trip.destination.name || "Destino desconocido";

                            const getStatusColor = (status: string): string => {
                                switch (status) {
                                    case 'on_time':
                                        return '#4ade80'; // verde-400
                                    case 'at_risk':
                                        return '#facc15'; // amarillo-400
                                    case 'delayed':
                                        return '#f87171'; // rojo-400
                                    default:
                                        return '#9ca3af'; // gris por defecto
                                }
                            };

                            return (
                                <div
                                    key={i}
                                    onClick={() => navigate(`/viajes/ver/${trip.trip_id}`)}
                                    className="relative group overflow-hidden bg-bgp w-full hover:bg-transparent cursor-pointer h-12 rounded-xs grid grid-cols-5 px-2 py-1"
                                >
                                    <div className="absolute left-0 bottom-0 h-5 bg-gray/70 w-full rounded-sm"></div>

                                    <div
                                        className="absolute left-0 bottom-0 h-5 rounded-sm transition-all duration-300 shadow-md text-white text-xs font-semibold pl-2 flex items-center"
                                        style={{
                                            backgroundColor: getStatusColor(status),
                                            width: `${progress_completed}%`,
                                        }}
                                    >
                                        <p className='text-xs text-black'>{progress_completed}%</p>
                                        <div className=' h-5 w-5 rounded-full absolute -right-2 border-dashed border-white border-2 animate-spin'

                                            style={{
                                                backgroundColor: getStatusColor(status),
                                                animationDuration: "5s",

                                            }}></div>
                                    </div>

                                    <div className="absolute flex justify-between w-full left-0 px-2">
                                        <div className="flex gap-2 text-nowrap justify-center items-start">
                                            <small className="text-xs">{cityOrigen}</small>
                                            <small className="text-xs">{cityDestino}</small>
                                        </div>
                                        <div className="flex col-span-2 justify-center items-center gap-1">
                                            <small
                                                style={{
                                                    color: getStatusColor(status),
                                                }}
                                                className="text-xs font-semibold"
                                            >
                                                {status === 'on_time' && 'A tiempo'}
                                                {status === 'at_risk' && 'Riesgo de retraso'}
                                                {status === 'delayed' && 'Fuera de tiempo'}
                                            </small>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StatistictPerformance