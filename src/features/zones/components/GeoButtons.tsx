import { useZones } from "../hooks/useZones";
import { useMap } from "react-leaflet";

function GeoButtons() {
    const { zones, loading } = useZones();
    const map = useMap(); // Hook de react-leaflet

    if (loading) return null;

    const handleFlyToZone = (lat: number, lng: number) => {
        map.flyTo([lat, lng], 17, {
            animate: true,
            duration: 1.5,
        });
    };

    return (
        <div className="absolute top-4 left-4 z-[1000] bg-stone-500 p-3 rounded shadow space-y-2">
            {zones.map((zone) => {
                const [lat, lng] = zone.coordinates[0];
                return (
                    <button
                        key={zone.id}
                        onClick={() => handleFlyToZone(lat, lng)}
                        className="w-full px-4 py-1 bg-stone-600 text-white rounded hover:bg-stone-700"
                    >
                        {zone.name}
                    </button>
                );
            })}
        </div>
    );
}

export default GeoButtons;