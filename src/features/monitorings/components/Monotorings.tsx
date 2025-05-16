import { CgShapeHexagon } from "react-icons/cg";
import { useAllTrips } from "../../trips/hooks/useAllsTrips";
import { GrFormNextLink } from "react-icons/gr";
import { useState } from "react";
import Button from "../../../components/ui/Button";
import clsx from "clsx";

function Monotorings() {

    const [openConfig, setOpenConfig] = useState(false);
    const [selectedTrips, setSelectedTrips] = useState<number[]>([]);

    return (
        <div className="h-full w-full flex-1 flex flex-col justify-start items-start px-1 pb-1">
            <div className="flex-1 grid grid-cols-12 gap-2 w-full h-full">
                <div className="col-span-3 bg-bgt">
                    <TripList setOpenConfig={setOpenConfig} openConfig={openConfig} selectedTrips={selectedTrips} setSelectedTrips={setSelectedTrips} />
                </div>
                <div className={`${openConfig ? `col-span-2` : `hidden`} bg-bgt`}>
                    <ConfigSelectedTrip selectedTrips={selectedTrips} />
                </div>
                <div className={`${openConfig ? `col-span-7` : `col-span-9 w-full`} bg-bgt`}>
                    <MapList selectedTrips={selectedTrips} />
                </div>
            </div>
        </div>
    )
}

type MapListProps = {
    selectedTrips: number[];
}

