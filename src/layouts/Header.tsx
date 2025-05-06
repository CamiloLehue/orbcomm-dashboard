import { GrAdd, GrCircleQuestion, GrFormDown, GrNotification, GrSearch, GrSettingsOption } from "react-icons/gr"
import Button from "../components/ui/Button"
import { useNavigate } from "react-router";
import { useState } from "react";

function Header() {
    const navigate = useNavigate();
    const [openNotification, setOpenNotification] = useState<boolean>(false);
    return (
        <header className="sticky top-0 z-50 flex items-center justify-between w-full mx-auto  pb-3 mb-3  px-4">
            <div className="flex justify-center items-center gap-2 px-5 ms-13 min-w-[360px] bg-gray/20 border border-gray/20 rounded-full">
                <GrSearch />
                <input className="py-2.5 pe-2 focus:outline-none rounded-full w-full text-sm" type="text" placeholder="Ingresar número del envio o vehículo" />
            </div>
            <div className="flex justify-center items-center gap-10 bg-gray/20 border border-gray/20 rounded-full px-1">
                <Button onClick={() => { navigate("/viajes/crear") }} rounded="full" className="group flex justify-center items-center gap-2 bg-gray/30 hover:bg-transparent px-4 pe-5">
                    <GrAdd />
                    <p className="text-xs">Nuevo viaje</p>
                </Button>
                <Button rounded="full">
                    <GrCircleQuestion />
                </Button>
                <Button onClick={() => { setOpenNotification(!openNotification) }} rounded="full" className="relative flex justify-center items-center gap-2  bg-gray/20  hover:text-white transition-all duration-200 rounded-full px-3">
                    <GrNotification className="text-warning" />
                    <small className="text-xs font-bold">2</small>
                    {
                        openNotification && (
                            <div className="absolute bottom-0 top-9 w-70 min-h-110 bg-gray/20 border-b border-gray/40 shadow-lg shadow-bgb backdrop-blur-xl rounded-b-xl p-5 ">
                                <h5 className="font-bold py-2">Notificaciones</h5>
                                <div className="min-h-15 w-full flex flex-col gap-1 bg-danger/10 border border-danger/50 hover:bg-bgp transition-all duration-200 rounded-xl p-2 mt-2 shadow-lg">
                                    <h5 className="text-danger">Línea desconectada</h5>
                                    <p className="text-xs ">Se ha descontectado la señal de la línea de transporte.</p>
                                </div>
                                <div className="min-h-15 w-full flex flex-col gap-1 bg-gray/40 border border-gray/50 hover:bg-bgp transition-all duration-200 rounded-xl p-2 mt-2 shadow-lg">
                                    <h5 className="text-warning">Desvío en la ruta 5-Sur</h5>
                                    <p className="text-xs ">El sistema a detectado un desvío en la ruta de la carretera. Se recomienda que se tome la decisión de continuar con la ruta.</p>
                                </div>
                                <div className="min-h-15 w-full flex flex-col gap-1 bg-gray/40 border border-gray/50 hover:bg-bgp transition-all duration-200 rounded-xl p-2 mt-2 shadow-lg">
                                    <h5 className="text-warning">Desvío en la ruta 5-Sur</h5>
                                    <p className="text-xs ">El sistema a detectado un desvío en la ruta de la carretera. Se recomienda que se tome la decisión de continuar con la ruta.</p>
                                </div>
                                <small className="text-gray text-xs">10 notificaciones más</small>
                                <div className=" flex justify-center">
                                    <Button className="text-secondary text-xs text-center">Ver más</Button>
                                </div>
                            </div>
                        )
                    }
                </Button>
                <Button
                    onClick={() => { navigate("/configuracion") }}
                    rounded="full">
                    <GrSettingsOption />
                </Button>
                <Button>
                    <img src="https://picsum.photos/seed/picsum/200/301" alt="user" className="w-6 h-6 rounded me-1" />
                    AST - Profile
                    <GrFormDown color="#dfdfdb" />
                </Button>
            </div>
        </header>
    )
}

export default Header