
type InfoPageProps = {
    id: string
}

function InfoPage({ id }: InfoPageProps) {

    const infodata = [
        {
            id: "2",
            title: "Biomasa",
            description: "Descripción 1",
            img: "information/biomasa.png",
            url: "#"
        },
        {
            id: "3",
            title: "Clima",
            description: "Descripción 2",
            img: "information/clima.png",
            url: "#"

        },
        {
            id: "4",
            title: "Seguridad",
            description: "Descripción 3",
            img: "information/seguridad.png",
            url: "#"
        },
        {
            id: "5",
            title: "Sensores-IoT",
            description: "Descripción 4",
            img: "information/sensores-iot.png",
            url: "#"
        },
        {
            id: "6",
            title: "Energía",
            description: "Descripción 5",
            img: "information/energia.png",
            url: "#"
        },
        {
            id: "7",
            title: "Estado de red",
            description: "Descripción 6",
            img: "information/estado-de-red.png",
            url: "#"
        },
        {
            id: "8",
            title: "Alertas",
            description: "Descripción 7",
            img: "information/alertas.png",
            url: "#"
        },
        {
            id: "9",
            title: "Sub Drone",
            description: "Descripción 8",
            img: "information/sub-drone.png",
            url: "#"
        },
        {
            id: "10",
            title: "Jaula Smart",
            description: "Descripción 9",
            img: "information/jaula-smart.png",
            url: "#"
        },
        {
            id: "11",
            title: "Ferrocarriles",
            description: "Descripción 10",
            img: "information/ferrocarriles.png",
            url: "#"
        },
        {
            id: "12",
            title: "Inteligencia Artificial",
            description: "Descripción 11",
            img: "",
            url: "#"
        },
    ]

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
                    <img src="/wisensor.png" alt="wisensor" className="h-[80px] object-contain" />
                    <h1>Preview Live Site</h1>
                </div>
            </div>
        ))
    )
}

export default InfoPage