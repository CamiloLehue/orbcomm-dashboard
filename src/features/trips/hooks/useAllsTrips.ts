import { useEffect, useState } from "react";
import { getCompleteTripData } from "../services/tripService";
import { TripData } from "../types/Trips";

export const useAllTrips = () => {
  const [allTrips, setTrips] = useState<TripData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchTrips = async () => {
      try {

        setLoading(true);
        const data: TripData[] = await getCompleteTripData();
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


  return { allTrips, loading, error };
};