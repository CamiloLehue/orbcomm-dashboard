import { Marker, Popup } from "react-leaflet";
import { truckIcon } from "../lib/mapIcons";
import { useReverseGeocode } from "../hooks/useReverseGeocode";
import { LatLngExpression } from "leaflet";
import { useRouteSimulation } from "../hooks/useRouteSimulation";

const VehicleMarker = ({ origenDestinyAsigned, simulated }: { origenDestinyAsigned?: LatLngExpression[] | null, simulated?: boolean }) => {
    const origenAsignado = origenDestinyAsigned?.[0];
    const destinoAsignado = origenDestinyAsigned?.[1];

    const [lat, lon] = destinoAsignado as [number, number];

    const address = useReverseGeocode(lat, lon);
    const { markerIndex, route } = useRouteSimulation();

    const result = simulated ? route[markerIndex] : origenAsignado as LatLngExpression;
    return (
        <Marker position={result as LatLngExpression} icon={truckIcon}>
            <Popup>
                <strong>Camión en movimiento</strong>
                <br />
                {address}
            </Popup>
        </Marker>
    );
};

export default VehicleMarker;