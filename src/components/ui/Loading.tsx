import { useEffect, useState } from 'react';

function Loading() {
    const [progress, setProgress] = useState(0);

    // Simulación de llenado de 0 a 100%
    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => (prev < 100 ? prev + 1 : 100));
        }, 30); // velocidad del llenado

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="absolute z-[9999] top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center gap-5">
            <div className="relative w-[400px] h-[70px]">
                {/* <img
                    src="/wisensor.png"
                    alt="wisensor"
                    className="w-full h-full object-contain"
                /> */}
                <h1 className='text-white text-7xl text-center'>STRACK</h1>
                <div
                    className="absolute top-0 left-0 h-full bg-gradient-to-bl from-sky-400 to-secondary mix-blend-multiply"
                    style={{ width: `${progress}%` }}
                />
            </div>
            <div className="border-4 border-secondary border-b-transparent h-10 w-10 rounded-full animate-spin"></div>
            <small>Escaneando dispositivos de rastreo</small>
        </div>
    );
}

export default Loading;