import { GrAdd, GrBeacon, GrChat, GrCircleQuestion, GrContactInfo, GrDeliver, GrDirections, GrFormDown, GrLocationPin, GrLogout, GrMap, GrMapLocation, GrNotification, GrOrganization, GrPhone, GrSearch, GrSecure, GrSend, GrServices, GrSettingsOption, GrUnlock, GrUser, GrVmMaintenance, GrVolume } from "react-icons/gr"
import Button from "../components/ui/Button"
import { useNavigate } from "react-router";
import { useState } from "react";
import Dropdown from "../components/ui/Dropdown";

function Header() {
    const navigate = useNavigate();
    return (
        <header className="sticky top-0 z-[9999] py-4 flex items-center justify-between w-full mx-auto px-4 bg-bg">
            <div className="flex justify-center items-center gap-2 px-5 ms-13 min-w-[360px] bg-gray/20 border border-gray/20 rounded-full">
                <GrSearch />
                <input className="py-2.5 pe-2 focus:outline-none rounded-full w-full text-sm" type="text" placeholder="Ingresar número del envio o vehículo" />
            </div>
            <div className="flex justify-center items-center gap-5 border border-gray/20 rounded-full p-1 px-5">
                <Button
                    rounded="full"
                    className="group flex justify-center items-center gap-2 bg-gray/0 hover:bg-transparent ">
                    <GrVolume className="text-success" />
                </Button>
                <Button
                    rounded="full"
                    className="group flex justify-center items-center gap-2 bg-gray/0 hover:bg-transparent ">
                    <GrUnlock className="text-success " />
                </Button>
                <Button
                    rounded="full"
                    className="group flex justify-center items-center gap-2 bg-gray/0 hover:bg-transparent ">
                    <GrBeacon className="text-success animate-pulse" />
                </Button>
            </div>
            <div className="flex justify-center items-center gap-10 bg-bgt border border-gray/20 rounded-s-full px-1">
                <Button onClick={() => { navigate("/viajes/crear") }} rounded="full" className="group flex justify-center items-center gap-2 bg-gray/30 hover:bg-transparent px-4 pe-5">
                    <GrAdd />
                    <p className="text-xs">Nuevo viaje</p>
                </Button>
                <Button rounded="full">
                    <GrCircleQuestion />
                </Button>
                <ButtonNotificaciones />
                <ButtonConfiguraciones />
                <ButtonPerfil />
            </div>
        </header>
    )
}

const ButtonNotificaciones = () => {
    const [openNotification, setOpenNotification] = useState<boolean>(false);
    return <>
        <Button onClick={() => { setOpenNotification(!openNotification); }} rounded="full"
            className={`relative flex justify-center items-center gap-2  bg-gray/20  hover:text-white transition-all duration-200 rounded-full px-3 ${openNotification ? "bg-gray/20" : "bg-transparent"}`}>
            <GrNotification className="text-warning" />
            <small className="text-xs font-bold">2</small>
            {
                openNotification && (
                    <Dropdown onClickVoid={openNotification} setClickVoid={setOpenNotification}>
                        <div className="bg-bgt p-5 w-100 shadow-lg shadow-bgb  rounded-xl">
                            <h5 className="font-bold py-2">Notificaciones</h5>
                            <div className="min-h-15 w-full flex flex-col gap-1 bg-danger/10 border border-danger/50 hover:bg-bgp hover:border-transparent transition-all duration-200 rounded-xl p-3 py-5 mt-2 shadow-lg">
                                <h5 className="text-danger">Línea desconectada</h5>
                                <p className="text-xs ">Se ha descontectado la señal de la línea de transporte.</p>
                                <div className="flex mt-3 items-center justify-center gap-2 pb-1 text-xs  rounded-full">
                                    <Button rounded="lg" className=" hover:bg-bgs px-2 gap-2  ">
                                        <GrPhone size={15} />
                                        Llamar cliente
                                    </Button>
                                    <Button rounded="lg" className=" hover:bg-bgs px-2 gap-2  ">
                                        <GrSend size={15} />
                                        Correo
                                    </Button>
                                    <Button rounded="lg" className=" hover:bg-bgs px-2 gap-2  ">
                                        <GrChat size={15} />
                                        Chat
                                    </Button>
                                </div>
                            </div>
                            <div className="min-h-15 w-full flex flex-col gap-1 bg-gray/10 border border-gray/20 hover:bg-bgp transition-all duration-200 rounded-xl p-2 mt-2 shadow-lg">
                                <h5 className="text-warning">Desvío en la ruta 5-Sur</h5>
                                <p className="text-xs ">El sistema a detectado un desvío en la ruta de la carretera. Se recomienda que se tome la decisión de continuar con la ruta.</p>
                            </div>
                            <small className="text-gray text-xs">10 notificaciones más</small>
                            <div className=" flex justify-center">
                                <Button className="text-secondary text-xs text-center">Ver más</Button>
                            </div>
                        </div>
                    </Dropdown>
                )
            }
        </Button>
    </>
}

