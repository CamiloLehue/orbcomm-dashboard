import {
  GrAdd,
  GrAppsRounded,
  GrDeliver,
  GrFlag,
  GrFormClock,
  GrFormDown,
  GrFormSearch,
  GrLocation,
  GrMap,
  GrMoreVertical,
  GrPowerReset,
  GrSearch,
  GrStar,
  GrSync
} from "react-icons/gr";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import MapView from "../components/maps/MapView";

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
    <div className="relative w-full h-full text-zinc-50">
      <div className="h-20 flex justify-start items-center  gap-5 ">
        <div className="flex items-center gap-2">
          <h4 className="rounded px-2">AST-DEMO</h4>
          <p className="font-bold">Cuenta: <span className="font-light">AST Networks & Tecnoservicios</span></p>
        </div>
        <div className="flex items-center gap-5 bg-zinc-900/30 text-stone-400 h-8 rounded-full px-10">
          <GrAppsRounded size={20} />
          <GrAdd size={20} />
          <GrLocation />
          <GrFlag size={20} />
        </div>
      </div>
      <Mapa />
    </div>
  )
}

const Mapa = () => {
  return (
    <div className="relative h-full w-full flex justify-center items-center ">
      <div className="grid grid-cols-3 gap-2 w-full h-full border border-zinc-100/5 p-2 rounded-3xl">
        <div className="col-span-2 flex flex-col">
          <div className="bg-zinc-900 w-full flex justify-between items-center px-5 h-15 rounded-t-2xl">
            <h3 className="font-light text-zinc-400 flex  items-center gap-2">
              <GrMap />
              Mapa Sincronizado
            </h3>
            <Button className="text-xs flex items-center gap-2 text-zinc-500 hover:text-zinc-400">
              <GrSync />
              Sincronizar
            </Button>
          </div>
          <MapView />
        </div>
        <div className="bg-zinc-900 rounded-2xl px-5 py-2">
          <div className="h-12 flex flex-col justify-center items-start">
            <h3 className="font-light text-zinc-400">
              Información del camión
            </h3>

          </div>
          <div className=" w-full">
            <div className="overflow-x-auto  ">
              <table className="min-w-full text-left text-xs  w-full">
                <thead className="tracking-wider border-b-4  dark:border-zinc-800">
                  <tr>
                    <th scope="col" className="px-6 py-2">
                      <h4 className="font-light text-red-600">Resúmen</h4>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b dark:border-zinc-800">
                    <th scope="row" className="px-6 py-4">
                      Tipo de mensaje
                    </th>
                    <td className="px-6 py-4">Blocked Status</td>
                  </tr>
                  <tr className="border-b dark:border-zinc-800">
                    <th scope="row" className="px-6 py-4">
                      Modo de mensaje
                    </th>
                    <td className="px-6 py-4 text-lime-300">Satelital</td>
                  </tr>
                  <tr className="border-b dark:border-zinc-800">
                    <th scope="row" className="px-6 py-4">
                      Duración desde la hora del mensaje
                    </th>
                    <td className="px-6 py-4">44</td>
                  </tr>
                  <tr className="border-b dark:border-zinc-800">
                    <th scope="row" className="px-6 py-4">
                      Dirección
                    </th>
                    <td className="px-6 py-4">216, Antonio Varas, Población Esmeralda, Puerto Montt, Los Lagos, Chile</td>
                  </tr>
                  <tr className="border-b dark:border-zinc-800">
                    <th scope="row" className="px-6 py-4">
                      Ciudad
                    </th>
                    <td className="px-6 py-4">Puerto Montt</td>
                  </tr>
                  <tr className="border-b dark:border-zinc-800">
                    <th scope="row" className="px-6 py-4">
                      Región
                    </th>
                    <td className="px-6 py-4">Los Lagos</td>
                  </tr>
                  <tr className="border-b dark:border-zinc-800">
                    <th scope="row" className="px-6 py-4">
                      País
                    </th>
                    <td className="px-6 py-4">Chile</td>
                  </tr>
                </tbody>
              </table>
              <Button className="mx-auto pt-4 text-xs">
                Ver más
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

const TopBar = () => {
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
            Buscar</Button>
          <Button className="border border-zinc-100/5 rounded-sm px-4 mx-2">
            <GrPowerReset />
            Restablecer</Button>
          <Button className="border border-zinc-100/5 rounded-sm px-4 mx-2"><GrFormClock size={25} />
            Guardar Nueva Busqueda</Button>
        </div>
      </div>
    </div>
  )
}

const LeftBar = () => {
  return (
    <div className="min-h-full rounded-b-2xl bg-stone-900/60 rounded h-full  w-full max-w-[300px] border-e border-zinc-100/5">
      <div className="ps-4 w-full h-10 flex justify-between items-center px-1">
        <h4 className="text-center font-light">Activos</h4>
        <small className="text-zinc-500">1 - 2 de 2 recorridos</small>
        <div>
          <Button className="bg-stone-950 rounded text-zinc-400">
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
      <div className="flex items-center gap-1 border border-zinc-100/5 rounded ps-3 pe-1">
        <GrSearch />
        <Input placeholder="Busqueda..." type="text" className="w-full" />
      </div>
      <div className="flex flex-col gap-1 rounded-xl  min-h-[500px]">

        {
          Array(3).fill(0).map((_, i) => {
            return (
              <article key={i} className="flex bg-zinc-950/50 flex-col justify-center items-center gap-3 p-2 border border-zinc-100/5 rounded-xl
              hover:bg-stone-800 transition-all duration-300 ease-in cursor-pointer">
                <div>
                  <h4 className="text-stone-500">GPS R{5507138 + i}</h4>
                </div>
                <div className="flex gap-2 items-center d px-2">
                  <GrDeliver color="lime" />
                  <small className="text-sm">
                    {5507138 + i}
                  </small>
                </div>
                <small className="font-light text-xs">02/04/2025 04:00:00</small>
                <p className="bg-stone-800 text-zinc-300 rounded-full px-4 py-2 text-xs">
                  Huasco, Población Esmeralda, Puerto M...
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
