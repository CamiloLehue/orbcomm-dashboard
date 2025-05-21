import { Polyline } from "react-leaflet";
// import { useRouteSimulation } from "../hooks/useRouteSimulation";
// import { useTrips } from "../../trips/hooks/useTrips";
import { LatLngExpression } from "leaflet";
import { useReverseLayer } from "../hooks/useReverseLayer";
import Loading from "../../../components/ui/Loading";
// import { useRouteSimulation } from "../hooks/useRouteSimulation";

const RouteLayer = ({ origenDestinyAsigned, simulated = false }: { origenDestinyAsigned?: LatLngExpression[] | null, simulated?: boolean }) => {


    const { route, loading, error } = useReverseLayer(origenDestinyAsigned);

    if (loading || !route) return <Loading/>;
    // const { route } = useRouteSimulation();

    const result = simulated ? route : route;
    
    
    return <Polyline positions={result} color="blue" />;
};

export default RouteLayer;