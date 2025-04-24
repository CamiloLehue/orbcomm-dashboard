import React from "react";
import { useVehicles } from "../hooks/useVehicles";

const VehicleList: React.FC = () => {
  const { vehicles, loading } = useVehicles();

  if (loading) return <p>Cargando vehículos...</p>;

  return (
    <ul className="space-y-2 bg-stone-800 p-1 py-3 rounded max-h-[600px] overflow-y-auto">
      <h5 className="text-stone-300 text-center py-3">Vehiculos en movimiento</h5>
      {vehicles.map((vehicle) => (
        <li key={vehicle.messageId} className="flex bg-zinc-950/50 flex-col justify-center items-center gap-1 p-2 border border-zinc-100/5 rounded-xl
        hover:bg-stone-800 transition-all duration-300 ease-in cursor-pointer py-5">
          <small className="text-stone-500 text-[11px]">Vehiculo</small>
          <p className="bg-stone-800 text-zinc-300 rounded-full px-4 py-2 text-xs">{vehicle.assetStatus.assetName}</p>
          <p className="text-xs text-stone-400">
            {vehicle.positionStatus.city ?? "Desconocido"}, {vehicle.positionStatus.country}
          </p>
          <p className="text-xs text-stone-400 text-center">
            {vehicle.positionStatus.address}
          </p>
          <div className="flex gap-4">
            <p className="text-xs text-stone-400">
              Latitud: {vehicle.positionStatus.latitude}
            </p>
            <p className="text-xs text-stone-400">
              Longitud: {vehicle.positionStatus.longitude}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};



export default VehicleList;