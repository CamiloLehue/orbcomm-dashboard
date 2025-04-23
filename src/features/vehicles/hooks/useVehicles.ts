import { useEffect, useState } from "react";
import { getVehicles } from "../services/vehicleService";
import { VehicleData } from "../types/Vehicles";

export const useVehicles = () => {
  const [vehicles, setVehicles] = useState<VehicleData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      const data = await getVehicles();
      setVehicles(data);
      setLoading(false);
    };

    fetch();
  }, []);

  return { vehicles, loading };
};