import { MapContainer, TileLayer, LayersControl, ScaleControl } from "react-leaflet";
import RouteLayer from "./RouteLayer";
import VehicleMarker from "./VehicleMarker";
import GeofenceLayer from "../../zones/components/GeofenceLayer";
import { GeoButtons } from "../../zones";
// import TripRouteLayer from "../../trips/components/TripRouteLayer";
import { useRouteSimulation } from "../hooks/useRouteSimulation";
import { useReverseGeocode } from "../hooks/useReverseGeocode";
import { useAllTrips } from "../../trips/hooks/useAllsTrips";

interface MultiMapViewProps {
    height?: string;
    options?: boolean;
}

const MultiMapView = ({ height = "100%", options = false }: MultiMapViewProps) => {
    const { BaseLayer, Overlay } = LayersControl;
    const { route, markerIndex } = useRouteSimulation(); // Obtener la ruta simulada que realiza el camión
    const [lat, lon] = route[markerIndex] as [number, number];
    const address = useReverseGeocode(lat, lon);

    const { allTrips, loading } = useAllTrips();

    if (loading) return <p>Cargando...</p>;

    return (
        <div className="rounded-b-xl ">
            {/* Valor por defecto = center={[-43.1375, -73.6425]]} */}
            <MapContainer center={[-43.1375, -73.6425]} zoom={5} scrollWheelZoom={false} style={{ height: height, width: "100%" }}>

                {
                    options &&
                    <div className="bg-black backdrop-blur flex flex-col justify-center items-center  border border-gray/40 rounded-lg     absolute bottom-12 left-2  text-center">
                        {
                            <div className="font-bold flex flex-col gap-2">
                                <h5 className="text-secondary">Ubicación en tiempo real</h5>
                                <small className="text-center text-[0.6lh]">{address}</small>
                            </div>
                        }
                    </div>
                }

                <LayersControl position="topright">
                    <BaseLayer name="Esri Satellite">
                        <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" />
                    </BaseLayer>

                    <BaseLayer checked name="OpenStreetMap">
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        {/* <TileLayer
                            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                            attribution='&copy; <a href="https://carto.com/">CARTO</a>'
                        />
                        <TileLayer
                            url="https://tiles.stadiamaps.com/tiles/stamen_toner_lines/{z}/{x}/{y}{r}.png?api_key=4b4194de-bf31-4666-9fd1-7dee163f80ee"
                            attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>'
                            opacity={1}
                        /> */}
                    </BaseLayer>

                    {
                        allTrips.map((trip, i) => {

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
                            // const cityOrigen = firstData.positionStatus.city || "Origen desconocido";
                            // const cityDestino = lastData.positionStatus.city || "Destino desconocido";

                            // const idStr = firstData.messageId;
                            // const firstIdViaje = isNaN(Number(idStr)) ? null : Number(idStr);
                            // const firstIdViaje: number = parseInt(firstData.messageId);
                            // const lastIdViaje: number = parseInt(lastData.messageId);
                            return (
                                <>
                                    <Overlay checked name="Ruta Simulada">
                                        <RouteLayer origenDestinyAsigned={[origenCoords, destinoCoords]} />
                                    </Overlay>
                                    <Overlay checked name={`Camión ${i + 1}`}>
                                        <VehicleMarker origenDestinyAsigned={[origenCoords, destinoCoords]} />
                                    </Overlay>
                                </>
                            )
                        })
                    }

                    <Overlay checked name="Zonas Geográficas">
                        <GeofenceLayer />
                    </Overlay>
                    {/* {tripOrigin && tripDestination && (
                        <Overlay checked name="Ruta de Viaje">
                            <TripRouteLayer origin={tripOrigin} destination={tripDestination} />
                        </Overlay>
                    )} */}
                </LayersControl>
                {
                    options && <>
                        <ScaleControl position="bottomleft" />
                        <GeoButtons />
                    </>
                }
            </MapContainer>
        </div>
    )
};

export default MultiMapView;