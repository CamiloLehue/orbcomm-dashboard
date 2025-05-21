import tripJson from "../../../data/trips.json";
import { Trip } from "../types/TripsType";



const tripsArray: Trip[] = tripJson as Trip[];

export const getAllTripsService = async (): Promise<Trip[]> => {
    try {
        return tripsArray;
    } catch (error) {
        console.error("Error al cargar los viajes: ", error);
        return [];
    }
}