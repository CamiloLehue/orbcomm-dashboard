import { useEffect, useState } from "react";
import { getRoutes } from "../services/routes";
import { Routes } from "../types/RoutesType";

export const useRoutes = () => {
  const [routes, setRoutes] = useState<Routes[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchRoutes = async () => {
      try {
        setLoading(true);
        const data = await getRoutes();
        setRoutes(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Error al cargar recorridos'));
        console.error("Error fetching recorridos:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchRoutes();
  }, []);

  return { routes, loading, error };
};