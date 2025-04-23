import { GrFormClock, GrFormSearch, GrMoreVertical, GrPowerReset, GrStar } from "react-icons/gr"
import Button from "../../components/ui/Button"

function TopBar() {
    return (
        <div className="w-full  px-5 h-25 flex justify-start items-center gap-5">
            <div className="border-e  border-zinc-100/5 pe-10">
                <h2 className="bg-gradient-to-r from-zinc-400 to-zinc-200 text-clip text-transparent bg-clip-text font-light text-xl">
                    Panel de control de activos
                </h2>
                <div className="flex justify-end items-center">
                    <GrStar color="#ff8800" />
                    <select className="focus:outline-none font-light" name="select_pre" id="">
                        <option selected value="option1">
                            Predeterminado</option>
                        <option value="option2">Option 2</option>
                    </select>
                </div>
            </div>
            <div className="flex gap-2 ps-5">
                <div className="p-[1px] h-10.5 bg-gradient-to-t from-zinc-400/40 ">
                    <input type="text" id="search_activos" placeholder="Activos" className="bg-zinc-900 py-2 px-3  w-full focus:outline-none" />
                </div>
                <div className="p-[1px] h-10.5 bg-gradient-to-t from-zinc-400/40 ">
                    <input type="date" id="search_activos" placeholder="Activos" className="bg-zinc-900 py-2 px-3  w-full focus:outline-none" />
                </div>
                <div className="p-[1px] ">
                    <Button rounded="none" className="relative py-3.5">
                        <GrMoreVertical />
                        <div className="absolute -top-3 -right-3  px-2 bg-zinc-800 rounded flex justify-center items-center py-1 text-xs">
                            <small>
                                2
                            </small>
                        </div>
                    </Button>
                </div>
                <div className="p-[1px] flex justify-center items-center px-5 ">
                    <p className="mx-5">En vivo</p>
                    <Button className="bg-zinc-900 rounded-sm px-2 pe-4 mx-2"><GrFormSearch size={25} />
                        Buscar
                    </Button>
                    <Button className="border border-zinc-100/5 rounded-sm px-4 mx-2">
                        <GrPowerReset />
                        Restablecer
                    </Button>
                    <Button className="border border-zinc-100/5 rounded-sm px-4 mx-2"><GrFormClock size={25} />
                        Guardar Nueva Busqueda
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default TopBar