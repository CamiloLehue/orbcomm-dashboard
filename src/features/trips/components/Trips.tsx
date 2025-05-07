import { useNavigate } from "react-router";
import Button from "../../../components/ui/Button";
import { GrDirections, GrFormNextLink } from "react-icons/gr";
import BgBlur from "../../../components/ui/BgBlur";
import CardType from "../../../components/ui/CardType";

function Trips() {

    const navigate = useNavigate();
    return (
        <div className="relative h-full w-full flex flex-col gap-5 justify-start items-start p-5  ">
            <BgBlur />
            <h1 className="text-white">Seguimientos</h1>
            <div className="relative flex flex-col justify-start items-start gap-5 w-full h-full ">
                <div className="grid grid-cols-2 w-full h-full">
                    <div className="col-span-2 grid grid-cols-2">
                        <nav>
                            <ul className="flex gap-2 ">
                                <li
                                    className="group overflow-hidden cursor-pointer relative  rounded-lg h-10 bg-bgt/90 hover:bg-transparent hover:border-transparent border border-gray/50  px-5 py-2 flex justify-center items-center gap-5 transition-all duration-200"
                                >
                                    Todos
                                </li>
                                <li
                                    className="group overflow-hidden cursor-pointer relative  rounded-lg h-10 bg-bgt/90 hover:bg-transparent hover:border-transparent border border-bgt  px-5 py-2 flex justify-center items-center gap-5 text-gray hover:text-white transition-all duration-200"
                                >
                                    Activos
                                </li>
                                <li
                                    className="group overflow-hidden cursor-pointer relative  rounded-lg h-10 bg-bgt/90 hover:bg-transparent hover:border-transparent border border-bgt  px-5 py-2 flex justify-center items-center gap-5 text-gray hover:text-white transition-all duration-200"
                                >
                                    Inactivos
                                </li>

                            </ul>
                        </nav>
                    </div>
                    <CardType title="Lista de viajes" subtitle="En progreso" >
                        <ul className="flex flex-col gap-1 w-full">
                            {
                                Array(6).fill(0).map((_, i) => (
                                    <li
                                        onClick={() => { navigate("/viajes/ver/" + i) }}
                                        key={i}
                                        className="group overflow-hidden cursor-pointer relative w-full rounded-lg h-20 bg-gray/5 hover:bg-transparent hover:border-transparent border border-gray/15  px-5 py-2 flex justify-start items-center gap-5"
                                    >
                                        <div className="absolute -right-10 top-0 w-70 h-20 blur-3xl bg-gray/10 group-hover:bg-transparent rounded-full">
                                        </div>
                                        <div className="flex justify-start  items-center gap-5">
                                            <img src="dashboard/truck.png" alt="mapa" className="w-[10%] " />
                                            <h5 className="text-primary">E-2005000{i}</h5>
                                            <div className="flex justify-center items-center gap-2 border border-sky rounded-full px-4 py-1 text-xs">
                                                <GrDirections className="text-sky" />
                                                Puerto Montt - Chiloé
                                            </div>
                                            <div className="text-gray">
                                                <h5>Salida: <span className="font-bold">{"19:" + 1 + i} horas</span></h5>
                                            </div>
                                            <div className="text-gray">
                                                <h5>Llegada: <span className="font-bold">{"20:" + 1 + i} horas</span></h5>
                                            </div>

                                        </div>
                                        <div className="flex absolute right-5 top-6">
                                            <Button>
                                                <GrFormNextLink size={20} className=" group-hover:text-secondary group-hover:translate-x-1 transition-all duration-500" />
                                            </Button>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </CardType>
                    <CardType title="Resumen" subtitle="Esta semana">
                        <div className="grid grid-cols-2 gap-5 w-full bg-bgp">
                            <div className="bg-gray/20 border border-gray/20 rounded min-h-[240px] flex flex-col justify-start items-start gap-2 px-5 py-5">
                                <h4 className="font-light text-primary">Esta semana</h4>
                                <div className="grid grid-cols-2 gap-5 w-full mt-5">
                                    <div className="flex flex-col justify-center items-center gap-2 w-full">
                                        <h5 className="text-gray">Recorridos</h5>
                                        <p className="font-bold text-2xl">10</p>
                                    </div>
                                    <div className="flex flex-col justify-center items-center gap-2 w-full">
                                        <h5 className="text-gray">Clientes</h5>
                                        <p className="font-bold text-2xl">14</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray/10 border border-gray/10 rounded min-h-[240px] flex flex-col justify-start items-start gap-2 px-5 py-5">
                                <h4 className="font-light text-primary">Esta mes</h4>
                                <div className="grid grid-cols-2 gap-5 w-full mt-5">
                                    <div className="flex flex-col justify-center items-center gap-2 w-full">
                                        <h5 className="text-gray">Recorridos</h5>
                                        <p className="font-bold text-2xl">321</p>
                                    </div>
                                    <div className="flex flex-col justify-center items-center gap-2 w-full">
                                        <h5 className="text-gray">Clientes</h5>
                                        <p className="font-bold text-2xl">53</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray/10 border border-gray/10 rounded min-h-[240px] flex flex-col justify-start items-start gap-2 px-5 py-5">
                                <h4 className="font-light text-warning">Recorridos detenidos</h4>
                                <div className="grid grid-cols-2 gap-5 w-full mt-5">
                                    <div className="flex flex-col justify-center items-center gap-2 w-full">
                                        <h5 className="text-gray">Vehiculo</h5>
                                        <p className="font-bold text-2xl">1</p>
                                    </div>
                                    <div className="flex flex-col justify-center items-center gap-2 w-full">
                                        <h5 className="text-gray">Conductor</h5>
                                        <p className="font-bold text-2xl">1</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray/10 border border-gray/10 rounded min-h-[240px] flex flex-col justify-start items-start gap-2 px-5 py-5">
                                <h4 className="font-light text-danger">Recorridos cancelados / mes</h4>
                                <div className="grid grid-cols-2 gap-5 w-full mt-5">
                                    <div className="flex flex-col justify-center items-center gap-2 w-full">
                                        <h5 className="text-gray">Vehiculo</h5>
                                        <p className="font-bold text-2xl">2</p>
                                    </div>
                                    <div className="flex flex-col justify-center items-center gap-2 w-full">
                                        <h5 className="text-gray">Conductor</h5>
                                        <p className="font-bold text-2xl">1</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardType>
                </div>
            </div>
        </div>
    );
}

export default Trips;