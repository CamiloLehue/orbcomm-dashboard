import { useEffect, useState } from "react";

interface AccessDirectTripProps {
    origen: string;
    destino: string;
    numeroViaje: string;
    patenteVehiculo: string;
    patenteRampa: string;
    horaSalida: string;
    horaLlegada: string;
    trayectoRecorrido: number;
    estado: "En Camino" | "En Rampa" | "En Viaje" | "Finalizado" | "Pendiente";
    zonePoints?: { id: number, name: string, hours: string, estado: boolean, progress: number, lat: number, lng: number }[];
}

function AccessDirectTrip({ estado = "En Camino", zonePoints }: AccessDirectTripProps) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((progress < 100) ? progress + 1 : 100);
        }, 2000);

        return () => clearInterval(interval);
    }, [progress]);

    // const progress = 25;
    // const nextProgress = 50;
    return (
        <div className="relative col-span-2 flex flex-col place-items-center w-full min-h-70  rounded-3xl bg-gradient-to-br from-green-700/30 to-red-800/10">
            <div className="relative w-full h-[50%]  p-1">
                <div className="grid grid-cols-2 w-full h-full">
                    <div className="">
                    </div>
                    <div className="">
                    </div>
                </div>
            </div>
            <div className="relative w-full h-[50%] p-1">
                <div className="relative w-full h-full  flex flex-col justify-center items-center">
                    <div className="relative w-[calc(100%-10rem)] mx-auto">
                        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gray">
                        </div>
                        <BarProgress progress={progress} estado={estado} />
                        <BarLine zonePoints={zonePoints} progress={progress} />
                    </div>
                </div>
            </div>
        </div>

    )
}

type BarLineProps = {
    progress: number;
    zonePoints?: { id: number, name: string, hours: string, estado: boolean, progress: number, lat: number, lng: number }[];
}

const BarLine = ({ zonePoints, progress }: BarLineProps) => {
    return (
        <>
            {
                zonePoints && zonePoints.map((point, index) => {
                    const pointPosition = point.progress;
                    const name = point.name;
                    const hours = point.hours;
                    const pointSuccessColor = (point.progress > progress) ? "bg-gray" : "bg-primary";
                    const pointSuccessSize = (point.progress > progress)
                        ? "h-3 w-3 -bottom-1 rounded-full"
                        : "h-2.5 w-2.5 -bottom-0.5 rotate-45";

                    return (
                        <div className="relative w-full top-0.5">
                            {
                                <div
                                    key={index}
                                    className={`
                                        ${pointSuccessSize} 
                                        ${pointSuccessColor} 
                                         absolute `}
                                    style={{
                                        left: `${pointPosition}%`,
                                    }}
                                ></div>
                            }
                            <div
                                className="absolute w-20 top-5 flex flex-col justify-center items-center "
                                style={{
                                    left: `${(pointPosition - 5)}%`,
                                }}
                            >
                                <h5 className="text-nowrap">{name}</h5>
                                <small className="text-xs text-gray">{hours}</small>
                            </div>
                        </div>
                    )
                })
            }</>
    )
}

const BarProgress = ({ progress, estado }: { progress: number, estado?: string }) => {
    return (
        <div
            className="absolute bottom-0 left-2.5 h-0.5 bg-white"
            style={{
                width: `${progress}%`,
            }}>
            <PointCheck />
            <PopUpStatus estado={estado} />
        </div>
    )
}

const PopUpStatus = ({ estado = "En Camino" }: { estado?: string }) => {
    return (
        <div className="absolute -top-14 -right-12 bg-primary min-w-20 px-5 h-7 rounded-full flex justify-center items-center">
            <small className="text-bgp text-nowrap">{estado}</small>
            <div className="absolute h-2 w-2 bg-primary rotate-45 -bottom-1">
            </div>
        </div>
    )
}

const PointCheck = () => {
    return (
        <>
            <div className="absolute -bottom-2.5 animate-spin -right-1 w-5 h-5 rounded-full border-2 border-dashed border-primary border-b-transparent">
            </div>
            <div className="absolute -bottom-1.5 right-0 w-3 h-3 rounded-full bg-white ">
            </div></>
    )
}

export default AccessDirectTrip