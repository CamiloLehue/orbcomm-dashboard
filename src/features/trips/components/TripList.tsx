import { CgShapeHexagon } from 'react-icons/cg';
import { GrFormNextLink } from 'react-icons/gr';
import { useAllTrips } from '../hooks/useAllsTrips';
import { useNavigate } from 'react-router';
import clsx from 'clsx';
import { useMemo } from 'react';

function TripList() {

    const navigate = useNavigate();
    const { allTrips, loading } = useAllTrips();
    const porcentajes = useMemo(() => allTrips.map(() => Math.round(Math.random() * 100)), [allTrips]);

    if (loading) return <p>Cargando...</p>;
    if (!Array.isArray(allTrips)) {
        return <p>No se encontraron viajes disponibles</p>;
    }

    return (
        <div className="relative flex flex-col justify-between h-full rounded-xs bg-bgp border border-bgt/20 overflow-hidden">
            {/* <div className='absolute opacity-45 bottom-0 left-0 w-50 h-70 blur-3xl bg-gradient-to-t from-secondary/40 to-primary/30'></div> */}
            <div>
                <div className="flex flex-col w-full p-5 ">
                    <h4 className="leading-4">Seguimiento</h4>
                    <small className="text-xs text-gray">de vehículos activos</small>
                </div>
                <div className="relative  grid grid-cols-3 gap-2   pb-1">
                    <div className="flex flex-col justify-center items-center">
                        <h2 className="text-warning">2</h2>
                        <small className="text-xs">Detenidos</small>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <h2 className="text-secondary">5</h2>
                        <small className="text-xs">Circulación</small>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <h2 className="text-gray">3</h2>
                        <small className="text-xs">Alternativa</small>
                    </div>
                </div>

                <div className="max-h-[178px] overflow-y-auto px-1 ps-2">
                    <div className="w-full relative flex flex-col gap-1 pb-8 overflow-hidden ">
                        {allTrips.map((trip, i) => {
                            const valorPorcentaje = porcentajes[i];                            // Obtener el primer y último registro de data para cada viaje
                            const firstData = trip.data[0];
                            const lastData = trip.data[trip.data.length - 1];

                            // Nombres de ciudades
                            const cityOrigen = firstData.positionStatus.city || "Origen desconocido";
                            const cityDestino = lastData.positionStatus.city || "Destino desconocido";

                            const colorType = (valorPorcentaje: number) => (
                                clsx({
                                    "bg-gradient-to-r from-success to-secondary": valorPorcentaje >= 0 && valorPorcentaje <= 100,
                                })
                            )

                            const colorText = (valorPorcentaje: number) => (
                                clsx({
                                    "text-success": valorPorcentaje >= 75,
                                    "text-secondary": valorPorcentaje > 50 && valorPorcentaje < 75,
                                    "text-warning": valorPorcentaje >= 10 && valorPorcentaje <= 50,
                                    "text-danger": valorPorcentaje >= 0 && valorPorcentaje < 10,
                                })
                            )

                            return (
                                <div
                                    key={i}
                                    onClick={() => navigate(`/viajes/ver/1`)}
                                    className="relative group overflow-hidden bg-bgp w-full hover:bg-transparent cursor-pointer  h-10 rounded-xs grid grid-cols-5 px-2 py-1"

                                >
                                    <div className={clsx(`absolute left-0 bottom-0 h-0.5  ${colorType(valorPorcentaje)}  blur-3xl `)}
                                        style={{
                                            width: valorPorcentaje + "%",
                                            height: 100 + "%",
                                        }}>
                                    </div>
                                    <div className='absolute left-0 bottom-0 h-0.5  bg-gray'
                                        style={{
                                            width: 100 + "%",
                                        }}>
                                    </div>
                                    <div className={`absolute left-0 bottom-0 h-0.5 ${colorType(valorPorcentaje)}`}
                                        style={{
                                            width: valorPorcentaje + "%",
                                        }}>
                                    </div>
                                    <div className="col-span-2 flex justify-start items-center gap-1">
                                        <small className={` ${colorText(valorPorcentaje)} `}>
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

                                    <div className="flex  col-span-2 justify-center items-center gap-1">
                                        <small className='text-'> {valorPorcentaje + "%"}</small>
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