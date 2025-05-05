import { GrAdd, GrAppsRounded, GrCircleQuestion, GrFormDown, GrSearch, GrSettingsOption } from "react-icons/gr"
import Button from "../components/ui/Button"
import { useNavigate } from "react-router";

function Header() {
    const navigate = useNavigate();
    return (
        <header className="sticky top-0 z-50 flex items-center justify-between w-full mx-auto  h-16  px-4">
            <div className="flex justify-center items-center gap-2 px-5 ms-13 min-w-[360px] bg-gray/20 border border-gray/20 rounded-full">
                <GrSearch />
                <input className="py-2.5 pe-2 focus:outline-none rounded-full w-full text-sm" type="text" placeholder="Ingresar número del envio o vehículo" />
            </div>
            <div className="flex justify-center items-center gap-10 bg-gray/20 border border-gray/20 rounded-full   px-1">
                <Button onClick={() => { navigate("/viajes/crear") }} rounded="full" className="group flex justify-center items-center gap-2 bg-gray/30 hover:bg-transparent px-4 pe-5">
                    <GrAdd />
                    <p className="text-xs">Nuevo viaje</p>
                </Button>
                <Button rounded="full">
                    <GrCircleQuestion />
                </Button>
                <Button rounded="full">
                    <GrAppsRounded />
                </Button>
                <Button rounded="full">
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