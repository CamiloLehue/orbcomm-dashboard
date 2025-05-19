import { CgShapeHexagon } from "react-icons/cg";
import { GrFormNextLink } from "react-icons/gr";
import { useAllTrips } from "../../trips/hooks/useAllsTrips";
import clsx from "clsx";
import { useMemo } from "react";

type TripListActiveProps = {
    setOpenConfig: (value: boolean) => void;
    openConfig: boolean;
    selectedTrips: number[];
    setSelectedTrips: (value: number[] | ((prev: number[]) => number[])) => void;
    selectedTripOD: [number, number][];
    setSelectedTripOD: (value: [number, number][] | ((prev: [number, number][]) => [number, number][])) => void;
};

const MAX_TRIPS = 8;

const TripListActive = ({
    setOpenConfig,
    setSelectedTrips,
    selectedTrips,
    selectedTripOD,
    setSelectedTripOD
}: TripListActiveProps) => {

    const { allTrips } = useAllTrips();
    
    const porcentajes = useMemo(() =>
        allTrips.map(() => Math.round(Math.random() * 100)),
        [allTrips]
    );

    const canAddNewTrip = () =>
        selectedTrips.length < MAX_TRIPS && selectedTripOD.length < MAX_TRIPS;

    const handleSelectTrip = (index: number, firstId: number, lastId: number) => {
        const isAlreadySelected = selectedTrips.includes(index);

        if (!isAlreadySelected && !canAddNewTrip()) {
            alert("Solo se pueden seleccionar hasta 8 viajes");
            return;
        }

        setOpenConfig(true);

        setSelectedTrips(prev =>
            isAlreadySelected
                ? prev.filter(i => i !== index)
                : [...prev, index]
        );

        setSelectedTripOD(prev => {
            const exists = prev.some(([a, b]) => a === firstId && b === lastId);
            return exists
                ? prev.filter(([a, b]) => !(a === firstId && b === lastId))
                : [...prev, [firstId, lastId]];
        });
    };

    if (!Array.isArray(allTrips) || allTrips.length === 0) {
        return <p>No se encontraron viajes disponibles</p>;
    }

    return (
        <div className="max-h-[740px] overflow-y-auto">
            {allTrips.map((trip, i) => {
                const valorPorcentaje = porcentajes[i];
                const firstData = trip.data[0];
                const lastData = trip.data[trip.data.length - 1];

                const cityOrigen = firstData.positionStatus.city || "Origen desconocido";
                const cityDestino = lastData.positionStatus.city || "Destino desconocido";
                const firstIdViaje = parseInt(firstData.messageId);
                const lastIdViaje = parseInt(lastData.messageId);

                const isSelected = selectedTrips.includes(i);

                const colorType = clsx({
                    "bg-gradient-to-r from-success to-secondary":
                        valorPorcentaje >= 0 && valorPorcentaje <= 100
                });

                const colorText = clsx({
                    "text-success": valorPorcentaje >= 75,
                    "text-secondary": valorPorcentaje > 50 && valorPorcentaje < 75,
                    "text-warning": valorPorcentaje >= 10 && valorPorcentaje <= 50,
                    "text-danger": valorPorcentaje >= 0 && valorPorcentaje < 10
                });

                return (
                    <div
                        key={i}
                        onClick={() => handleSelectTrip(i, firstIdViaje, lastIdViaje)}
                        className={`relative group overflow-hidden ${isSelected ? "bg-primary/10" : "bg-bgs"} w-full hover:bg-transparent cursor-pointer h-15 grid grid-cols-5 px-2 py-1`}
                    >
                        <div
                            className={`absolute left-0 bottom-0 h-0.5 ${colorType} blur-3xl`}
                            style={{ width: valorPorcentaje + "%", height: "100%" }}
                        />
                        <div className="absolute left-0 bottom-0 h-0.5 bg-gray" style={{ width: "100%" }} />
                        <div
                            className={`absolute left-0 bottom-0 h-0.5 ${colorType}`}
                            style={{ width: valorPorcentaje + "%" }}
                        />

                        <div className="col-span-2 flex justify-start items-center gap-1">
                            <small className={colorText}><CgShapeHexagon /></small>
                            <small className="flex flex-col text-nowrap justify-center items-start gap-2 text-xs">
                                <span className="text-primary">{cityOrigen}</span>
                                <span className="text-secondary">{cityDestino}</span>
                            </small>
                        </div>

                        <div className="flex col-span-2 justify-center items-center gap-1">
                            <small>{valorPorcentaje + "%"}</small>
                        </div>

                        <div className={`flex justify-center ${isSelected ? "text-primary" : ""} items-center group-hover:translate-x-1 group-hover:text-secondary transition-all duration-500`}>
                            <GrFormNextLink />
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default TripListActive;