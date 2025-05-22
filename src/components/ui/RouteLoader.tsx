
import { useEffect, useState } from 'react';

function RouteLoader() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => (prev < 100 ? prev + 1 : 100));
        }, 0);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="absolute z-[9999] top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center gap-5">
            <div className="relative w-[250px] h-[80px]">
                <img
                    src="/wisensor.png"
                    alt="wisensor"
                    className="w-full h-full object-contain"
                />
                <div
                    className="absolute top-0 left-0 h-full  bg-gradient-to-bl from-danger to-orange-700 mix-blend-multiply"
                    style={{ width: `${progress}%` }}
                />
            </div>
            <div className="border-4 border-danger border-b-transparent h-10 w-10 rounded-full animate-spin"></div>
        </div>
    );
}

export default RouteLoader;