import { Marker, Popup } from "react-leaflet";
import { truckIcon } from "../lib/mapIcons";
import { useRouteSimulation } from "../hooks/useRouteSimulation";
import { useReverseGeocode } from "../hooks/useReverseGeocode";

const VehicleMarker = () => {
    const { route, markerIndex } = useRouteSimulation();
    const [lat, lon] = route[markerIndex] as [number, number];
    const address = useReverseGeocode(lat, lon);

    return (
        <Marker position={[lat, lon]} icon={truckIcon}>
            <Popup>
                <strong>Camión en movimiento</strong>
                <br />
                {address}
            </Popup>
        </Marker>
    );
};

export default VehicleMarker;