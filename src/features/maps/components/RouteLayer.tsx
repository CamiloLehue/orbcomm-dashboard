import { Polyline } from "react-leaflet";
// import { useRouteSimulation } from "../hooks/useRouteSimulation";
// import { useTrips } from "../../trips/hooks/useTrips";
import { LatLngExpression } from "leaflet";

const RouteLayer = () => {
    // const { trips } = useTrips();
    // const tripsArray: LatLngExpression[] = trips.map(trip => [trip.positionStatus.latitude, trip.positionStatus.longitude]);

    // console.log(tripsArray);
    const rutaTest: LatLngExpression[] = [
        [-42.7196, -73.78981],
        [-41.82978, -73.51483],
    ];
    // const { route } = useRouteSimulation();
    return <Polyline positions={rutaTest} color="red" />;
};

export default RouteLayer;