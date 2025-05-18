import { Marker, Popup } from "react-leaflet";
import { truckIcon } from "../lib/mapIcons";
// import { useReverseGeocode } from "../hooks/useReverseGeocode";
import { LatLngExpression } from "leaflet";

const VehicleMarker = ({ origenDestinyAsigned }: { origenDestinyAsigned?: LatLngExpression[] | null }) => {
    const origenAsignado = origenDestinyAsigned?.[0];
    const destinoAsignado = origenDestinyAsigned?.[1];

    const [lat, lon] = destinoAsignado as [number, number];

    console.log("lat:VEhichle ", lat);
    console.log("lon:VEhichle ", lon);

    // const address = useReverseGeocode(lat, lon);

    return (
        <Marker position={origenAsignado as LatLngExpression} icon={truckIcon}>
            <Popup>
                <strong>Camión en movimiento</strong>
                <br />
                {"Triangulando..."}
            </Popup>
        </Marker>
    );
};

export default VehicleMarker;