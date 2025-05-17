import { useState } from "react";
import MapList from "./MapList";
import ConfigSelectedTrip from "./ConfigSelectedTrip";
import TripListActive from "./TripListActive";

function Monotorings() {

    const [openConfig, setOpenConfig] = useState(false);
    const [selectedTrips, setSelectedTrips] = useState<number[]>([]);
    const [selectedTripOD, setSelectedTripOD] =  useState<[number, number][]>([]);

    return (
        <div className="h-full w-full flex-1 flex flex-col justify-start items-start px-1 pb-1">
            <div className="flex-1 grid grid-cols-12 gap-2 w-full h-full">
                <div className="col-span-3 bg-bgt">
                    <TripListActive
                        setOpenConfig={setOpenConfig}
                        openConfig={openConfig}
                        selectedTrips={selectedTrips}
                        setSelectedTrips={setSelectedTrips}
                        selectedTripOD={selectedTripOD}
                        setSelectedTripOD={setSelectedTripOD}
                    />
                </div>
                <div className={`${openConfig ? `col-span-2` : `hidden`} bg-bgt`}>
                    <ConfigSelectedTrip
                        selectedTrips={selectedTrips}
                        selectedTripOD={selectedTripOD}
                    />
                </div>
                <div className={`${openConfig ? `col-span-7` : `col-span-9 w-full`} bg-bgt`}>
                    <MapList
                        selectedTrips={selectedTrips}
                        selectedTripOD={selectedTripOD}
                    />
                </div>
            </div>
        </div>
    )
}




export default Monotorings