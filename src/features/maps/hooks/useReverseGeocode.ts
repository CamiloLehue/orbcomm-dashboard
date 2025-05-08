import { useEffect, useState } from "react";

export const useReverseGeocode = (lat: number, lon: number) => {
    const [address, setAddress] = useState("Cargando dirección...");

    useEffect(() => {
        const fetchAddress = async () => {
            try {
                const res = await fetch(
                    `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`
                );
                const data = await res.json();
                console.log("1 - Esta consulta a la api, devuelve la ubicación en dirección completa ==> " + data.display_name);

                setAddress(data.display_name || "No encontrada");
            } catch {
                setAddress("Error al obtener dirección");
            }
        };

        fetchAddress();
    }, [lat, lon]);

    return address;
};