import raw from "../../../data/combinado.json";
import { Trip } from "../types/Trips";

const trips: Trip[] = raw as Trip[] | [];
const allTrips = trips;

export const getTrips = async (): Promise<Trip[]> => {
    return allTrips;
};

