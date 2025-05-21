import { useParams } from "react-router"
import InfoPage from "./InfoPage"
import { useTripsHook } from "../../trips/hooks/useTripsHook";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import { MapView } from "../../maps";
import { useState } from "react";

function Information() {

    const viajes = useTripsHook();

    const trips = viajes.trips;

    console.log("Estos son mis viajes: ", viajes);

    const idInfoPage: string = String(useParams().id)

    console.log(idInfoPage);

    const [coordOrigin, setCoordOrigin] = useState<[number, number]>([0,0]);
    const [coordDestiny, setCoordDestiny] = useState<[number, number]>([0,0]);


    return (
        <div className="h-full w-full flex-1 flex flex-col justify-start items-start px-1 pb-1">
            <h2 className="p-2">Tramos <span className="text-xs text-white/70 px-2">( {trips.length} )</span> </h2>
            <div className="flex w-full gap-1">
                <ul className="w-3/12  flex flex-col gap-1">
                    {
                        trips.map((trip, index) => {

                 
                            const origenLatitude = trip.origin.coordinates.latitude.toString()
                            const origenLongitude = trip.origin.coordinates.longitude.toString()

                            const destinoLatitude = trip.destination.coordinates.latitude.toString()
                            const destinoLongitude = trip.destination.coordinates.longitude.toString()

                            const origen: [number, number] = [parseInt(origenLatitude), parseInt(origenLongitude)];
                            const destino: [number, number] = [parseInt(destinoLatitude), parseInt(destinoLongitude)];


                            return (
                                <li
                                    onClick={() => {
                                        setCoordOrigin(origen);
                                        setCoordDestiny(destino);
                                    }}

                                    key={index} className="py-3 cursor-pointer bg-linear-60 from-gray/30 via-gray/40 to-gray/30 rounded w-full px-5 text-sm ">
                                    <div className="grid grid-cols-4 gap-2 ">
                                        <div className="flex flex-col items-start justify-center w-full">
                                            <p className="text-white/70">{trip.origin.name}</p>
                                            <small className="text-gray text-nowrap">
                                                {trip.origin.coordinates.latitude} , {trip.origin.coordinates.longitude}
                                            </small>
                                        </div>
                                        <div className="flex flex-col justify-center items-center col-span-2 ">
                                            <GrFormNextLink className="text-secondary" />
                                            <GrFormPreviousLink className="text-primary" />
                                        </div>
                                        <div className="flex flex-col items-center justify-center w-full">
                                            <p className="text-white/70">{trip.destination.name}</p>
                                            <small className="text-gray text-nowrap">
                                                {trip.destination.coordinates.latitude} , {trip.destination.coordinates.longitude}
                                            </small>
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className="relative w-9/12">
                    <MapView
                        tripOrigin={ coordOrigin }
                        tripDestination={ coordDestiny }
                        origenDestinyAsigned={[coordOrigin, coordDestiny]}
                        nameCitys={["Origen", "Destino"]}
                        height="700px"
                        // options={true}
                    />
                </div>
            </div>

        </div>
    )
}

export default Information