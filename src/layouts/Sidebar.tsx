import { GrDeliver, GrDown, GrMap } from "react-icons/gr"
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
                <ul className="flex flex-col gap-2 ">
                    <li>
                        <Button onClick={() => navigate("/")} className="text-xs text-zinc-500 flex flex-col items-center gap-1">
                            <GrDeliver size={20} />
                        </Button>
                    </li>
                    <li>
                        <Button onClick={() => navigate("/viajes")} className="text-xs text-zinc-500 flex flex-col items-center gap-1">
                            <GrMap size={20} />
                        </Button>
                    </li>
                    <li>
                        <Button className="text-xs text-zinc-500 flex flex-col items-center gap-1">
                            <GrDown size={20} />
                        </Button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar