import { ZoneData } from "../types/Zone";
// import raw from "../../../data/zones.json";

// export const getZones = async (): Promise<ZoneData[]> => {
//     return raw as ZoneData[];
// };



// -> cuando se haga el backend

export const getZones = async (): Promise<ZoneData[]> => {
    const res = await fetch("https://apistruck.neuroeac.cl/geofences");
    const data: ZoneData[] = await res.json();


    return data;
};