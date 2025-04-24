import { useState } from "react";
import Content from "./Content";
import TopBar from "./TopBar";

function Trips() {
    const [origin, setOrigin] = useState<[number, number] | null>(null);
    const [destination, setDestination] = useState<[number, number] | null>(null);

    const handleRouteRequested = (newOrigin: [number, number], newDestination: [number, number]) => {
        setOrigin(newOrigin);
        setDestination(newDestination);
    };

    return (
        <div className="relative h-full w-full flex flex-col justify-start items-start">
            <TopBar onRouteRequested={handleRouteRequested} />
            <div className="relative min-h-170 h-full w-full flex justify-start items-start gap-5">
                <Content origin={origin} destination={destination} />
            </div>
        </div>
    );
}

export default Trips;