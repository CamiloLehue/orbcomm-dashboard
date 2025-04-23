import { useEffect, useState } from "react";
import { LatLngExpression } from "leaflet";

const route: LatLngExpression[] = [
    [-41.4717, -72.9369],
    [-41.4720, -72.9350],
    [-41.4725, -72.9335],
    [-41.4730, -72.9320],
    [-41.4735, -72.9305],
    [-41.4740, -72.9290],
];

export const useRouteSimulation = () => {
    const [markerIndex, setMarkerIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setMarkerIndex((prev) => (prev < route.length - 1 ? prev + 1 : prev));
        }, 9000);
        return () => clearInterval(interval);
    }, []);

    return { route, markerIndex };
};