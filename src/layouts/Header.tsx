import { GrAdd, GrAppsRounded, GrCircleQuestion, GrFormDown, GrSearch, GrSettingsOption } from "react-icons/gr"
import Button from "../components/ui/Button"

function Header() {
    return (
        <header className="sticky top-0 z-50 flex items-center justify-between w-full mx-auto rounded-full h-16  px-4 text-[#cccce0]">
            <div>
                <h1 className="text-xs font-bold">EdgeSAT <span className="font-light">Pro</span></h1>
            </div>
            <div className="flex justify-center items-center gap-2 border border-secondary/40 rounded-full px-5 min-w-[360px]">
                <GrSearch />
                <input className="py-2.5 pe-2 focus:outline-none rounded-full w-full text-sm" type="text" placeholder="Ingresar número del envio" />
            </div>
            <div className="flex justify-center items-center gap-10 border border-secondary/40 rounded-full px-10">
                <Button rounded="full">
                    <GrCircleQuestion />
                </Button>
                <Button rounded="full">
                    <GrAdd />
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