import { useEffect, useState } from "react";
import { getAllTripsService } from "../../trips/services/tripServicesN";
import { Trip } from "../types/TripsType";

export const useTripsHook = () => {
  const [trips, setTrips] = useState<Trip[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        setLoading(true);
        const data = await getAllTripsService();
        setTrips(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Error al cargar viajes'));
        console.error("Error fetching trips:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTrips();
  }, []);

  return { trips, loading, error };
};