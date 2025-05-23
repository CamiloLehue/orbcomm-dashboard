import { useEffect, useState } from "react";
import { getLastPositions } from "../services/vehicleService";
import { PositionsLast } from "../types/Vehicles";

export const useLastPositions = () => {
  const [lastPosition, setLastPosition] = useState<PositionsLast | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await getLastPositions(); // PositionsLast[]
        const last = data.length > 0 ? data[0] : null; // o data.at(0)
        setLastPosition(last);
      } catch (err) {
        console.error("Error fetching last positions:", err);
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetch();
  }, []);

  return { lastPosition, loading, error };
};