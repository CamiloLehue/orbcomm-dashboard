import { Polyline } from "react-leaflet";
import { useRouteSimulation } from "../hooks/useRouteSimulation";

const RouteLayer = () => {
    const { route } = useRouteSimulation();
    return <Polyline positions={route} color="blue" />;
};

export default RouteLayer;