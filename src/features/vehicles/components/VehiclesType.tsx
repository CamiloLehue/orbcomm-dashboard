import { useVehicles } from "../hooks/useVehicles";

function VehiclesType() {
    const { vehicles, loading } = useVehicles();
    if (loading) return <p>Cargando Tipos vehículos...</p>;
    return (
        <div>
            {
                vehicles.filter((vehicle) => vehicle.assetStatus.deviceSN).map((vehicle, index) => {
                    return (
                        <div key={index}>
                            <h5>{vehicle.assetStatus.assetName}</h5>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default VehiclesType