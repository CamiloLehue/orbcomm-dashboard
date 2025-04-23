import { useEffect, useState } from "react";
import { getZones } from "../services/zoneService";
import { ZoneData } from "../types/Zone";

export const useZones = () => {
  const [zones, setZones] = useState<ZoneData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchZones = async () => {
      const data = await getZones();
      setZones(data);
      setLoading(false);
    };
    fetchZones();
  }, []);

  return { zones, loading };
};