import { ApiZoneData } from "../types/Zone";
import raw from "../../../data/geoZone.json";

export const getZones = async (): Promise<ApiZoneData[]> => {
    return raw as ApiZoneData[];
};



// -> cuando se haga el backend

// export const getZones = async (): Promise<ZoneData[]> => {
//     const res = await fetch("https://apistruck.neuroeac.cl/geofences");
//     const data: ZoneData[] = await res.json();

//     return data;
// };