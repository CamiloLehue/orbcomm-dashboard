import { GrFormDown, GrFormNextLink } from "react-icons/gr"
import Button from "../../components/ui/Button"
import { CgShapeHexagon } from "react-icons/cg";
// import { useTrips } from "../trips/hooks/useTrips";
import { useAllTrips } from "../trips/hooks/useAllsTrips";

type LeftBarProps = {
    setOrigenDestinyAsigned: (value: [number[], number[]] | null) => void;
}

function LeftBar({ setOrigenDestinyAsigned }: LeftBarProps) {
    return (
        <div className="min-h-full rounded-b-2xl rounded h-full w-full max-w-[400px] ">
            <div className="ps-4 w-full h-10 flex justify-between items-center px-1">
                <h4 className="text-center font-light">Activos</h4>
                <small className="text-gray">1 - 2 de 2 recorridos</small>
                <div>
                    <Button className=" rounded text-zinc-400">
                        <GrFormDown />
                    </Button>
                </div>
            </div>
            <CardViajes setOrigenDestinyAsigned={setOrigenDestinyAsigned} />
        </div>
    )
}


const CardViajes = ({ setOrigenDestinyAsigned }: LeftBarProps) => {
    const { allTrips, loading } = useAllTrips();

    if (loading) return <p>Cargando...</p>;
    if (!Array.isArray(allTrips)) {
        return <p>No se encontraron viajes disponibles</p>;
    }

    // const allNestedData = allTrips.flatMap(trip => trip.data);
    // console.log("Todos los datos anidados:", allNestedData);

    return (
        <div className="p-1 flex flex-col gap-3 max-h-[700px] overflow-y-auto">
            <div className="flex flex-col gap-1 rounded-xl min-h-[500px]">
                <div>
                    {allTrips.map((trip, i) => {
                        const valorPorcentaje = Math.round(Math.random() * 100);

                        // Obtener el primer y último registro de data para cada viaje
                        const firstData = trip.data[0];
                        const lastData = trip.data[trip.data.length - 1];

                        // Coordenadas de origen y destino
                        const origenCoords: [number, number] = [
                            firstData.positionStatus.latitude,
                            firstData.positionStatus.longitude
                        ];

                        const destinoCoords: [number, number] = [
                            lastData.positionStatus.latitude,
                            lastData.positionStatus.longitude
                        ];

                        // Nombres de ciudades
                        const cityOrigen = firstData.positionStatus.city || "Origen desconocido";
                        const cityDestino = lastData.positionStatus.city || "Destino desconocido";

                        return (
                            <div
                                key={i}
                                onClick={() => {
                                    setOrigenDestinyAsigned([origenCoords, destinoCoords]);
                                }}
                                className="relative group overflow-hidden bg-bgt w-full hover:bg-transparent cursor-pointer h-15 grid grid-cols-5 px-2 py-1"
                            >
                                <div
                                    className='absolute left-0 bottom-0 h-0.5 bg-gradient-to-bl from-secondary/70 to-primary/50 blur-3xl'
                                    style={{
                                        width: valorPorcentaje + "%",
                                        height: "100%",
                                    }}
                                ></div>
                                <div
                                    className='absolute left-0 bottom-0 h-1 bg-gray'
                                    style={{ width: "100%" }}
                                ></div>
                                <div
                                    className='absolute left-0 bottom-0 h-1 bg-primary'
                                    style={{ width: valorPorcentaje + "%" }}
                                ></div>

                                <div className="col-span-2 flex justify-start items-center gap-1">
                                    <small className="text-secondary">
                                        <CgShapeHexagon />
                                    </small>
                                    <small className="flex justify-center items-center gap-2 text-xs">
                                        {cityOrigen}
                                        -
                                        {cityDestino}
                                    </small>
                                </div>

                                <div className="flex col-span-2 justify-center items-center gap-1">
                                    <small>{valorPorcentaje + "%"}</small>
                                </div>

                                <div className="flex justify-center items-center group-hover:translate-x-1 group-hover:text-secondary transition-all duration-500">
                                    <GrFormNextLink />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
export default LeftBar











// {
//     Array(8).fill(0).map((_, i) => {
//         return (
//             <Button key={i} onClick={() => { setOrigenDestinyAsigned([origen3, destino3]) }} rounded="sm" className="group cursor-pointer relative w-full  bg-gray/5 hover:bg-transparent hover:border-transparent border border-gray/25  px-5 py-2 flex flex-col gap-5 text-gray transition-all duration-200">
//                 <div className="flex justify-center items-center gap-2 bg-bgt rounded-full group-hover:bg-transparent w-full">
//                     <h3 className="text-white/70">Puerto Montt </h3>
//                     <GrFormNextLink className="text-primary" />
//                     <h3 className="text-white">Castro </h3>
//                 </div>
//             </Button >
//         )
//     })
// }