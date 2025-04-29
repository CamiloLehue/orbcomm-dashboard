import { GrDeliver, GrGateway, GrNavigate, GrProjects } from "react-icons/gr"
import Button from "../components/ui/Button"
import { useNavigate } from "react-router"

function Sidebar() {

    const navigate = useNavigate();
    return (
        <div className=" w-[100px] bg-gradient-to-b from-zinc-900 border-t border-zinc-800 rounded-2xl py-5 flex flex-col justify-start items-center gap-5">
            <h6 className="text-zinc-600 text-center font-bold">
                Menu
            </h6>
            <nav>
                <ul className="flex flex-col gap-5 w-full justify-center items-center ">
                    <li>
                        <Button onClick={() => navigate("/")} className="text-xs text-zinc-500 flex flex-col items-center justify-center  gap-2">
                            <GrProjects size={20} />
                            Inicio
                        </Button>
                    </li>
                    <li>
                        <Button onClick={() => navigate("/viajes")} className="text-xs text-zinc-500 flex flex-col items-center justify-center  gap-2">
                            <GrDeliver size={20} />
                            Viajes
                        </Button>
                    </li>
                    <li>
                        <Button onClick={() => navigate("/monitoreo")} className="text-xs text-zinc-500 flex flex-col items-center justify-center  gap-2">
                            <GrGateway size={20} />
                            Monitoreo
                        </Button>
                    </li>
                    <li>
                        <Button onClick={() => navigate("/viajes")} className="text-xs text-zinc-500 flex flex-col items-center justify-center  gap-2">
                            <GrNavigate size={20} />
                            Tramos
                        </Button>
                    </li>

                </ul>
            </nav>
        </div>
    )
}

export default Sidebar