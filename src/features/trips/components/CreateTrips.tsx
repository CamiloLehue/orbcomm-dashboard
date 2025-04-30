import { useState } from "react";
import Content from "./Content";
import TopBar from "./TopBar";

function CreateTrips() {
    const [origin, setOrigin] = useState<[number, number] | null>(null);
    const [destination, setDestination] = useState<[number, number] | null>(null);

    const handleRouteRequested = (newOrigin: [number, number], newDestination: [number, number]) => {
        setOrigin(newOrigin);
        setDestination(newDestination);
    };

    return (
        <div className="relative h-full w-full flex flex-col gap-5 justify-start items-start  ">
            <div className="absolute top-0 right-0 bg-secondary/10 h-100 w-100 blur-3xl rounded-full"></div>
            <h1 className="text-white">Nuevo Viaje</h1>
            <div className="flex justify-center items-center gap-5 w-full">
                <div className="">
                    <TopBar onRouteRequested={handleRouteRequested} />
                </div>
                <Content origin={origin} destination={destination} />
            </div>
        </div>
    );
}

export default CreateTrips;