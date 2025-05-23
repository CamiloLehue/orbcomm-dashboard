import {
    GrGateway,
    GrFormNext,
    GrApps,
    GrPerformance,
    GrFormNextLink,
    GrDiamond,
    GrDirections,
    GrLocationPin,
    GrSatellite,
    GrBeacon,
    GrExpand,
    GrContract
} from "react-icons/gr"
import Button from "../components/ui/Button"
import { useNavigate, useLocation } from "react-router"
import { useState, useEffect } from "react"

function Sidebar() {
    const navigate = useNavigate()
    const location = useLocation()
    const [openSidebar, setOpenSidebar] = useState(true)
    const [activeSubmenuIndex, setActiveSubmenuIndex] = useState<number | null>(null)

    const handleMenuClick = (index: number, hasSubmenu: boolean, link: string) => {
        if (hasSubmenu) {
            setActiveSubmenuIndex(index)
        } else {
            navigate(link)
        }
    }

    const handleBackToMainMenu = () => {
        setActiveSubmenuIndex(null)
    }

    const menu = [
        { icon: GrFormNextLink, text: "Biomasa", link: "/info/2", status: false },
        { icon: GrFormNextLink, text: "Clima", link: "/info/3", status: false },
        { icon: GrFormNextLink, text: "Seguridad", link: "/info/4", status: false },
        { icon: GrFormNextLink, text: "Sensores-IoT", link: "/info/5", status: false },
        { icon: GrFormNextLink, text: "Energía", link: "/info/6", status: false },
        { icon: GrFormNextLink, text: "Estado de red", link: "/info/7", status: false },
        { icon: GrFormNextLink, text: "Alertas", link: "/info/8", status: false },
        { icon: GrFormNextLink, text: "Sub Drone", link: "/info/9", status: false },
        { icon: GrFormNextLink, text: "Jaula Smart", link: "/info/10", status: false },
        { icon: GrFormNextLink, text: "Ferrocarriles", link: "/info/11", status: false },
        { icon: GrDiamond, text: "Inteligencia Artificial", link: "/info/1", status: false },
        {
            icon: GrGateway,
            text: "Strack",
            link: "/",
            status: true,
            submenu: [
                { icon: GrApps, text: "Explorar", link: "/dashboard", status: true },
                { icon: GrBeacon, text: "Live Yadran", link: "/livedemo", status: true },
                { icon: GrSatellite, text: "Seguimientos", link: "/seguimientos", status: true },
                { icon: GrLocationPin, text: "Viajes", link: "/viajes", status: true },
                { icon: GrDirections, text: "Recorridos", link: "/recorridos", status: true },
                {
                    icon: GrPerformance,
                    text: "Configuración",
                    link: "/configuracion",
                    status: true
                    // submenu: [
                    //     { icon: GrProjects, text: "Perfil", link: "/perfil" },
                    //     { icon: GrProjects, text: "Cerrar Sesión", link: "/" }
                    // ]
                },
                {
                    icon: GrDiamond,
                    text: "Inteligencia Artificial",
                    link: "/info/12",
                    status: true
                    // submenu: [
                    //     { icon: GrProjects, text: "Perfil", link: "/perfil" },
                    //     { icon: GrProjects, text: "Cerrar Sesión", link: "/" }
                    // ]
                },
            ]
        },

    ]

    // Marcar automáticamente el menú padre activo si la ruta actual es parte de un submenu
    useEffect(() => {
        const index = menu.findIndex(item =>
            item.submenu?.some(sub => sub.link === location.pathname)
        )
        if (index !== -1) {
            setActiveSubmenuIndex(index)
        }
    }, [location.pathname])

    // Función para saber si un item o subitem está activo
    const isItemOrSubItemActive = (item: {
        link: string;
        submenu?: Array<{ link: string }>;
    }): boolean => {
        if (item.link === location.pathname) return true
        if (item.submenu) {
            return item.submenu.some((sub: { link: string }) => sub.link === location.pathname)
        }
        return false
    }

    return (
        <div className={`${!openSidebar ? `w-[100px]` : `w-[270px]`} relative text-white transition-all bg-gradient-to-b from-bgp p-2 flex flex-col justify-start items-center gap-5`}>
            <div className="absolute -right-13 top-3">
                <Button
                    onClick={() => setOpenSidebar(!openSidebar)}
                    className="relative z-50 text-xs text-zinc-500 flex items-center justify-start gap-2">
                    {!openSidebar ? <GrContract size={18} className="text-secondary" /> : <GrExpand size={18} className="text-primary rotate-180" />}
                </Button>
            </div>

            <div className="flex flex-col justify-center items-center">
                <div className="flex justify-center">
                    <img onClick={() => { navigate('/dashboard') }} src="/logo_wi.png" alt="logo wisensor" className="w-1/2 cursor-pointer" />
                </div>
                <h5 className="text-blue-500">STRACK</h5>
            </div>

            <h6 className="text-zinc-600 text-center ">Sistema Sincronizado</h6>

            <nav className="w-full z-[999]">
                <ul className="flex flex-col gap-2 w-full justify-center items-start px-3">
                    {
                        activeSubmenuIndex === null
                            ? menu.map((item, i) => (
                                item.text !== "Inteligencia Artificial" && item.text !== "Strack"
                                    ? <li key={i} className="relative w-full">
                                        <Button
                                            onClick={() => handleMenuClick(i, !!item.submenu, item.link)}
                                            rounded="lg"
                                            className={`text-xs px-4 py-2  w-full flex items-center 
                                            ${openSidebar ? `justify-start` : `justify-center`} gap-2
                                            ${isItemOrSubItemActive(item) ? 'bg-danger/20 border border-danger/50  text-white' : 'text-zinc-400 border border-transparent'}`}
                                        >
                                            <div className="flex items-center gap-2">
                                                <item.icon size={15} />
                                                {openSidebar && <p className="text-nowrap">{item.text}</p>}
                                            </div>
                                            {item.submenu && openSidebar && (
                                                <GrFormNext size={12} />
                                            )}
                                        </Button>
                                    </li>
                                    : <li key={i} className={`relative w-full ${item.text === "Strack" ? "group bg-gradient-to-br from-secondary/40 hover:scale-101  rounded-2xl transition-all duration-300 " : "bg-orange-600/10"} `}>
                                        <div className="text-[14px] group-hover:-translate-x-2 transition-all duration-300 absolute -right-6 top-3 px-2  flex justify-center items-center backdrop-blur-2xl rounded-full">
                                            <small className="  bg-clip-text text-clip text-transparent bg-gradient-to-bl from-red-600 to-yellow-400">Nuevo</small>
                                        </div>
                                        <Button
                                            onClick={() => handleMenuClick(i, !!item.submenu, item.link)}
                                            rounded="2xl"
                                            className={`text-xs px-4 py-2  w-full flex items-center 
                                            ${openSidebar ? `justify-start` : `justify-center`} gap-2
                                            ${isItemOrSubItemActive(item)
                                                    ? 'bg-gradient-to-bl to-secondary/40 text-white'
                                                    : `bg-clip-text text-clip text-transparent 
                                                        ${item.text === "Strack"
                                                        ? "bg-gradient-to-bl from-secondary to-sky-300"
                                                        : "bg-gradient-to-r from-danger to-orange-500"
                                                    } 
                                            `}`}>
                                            <div className="flex items-center gap-2">
                                                <item.icon size={15} className={`${item.text === "Strack" ? "text-sky-500" : "text-orange-500"}`} />
                                                {openSidebar && <p className="text-nowrap">{item.text}</p>}
                                            </div>
                                            {item.submenu && openSidebar && (
                                                <GrFormNext size={12} className="text-white" />
                                            )}
                                        </Button>
                                    </li>
                            ))
                            : (
                                <li className="w-full">
                                    <Button
                                        onClick={handleBackToMainMenu}
                                        rounded="full"
                                        className={`text-xs  gap-2 
                                        ${!openSidebar ? "flex justify-center items-center" : "flex justify-start items-center"}
                                         py-2 mb-2 w-full font-semibold text-left text-white/80 bg-bgt hover:text-white `}>
                                        <GrFormNext className={`rotate-180 ${!openSidebar && ""}`} size={14} />
                                        {openSidebar && <p>Volver</p>}
                                    </Button>
                                    {
                                        menu[activeSubmenuIndex]?.submenu?.map((subItem, j) => (
                                            location.pathname === subItem.link
                                                ?
                                                <Button
                                                    key={j}
                                                    onClick={() => navigate(subItem.link)}
                                                    className={`text-xs py-3 pl-6 pr-4 w-full flex items-center justify-start gap-2
                                                    ${location.pathname === subItem.link ? 'text-secondary ' : 'text-zinc-400 hover:text-white'}`}>
                                                    <subItem.icon size={13} />
                                                    {openSidebar && subItem.text}
                                                </Button>
                                                :
                                                subItem.text !== "Inteligencia Artificial" ?
                                                    <Button
                                                        key={j}
                                                        onClick={() => navigate(subItem.link)}
                                                        rounded="2xl"
                                                        className={`text-xs py-3 pl-6 pr-4 w-full flex items-center justify-start gap-2
                                                    ${location.pathname === subItem.link ? 'text-secondary   bg-gradient-to-bl from-secondary/50' : 'text-zinc-400 hover:text-white'}`}>
                                                        <subItem.icon size={13} />
                                                        {openSidebar && subItem.text}
                                                    </Button>
                                                    :
                                                    <div key={j} className="bg-gradient-to-r from-orange-600/20 rounded">
                                                        <Button
                                                            key={j}
                                                            onClick={() => navigate(subItem.link)}
                                                            rounded="2xl"
                                                            className={`text-xs relative  py-3 pl-6 pr-4 w-full flex items-center justify-start gap-2
                                                        bg-clip-text text-clip text-transparent bg-gradient-to-r from-danger to-orange-300`}>
                                                            <subItem.icon size={13} className="text-primary" />
                                                            <div className="text-[14px] group-hover:-translate-x-2 transition-all duration-300 absolute -right-7 top-3 px-2  flex justify-center items-center backdrop-blur-2xl rounded-full">
                                                                <small className="  bg-clip-text text-clip text-transparent bg-gradient-to-bl from-red-600 to-yellow-400">Nuevo</small>
                                                            </div>
                                                            {openSidebar && subItem.text}
                                                        </Button>
                                                    </div>
                                        ))
                                    }
                                </li>
                            )
                    }
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar