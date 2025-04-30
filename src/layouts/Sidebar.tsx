import { GrDeliver, GrGateway, GrNavigate, GrProjects, GrFormNext } from "react-icons/gr"
import Button from "../components/ui/Button"
import { useNavigate } from "react-router"
import { useState } from "react";

function Sidebar() {
    const navigate = useNavigate();
    // const location = window.location.pathname;
    const menu = [
        {
            icon: GrProjects,
            text: "Inicio",
            link: "/",
        },
        {
            icon: GrDeliver,
            text: "Viajes",
            link: "/viajes",
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
            icon: GrGateway,
            text: "Monitoreo",
            link: "/monitoreo",
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
            icon: GrNavigate,
            text: "Tramos",
            link: "/tramos",
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
    const [openSidebar, setOpenSidebar] = useState(false);


    return (
        <div className={`${!openSidebar ? `w-[100px]` : `w-[200px]`} relative transition-all duration-200 bg-gradient-to-b from-secondary/10 border-t border-secondary/20 rounded-2xl py-5 flex flex-col justify-start items-center gap-5`}>
            <div className="absolute -right-15 top-8.5">
                <Button onClick={() => setOpenSidebar(!openSidebar)} className="relative z-50 text-xs text-zinc-500 flex  items-center justify-start  gap-2">
                    {
                        !openSidebar ? <GrFormNext size={20} className="text-secondary" /> : <GrFormNext size={20} className="text-primary rotate-180" />
                    }
                </Button>

            </div>
            <h6 className="text-zinc-600 text-center font-bold">
                Menu
            </h6>
            <nav>
                <ul className="flex flex-col gap-5 w-full justify-center items-start">
                    {
                        menu.map((item, i) => (
                            <li key={i} className="relative w-full">
                                <Button onClick={() => navigate(item.link)} className="text-xs text-zinc-500 flex  items-center justify-start  gap-2">
                                    <item.icon size={20} />
                                    {
                                        openSidebar && item.text
                                    }
                                </Button>
                                {/* {
                                    item.submenu && item.link === location && (
                                        <div key={i} className="absolute top-0 hover:bg-primary -right-60 z-10 bg-gray w-50 rounded-sm p-5">
                                            1
                                        </div>
                                    )
                                } */}
                            </li>
                        ))
                    }

                </ul>
                {/* <ul className="flex flex-col gap-5 w-full justify-center items-start">
                    <li>
                        <Button onClick={() => navigate("/")} className="text-xs text-white flex  items-center justify-start  gap-2">
                            <GrProjects size={20} />
                            {
                                openSidebar && "Inicio"
                            }
                        </Button>
                    </li>
                    <li>
                        <Button onClick={() => navigate("/viajes")} className="text-xs text-zinc-500 flex  items-center justify-start  gap-2">
                            <GrDeliver size={20} />
                            {
                                openSidebar && "Viajes"
                            }
                        </Button>
                    </li>
                    <li>
                        <Button onClick={() => navigate("/monitoreo")} className="text-xs text-zinc-500 flex  items-center justify-start  gap-2">
                            <GrGateway size={20} />
                            {
                                openSidebar && "Monitoreo"
                            }
                        </Button>
                    </li>
                    <li>
                        <Button onClick={() => navigate("/viajes")} className="text-xs text-zinc-500 flex  items-center justify-start  gap-2">
                            <GrNavigate size={20} />
                            {
                                openSidebar && "Tramos"
                            }
                        </Button>
                    </li>

                </ul> */}
            </nav>
        </div>
    )
}

export default Sidebar