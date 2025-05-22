import { CgShapeHexagon } from "react-icons/cg";
import { GrFormNextLink } from "react-icons/gr";
import { useTrips } from "../../trips/hooks/useTripsHook";
import clsx from "clsx";
// import { useMemo } from "react";

type TripListActiveProps = {
    setOpenConfig: (value: boolean) => void;
    openConfig: boolean;
    selectedTrips: number[];
    setSelectedTrips: (value: number[] | ((prev: number[]) => number[])) => void;
    selectedTripOD: [string, string][];
    setSelectedTripOD: (value: [string, string][] | ((prev: [string, string][]) => [string, string][])) => void;
};

const MAX_TRIPS = 8;

const TripListActive = ({
    setOpenConfig,
    setSelectedTrips,
    selectedTrips,
    selectedTripOD,
    setSelectedTripOD
}: TripListActiveProps) => {

    const { Trips } = useTrips();

    // const porcentajes = useMemo(() =>
    //     Trips.map(() => Math.round(Math.random() * 100)),
    //     [Trips]
    // );

    const canAddNewTrip = () =>
        selectedTrips.length < MAX_TRIPS && selectedTripOD.length < MAX_TRIPS;

    const handleSelectTrip = (index: number, idTrip: string) => {
        const isAlreadySelected = selectedTrips.includes(index);

        if (!isAlreadySelected && !canAddNewTrip()) {
            alert("Solo se pueden seleccionar hasta 8 viajes");
            return;
        }

        setOpenConfig(false);

        setSelectedTrips(prev =>
            isAlreadySelected
                ? prev.filter(i => i !== index)
                : [...prev, index]
        );

        setSelectedTripOD(prev => {
            const exists = prev.some(([a, b]) => a === idTrip && b === idTrip);
            return exists
                ? prev.filter(([a, b]) => !(a === idTrip && b === idTrip))
                : [...prev, [idTrip, idTrip]];
        });


    };

    if (!Array.isArray(Trips) || Trips.length === 0) {
        return <p>No se encontraron viajes disponibles</p>;
    }

    return (
        <div className="max-h-[740px] overflow-y-auto">
            {Trips.map((trip, i) => {
                const progress_completed = trip.progress_completed;
                // const status_trip = trip.current_status;

                const cityOrigen = trip.origin.name || "Origen desconocido";
                const cityDestino = trip.destination.name || "Destino desconocido";
                const idTrip = trip.trip_id;

                const isSelected = selectedTrips.includes(i);

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


                return (
                    <div
                        key={i}
                        onClick={() => handleSelectTrip(i, idTrip)}
                        className={`relative group overflow-hidden ${isSelected ? "bg-gradient-to-tl from-secondary/30 to-blue/45 border-e border-secondary" : "bg-bgs"} w-full hover:bg-transparent cursor-pointer h-15 grid grid-cols-5 px-2 py-1`}
                    >
                        <div className={clsx(`absolute left-0 bottom-0 h-2  blur-2xl `)}
                            style={{
                                backgroundImage: `${colorType(progress_completed)}`,
                                width: progress_completed + "%",
                                height: 100 + "%",
                            }}>
                        </div>
                        <div className='absolute left-0 bottom-0 h-2  bg-gray'
                            style={{
                                width: 100 + "%",
                            }}>
                        </div>
                        <div className={`absolute left-0 bottom-0 h-2 `}
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
                );
            })}
        </div>
    );
};

export default TripListActive;