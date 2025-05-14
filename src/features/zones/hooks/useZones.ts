import { useEffect, useState } from "react";
import { ZoneData, ApiZoneData } from "../types/Zone";
import { getZones } from "../services/zoneService";

export const useZones = () => {
  const [zones, setZones] = useState<ZoneData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchZones = async () => {
      try {
        const data: ApiZoneData[] = await getZones();

        const transformedZones: ZoneData[] = data.map((zone) => ({
          id: String(zone.id),
          name: zone.name,
          color: zone.color,
          category: zone.category,
          coordinates: zone.coordinates.map((coord) => [coord.latitud, coord.longitud]),
        }));

        setZones(transformedZones);
      } catch (error) {
        console.error("Error al obtener zonas:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchZones();
  }, []);

  return { zones, loading };
};