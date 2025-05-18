import { Polyline } from "react-leaflet";
// import { useRouteSimulation } from "../hooks/useRouteSimulation";
// import { useTrips } from "../../trips/hooks/useTrips";
import { LatLngExpression } from "leaflet";

const RouteLayer = ({ origenDestinyAsigned }: { origenDestinyAsigned?: LatLngExpression[] | null }) => {

    const origenAsignado = origenDestinyAsigned?.[0];
    const destinoAsignado = origenDestinyAsigned?.[1];

    const rutaTest: LatLngExpression[] = [
        origenAsignado as LatLngExpression,
        destinoAsignado as LatLngExpression,
    ];
    return <Polyline positions={rutaTest} color="red" />;
};

export default RouteLayer;