import clsx from 'clsx';
import { useAllTrips } from '../../trips/hooks/useAllsTrips';
import { MapView } from '../../maps';

type MapListProps = {
    selectedTrips: number[];
    selectedTripOD: [number, number][];
}

const MapList = ({ selectedTrips, selectedTripOD }: MapListProps) => {

    const { allTrips, loading } = useAllTrips();
    if (loading) return <p>Cargando...</p>;

    const selectedTripsAsArray = Array.isArray(selectedTrips) ? selectedTrips : [];
    const selectedTripODAsArray = Array.isArray(selectedTripOD) ? selectedTripOD : [];

    if (selectedTripsAsArray.length === 0 || selectedTripODAsArray.length === 0)
        return <p className="text-center pt-5">Selecciona un viaje para comenzar</p>;

    const rutasSeleccionadas = selectedTripODAsArray.map(([origenId, destinoId]) => {

        let ciudadOrigenLatitud = "Origen lat desconocido";
        let ciudadOrigenLongitud = "Origen lon desconocido";
        let ciudadDestinoLatitud = "Destino desconocido";
        let ciudadDestinoLongitud = "Destino desconocido";

        for (const trip of allTrips) {
            const origenRegistro = trip.data.find(item => parseInt(item.messageId) === (origenId));
            const destinoRegistro = trip.data.find(item => parseInt(item.messageId) === (destinoId));

            if (origenRegistro) ciudadOrigenLatitud = String(origenRegistro.positionStatus.latitude) || ciudadOrigenLatitud;
            if (origenRegistro) ciudadOrigenLongitud = String(origenRegistro.positionStatus.longitude) || ciudadOrigenLongitud;
            if (destinoRegistro) ciudadDestinoLatitud = String(destinoRegistro.positionStatus.latitude) || ciudadDestinoLatitud;
            if (destinoRegistro) ciudadDestinoLongitud = String(destinoRegistro.positionStatus.longitude) || ciudadDestinoLongitud;
        }

        return { ciudadOrigenLatitud, ciudadOrigenLongitud, ciudadDestinoLatitud, ciudadDestinoLongitud };
    });



    const layoutPositions = (count: number) => {
        return clsx({
            "grid grid-cols-1": count === 1,
            "grid grid-cols-2 gap-1 1": count === 2,
            "grid grid-cols-2 gap-1  ": count === 3,
            "grid grid-cols-2 gap-1": count === 4,
            "grid grid-cols-6 gap-1": count === 5,
            "grid grid-cols-3 gap-1": count === 6,
            "grid grid-cols-3 gap-1 ": count === 7,
            "grid grid-cols-4 gap-1  ": count === 8,
        })
    }
    return (
        <>
            <div className="w-full h-full flex flex-col justify-start items-start gap-2">

                <div className={`${layoutPositions(selectedTripODAsArray.length)} w-full h-full`}>
                    {
                        selectedTripODAsArray.map((_, i) => {
                            const ruta = rutasSeleccionadas[i]; // alineamos por índice
                            return (
                                <div
                                    key={i}
                                    className={`
                                    relative w-full h-full flex justify-start items-start bg-bgp overflow-hidden 
                                    ${selectedTripODAsArray.length === 3 ? (i === 2 ? "col-span-2" : "col-span-1") : ""}
                                    ${selectedTripODAsArray.length === 5 ? (i === 0 || i === 1 ? "col-span-3" : "col-span-2") : ""}
                                    ${selectedTripODAsArray.length === 7 ? (i === 0 ? "col-span-3" : "col-span-1") : ""}
                                `}
                                >
                                    <div
                                        className="text-center w-full"
                                        style={{
                                            height: selectedTripODAsArray.length <= 2 ? '750px' : '372px'
                                        }}
                                    >
                                        <MapView
                                            tripOrigin={[parseInt(ruta.ciudadOrigenLatitud), parseInt(ruta.ciudadOrigenLongitud)]}
                                            tripDestination={[parseInt(ruta.ciudadDestinoLatitud), parseInt(ruta.ciudadDestinoLongitud)]}
                                            origenDestinyAsigned={[[parseInt(ruta.ciudadOrigenLatitud), parseInt(ruta.ciudadOrigenLongitud)], [parseInt(ruta.ciudadDestinoLatitud), parseInt(ruta.ciudadDestinoLongitud)]]}
                                            height={selectedTripODAsArray.length <= 2 ? '750px' : '372px'}
                                        />
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default MapList