import { Polyline } from "react-leaflet";
// import { useRouteSimulation } from "../hooks/useRouteSimulation";
// import { useTrips } from "../../trips/hooks/useTrips";
import { LatLngExpression } from "leaflet";
import { useReverseLayer } from "../hooks/useReverseLayer";
import Loading from "../../../components/ui/Loading";
// import { useRouteSimulation } from "../hooks/useRouteSimulation";

const RouteLayer = ({ origenDestinyAsigned }: { origenDestinyAsigned?: LatLngExpression[] | null }) => {

    const { route, loading } = useReverseLayer(origenDestinyAsigned);

    if (loading || !route) return <Loading />;

    const result = route;


    return <Polyline positions={result} color="blue" />;
};

export default RouteLayer;