import { useEffect, useState } from "react";

function Footer() {
    const [time, setTime] = useState<string>("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const formattedTime = now.toLocaleTimeString();
            setTime(formattedTime);
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-bgt  h-20 rounded-xs flex justify-center items-center mt-5 px-5 w-full ">
            <div className=" w-full flex justify-between items-center">
                <div className="px-5">
                    <img src="/AST-Logo-white.png" className="w-22" alt="ast" />
                </div>
                <div
                    className="overflow-x-hidden"
                >
                    <h3
                        style={{
                            animation: "marquee 60s linear infinite running",
                            WebkitAnimation: "marquee 60s linear infinite running",
                        }}
                        className="text-nowrap font-light">
                        Recorrido <span className="text-white text-bold">No. E-0334890</span> acaba de salir del terminal  municipal de Puerto Montt, con hora de <span className="text-white font-bold">11:30 A.M. </span>
                        con destino a <span className="text-white font-bold">Castro, Chiloé.</span>
                    </h3>
                </div>
                <div className="px-5 flex justify-end items-center gap-2">
                    <div className="flex justify-start items-center gap-1">
                        <span><img src="/clima.png" className="w-10" alt="clima" /></span>
                        <h5> 13°C - Puerto Montt</h5>
                    </div>
                    <div className="min-w-25">
                        <h5 className="font-semibold">{time}</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer