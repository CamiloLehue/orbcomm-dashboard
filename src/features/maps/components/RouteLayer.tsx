import { Polyline } from "react-leaflet";
// import { useRouteSimulation } from "../hooks/useRouteSimulation";
// import { useTrips } from "../../trips/hooks/useTrips";
import { LatLngExpression } from "leaflet";
import { useRouteSimulation } from "../hooks/useRouteSimulation";

const RouteLayer = ({ origenDestinyAsigned, simulated = false }: { origenDestinyAsigned?: LatLngExpression[] | null, simulated?: boolean }) => {

    const origenAsignado = origenDestinyAsigned?.[0];
    const destinoAsignado = origenDestinyAsigned?.[1];

    const rutaTest: LatLngExpression[] = [
        origenAsignado as LatLngExpression,
        destinoAsignado as LatLngExpression,
    ];

    const { route } = useRouteSimulation();

    const result = simulated ? route : rutaTest;
    
    return <Polyline positions={result} color="red" />;
};

export default RouteLayer;