import { useEffect, useState } from "react";
import { getLastPositions } from "../services/vehicleService";
import { PositionsLast } from "../types/Vehicles";

export const useLastPositions = () => {
  const [lastPosition, setLastPosition] = useState<PositionsLast | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      const data = await getLastPositions();
      setLastPosition(data);
      setLoading(false);
    };

    fetch();
  }, []);


  console.log(lastPosition);
  
  return { lastPosition, loading };
};