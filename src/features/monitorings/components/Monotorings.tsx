import { useState } from "react";
import MapList from "./MapList";
import ConfigSelectedTrip from "./ConfigSelectedTrip";
import TripListActive from "./TripListActive";
import Button from "../../../components/ui/Button";
import { GrFormPrevious } from "react-icons/gr";

function Monotorings() {
    const [openConfig, setOpenConfig] = useState(false);
    const [selectedTrips, setSelectedTrips] = useState<number[]>([]);
    const [selectedTripOD, setSelectedTripOD] = useState<[number, number][]>([]);

    return (
        <div className="h-full w-full flex-1 flex flex-col justify-start items-start px-1 pb-1">
            <div className="flex-1 grid grid-cols-12 gap-2 w-full h-full">
                <div className="col-span-3 relative bg-bgt">
                    <TripListActive
                        setOpenConfig={setOpenConfig}
                        openConfig={openConfig}
                        selectedTrips={selectedTrips}
                        setSelectedTrips={setSelectedTrips}
                        selectedTripOD={selectedTripOD}
                        setSelectedTripOD={setSelectedTripOD}
                    />
                    <Button
                        onClick={() => setOpenConfig(!openConfig)}
                        rounded="full"
                        className={`group absolute z-[999] top-[50%] -translate-y-1/2 -right-6 bg-bgp px-5 hover:bg-bgt ${openConfig ? "translate-x-78" : ""}`}>
                        <GrFormPrevious className={`${!openConfig ? "rotate-180 group-hover:text-primary transition-all duration-300" : " group-hover:text-primary transition-all duration-300 "}`} />
                    </Button>
                </div>
                <div className={`${openConfig ? `col-span-2 transition-all` : `hidden transition-all`} bg-bgt`}>
                    <ConfigSelectedTrip
                        selectedTrips={selectedTrips}
                        selectedTripOD={selectedTripOD}
                    />
                </div>
                <div className={`${openConfig ? `col-span-7` : `col-span-9 w-full`} bg-bgp`}>
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