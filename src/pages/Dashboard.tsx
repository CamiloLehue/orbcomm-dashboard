import { GrDeliver, GrFormClock, GrFormDown, GrFormSearch, GrMoreVertical, GrPowerReset, GrSearch, GrStar } from "react-icons/gr";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";

function Dashboard() {
  return (
    <div className="relative h-full w-full flex flex-col justify-start items-start">
      <TopBar />
      <div className="relative min-h-170 h-full w-full flex justify-start items-start gap-5">
        <LeftBar />
        <Content />
      </div>
    </div>
  );
}
const Content = () => {
  return (
    <div className="relative w-full h-full ">
      <div className="h-14 flex justify-start items-center  gap-5 ">
        <h4 className="font-bold bg-zinc-800 rounded px-2">AST-DEMO</h4>
        <p className="font-bold">Cuenta: <span className="font-light">AST Networks & Tecnoservicios</span></p>
      </div>
      <Mapa />
    </div>
  )
}

const Mapa = () => {
  return (
    <div className="relative h-full w-full flex justify-center items-center">
      x
    </div>

  )
}

const TopBar = () => {
  return (
    <div className="w-full  px-5 h-17 border-b border-zinc-500/30 flex justify-start items-center gap-5">
      <div className="border-e border-zinc-700/50 pe-10">
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
          <Button className="bg-zinc-800 rounded-sm px-2 pe-3 mx-2"><GrFormSearch size={25} />
            Buscar</Button>
          <Button className="border border-zinc-800 rounded-sm px-4 mx-2">
            <GrPowerReset />
            Restablecer</Button>
          <Button className="border border-zinc-800 rounded-sm px-4 mx-2"><GrFormClock size={25} />
            Guardar Nueva Busqueda</Button>
        </div>
      </div>
    </div>
  )
}

const LeftBar = () => {
  return (
    <div className="min-h-full h-full  w-full max-w-[300px] border-e border-zinc-700/50">
      <div className="w-full h-10 flex justify-between items-center px-1">
        <h4 className="text-center font-bold">Activos</h4>
        <small className="text-zinc-500">1 - 2 de 2 recorridos</small>
        <div>
          <Button className="bg-zinc-800 text-zinc-400">
            <GrFormDown />
          </Button>
        </div>
      </div>
      <CardViajes />
    </div>
  )
}

const CardViajes = () => {
  return (
    <div className="p-1 flex flex-col gap-3 ">
      <div className="flex items-center gap-1 border border-zinc-700/50 rounded ps-3 pe-1">
        <GrSearch />
        <Input placeholder="Busqueda..." type="text" className="w-full" />
      </div>
      <div className="flex flex-col gap-2 rounded-xl bg-zinc-900 min-h-[500px]">

        {
          Array(3).fill(0).map((_, i) => {
            return (
              <article key={i} className="flex flex-col justify-center items-center gap-1 p-2 border border-zinc-700/50 rounded-xl
              hover:bg-zinc-700 transition-all duration-300 ease-in cursor-pointer">
                <div>
                  <h4 className="font-medium text-zinc-100">AST-DEMOGPRS</h4>
                </div>
                <div className="flex gap-2 items-center d px-2">
                  <GrDeliver color="#00d1ff" />
                  <small className="text-sm">
                    Chasis
                  </small>
                </div>
                <small className="font-light text-xs">02/04/2025 04:00:00</small>
                <p className="bg-zinc-800 text-zinc-100 rounded-full px-4 py-2 text-xs">
                  W-912, QUELLÓN VIEJO, QUELLÓN...
                </p>
              </article>
            )
          })
        }

      </div>

    </div>
  )
}


export default Dashboard;
