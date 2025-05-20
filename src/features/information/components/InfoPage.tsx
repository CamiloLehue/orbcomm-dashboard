import { useEffect, useState } from "react";

type InfoPageProps = {
    id: string
}

function InfoPage({ id }: InfoPageProps) {

    const infodata = [
        {
            id: "2",
            title: "Biomasa",
            description: "ver demo",
            img: "information/biomasa.png",
            url: "#",
            video: "/information/Biomasa.mp4",
        },
        {
            id: "3",
            title: "Clima",
            description: "ver demo",
            img: "information/clima.png",
            url: "#",
            video: "/information/clima.mp4",

        },
        {
            id: "4",
            title: "Seguridad",
            description: "ver demo",
            img: "information/seguridad.png",
            url: "#",
            video: "/information/Biomasa.mp4",
        },
        {
            id: "5",
            title: "Sensores-IoT",
            description: "ver demo",
            img: "information/sensores-iot.png",
            url: "#",
            video: "/information/Biomasa.mp4",
        },
        {
            id: "6",
            title: "Energía",
            description: "ver demo",
            img: "information/energia.png",
            url: "#",
            video: "/information/Biomasa.mp4",
        },
        {
            id: "7",
            title: "Estado de red",
            description: "ver demo",
            img: "information/estado-de-red.png",
            url: "#",
            video: "/information/Biomasa.mp4",
        },
        {
            id: "8",
            title: "Alertas",
            description: "ver demo",
            img: "information/alertas.png",
            url: "#",
            video: "/information/Biomasa.mp4",
        },
        {
            id: "9",
            title: "Sub Drone",
            description: "ver demo",
            img: "information/sub-drone.png",
            url: "#",
            video: "/information/Biomasa.mp4",
        },
        {
            id: "10",
            title: "Jaula Smart",
            description: "ver demo",
            img: "information/jaula-smart.png",
            url: "#",
            video: "/information/Biomasa.mp4",
        },
        {
            id: "11",
            title: "Ferrocarriles",
            description: "ver demo",
            img: "information/ferrocarriles.png",
            url: "#",
            video: "/information/Biomasa.mp4",
        },
        {
            id: "12",
            title: "Inteligencia Artificial",
            description: "ver demo",
            img: "",
            url: "#",
            video: "/information/Biomasa.mp4",
        },
    ]

    const [progress, setProgress] = useState(0);

    // Simulación de llenado de 0 a 100%
    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => (prev < 100 ? prev + 1 : 100));
        }, 80); // velocidad del llenado

        return () => clearInterval(interval);
    }, []);

    return (
        infodata.filter((item => item.id === id)).map((item, i) => (
            <div key={i} className="flex-1 grid grid-cols-2 gap-2 w-full h-full bg-bgp p-2 rounded-2xl">
                <div className="bg-gradient-to-bl from-bgt/50 to-gray/40 rounded-2xl flex flex-col items-center justify-start p-5 pt-10 ">
                    <h2 className="text-2xl font-bold">{item.title}</h2>
                    <div className="mt-10">
                        <p className="text-sm">{item.description}</p>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center p-5">
                    <div className="relative w-[300px] ">
                        <img
                            src="/wisensor.png"
                            alt="wisensor"
                            className="w-full h-full object-contain"
                        />
                        <div
                            className="absolute top-0 left-0 h-full bg-gray mix-blend-multiply"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                    <div>
                        {/* <picture>
                            <source media="(max-width: 640px)" srcSet={`/information/${item.img}`} />
                            <img src={`/information/${item.img}`} alt="wisensor" className="h-[200px] object-contain" />
                        </picture> */}
                        <video className="w-full h-full object-contain rounded-2xl" src={item.video} autoPlay loop muted />
                    </div>
                </div>
            </div>
        ))
    )
}

export default InfoPage