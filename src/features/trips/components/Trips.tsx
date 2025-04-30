import { useNavigate } from "react-router";
import Button from "../../../components/ui/Button";
import { GrDirections, GrFormNextLink } from "react-icons/gr";

function Trips() {

    const navigate = useNavigate();
    return (
        <div className="relative h-full w-full flex flex-col gap-5 justify-start items-start  ">
            <div className="absolute top-0 right-0 bg-secondary/10 h-100 w-100 blur-3xl rounded-full"></div>
            <h1 className="text-white">Viajes</h1>
            <div className="relative flex flex-col justify-start items-start gap-5 w-full h-full ">
                <div className="h-15  flex justify-start items-center">
                    <nav>
                        <ul>
                            <li>
                                <Button onClick={() => { navigate("/viajes/crear") }} rounded="sm" className="bg-secondary/5 border border-secondary/50   text-secondary px-10 text-nowrap">
                                    Crear nuevo
                                </Button>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="grid grid-cols-3 gap-5 w-full h-full border border-secondary/10 p-5">
                    <div>
                        <h4>Lista de viajes en progreso</h4>
                        <div className="my-5">
                            <ul className="flex flex-col gap-1 w-full">
                                {
                                    Array(6).fill(0).map((_, i) => (
                                        <li key={i} className="group relative w-full h-20 bg-secondary/5 hover:bg-bgp border-s border-secondary/50  px-5 py-2 flex justify-start items-center gap-5">
                                            <img src="dashboard/truck.png" alt="mapa" className="w-[10%]" />
                                            <h5 className="text-primary">E-20050006</h5>
                                            <div className="flex justify-center items-center gap-2 border border-secondary/50 rounded-full px-4 py-1 text-xs">
                                                <GrDirections className="text-secondary" />
                                                Puerto Montt - Chiloé
                                            </div>
                                            <div className="text-gray">
                                                <h5>Llegada: <span className="text-white">{"20:" + 1 + i} horas</span></h5>
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
                        </div>
                    </div>
                    <div>
                        <h4>Resumen</h4>
                        <div className="my-5 flex flex-col bg-bgp p-5">
                            <h4>Estádisticas</h4>
                            <div className="grid grid-cols-2 gap-5 w-full py-5">
                                <div className="bg-secondary/5 border-t border-secondary/20 rounded min-h-[170px] flex flex-col justify-start items-start gap-2 px-5 py-5">
                                    <h5 className="font-light">Esta semana</h5>
                                    <div className="grid grid-cols-2 gap-5 w-full">
                                        <div className="flex flex-col gap-2 w-full">
                                            <h5>Viajes</h5>
                                            <p>10</p>
                                        </div>
                                        <div className="flex flex-col gap-2 w-full">
                                            <h5>Clientes</h5>
                                            <p>10</p>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className="bg-secondary/5 border-t border-secondary/20 rounded min-h-[170px] flex flex-col justify-start items-start gap-2 px-5 py-5">
                                    <h5 className="font-light">Mensual</h5>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Trips;