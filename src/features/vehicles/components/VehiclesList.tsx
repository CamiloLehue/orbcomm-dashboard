import React from "react";
import { useLastPositions } from "../hooks/useVehicles";

const VehicleList: React.FC = () => {
  const { lastPosition, loading } = useLastPositions();

  const lastPositions = lastPosition?.positionStatus.latitude;


  if (loading) return <p>Cargando vehículos...</p>;

  return (
    <ul className="space-y-2 bg-stone-800 p-1 py-3 rounded max-h-[600px] overflow-y-auto">
      <h5 className="text-stone-300 text-center py-3">Vehiculos en movimiento</h5>
      {
        lastPositions
      }
    </ul>
  );
};



export default VehicleList;