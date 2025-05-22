import React from "react";
import { useLastPositions } from "../../vehicles/hooks/useVehicles";
import { MapView } from "../../maps";

const LiveDemo: React.FC = () => {
  const { lastPosition, loading } = useLastPositions();

  const lat: number | null | undefined = lastPosition?.positionStatus.latitude;
  const lng: number | null | undefined = lastPosition?.positionStatus.longitude;

  if (loading) return <p>Cargando Sensor...</p>;


  return (
    <div className="grid grid-cols-2 w-full h-full">
      <ul className="space-y-2 bg-bgs p-1 py-3 rounded max-h-[600px] overflow-y-auto">
        <h5 className="text-stone-300 text-center py-3">SENSOR GPS YADRAN <span className="text-primary animate-pulse">(en vivo)</span></h5>
        <ul className="bg-gray rounded-xl flex  justify-center items-center gap-5">
          <li> latitud actual:{lat}</li>
          <li> Longitud actual {lng}</li>
        </ul>
      </ul>

      <div>
        <MapView
          tripOrigin={lat && lng ? [lat, lng] : undefined}
          vehicleLastPosition={lat && lng ? [lat, lng] : undefined}
          tripDestination={[-42.1350, -73.6400]}
          height="740px"
          options
        />
      </div>
    </div>
  );
};

export default LiveDemo;