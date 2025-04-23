import raw from "../../../data/combinado.json";
import { ApiResponse } from "../../../types/ApiResponse";
import { VehicleData } from "../types/Vehicles";

const [response]: ApiResponse<VehicleData>[] = raw as ApiResponse<VehicleData>[];

export const getVehicles = async (): Promise<VehicleData[]> => {
    return response.data;
};