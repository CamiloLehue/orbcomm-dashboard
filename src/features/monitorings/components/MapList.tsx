import clsx from "clsx";
import { useTrips } from "../../trips/hooks/useTripsHook";
import { MapView } from "../../maps";
import Loading from "../../../components/ui/Loading";
import { useEffect, useRef } from "react";

type MapListProps = {
    selectedTrips: number[];
    selectedTripOD: [string, string][];
};

const MapList = ({ selectedTrips, selectedTripOD }: MapListProps) => {
    const { Trips, loading } = useTrips();
    const previousLength = useRef(selectedTripOD.length);

    useEffect(() => {
        if (selectedTripOD.length > previousLength.current) {
            const timeout = setTimeout(() => {}, 1000);
            previousLength.current = selectedTripOD.length;
            return () => clearTimeout(timeout);
        } else {
            previousLength.current = selectedTripOD.length;
        }
    }, [selectedTripOD]);

    if (loading) return <Loading />;

    if (!selectedTrips?.length || !selectedTripOD?.length) {
        return <p className="text-center pt-5">Selecciona un viaje para comenzar</p>;
    }

    // Extraer rutas desde selectedTripOD
    const rutasSeleccionadas = selectedTripOD.map(([tripId]) => {
        const trip = Trips.find((trip) =>trip.trip_id === tripId);

        console.log("este es mi trip mapaview:", trip);
        
        const origin = trip?.origin?.coordinates;
        const destination = trip?.destination?.coordinates;

        return {
            ciudadOrigenLatitud: origin?.latitude ?? 0,
            ciudadOrigenLongitud: origin?.longitude ?? 0,
            ciudadDestinoLatitud: destination?.latitude ?? 0,
            ciudadDestinoLongitud: destination?.longitude ?? 0,
            nameCiudadOrigen: origin?.latitude ?? "Origen desconocido",
            nameCiudadDestino: destination?.longitude ?? "Destino desconocido",
        };
    });

    const layoutPositions = (count: number) => {
        return clsx({
            "grid grid-cols-1 gap-1": count === 1,
            "grid grid-cols-2 gap-1": count >= 2 && count <= 4,
            "grid grid-cols-6 gap-1": count === 5,
            "grid grid-cols-3 gap-1": count === 6 || count === 7,
            "grid grid-cols-4 gap-1": count === 8,
        });
    };

    return (
        <div className="w-full h-full flex flex-col justify-start items-start gap-1">
            <div className={`${layoutPositions(selectedTripOD.length)} w-full h-full`}>
                {selectedTripOD.map((_, i) => {
                    const ruta = rutasSeleccionadas[i];

                    const lat1 = Number(ruta.ciudadOrigenLatitud) || 0;
                    const lon1 = Number(ruta.ciudadOrigenLongitud) || 0;
                    const lat2 = Number(ruta.ciudadDestinoLatitud) || 0;
                    const lon2 = Number(ruta.ciudadDestinoLongitud) || 0;

                    const height = selectedTripOD.length <= 2 ? "750px" : "395px";

                    return (
                        <div
                            key={i}
                            className={clsx(
                                "relative w-full h-full flex justify-start items-start bg-bgp overflow-hidden",
                                selectedTripOD.length === 3 && (i === 2 ? "col-span-2" : "col-span-1"),
                                selectedTripOD.length === 5 && (i === 0 || i === 1 ? "col-span-3" : "col-span-2"),
                                selectedTripOD.length === 7 && (i === 0 ? "col-span-3" : "col-span-1")
                            )}
                        >
                            <div className="text-center w-full" style={{ height }}>
                                <MapView
                                    tripOrigin={[lat1, lon1]}
                                    tripDestination={[lat2, lon2]}
                                    origenDestinyAsigned={[[lat1, lon1], [lat2, lon2]]}
                                    height={height}
                                    nameCitys={[String(ruta.nameCiudadOrigen), " - ", String(ruta.nameCiudadDestino)]}
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default MapList;
