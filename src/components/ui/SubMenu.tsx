import { GrAppsRounded, GrReturn } from "react-icons/gr";
import Button from "./Button";
import { useNavigate } from "react-router";

type SubMenuProps = {
    title: string;
    subtitle?: string;
}

function SubMenu({ title, subtitle = "" }: SubMenuProps) {
    const navigate = useNavigate();
    return (
        <div className="relative left-[50%] -translate-x-1/2 z-[2000] 
                bg-linear-90 from-bgt via-bgt/50 to-bgt backdrop-blur 
                h-10 w-full flex flex-col justify-center items-center shadow-xl shadow-bgp/50">
            <div className="absolute left-0 top-1 ">
                <div className="w-2 h-full bg-bgt flex ">
                    <Button
                        onClick={() => { navigate(-1) }}
                        rounded="full" className=" flex justify-center items-center gap-1 mx-2 hover:bg-bgt">
                        <GrReturn className="text-primary" /> <small className="text-xs">Regresar</small>

                    </Button>
                    <Button
                        onClick={() => { navigate("/dashboard") }}
                        rounded="full" className=" flex justify-center items-center gap-1 mx-2 hover:bg-bgt text-nowrap">
                        <GrAppsRounded className="text-primary" /> <small className="text-xs">Inicio Rápido</small>
                    </Button>
                </div>
            </div>
            <h5 className="text-white uppercase">{title}</h5>
            <small className="hidden">{subtitle}</small>
        </div>
    )
}

export default SubMenu