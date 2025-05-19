import {
    GrDeliver,
    GrGateway,
    GrProjects,
    GrFormNext,
    GrApps,
    GrPerformance,
    GrFormNextLink,
    GrDiamond
} from "react-icons/gr"
import Button from "../components/ui/Button"
import { useNavigate } from "react-router"
import { useState } from "react";

function Sidebar() {
    const navigate = useNavigate();
    const location = window.location.pathname;
    const menu = [
        {
            icon: GrApps,
            text: "Explorar",
            link: "/dashboard",
            status: true,
        },
        {
            icon: GrGateway,
            text: "Seguimientos",
            link: "/seguimientos",
            status: true,

        },
        {
            icon: GrDeliver,
            text: "Viajes",
            link: "/viajes",
            status: true,
            submenu: [
                {
                    icon: GrProjects,
                    text: "Inicio",
                    link: "/"
                },
                {
                    icon: GrProjects,
                    text: "Inicio",
                    link: "/"
                },
            ]
        },
        {
            icon: GrDiamond,
            text: "Inteligencia Artificial",
            link: "#",
            status: false,
        },
        {
            icon: GrFormNextLink,
            text: "Biomasa",
            link: "#",
            status: false,
        },
        {
            icon: GrFormNextLink,
            text: "Clima",
            link: "#",
            status: false,
        },
        {
            icon: GrFormNextLink,
            text: "Seguridad",
            link: "#",
            status: false,
        },
        {
            icon: GrFormNextLink,
            text: "Sensores-IoT",
            link: "#",
            status: false,
        },
        {
            icon: GrFormNextLink,
            text: "Energía",
            link: "#",
            status: false,
        },
        {
            icon: GrFormNextLink,
            text: "Estado de red",
            link: "#",
            status: false,
        },
        {
            icon: GrFormNextLink,
            text: "Alertas",
            link: "#",
            status: false,
        },
        {
            icon: GrFormNextLink,
            text: "Sub Drone",
            link: "#",
            status: false,
        },
        {
            icon: GrFormNextLink,
            text: "Jaula Smart",
            link: "#",
            status: false,
        },
        {
            icon: GrFormNextLink,
            text: "Ferrocarriles",
            link: "#",
            status: false,
        },

        // {
        //     icon: GrGateway,
        //     text: "Monitoreo",
        //     link: "/monitoreo",
        //     submenu: [
        //         {
        //             icon: GrProjects,
        //             text: "Inicio",
        //             link: "/"
        //         },
        //         {
        //             icon: GrProjects,
        //             text: "Inicio",
        //             link: "/"
        //         },
        //     ]
        // },
        // {
        //     icon: GrNavigate,
        //     text: "Tramos",
        //     link: "/tramos",
        //     submenu: [
        //         {
        //             icon: GrProjects,
        //             text: "Inicio",
        //             link: "/"
        //         },
        //         {
        //             icon: GrProjects,
        //             text: "Inicio",
        //             link: "/"
        //         },
        //     ]
        // },
        {
            icon: GrPerformance,
            text: "Configuración",
            link: "/configuracion",
            submenu: [
                {
                    icon: GrProjects,
                    text: "Inicio",
                    link: "/"
                },
                {
                    icon: GrProjects,
                    text: "Inicio",
                    link: "/"
                },
            ]
        },
    ]
    const [openSidebar, setOpenSidebar] = useState(true);

    return (
        <div className={`${!openSidebar ? `w-[100px]` : `w-[230px]`} relative transition-all bg-gradient-to-b from-bgp p-2 flex flex-col justify-start items-center gap-5`}>
            <div className="absolute -right-15 top-5">
                <Button onClick={() => setOpenSidebar(!openSidebar)} className="relative z-50 text-xs text-zinc-500 flex  items-center justify-start  gap-2">
                    {
                        !openSidebar ? <GrFormNext size={20} className="text-secondary" /> : <GrFormNext size={20} className="text-primary rotate-180" />
                    }
                </Button>
            </div>
            <div className="flex flex-col justify-center items-center">
                <h5 className="text-danger font-bold">WI<span className="text-white/60 font-normal">SENSOR</span></h5>
                <small className="text-xs font-light">S<span className="text-secondary">Track</span></small>
            </div>
            <h6 className="text-zinc-600 text-center font-bold">
                Sistema Sincronizado
            </h6>
            <nav className="w-full">
                <ul className="flex flex-col gap-5 w-full justify-center items-start px-3">
                    {
                        menu.map((item, i) => (
                            <li key={i} className="relative w-full">
                                {
                                    item.status && item.link === location
                                        ?
                                        <Button
                                            onClick={() => navigate(item.link)}
                                            rounded="sm"
                                            className={`text-xs px-4 py-3 font-bold bg-gradient-to-bl from-danger/80 border-t border-danger/90 shadow shadow-bgp w-full text-zinc-200 flex  items-center ${openSidebar ? `justify-start` : `justify-center`}  gap-2`}>
                                            <item.icon size={15} />
                                            {
                                                openSidebar && item.text
                                            }
                                        </Button>
                                        :
                                        item.status === false
                                            ?
                                            item.text === "Inteligencia Artificial"
                                                ?
                                                <div className="relative w-full p-[0.9px] bg-gradient-to-l from-red-400 to-primary rounded-lg">
                                                    <div className="absolute -right-5 -top-2  bg-gradient-to-bl from-danger/90 to-orange-500/80 border-t border-danger px-2 rounded  flex justify-center items-center ">
                                                        <small className="text-[10px] font-bold text-white">Nuevo</small>
                                                    </div>
                                                    <div className="bg-bgp rounded-lg">
                                                        <Button
                                                            onClick={() => {}}
                                                            rounded="sm"
                                                            className={`text-xs font-bold text-nowrap  py-3 bg-gradient-to-l from-danger to-primary w-full text-transparent bg-clip-text flex  items-center ${openSidebar ? `justify-start` : `justify-center`}  gap-2`}>
                                                            <item.icon size={15} className="text-primary" />
                                                            {
                                                                openSidebar && item.text
                                                            }
                                                        </Button>
                                                    </div>
                                                </div>
                                                :
                                                <Button
                                                    onClick={() => { }}
                                                    rounded="sm"
                                                    className={`text-xs px-4 py-1 font-bold  text-zinc-600 flex  items-center ${openSidebar ? `justify-start` : `justify-center`}  gap-2`}>
                                                    <item.icon size={15} />
                                                    {
                                                        openSidebar && item.text
                                                    }
                                                </Button>
                                            :
                                            <Button
                                                onClick={() => navigate(item.link)}
                                                className={`text-xs px-4 border-t border-transparent text-zinc-400 w-full font-semibold flex  items-center ${openSidebar ? `justify-start` : `justify-center`}  gap-2`}>
                                                <item.icon size={15} />
                                                {
                                                    openSidebar && item.text
                                                }
                                            </Button>
                                }

                            </li>
                        ))
                    }

                </ul>
            </nav>
        </div >
    )
}

export default Sidebar