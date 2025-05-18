import Button from "../../../components/ui/Button";
import { useAllTrips } from "../../trips/hooks/useAllsTrips";

type ConfigSelectedTripProps = {
    selectedTrips: number[];
    selectedTripOD: [number, number][];
};

const ConfigSelectedTrip = ({ selectedTrips, selectedTripOD }: ConfigSelectedTripProps) => {
    const { allTrips, loading } = useAllTrips();
    if (loading) return <p>Cargando...</p>;

    const selectedTripsAsArray = Array.isArray(selectedTrips) ? selectedTrips : [];
    const selectedTripODAsArray = Array.isArray(selectedTripOD) ? selectedTripOD : [];

    if (selectedTripsAsArray.length === 0 || selectedTripODAsArray.length === 0)
        return <p className="text-center pt-5">Selecciona un viaje</p>;
    const rutasSeleccionadas = selectedTripODAsArray.map(([origenId, destinoId]) => {
        let ciudadOrigen = "Origen desconocido";
        let ciudadDestino = "Destino desconocido";

        for (const trip of allTrips) {
            const origenRegistro = trip.data.find(item => parseInt(item.messageId) === (origenId));
            const destinoRegistro = trip.data.find(item => parseInt(item.messageId) === (destinoId));

            if (origenRegistro) ciudadOrigen = origenRegistro.positionStatus?.city || ciudadOrigen;
            if (destinoRegistro) ciudadDestino = destinoRegistro.positionStatus?.city || ciudadDestino;
        }

        return { ciudadOrigen, ciudadDestino };
    });


    return (
        <div className="w-full bg-bgp h-full">
            <div className="flex flex-col justify-center items-center py-5">
                <h5>Configuración</h5>
                <small className="text-gray">Seguimiento ({selectedTripsAsArray.length})</small>
            </div>

            <div>
                <div className="w-full p-5 flex flex-col gap-2 max-h-[200px] overflow-y-auto">
                    <h5 className="text-white/70">Datos de la ruta</h5>
                    {rutasSeleccionadas.map((ruta, i) => (
                        <div key={i} className="mb-4">
                            <div className="grid grid-cols-3 w-full gap-2">
                                <p className="text-start text-gray">Origen</p>
                                <p className="col-span-2">{ruta.ciudadOrigen}</p>
                            </div>
                            <div className="grid grid-cols-3 w-full gap-2">
                                <p className="text-start text-gray">Destino</p>
                                <p className="col-span-2">{ruta.ciudadDestino}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="w-full p-5 flex flex-col gap-2">
                <h5 className="text-white/70">Seleccionar posición</h5>
                <div className="grid grid-cols-2 gap-1 mt-2 border-4 border-gray/10 p-2">
                    {rutasSeleccionadas.map((ruta, i) => (
                        <Button key={i} rounded="lg" className="flex flex-col justify-center items-center bg-bgs hover:bg-bgs p-1 border border-gray/30">
                            <div className="grid grid-cols-3 w-full gap-2">
                                <p className="text-xs text-center text-gray">{ruta.ciudadOrigen}</p>
                            </div>
                            <div className="grid grid-cols-3 w-full gap-2">
                                <p className="text-xs text-center text-gray">{ruta.ciudadDestino}</p>
                            </div>
                        </Button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ConfigSelectedTrip;