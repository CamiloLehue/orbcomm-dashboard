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


    return <>
    {/* Borde más grueso y transparente debajo */}
    <Polyline
      positions={result}
      pathOptions={{
        color: '#ffffff',
        weight: 10,
        opacity: 0.3,
        lineCap: 'round',
        lineJoin: 'round',
      }}
    />
    {/* Línea principal encima */}
    <Polyline
      positions={result}
      pathOptions={{
        color: '#007bff',
        weight: 6,
        opacity: 0.9,
        dashArray: '2, 12',
        lineCap: 'round',
        lineJoin: 'round',
      }}
    />
  </>
  ;
};

export default RouteLayer;