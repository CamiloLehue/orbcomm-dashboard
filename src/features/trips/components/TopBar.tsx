import React, { useState, useEffect, useCallback } from "react";
import { GrFormCheckmark, GrFormNextLink, GrFormPreviousLink, GrPowerReset } from "react-icons/gr";
import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";
import Select from "../../../components/ui/Select";
import Label from "../../../components/ui/Label";
import { useNavigate } from "react-router";

interface Location {
    name: string;
    coordinates: [number, number];
}

interface TopBarProps {
    onRouteRequested: (origin: [number, number], destination: [number, number]) => void;
}

function TopBar({ onRouteRequested }: TopBarProps) {
    const navigate = useNavigate();

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
        <div className="relative bg-bgs rounded-lg w-full h-full flex flex-col justify-start items-start gap-5  border border-gray/20  ">
            <div className="h-15 border-b border-gray/20  w-full flex justify-center items-center">
                <h2 className="bg-gradient-to-r from-gray to-white text-clip text-transparent bg-clip-text font-light text-xl text-center">
                    Generar ruta nueva
                </h2>
            </div>
            <form>
                <div className="flex flex-col gap-5 p-5">
                    <div className="flex justify-center items-center gap-4">
                        <div>
                            <Label htmlFor="text" name="Origen" />
                            <Select
                                className="focus:outline-none  font-light bg-zinc-900 py-2 ps-2"
                                name="select_pre"
                                id="id_origen"
                                onChange={handleOriginChange}
                                defaultValue=""
                            >
                                {locations.map(location => (
                                    <option key={location.name} value={location.name}>{location.name}</option>
                                ))}
                            </Select>
                        </div>
                        <GrFormNextLink size={35} className="mt-4 text-secondary" />
                        <div>
                            <Label htmlFor="text" name="Destino" />
                            <Select
                                className="focus:outline-none  font-light bg-zinc-900 py-2 ps-2"
                                name="select_pre"
                                id="id_destino"
                                onChange={handleDestinationChange}
                                defaultValue=""
                            >
                                {locations.map(location => (
                                    <option key={location.name} value={location.name}>{location.name}</option>
                                ))}
                            </Select>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3" >
                        <Label htmlFor="id_fecha" name="Fecha Salida" />
                        <Input type="date" />
                    </div>
                    <div className="flex flex-col gap-3" >
                        <Label htmlFor="id_fecha" name="Empresa" />
                        <Select
                            className="focus:outline-none  font-light bg-zinc-900 py-2 ps-2"
                        >
                            {Array(3).fill(0).map((_, i) => (
                                <option key={i} value={i}>Empresa {i + 1}</option>
                            ))}
                        </Select>
                    </div>
                    <div className="grid grid-cols-2 gap-5">
                        <div className="flex flex-col gap-3" >
                            <Label htmlFor="id_fecha" name="Patente Camión" />
                            <Input type="text" placeholder="XXXX-00" />
                        </div>
                        <div className="flex flex-col gap-3" >
                            <Label htmlFor="id_fecha" name="Patente Rampla" />
                            <Input type="text" placeholder="XXXX-00" />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-5">
                        <div className="flex flex-col gap-3" >
                            <Label htmlFor="id_fecha" name="Conductor 1" />
                            <Input type="text" placeholder="Cristofer" />
                        </div>
                        <div className="flex flex-col gap-3" >
                            <Label htmlFor="id_fecha" name="Conductor 2" />
                            <Input type="text" placeholder="Jose" />
                        </div>
                    </div>
                </div>
            </form>
            <div className="p-[1px] flex justify-center items-center px-5  my-12 w-full">
                <Button
                    onClick={() => { navigate(-1) }}
                    className="flex justify-center items-center border border-gray/20 text-gray rounded-sm px-2 pe-4 mx-2" >
                    <GrFormPreviousLink size={25} />
                    Volver
                </Button>
                <Button className="flex justify-center items-center border border-gray/20 text-gray gap-3 rounded-sm px-4 mx-2">
                    <GrPowerReset />
                    Restablecer
                </Button>
                <Button
                    onClick={handleCrearViajeClick}
                    className="flex justify-center bg-bgp items-center border border-gray/10 rounded-sm px-4 pe-5 mx-2">
                    <GrFormCheckmark size={25} />
                    Programar viaje
                </Button>
            </div>
        </div>
    );
}

export default TopBar;