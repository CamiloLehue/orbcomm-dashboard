import { CgShapeHexagon } from "react-icons/cg";
import { GrFormNextLink } from "react-icons/gr";
import { useAllTrips } from "../../trips/hooks/useAllsTrips";
import clsx from "clsx";
import { useMemo } from "react";

type TripListActiveProps = {
    setOpenConfig: (value: boolean) => void;
    openConfig: boolean;
    selectedTrips: number[];
    setSelectedTrips: (value: number[] | ((prevState: number[]) => number[])) => void;

    //Seleccionar primera senal messageId, y ultimo messageId por viaje.
    selectedTripOD: [number, number][];
    setSelectedTripOD: (value: [number, number][] | ((prevState: [number, number][]) => [number, number][])) => void;
}

const TripListActive = ({ setOpenConfig, openConfig, setSelectedTrips, selectedTrips, selectedTripOD, setSelectedTripOD }: TripListActiveProps) => {

    const { allTrips, loading } = useAllTrips();
    console.log(openConfig);
    
    const porcentajes = useMemo(() => allTrips.map(() => Math.round(Math.random() * 100)), [allTrips]);


    if (loading) return <p>Cargando...</p>;
    if (!Array.isArray(allTrips)) {
        return <p>No se encontraron viajes disponibles</p>;
    }
    const selectedTripsAsArray = Array.isArray(selectedTrips) ? selectedTrips : [];
    const selectedTripODAsArray = Array.isArray(selectedTripOD) ? selectedTripOD : [];

    if (selectedTripsAsArray.length === 0 || selectedTripODAsArray.length === 0) {
        setOpenConfig(false);
    }
    if (selectedTripsAsArray.length > 8 || selectedTripODAsArray.length > 8) {
        // setOpenConfig(false);
        setSelectedTrips(pop => pop.filter(item => item !== selectedTripsAsArray[selectedTripsAsArray.length - 1]));
        setSelectedTripOD(pop => pop.filter(item => item !== selectedTripODAsArray[selectedTripODAsArray.length - 1]));
        // return alert("Solo se pueden seleccionar hasta 8 viajes");

    }



    return (
        <>
            <div className="max-h-[740px] overflow-y-auto">
                {allTrips.map((trip, i) => {
                    const valorPorcentaje = porcentajes[i];                    // const valorPorcentaje = 44;

                    // Obtener el primer y último registro de data para cada viaje
                    const firstData = trip.data[0];
                    const lastData = trip.data[trip.data.length - 1];

                    // Coordenadas de origen y destino
                    // const origenCoords: [number, number] = [
                    //     firstData.positionStatus.latitude,
                    //     firstData.positionStatus.longitude
                    // ];

                    // const destinoCoords: [number, number] = [
                    //     lastData.positionStatus.latitude,
                    //     lastData.positionStatus.longitude
                    // ];

                    // Nombres de ciudades
                    const cityOrigen = firstData.positionStatus.city || "Origen desconocido";
                    const cityDestino = lastData.positionStatus.city || "Destino desconocido";

                    // const idStr = firstData.messageId;
                    // const firstIdViaje = isNaN(Number(idStr)) ? null : Number(idStr);
                    const firstIdViaje: number = parseInt(firstData.messageId);
                    const lastIdViaje: number = parseInt(lastData.messageId);


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
                            onClick={() => {
                                // setOrigenDestinyAsigned([origenCoords, destinoCoords]);
                                setOpenConfig(true);
                                setSelectedTrips((prev: number[]) =>
                                    prev.includes(i) ? prev.filter(item => item !== i) : [...prev, i] as number[]
                                );
                                setSelectedTripOD((prev) => {
                                    const exists = prev.some(([a, b]) => a === firstIdViaje && b === lastIdViaje);

                                    if (exists) {
                                        return prev.filter(([a, b]) => !(a === firstIdViaje && b === lastIdViaje));
                                    } else {
                                        return [...prev, [firstIdViaje, lastIdViaje]];
                                    }
                                });
                            }}
                            className={`relative group overflow-hidden ${selectedTripsAsArray.includes(i) ? "bg-primary/10" : "bg-bgs"} w-full hover:bg-transparent cursor-pointer h-15 grid grid-cols-5 px-2 py-1`}
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
                                <small className="flex flex-col text-nowrap justify-center items-start gap-2 text-xs">
                                    <span className="text-primary">{cityOrigen}</span>
                                    <span className="text-secondary">{cityDestino}</span>
                                </small>
                            </div>

                            <div className="flex col-span-2 justify-center items-center gap-1">
                                <small>{valorPorcentaje + "%"}</small>
                            </div>

                            <div className={`flex justify-center ${selectedTripsAsArray.includes(i) ? "text-primary" : ""} items-center group-hover:translate-x-1 group-hover:text-secondary transition-all duration-500`}>
                                <GrFormNextLink />
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    )
}

export default TripListActive