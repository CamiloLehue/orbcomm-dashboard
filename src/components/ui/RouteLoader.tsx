
import { useEffect, useState } from 'react';

function RouteLoader() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => (prev < 100 ? prev + 1 : 100));
        }, 1);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="absolute z-[9999] top-0 left-0 w-full h-full bg-bgp bg-opacity-50 flex flex-col justify-center items-center gap-5">
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className="relative flex flex-col  justify-center">
                    <div className='flex flex-col justify-center items-center gap-2 w-full'>
                        <h1 className='font-bold text-5xl'>W I S E N S O R</h1>
                    </div>
                    <div
                        className="absolute top-0 left-0 h-full  bg-gradient-to-bl from-red-600 to-rose-500 mix-blend-multiply"
                        style={{ width: `${progress}%` }}
                    />
                </div>
                <small className='font-light'>Sistema Sincronizado</small>
            </div>
        </div>
    );
}

export default RouteLoader;