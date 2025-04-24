import { MapContainer, TileLayer, LayersControl, ScaleControl } from "react-leaflet";
import RouteLayer from "./RouteLayer";
import VehicleMarker from "./VehicleMarker";
import GeofenceLayer from "../../zones/components/GeofenceLayer";
import { GeoButtons } from "../../zones";

const { BaseLayer, Overlay } = LayersControl;

const MapView = () => (
    <div className="rounded-b-xl p-1 bg-zinc-900">
        <MapContainer center={[-43.1375, -73.6425]} zoom={17} style={{ height: "500px", width: "100%" }}>
            <LayersControl position="topright">
                <BaseLayer name="Esri Satellite">
                    <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" />
                </BaseLayer>

                <BaseLayer checked name="OpenStreetMap">
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                </BaseLayer>

                <Overlay checked name="Ruta">
                    <RouteLayer />
                </Overlay>

                <Overlay checked name="Camión">
                    <VehicleMarker />
                </Overlay>

                <Overlay checked name="Zonas Geográficas">
                    <GeofenceLayer />
                </Overlay>
            </LayersControl>

            <ScaleControl position="bottomleft" />
            <GeoButtons />
        </MapContainer>
    </div>
);

export default MapView;