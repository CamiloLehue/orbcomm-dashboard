import { useState } from "react";
import { useZones } from "../hooks/useZones";
import { useMap } from "react-leaflet";
import Button from "../../../components/ui/Button";

function GeoButtons() {
    const [openMenu, setOpenMenu] = useState(false);
    return (
        <>
            <div className="absolute bottom-10 left-2 bg-bgt z-[9999] px-4 rounded">
                <Button onClick={() => setOpenMenu(!openMenu)} className="text-xs text-white flex  items-center justify-start  gap-2">
                    Abrir menu
                </Button>
            </div>
            {
                openMenu && <MenuOptions />
            }
        </>
    );
}

const MenuOptions = () => {
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
            <div className="absolute top-0 right-0 z-[9999] bg-bgp/30 backdrop-blur w-50 p-1  shadow space-y-1  overflow-y-auto h-full">
                <div className="flex flex-col gap-2 ">
                    {zones.map((zone) => {
                        const [lat, lng] = zone.coordinates[1];
                        return (
                            <button
                                key={zone.id}
                                onClick={() => handleFlyToZone(lat, lng)}
                                className=" bg-bgp py-2  text-white hover:bg-bgp"
                                style={{
                                    borderWidth: 1,
                                    borderColor: zone.color
                                }}
                            >
                                <small className="text-[10px]">{zone.name}</small>
                            </button>
                        );
                    })}
                </div>
            </div>
            <div className="absolute bottom-0 z-[9999] left-0 w-full h-10 bg-gradient-to-t from-bgp from-25%"></div></>
    )
}
export default GeoButtons;