import GeofencePolygon from "./GeofencePolygon";
import { useZones } from "../hooks/useZones";
import Loading from "../../../components/ui/Loading";

const GeofenceLayer = () => {
    const { zones, loading } = useZones();

    if (loading) return <Loading />;

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