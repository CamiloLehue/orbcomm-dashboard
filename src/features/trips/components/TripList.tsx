import { CgCornerDownRight, CgPinAlt, CgShapeHexagon } from 'react-icons/cg';
import { GrFormNextLink } from 'react-icons/gr';
import { useTrips } from '../hooks/useTrips';

function TripList() {
    const { trips, loading } = useTrips();

    console.log("tripsVista->", trips);

    if (loading) return <p>Cargando...</p>;

    if (!Array.isArray(trips)) {
        return <p>No se encontraron viajes disponibles</p>;
    }

    return (
        <div className="relative flex flex-col justify-between rounded-2xl bg-bgp">
            <div>
                <div className="flex flex-col w-full p-5 border rounded-2xl bg-bgt border-gray/20">
                    <h4 className="leading-4">Seguimiento</h4>
                    <small className="text-xs text-gray">de vehículos activos</small>
                </div>

                <div className="h-20 bg-bgp grid grid-cols-3 gap-2">
                    <div className="flex flex-col justify-center items-center">
                        <h2 className="text-warning">2</h2>
                        <small className="text-xs">Detenidos</small>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <h2 className="text-secondary">5</h2>
                        <small className="text-xs">Circulación</small>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <h2 className="text-gray">3</h2>
                        <small className="text-xs">Alternativa</small>
                    </div>
                </div>

                <div className="max-h-[250px] overflow-y-auto px-2">
                    <div className="w-full relative flex flex-col gap-1 pb-8">
                        {trips.map((trip, i) => (
                            <div
                                key={i}
                                className="group bg-bgt hover:bg-transparent cursor-pointer w-full h-15 rounded-lg grid grid-cols-5 px-2 py-1"
                            >
                                <div className="col-span-2 flex justify-start items-center gap-1">
                                    <small className="text-secondary">
                                        <CgShapeHexagon />
                                    </small>
                                    <small className="flex justify-center items-center gap-2 text-xs">
                                        {
                                            trip.assetStatus.deviceSN
                                        }
                                    </small>
                                </div>

                                <div className="flex flex-col col-span-2 justify-center items-start">
                                    <small className="flex justify-center items-center gap-1">
                                        <CgCornerDownRight className="text-success" />

                                    </small>
                                    <small className="flex justify-center items-center gap-1">
                                        <CgPinAlt className="text-primary" />
                                        {/* {trip.data[2].positionStatus.city} */}
                                    </small>
                                </div>

                                <div className="flex justify-center items-center group-hover:translate-x-1 group-hover:text-secondary transition-all duration-500">
                                    <GrFormNextLink />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-bgp from-55%"></div>
            </div>
        </div>
    );
}

export default TripList;