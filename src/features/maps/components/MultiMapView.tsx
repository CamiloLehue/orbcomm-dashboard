import { lazy, Suspense, useEffect, useState } from "react";

import { MapContainer, TileLayer, LayersControl, ScaleControl } from "react-leaflet";
// import RouteLayer from "./RouteLayer";
const RouteLayer = lazy(() => import("./RouteLayer"));
// import VehicleMarker from "./VehicleMarker";
const VehicleMarker = lazy(() => import("./VehicleMarker"));
// import GeofenceLayer from "../../zones/components/GeofenceLayer";
const GeofenceLayer = lazy(() => import("../../zones/components/GeofenceLayer"));
import { GeoButtons } from "../../zones";
// import TripRouteLayer from "../../trips/components/TripRouteLayer";
import { useRouteSimulation } from "../hooks/useRouteSimulation";
// import { useReverseGeocode } from "../hooks/useReverseGeocode";
import Loading from "../../../components/ui/Loading";
import { useTrips } from "../../trips/hooks/useTripsHook";

interface MultiMapViewProps {
    height?: string;
    options?: boolean;
}

const MultiMapView = ({ height = "100%", options = false }: MultiMapViewProps) => {
    const [showZones, setShowZones] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setShowZones(true), 1); // o 500ms si quieres más margen

        return () => clearTimeout(timeout);
    }, []);
    const { BaseLayer, Overlay } = LayersControl;
    const { route, markerIndex, load } = useRouteSimulation(); // Obtener la ruta simulada que realiza el camión
    const [lat, lon] = route[markerIndex] as [number, number];
    // const address = useReverseGeocode(lat, lon);

    const { Trips } = useTrips();

    if (!load) return <Loading />;

    return (
        <div className="rounded-b-xl ">
            {/* Valor por defecto = center={[-43.1375, -73.6425]]} */}
            <MapContainer preferCanvas center={[-43.1375, -73.6425]} zoom={5} scrollWheelZoom={false} style={{ height: height, width: "100%" }}>

                {
                    options &&
                    <div className="bg-black backdrop-blur flex flex-col justify-center items-center  border border-gray/40 rounded-lg     absolute bottom-12 left-2  text-center">
                        {
                            <div className="font-bold flex flex-col gap-2">
                                <h5 className="text-secondary">Ubicación en tiempo real</h5>
                                {/* <small className="text-center text-[0.6lh]">{address}</small> */}
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
                        Trips.map((trip, i) => {

                            const firstData = trip.origin.coordinates;

                            const origenCoords: [number, number] = [
                                firstData.latitude,
                                firstData.longitude
                            ];

                            const destinoCoords: [number, number] = [
                                firstData.latitude,
                                firstData.longitude
                            ];

                            return (
                                <div key={trip.trip_id || i}>
                                    {showZones && (
                                        <Suspense fallback={<div>Cargando zonas...</div>}>
                                            <Overlay checked name={`Camión ${i + 1}`}>
                                                <VehicleMarker origenDestinyAsigned={[origenCoords, destinoCoords]} simulated={false} />
                                            </Overlay>
                                        </Suspense>
                                    )}
                                </div>
                            )
                        })
                    }

                    {showZones && (
                        <Suspense fallback={<div>Cargando zonas...</div>}>
                            <Overlay checked name="Zonas Geográficas">
                                <GeofenceLayer />
                            </Overlay>
                        </Suspense>
                    )}
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