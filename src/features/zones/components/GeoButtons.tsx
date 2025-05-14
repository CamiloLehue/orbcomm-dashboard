import { useZones } from "../hooks/useZones";
import { useMap } from "react-leaflet";

function GeoButtons() {
    const { zones, loading } = useZones();
    const map = useMap();

    if (loading) return null;

    const handleFlyToZone = (lat: number, lng: number) => {
        map.flyTo([lat, lng], 17, {
            animate: true,
            duration: 1.5,
        });
    };

    return (
        <>
            <div className="absolute -bottom-10 z-[9999] bg-stone-900 w-full rounded-t-xl p-3  shadow space-y-1  overflow-y-auto h-[300px]">
                <div className="grid grid-cols-2 gap-2 ">
                    {zones.filter((zone) => zone.category === "Copec").map((zone) => {
                        const [lat, lng] = zone.coordinates[1];
                        return (
                            <button
                                key={zone.id}
                                onClick={() => handleFlyToZone(lat, lng)}
                                className=" bg-bgt border h-12 border-gray/30  text-white rounded hover:bg-bgp"
                                style={{
                                    borderWidth: 1,
                                    borderColor: zone.color
                                }}
                            >
                                {zone.name}
                            </button>
                        );
                    })}
                </div>
            </div>
            <div className="absolute bottom-0 z-[9999] left-0 w-full h-10 bg-gradient-to-t from-bgp from-25%"></div>

        </>
    );
}

export default GeoButtons;