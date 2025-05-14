import { GrFormNextLink } from "react-icons/gr";
import BgBlur from "../../../components/ui/BgBlur";
import CardType from "../../../components/ui/CardType";
import { useTrips } from "../hooks/useTrips";
import { CgShapeHexagon } from "react-icons/cg";
import { useNavigate } from "react-router";

function Trips() {
    const navigate = useNavigate();

    const { trips, loading } = useTrips();
    if (loading) return <p>Cargando...</p>;
    if (!Array.isArray(trips)) {
        return <p>No se encontraron viajes disponibles</p>;
    }
    return (
        <div className="relative h-full w-full flex flex-col gap-5 justify-start items-start p-5">
            <BgBlur />
            <h1 className="text-white">Seguimientos</h1>
            <div className="relative flex flex-col justify-start items-start gap-5 w-full h-full ">
                <div className="grid grid-cols-3 w-full h-full">
                    <div className="">
                        <CardType title="Lista de viajes" subtitle="En progreso">
                            <div className="max-h-[600px] overflow-y-auto p-2 rounded-xl">
                                <div className="w-full relative flex flex-col gap-1 pb-8 ">
                                    {trips.map((trip, i) => {
                                        const valorPorcentaje = Math.round(Math.random() * 100);
                                        return (
                                            <div
                                                key={i}
                                                onClick={() => navigate(`/viajes/ver/1`)}
                                                className="relative group overflow-hidden bg-bgt w-full hover:bg-transparent cursor-pointer  h-15 rounded-lg grid grid-cols-5 px-2 py-1"

                                            >
                                                <div className='absolute left-0 bottom-0 h-0.5  bg-gradient-to-bl from-secondary/70 to-primary/50  blur-3xl'
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
                                                <div className='absolute left-0 bottom-0 h-0.5  bg-primary'
                                                    style={{
                                                        width: valorPorcentaje + "%",
                                                    }}>
                                                </div>
                                                <div className="col-span-2 flex justify-start items-center gap-1">
                                                    <small className="text-secondary">
                                                        <CgShapeHexagon />
                                                    </small>
                                                    <small className="flex justify-center items-center gap-2 text-xs">
                                                        {
                                                            trip.assetStatus.deviceSN
                                                        }
                                                    </small>
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
                        </CardType>
                    </div>
                    <div className="col-span-2">
                        <CardType title="Resumen" subtitle="Esta semana">
                            <div className="grid grid-cols-2 gap-5 w-full bg-bgp">
                                <div className="bg-gray/20 border border-gray/20 rounded min-h-[240px] flex flex-col justify-start items-start gap-2 px-5 py-5">
                                    <h4 className="font-light text-primary">Esta semana</h4>
                                    <div className="grid grid-cols-2 gap-5 w-full mt-5">
                                        <div className="flex flex-col justify-center items-center gap-2 w-full">
                                            <h5 className="text-gray">Recorridos</h5>
                                            <p className="font-bold text-2xl">10</p>
                                        </div>
                                        <div className="flex flex-col justify-center items-center gap-2 w-full">
                                            <h5 className="text-gray">Clientes</h5>
                                            <p className="font-bold text-2xl">14</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray/10 border border-gray/10 rounded min-h-[240px] flex flex-col justify-start items-start gap-2 px-5 py-5">
                                    <h4 className="font-light text-primary">Esta mes</h4>
                                    <div className="grid grid-cols-2 gap-5 w-full mt-5">
                                        <div className="flex flex-col justify-center items-center gap-2 w-full">
                                            <h5 className="text-gray">Recorridos</h5>
                                            <p className="font-bold text-2xl">321</p>
                                        </div>
                                        <div className="flex flex-col justify-center items-center gap-2 w-full">
                                            <h5 className="text-gray">Clientes</h5>
                                            <p className="font-bold text-2xl">53</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray/10 border border-gray/10 rounded min-h-[240px] flex flex-col justify-start items-start gap-2 px-5 py-5">
                                    <h4 className="font-light text-warning">Recorridos detenidos</h4>
                                    <div className="grid grid-cols-2 gap-5 w-full mt-5">
                                        <div className="flex flex-col justify-center items-center gap-2 w-full">
                                            <h5 className="text-gray">Vehiculo</h5>
                                            <p className="font-bold text-2xl">1</p>
                                        </div>
                                        <div className="flex flex-col justify-center items-center gap-2 w-full">
                                            <h5 className="text-gray">Conductor</h5>
                                            <p className="font-bold text-2xl">1</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray/10 border border-gray/10 rounded min-h-[240px] flex flex-col justify-start items-start gap-2 px-5 py-5">
                                    <h4 className="font-light text-danger">Recorridos cancelados / mes</h4>
                                    <div className="grid grid-cols-2 gap-5 w-full mt-5">
                                        <div className="flex flex-col justify-center items-center gap-2 w-full">
                                            <h5 className="text-gray">Vehiculo</h5>
                                            <p className="font-bold text-2xl">2</p>
                                        </div>
                                        <div className="flex flex-col justify-center items-center gap-2 w-full">
                                            <h5 className="text-gray">Conductor</h5>
                                            <p className="font-bold text-2xl">1</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardType>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Trips;