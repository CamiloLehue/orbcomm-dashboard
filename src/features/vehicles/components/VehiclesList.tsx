import React from "react";
import { useVehicles } from "../hooks/useVehicles";

const VehicleList: React.FC = () => {
  const { vehicles, loading } = useVehicles();

  if (loading) return <p>Cargando vehículos...</p>;

  return (
    <ul className="space-y-2">
      {vehicles.map((vehicle) => (
        <li key={vehicle.messageId} className="p-3 border rounded">
          <p className="font-semibold">{vehicle.assetStatus.assetName}</p>
          <p className="text-sm text-gray-600">
            {vehicle.positionStatus.city}, {vehicle.positionStatus.country}
          </p>
          <p className="text-sm text-gray-600">
            Batería: {vehicle.assetStatus.batteryVoltage}V
          </p>
        </li>
      ))}
    </ul>
  );
};

export default VehicleList;