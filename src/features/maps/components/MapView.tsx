import { MapContainer, TileLayer, LayersControl, ScaleControl, useMap } from "react-leaflet";
import RouteLayer from "./RouteLayer";
import VehicleMarker from "./VehicleMarker";
import GeofenceLayer from "../../zones/components/GeofenceLayer";
import { GeoButtons } from "../../zones";
// import TripRouteLayer from "../../trips/components/TripRouteLayer";
import { useRouteSimulation } from "../hooks/useRouteSimulation";
import { useReverseGeocode } from "../hooks/useReverseGeocode";
import Loading from "../../../components/ui/Loading";
import { useEffect, useState } from "react";
import { LatLngExpression } from "leaflet";

interface MapViewProps {
    tripOrigin: [number, number] | null;
    tripDestination: [number, number] | null;
    origenDestinyAsigned?: [number, number][] | null;
    height?: string;
    options?: boolean;
    simulated?: boolean;
    nameCitys?: string[];
}

const MapCenterUpdater = ({ center }: { center: LatLngExpression }) => {
    const map = useMap();

    useEffect(() => {
        map.setView(center, map.getZoom());
    }, [center, map]);

    return null;
};

const MapView = ({ nameCitys, tripOrigin, origenDestinyAsigned = [[-43.1375, -73.6425], [-42.1350, -73.6400]], height = "100%", options = false, simulated = false }: MapViewProps) => {
    const [geoZones] = useState(false);
    const { BaseLayer, Overlay } = LayersControl;
    const { route, markerIndex, load } = useRouteSimulation();
    const [lat, lon] = route[markerIndex] as [number, number];
    const address = useReverseGeocode(lat, lon);

    if (!load) return <Loading />;

    return (
        <div className="rounded-b-xl ">
            {/* Valor por defecto = center={[-43.1375, -73.6425]]} */}
            <MapContainer center={tripOrigin ?? [-43.1375, -73.6425]} zoom={13} scrollWheelZoom={true} style={{ height: height, width: "100%" }}>
                {tripOrigin && <MapCenterUpdater center={tripOrigin} />}
                <div className="absolute left-[50%] -translate-x-1/2 top-0  z-[9999] bg-bgp/70 backdrop-blur px-4 rounded-full py-1">
                    <small className="text-sm text-white font-bold">{nameCitys}</small>
                </div>
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
                        !simulated
                            ?
                            <>
                                <Overlay checked name="Ruta Real">
                                    <RouteLayer origenDestinyAsigned={origenDestinyAsigned} simulated={false} />
                                </Overlay>
                                <Overlay checked name="Camión">
                                    <VehicleMarker origenDestinyAsigned={origenDestinyAsigned} />
                                </Overlay>
                            </>
                            :
                            <>
                                <Overlay checked name="Ruta Simulada">
                                    <RouteLayer origenDestinyAsigned={origenDestinyAsigned} simulated />
                                </Overlay>
                                <Overlay checked name="Camión">
                                    <VehicleMarker origenDestinyAsigned={origenDestinyAsigned} simulated />
                                </Overlay>
                            </>
                    }
                    {geoZones &&
                        <Overlay checked name="Zonas Geográficas">
                            <GeofenceLayer />
                        </Overlay>}
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

export default MapView;