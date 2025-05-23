import { Marker, Popup } from "react-leaflet";
import { mapIcons } from "../lib/mapIcons";
// import { useReverseGeocode } from "../hooks/useReverseGeocode";
import { LatLngExpression } from "leaflet";
import { useTrips } from "../../trips/hooks/useTripsHook";
// import { useRouteSimulation } from "../hooks/useRouteSimulation";




const VehicleMarker = ({ origenDestinyAsigned , vehicleLastPosition, id_trip }: { origenDestinyAsigned?: LatLngExpression[] | null, vehicleLastPosition?: LatLngExpression | null, id_trip?: string | undefined }) => {
    const origenAsignado = origenDestinyAsigned?.[0];
    // const destinoAsignado = origenDestinyAsigned?.[1];

    const positionVehicle = vehicleLastPosition;
    
    // const [lat, lon] = destinoAsignado as [number, number];

    // const address = useReverseGeocode(lat, lon);
    // const { markerIndex, route } = useRouteSimulation();
    const { Trips} = useTrips();

    const trip = Trips.find(trip => trip.trip_id === id_trip);

    const statusD = trip?.current_status

    
    const iconColor = (statusD : string | undefined) => {
        if (statusD === 'desconectado') {
            return mapIcons.red;
        } else if (statusD === 'completado') {
            return mapIcons.green;
        } else if (statusD === 'detenido') {
            return mapIcons.yellow;
        } else {
            return mapIcons.blue;
        }
    }
    


    const result = vehicleLastPosition ? positionVehicle : origenAsignado as LatLngExpression;
    return (
        <Marker position={result as LatLngExpression} icon={iconColor(statusD)}>
            <Popup>
                <strong>{statusD}</strong>
                <br />
                {/* {address} */}
            </Popup>
        </Marker>
    );
};

export default VehicleMarker;