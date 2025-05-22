import tripJson from "../../../data/routes.json";
import { Routes } from "../types/RoutesType";



const RoutesArray: Routes[] = tripJson as Routes[];

export const getRoutes = async (): Promise<Routes[]> => {
    try {
        return RoutesArray;
    } catch (error) {
        console.error("Error al cargar los recorridos: ", error);
        return [];
    }
}