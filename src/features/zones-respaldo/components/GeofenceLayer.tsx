import GeofencePolygon from "./GeofencePolygon";
import { useZones } from "../hooks/useZones";

const GeofenceLayer = () => {
    const { zones, loading } = useZones();

    if (loading) return null;

    return (
        <>
            {zones.map((zone) => (
                <GeofencePolygon
                    key={zone.id}
                    name={zone.name}
                    coordinates={zone.coordinates}
                    color={zone.color}
                />
            ))}
        </>
    );
};

export default GeofenceLayer;