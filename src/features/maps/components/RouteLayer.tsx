import { Polyline } from "react-leaflet";
// import { useRouteSimulation } from "../hooks/useRouteSimulation";
// import { useTrips } from "../../trips/hooks/useTrips";
import { LatLngExpression } from "leaflet";

const RouteLayer = ({ origenDestinyAsigned }: { origenDestinyAsigned?: LatLngExpression[] | null }) => {
    // const { trips } = useTrips();
    // const tripsArray: LatLngExpression[] = trips.map(trip => [trip.positionStatus.latitude, trip.positionStatus.longitude]);

    // console.log(tripsArray);

    const origenAsignado = origenDestinyAsigned?.[0];
    const destinoAsignado = origenDestinyAsigned?.[1];

    console.log("origenAsignado: ", origenAsignado);
    console.log("destinoAsignado: ", destinoAsignado);

    const rutaTest: LatLngExpression[] = [
        origenAsignado as LatLngExpression,
        destinoAsignado as LatLngExpression,
    ];
    // const { route } = useRouteSimulation();
    return <Polyline positions={rutaTest} color="red" />;
};

export default RouteLayer;