const ButtonConfiguraciones = () => {
    const [openConfiguration, setOpenConfiguration] = useState<boolean>(false);

    return <>
        <Button
            onClick={() => { setOpenConfiguration(!openConfiguration); }}
            rounded="full"
            className={`${openConfiguration ? "bg-gray/20" : "bg-transparent"} relative`}
        >
            <GrSettingsOption />
            {
                openConfiguration && (
                    <Dropdown onClickVoid={openConfiguration} setClickVoid={setOpenConfiguration}>
                        <div className="bg-bgt w-53 border-b border-gray/40 shadow-lg shadow-bgb backdrop-blur-xl rounded-b-xl">
                            <h5 className="font-bold py-5 text-gray">Configuraciones</h5>
                            <ul className="flex flex-col  border-t border-gray/40  pt-3">
                                <li className="w-full border-t border-t-transparent hover:border-t-gray/20 border-b border-b-transparent hover:border-b-gray/20 flex items-center justify-start gap-3 hover:bg-bgp transition-all duration-200 px-5 p-2 hover:text-gray  ">
                                    <GrOrganization />
                                    <h5 >Empresas</h5>
                                </li>
                                <li className="w-full border-t border-t-transparent hover:border-t-gray/20 border-b border-b-transparent hover:border-b-gray/20 flex items-center justify-start gap-3 hover:bg-bgp transition-all duration-200 px-5 p-2 hover:text-gray  ">
                                    <GrContactInfo />
                                    <h5>Conductores</h5>
                                </li>
                                <li className="w-full border-t border-t-transparent hover:border-t-gray/20 border-b border-b-transparent hover:border-b-gray/20 flex items-center justify-start gap-3 hover:bg-bgp transition-all duration-200 px-5 p-2 hover:text-gray  ">
                                    <GrDeliver />
                                    <h5>Vehículos</h5>
                                </li>
                                <li className="w-full border-t border-t-transparent hover:border-t-gray/20 border-b border-b-transparent hover:border-b-gray/20 flex items-center justify-start gap-3 hover:bg-bgp transition-all duration-200 px-5 p-2 hover:text-gray  ">
                                    <GrMap />

                                    <h5>Geocercas</h5>
                                </li>
                                <li className="w-full border-t border-t-transparent hover:border-t-gray/20 border-b border-b-transparent hover:border-b-gray/20 flex items-center justify-start gap-3 hover:bg-bgp transition-all duration-200 px-5 p-2 hover:text-gray  ">
                                    <GrLocationPin />

                                    <h5>Ubicaciones</h5>
                                </li>
                                <li className="w-full border-t border-t-transparent hover:border-t-gray/20 border-b border-b-transparent hover:border-b-gray/20 flex items-center justify-start gap-3 hover:bg-bgp transition-all duration-200 px-5 p-2 hover:text-gray  ">
                                    <GrDirections />
                                    <h5>Tramos</h5>
                                </li>
                                <li className="w-full border-t border-t-transparent hover:border-t-gray/20 border-b border-b-transparent hover:border-b-gray/20 flex items-center justify-start gap-3 hover:bg-bgp transition-all duration-200 px-5 p-2 hover:text-gray  ">
                                    <GrSecure />
                                    <h5>Roles y permisos</h5>
                                </li>
                                <li className="w-full border-t border-t-transparent hover:border-t-gray/20 border-b border-b-transparent hover:border-b-gray/20 flex items-center justify-start gap-3 hover:bg-bgp transition-all duration-200 px-5 p-2 hover:text-gray  ">
                                    <GrMapLocation />
                                    <h5>Paradas</h5>
                                </li>
                                <li className="w-full border-t border-t-transparent hover:border-t-gray/20 border-b border-b-transparent hover:border-b-gray/20 flex items-center justify-start gap-3 hover:bg-bgp transition-all duration-200 px-5 p-2 hover:text-gray  ">
                                    <GrServices />
                                    <h5>Más configuraciones</h5>
                                </li>
                            </ul>
                        </div>
                    </Dropdown>
                )
            }
        </Button>
    </>
}
const ButtonPerfil = () => {
    const [openProfile, setOpenProfile] = useState<boolean>(false);
    const navigate = useNavigate();

    return <>
        <Button onClick={() => { setOpenProfile(!openProfile); }}
            className={`bg-transparent relative`}>
            <img src="/logo-blanco.svg" draggable={false} alt="user" className="h-6 rounded me-1" />

            <GrFormDown color="#dfdfdb" />
            {
                openProfile && (
                    <Dropdown onClickVoid={openProfile} setClickVoid={setOpenProfile}>
                        <div className="relative bg-bgt border-b border-e border-gray/20 shadow-lg shadow-bgb backdrop-blur-xl rounded-b-xl mt-1 right-[13px] ">
                            <h5 className="font-bold py-3 text-gray">Ajustes Perfil</h5>
                            <ul className="flex flex-col border-t border-gray/20 pt-3">
                                <li className="w-full border-t border-t-transparent hover:border-t-gray/20 border-b border-b-transparent hover:border-b-gray/20 flex items-center justify-start gap-3 hover:bg-bgp transition-all duration-200 px-5 p-2 hover:text-gray  ">
                                    <GrUser />
                                    <h5 >Mi Perfil</h5>
                                </li>
                                <li className="w-full border-t border-t-transparent hover:border-t-gray/20 border-b border-b-transparent hover:border-b-gray/20 flex items-center justify-start gap-3 hover:bg-bgp transition-all duration-200 px-5 p-2 hover:text-gray  ">
                                    <GrVmMaintenance />
                                    <h5>Ajustes de perfil</h5>
                                </li>
                                <li onClick={() => {
                                    localStorage.removeItem("authToken");
                                    navigate("/");
                                }} className="w-full border-t border-t-transparent hover:border-t-gray/20 border-b border-b-transparent hover:border-b-gray/20 flex items-center justify-start gap-3 hover:bg-bgp transition-all duration-200 px-5 p-2 hover:text-gray  ">
                                    <GrLogout />
                                    <h5>Cerrar Sesión</h5>
                                </li>
                            </ul>
                        </div>
                    </Dropdown>
                )
            }
        </Button>
    </>
}




export default Header