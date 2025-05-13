import { useEffect, useState } from "react";
import { getTrips } from "../services/tripService";
import { Trip } from "../types/Trips";

export const useTrips = () => {
  const [trips, setTrips] = useState<Trip[]>([]);  // Inicializa como un array vacío
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      const data = await getTrips();
      setTrips(data);  
      setLoading(false);
    };

    fetch();
  }, []);

  return { trips, loading };
};