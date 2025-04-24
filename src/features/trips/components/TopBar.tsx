import React, { useState, useEffect, useCallback } from "react";
import { GrFormClock, GrFormLocation, GrFormNextLink, GrPowerReset } from "react-icons/gr";
import Button from "../../../components/ui/Button";

interface Location {
    name: string;
    coordinates: [number, number];
}

interface TopBarProps {
    onRouteRequested: (origin: [number, number], destination: [number, number]) => void;
}

function TopBar({ onRouteRequested }: TopBarProps) {
    const [origin, setOrigin] = useState<[number, number] | null>(null);
    const [destination, setDestination] = useState<[number, number] | null>(null);
    const [locations, setLocations] = useState<Location[]>([]);

    useEffect(() => {
        const predefinedLocations: Location[] = [
            { name: 'Oficina Principal', coordinates: [-43.1350, -73.6400] as [number, number] },
            { name: 'Bodega Central', coordinates: [-43.1400, -73.6450] as [number, number] },
            { name: 'Planta de Producción', coordinates: [-43.1300, -73.6500] as [number, number] },
            { name: 'Intersección Providencia / Los Leones', coordinates: [-33.4178, -70.6072] as [number, number] },
            { name: 'Plaza Baquedano', coordinates: [-33.4383, -70.6392] as [number, number] }
        ];
        setLocations(predefinedLocations);
    }, []);

    const handleOriginChange = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedLocation = locations.find(loc => loc.name === event.target.value);
        setOrigin(selectedLocation ? selectedLocation.coordinates : null);
    }, [locations]);

    const handleDestinationChange = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedLocation = locations.find(loc => loc.name === event.target.value);
        setDestination(selectedLocation ? selectedLocation.coordinates : null);
    }, [locations]);

    const handleCrearViajeClick = useCallback(() => {
        if (origin && destination) {
            onRouteRequested(origin, destination);
        } else {
            console.warn("Por favor, selecciona un origen y un destino.");
        }
    }, [origin, destination, onRouteRequested]);

    return (
        <div className="w-full  px-5 h-25 flex justify-start items-center gap-5">
            <div className="border-e  border-zinc-100/5 pe-10">
                <h2 className="bg-gradient-to-r from-zinc-400 to-zinc-200 text-clip text-transparent bg-clip-text font-light text-xl">
                    Generar ruta
                </h2>
            </div>
            <div className="flex gap-2 ps-5">
                <div className="p-[1px] h-10.5 bg-gradient-to-t from-zinc-400/40 ">
                    <div className="flex justify-end items-center">
                        <select
                            className="focus:outline-none w-50 font-light bg-zinc-900 py-2 ps-2"
                            name="select_pre"
                            id="id_origen"
                            onChange={handleOriginChange}
                            defaultValue=""
                        >
                            <option value="" disabled>Origen</option>
                            {locations.map(location => (
                                <option key={location.name} value={location.name}>{location.name}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <GrFormNextLink />
                </div>
                <div className="p-[1px] h-10.5 bg-gradient-to-t from-zinc-400/40 ">
                    <div className="flex justify-end items-center">
                        <select
                            className="focus:outline-none w-50 font-light bg-zinc-900 py-2 ps-2"
                            name="select_pre"
                            id="id_destino"
                            onChange={handleDestinationChange}
                            defaultValue=""
                        >
                            <option value="" disabled>Destino</option>
                            {locations.map(location => (
                                <option key={location.name} value={location.name}>{location.name}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="p-[1px] flex justify-center items-center px-5 ">
                    <Button className="bg-zinc-900 rounded-sm px-2 pe-4 mx-2" onClick={handleCrearViajeClick}>
                        <GrFormLocation size={25} />
                        Crear viaje
                    </Button>
                    <Button className="border border-zinc-100/5 rounded-sm px-4 mx-2">
                        <GrPowerReset />
                        Restablecer
                    </Button>
                    <Button className="border border-zinc-100/5 rounded-sm px-4 mx-2"><GrFormClock size={25} />
                        Guardar Viaje
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default TopBar;