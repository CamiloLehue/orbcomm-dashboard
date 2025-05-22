import React from "react";
import { useLastPositions } from "../../vehicles/hooks/useVehicles";
import { MapView } from "../../maps";
import Titles from "../../../components/ui/Titles";
import Loading from "../../../components/ui/Loading";

const LiveDemo: React.FC = () => {
  const { lastPosition, loading, error } = useLastPositions();
  if (error) return <p>Error al obtener sensores</p>;
  if (loading) return <p>Cargando Sensor...</p>;
  const lat: number | null | undefined = lastPosition?.positionStatus.latitude;
  const lng: number | null | undefined = lastPosition?.positionStatus.longitude;
  const deviceId = lastPosition?.assetStatus.deviceSN;



  return (
    <div className="w-full">
      <Titles title="Monitoreo en tiempo real (Sensor YADRAN)" />
      <div className="grid grid-cols-2 w-full h-full">
        <div>
          <ul className="space-y-2 bg-bgs p-1 py-3 rounded overflow-y-auto">
            <h4 className="text-stone-300 text-center py-3">SENSOR GPS YADRAN <span className="text-primary animate-pulse">({deviceId})</span></h4>
            <div className="w-full">
              <h5 className="text-stone-300 text-center py-3">Información del sensor</h5>
              <div>
                <TravelSummaryTable />
              </div>
            </div>
          </ul>
        </div>
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
    </div>
  );
};


const TravelSummaryTable: React.FC = () => {
  const { lastPosition, loading,error } = useLastPositions();
  if (error) return <p>Error al obtener sensores</p>;
  if (loading) return <Loading />;

  const lat: number | null | undefined = lastPosition?.positionStatus.latitude;
  const lng: number | null | undefined = lastPosition?.positionStatus.longitude;
  const deviceId = lastPosition?.assetStatus.deviceSN;
  const addresss = lastPosition?.positionStatus.address;
  const geofenceStatus = lastPosition?.positionStatus.geofenceStatus;
  const tripDistance = lastPosition?.positionStatus.tripDistance;
  const city = lastPosition?.positionStatus.city;
  const state = lastPosition?.positionStatus.state;
  const street = lastPosition?.positionStatus.street;
  const dwellTimeOutside = lastPosition?.positionStatus.dwellTimeOutside;
  const priorDepartureTime = lastPosition?.positionStatus.priorDepartureTime;
  const priorDepartureLocation = lastPosition?.positionStatus.priorDepartureLocation;


  const travelSummaryData = [
    { label: "ID Sensor", value: deviceId },
    { label: "Coordenadas", value: (lat && lng) ? `${lat}, ${lng}` : "Desconocido" },
    { label: "Dirección", value: addresss },
    { label: "Distancia aproximada", value: (tripDistance + " Kilometros") },
    { label: "Ciudad", value: city },
    { label: "Región", value: state },
    { label: "Calle", value: street },
    { label: "Estado geocerca", value: (geofenceStatus === "Out") ? "Fuera Geocerca" : "Dentro Geocerca" },
    { label: "Tiempo fuera de geocerca", value: dwellTimeOutside },
    { label: "Hora de salida anterior", value: priorDepartureTime },
    { label: "Ubicación de salida anterior", value: priorDepartureLocation },
  ];
  return (
    <div className=" text-white p-2 w-full mx-auto">
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="py-2 px-4 text-gray font-medium"></th>
            <th className="py-2 px-4 text-white/60 font-medium text-xs">Resumen</th>
          </tr>
        </thead>
        <tbody>
          {travelSummaryData.map((item, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-bgp " : "bg-bgs "}
            >
              <td className="py-3 text-xs px-4">{item.label}</td>
              <td className="py-1 text-xs px-4 font-semibold">{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default LiveDemo;