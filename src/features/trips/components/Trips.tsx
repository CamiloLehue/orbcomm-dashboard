import { GrFormNextLink } from "react-icons/gr";
import BgBlur from "../../../components/ui/BgBlur";
import CardType from "../../../components/ui/CardType";
import { CgShapeHexagon } from "react-icons/cg";
import { useNavigate } from "react-router";
import { useTrips } from "../hooks/useTripsHook";
import Button from "../../../components/ui/Button";
import clsx from "clsx";
import { useMemo } from "react";

function Trips() {
    const navigate = useNavigate();

    const { Trips, loading } = useTrips();
    const porcentajes = useMemo(() => Trips.map(() => Math.round(Math.random() * 100)), [Trips]);

    if (loading) return <p>Cargando...</p>;
    if (!Array.isArray(Trips)) {
        return <p>No se encontraron viajes disponibles</p>;
    }
    return (
        <div className="relative h-full w-full flex flex-col gap-5 justify-start items-start ">
            <BgBlur />
            <div className="relative flex flex-col justify-start items-start gap-5 w-full h-full ">
                <div className="grid grid-cols-3 gap-2 w-full h-full">
                    <div className="max-h-[750px] overflow-y-auto p-2 rounded-xl">
                        <small className="text-end text-gray ">( {Trips.length} ) -  Viajes Programados - <span className="font-bold text-xs"> Actualizado hace 1 segundo...</span></small>
                        <div className="w-full relative flex flex-col gap-1 pb-8 ">
                            {Trips.map((trip, i) => {
                                const valorPorcentaje = porcentajes[i];                                // Obtener el primer y último registro de data para cada viaje
                               
                                // Nombres de ciudades
                                const cityOrigen = trip.origin.name || "Origen desconocido";
                                const cityDestino = trip.destination.name || "Destino desconocido";

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
                    <div className="col-span-2 bg-bgp rounded-s-2xl">
                        <CardType title="Resumen de Recorridos" subtitle="Programados">
                            <div className="grid grid-cols-2 gap-5 w-full">
                                <div className="col-span-2 h-70 rounded-2xl border border-bgs p-1 grid grid-cols-2 gap-2">
                                    <div className="relative w-full h-full bg-bgs rounded-2xl p-1 grid grid-cols-4 ">
                                        <div className="absolute left-0 top-0 bg-gray h-20 w-20 blur-3xl"></div>
                                        <div className="flex flex-col justify-center items-center p-5">
                                            <small className="text-xs text-white">Vehiculos</small>
                                            <h2 className="text-7xl text-white font-bold">{Trips.length - 4 - 2}</h2>
                                            <small className="text-xs text-white">En movimiento</small>
                                        </div>
                                        <div className="col-span-3 flex justify-center items-center gap-5 bg-bgp rounded-2xl ">
                                            <div className="flex flex-col justify-center items-center gap-5">
                                                <div className="flex flex-col justify-center items-center bg-danger/10 border border-danger/20 p-4 rounded-xl ">
                                                    <h2 className="text-4xl font-bold text-danger">1</h2>
                                                    <small className="text-xs text-danger">Desconectado</small>
                                                </div>
                                                <div className="flex flex-col justify-center items-center ">
                                                    <h2 className="text-4xl text-warning">2</h2>
                                                    <small className="text-xs text-warning">Detenidos</small>
                                                </div>
                                            </div>
                                            <div className="flex justify-center items-center gap-5">
                                                <div className="flex flex-col justify-center items-center ">
                                                    <h2 className="text-4xl">4/<span className="text-white/60">{Trips.length}</span></h2>
                                                    <small className="text-xs text-gray">Completados</small>
                                                </div>
                                                <div className="flex flex-col justify-center items-center ">
                                                    <h2 className="text-4xl">16</h2>
                                                    <small className="text-xs text-gray">Seguimiento</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-5 flex justify-center items-center flex-col">
                                        <h4 className="font-bold">Programados</h4>
                                        <small className="text-xs text-gray">Viajes que están planificados para hoy o los próximos días.
                                        </small>
                                        <div className="grid grid-cols-3 gap-5 w-full mt-5">
                                            <div className="flex flex-col justify-center items-center gap-1 bg-bgp rounded-2xl p-5">
                                                <h2 className="text-4xl text-white">5</h2>
                                                <small className="text-xs text-white">Para Hoy</small>
                                            </div>
                                            <div className="flex flex-col justify-center items-center gap-1 bg-bgp rounded-2xl p-5">
                                                <h2 className="text-4xl text-white">12</h2>
                                                <small className="text-xs text-white">Esta semana</small>
                                            </div>
                                            <div className="flex flex-col justify-center items-center gap-1 bg-bgp rounded-2xl p-5">
                                                <h2 className="text-4xl text-white">4</h2>
                                                <small className="text-xs text-white">Próxima semana</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <TravelSummaryTable />
                            </div>
                        </CardType>
                    </div>
                </div>
            </div>
        </div>
    );
}



const TravelSummaryTable: React.FC = () => {

    const travelSummaryData = [
        { label: "Total de viajes", value: 22 },
        { label: "En movimiento", value: 4 },
        { label: "Detenidos", value: 6 },
        { label: "Desconectados", value: 2 },
        { label: "Completados", value: 10 },
        { label: "Programados hoy", value: 3 },
        { label: "Viajes con alertas", value: 2 },
        { label: "Conductores activos", value: 9 },
        { label: "Duración promedio", value: "3h 42m" },
    ];
    return (
        <div className=" text-white p-2 w-full mx-auto">

            <table className="w-full text-left">
                <thead>
                    <tr>
                        <th className="py-2 px-4 text-gray font-medium"></th>
                        <th className="py-2 px-4 text-gray font-medium text-xs">Resumen</th>
                    </tr>
                </thead>
                <tbody>
                    {travelSummaryData.map((item, index) => (
                        <tr
                            key={index}
                            className={index % 2 === 0 ? "bg-bgt " : "bg-bgp/30 "}
                        >
                            <td className="py-1 text-xs px-4">{item.label}</td>
                            <td className="py-1 text-xs px-4 font-semibold">{item.value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="flex justify-center items-center pt-10">
                <Button rounded="lg" className="hover:bg-bgs px-5  ">
                    Ver más
                </Button>

            </div>
        </div>
    );
};
export default Trips;