const MapList = ({ selectedTrips }: MapListProps) => {

    const selectedTripsAsArray = Array.isArray(selectedTrips) ? selectedTrips : [];

    if (selectedTripsAsArray.length === 0) return (<p className="text-center pt-5">Selecciona un viaje</p>);

    const layoutPositions = (count: number) => {
        return clsx({
            "grid grid-cols-1": count === 1,
            "grid grid-cols-2 gap-0.5 1": count === 2,
            "grid grid-cols-2 gap-0.5  ": count === 3,
            "grid grid-cols-2 gap-0.5": count === 4,
            "grid grid-cols-6 gap-0.5": count === 5,
            "grid grid-cols-3 gap-0.5": count === 6,
            "grid grid-cols-3 gap-0.5 ": count === 7,
            "grid grid-cols-4 gap-0.5  ": count === 8,
        })
    }
    return (
        <>
            <div className="w-full h-full flex flex-col justify-start items-start gap-2">
                <div className="w-full flex justify-center items-center p-5">
                    <h4>Monitoreo de trayectos</h4>
                </div>
                <div className={`${layoutPositions(selectedTripsAsArray.length)} w-full h-full`}>
                    {
                        selectedTripsAsArray.map((_, i) => (
                            <div
                                key={i}
                                className={`
                                    relative w-full h-full flex justify-center items-center bg-gray-200/10 
                                    ${selectedTripsAsArray.length === 3 ? (i === 2 ? "col-span-2" : "col-span-1") : ""}
                                    ${selectedTripsAsArray.length === 5 ? (i === 0 || i === 1 ? "col-span-3" : "col-span-2") : ""}
                                    ${selectedTripsAsArray.length === 7 ? (i === 0 ? "col-span-3" : "col-span-1") : ""}
                                `}
                            >
                                {i + 1}
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}


type ConfigSelectedTripProps = {
    selectedTrips: number[];
}

const ConfigSelectedTrip = ({ selectedTrips }: ConfigSelectedTripProps) => {

    const origenSeleccionado = "Puerto Montt";
    const destinoSeleccionado = "Castro";


    const selectedTripsAsArray = Array.isArray(selectedTrips) ? selectedTrips : [];

    if (selectedTripsAsArray.length === 0) return (<p className="text-center pt-5">Selecciona un viaje</p>);

    // const gridLayouts = [
    //     { label: "1 Mapa", className: "grid grid-cols-1", count: 1 },
    //     { label: "2x2", className: "grid grid-cols-2 grid-rows-2", count: 4 },
    //     { label: "3x2", className: "grid grid-cols-3 grid-rows-2", count: 6 },
    //     { label: "4x2", className: "grid grid-cols-4 grid-rows-2", count: 8 },
    // ];

    return (
        <div className="w-full">
            <div className="flex flex-col justify-center items-center bg-bgs py-5">
                <h5>Configuración</h5>
                <small className="text-gray">Seguimiento ({selectedTripsAsArray.length})</small>
            </div>
            <div className="w-full p-5 flex flex-col gap-2">
                <h5 className="text-white/70">Datos de la ruta</h5>
                <div className="grid grid-cols-3 w-full gap-2">
                    <p className="text-start text-gray">Origen</p>
                    <p className="col-span-2">{origenSeleccionado}</p>
                </div>
                <div className="grid grid-cols-3 w-full gap-2">
                    <p className="text-start text-gray">Destino</p>
                    <p className="col-span-2">{destinoSeleccionado}</p>
                </div>
            </div>
            <div className="w-full p-5 flex flex-col gap-2">
                <h5 className="text-white/70">Seleccionar posición</h5>
                <div className="grid grid-cols-2 gap-1 mt-2 border border-gray/20 p-2">
                    {
                        selectedTripsAsArray.map((_, i) => (
                            <Button key={i} className="flex justify-center items-center bg-bgs hover:bg-s p-5">
                                <p className="text-start text-gray">{i + 1}</p>
                            </Button>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}


type TripListProps = {
    setOpenConfig: (value: boolean) => void;
    openConfig: boolean;
    selectedTrips: number[];
    setSelectedTrips: (value: number[] | ((prevState: number[]) => number[])) => void;
}

const TripList = ({ setOpenConfig, openConfig, setSelectedTrips, selectedTrips }: TripListProps) => {

    const { allTrips, loading } = useAllTrips();
    console.log(openConfig);

    if (loading) return <p>Cargando...</p>;
    if (!Array.isArray(allTrips)) {
        return <p>No se encontraron viajes disponibles</p>;
    }

    const selectedTripsAsArray = Array.isArray(selectedTrips) ? selectedTrips : [];

    if (selectedTripsAsArray.length === 0) {
        setOpenConfig(false);
    }
    if (selectedTripsAsArray.length > 8) {
        // setOpenConfig(false);
        setSelectedTrips(pop => pop.filter(item => item !== selectedTripsAsArray[selectedTripsAsArray.length - 1]));
        // return alert("Solo se pueden seleccionar hasta 8 viajes");

    }
    return (
        <>
            <div className="max-h-[740px] overflow-y-auto">
                {allTrips.map((trip, i) => {
                    // const valorPorcentaje = Math.round(Math.random() * 100);
                    const valorPorcentaje = 44;

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

                    return (
                        <div
                            key={i}
                            onClick={() => {
                                // setOrigenDestinyAsigned([origenCoords, destinoCoords]);
                                setOpenConfig(true);
                                setSelectedTrips((prev: number[]) =>
                                    prev.includes(i) ? prev.filter(item => item !== i) : [...prev, i] as number[]
                                );
                            }}
                            className={`relative group overflow-hidden ${selectedTripsAsArray.includes(i) ? "bg-primary/10" : "bg-bgs"} w-full hover:bg-transparent cursor-pointer h-15 grid grid-cols-5 px-2 py-1`}
                        >
                            <div
                                className='absolute left-0 bottom-0 h-0.5 bg-gradient-to-bl from-secondary/50 to-primary/40 blur-3xl'
                                style={{
                                    width: valorPorcentaje + "%",
                                    height: "100%",
                                }}
                            ></div>
                            <div
                                className='absolute left-0 bottom-0 h-0.5 bg-gray'
                                style={{ width: "100%" }}
                            ></div>
                            <div
                                className='absolute left-0 bottom-0 h-0.5 bg-primary'
                                style={{ width: valorPorcentaje + "%" }}
                            ></div>

                            <div className="col-span-2 flex justify-start items-center gap-1">
                                <small className="text-secondary">
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

export default Monotorings