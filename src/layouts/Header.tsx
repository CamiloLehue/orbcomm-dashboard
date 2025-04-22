import { GrAdd, GrAppsRounded, GrCircleQuestion, GrFormDown, GrSearch, GrSettingsOption } from "react-icons/gr"
import Button from "../components/ui/Button"

function Header() {
    return (
        <header className="sticky top-0 z-50 flex items-center justify-between w-full mx-auto rounded-full h-16  px-4 text-[#aab0b3]">
            <div>
                <h1 className="text-xs font-bold">IOTLink</h1>
            </div>
            <div className="flex justify-center items-center gap-2 border border-zinc-700/50 rounded-full px-2 min-w-[360px]">
                <GrSearch />
                <input className="py-2.5 pe-2 focus:outline-none rounded-full w-full text-sm" type="text" placeholder="Enter Asset or Device ID" />
            </div>
            <div className="flex justify-center items-center gap-10 border border-zinc-700/50 rounded-full px-10">
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
                    <img src="https://cdn.discordapp.com/attachments/1028607888290064333/1036221073798641152/image0.png" alt="user" className="w-6 h-6" />
                    AST - Profile
                    <GrFormDown color="#dfdfdb" />
                </Button>
            </div>
        </header>
    )
}

export default Header