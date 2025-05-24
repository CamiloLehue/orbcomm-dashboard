import { useEffect, useState } from "react";
import { getLastPositions } from "../services/vehicleService";
import { PositionsLast } from "../types/Vehicles";

export const useLastPositions = (intervalMs = 5000) => {
  const [lastPosition, setLastPosition] = useState<PositionsLast | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const data = await getLastPositions();
        if (isMounted) {
          setLastPosition(data);
          setError(null);
        }
      } catch (err) {
        console.error("Error fetching last positions:", err);
        if (isMounted) {
          setError(err as Error);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchData(); 

    const interval = setInterval(fetchData, intervalMs);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, [intervalMs]);

  return { lastPosition, loading, error };
};
