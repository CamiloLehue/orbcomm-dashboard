import { Marker, Popup } from "react-leaflet";
import { truckIcon } from "../lib/mapIcons";
// import { useReverseGeocode } from "../hooks/useReverseGeocode";
import { LatLngExpression } from "leaflet";
// import { useRouteSimulation } from "../hooks/useRouteSimulation";

const VehicleMarker = ({ origenDestinyAsigned , vehicleLastPosition }: { origenDestinyAsigned?: LatLngExpression[] | null, vehicleLastPosition?: LatLngExpression | null }) => {
    const origenAsignado = origenDestinyAsigned?.[0];
    // const destinoAsignado = origenDestinyAsigned?.[1];

    const positionVehicle = vehicleLastPosition;
    console.log(vehicleLastPosition);
    
    // const [lat, lon] = destinoAsignado as [number, number];

    // const address = useReverseGeocode(lat, lon);
    // const { markerIndex, route } = useRouteSimulation();

    const result = vehicleLastPosition ? positionVehicle : origenAsignado as LatLngExpression;
    return (
        <Marker position={result as LatLngExpression} icon={truckIcon}>
            <Popup>
                <strong>Camión en movimiento</strong>
                <br />
                {/* {address} */}
            </Popup>
        </Marker>
    );
};

export default VehicleMarker;