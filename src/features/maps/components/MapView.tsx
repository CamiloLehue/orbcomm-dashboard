import { MapContainer, TileLayer, LayersControl, ScaleControl } from "react-leaflet";
import RouteLayer from "./RouteLayer";
import VehicleMarker from "./VehicleMarker";
import GeofenceLayer from "../../zones/components/GeofenceLayer";
import { GeoButtons } from "../../zones";
import TripRouteLayer from "../../trips/components/TripRouteLayer";

interface MapViewProps {
    tripOrigin: [number, number] | null;
    tripDestination: [number, number] | null;
    height?: string;
}

const { BaseLayer, Overlay } = LayersControl;

const MapView = ({ tripOrigin, tripDestination, height = "608px" }: MapViewProps) => (
    <div className="rounded-b-xl ">
        <MapContainer center={[-43.1375, -73.6425]} zoom={14} style={{ height: height, width: "100%" }}>
            <LayersControl position="topright">
                <BaseLayer name="Esri Satellite">
                    <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" />
                </BaseLayer>

                <BaseLayer checked name="OpenStreetMap">
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <TileLayer
                        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                        attribution='&copy; <a href="https://carto.com/">CARTO</a>'
                    />
                    <TileLayer
                        url="https://tiles.stadiamaps.com/tiles/stamen_toner_lines/{z}/{x}/{y}{r}.png?api_key=4b4194de-bf31-4666-9fd1-7dee163f80ee"
                        attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>'
                        opacity={1}
                    />
                </BaseLayer>

                <Overlay checked name="Ruta Simulada">
                    <RouteLayer />
                </Overlay>

                <Overlay checked name="Camión">
                    <VehicleMarker />
                </Overlay>

                <Overlay checked name="Zonas Geográficas">
                    <GeofenceLayer />
                </Overlay>

                {tripOrigin && tripDestination && (
                    <Overlay checked name="Ruta de Viaje">
                        <TripRouteLayer origin={tripOrigin} destination={tripDestination} />
                    </Overlay>
                )}
            </LayersControl>
            <ScaleControl position="bottomleft" />
            <GeoButtons />
        </MapContainer>
    </div>
);

export default MapView;