import { GrChat, GrCircleAlert, GrDocumentPdf, GrFormClock, GrFormNextLink, GrFormView, GrNotification, GrPhone, GrSend, GrUp } from "react-icons/gr";
import Button from "../../components/ui/Button";
import MapSvg from "../../components/mapsold/MapSvg";
import { useNavigate } from "react-router";

function Dashboard() {
  const navigate = useNavigate();
  return (
    <div className="relative h-full w-full flex flex-col justify-start items-start">
      <h1 className="text-white pb-5">Escritorio Principal</h1>
      <div className="grid grid-cols-12 gap-5 w-full h-full">
        <article className="relative shadow-xl shadow-bgp bg-gradient-to-b from-primary/90 to-primary/40 col-span-3 flex flex-col gap-2 rounded-2xl">
          <div className="relative bg-bgp/60 min-h-[250px] text-white  border-t border-bgs w-full h-full  rounded-2xl flex flex-col justify-start items-start gap-1">
            <h3 className="absolute top-3 left-5 font-light">Próximo viaje</h3>
            <h5 className="absolute top-9 left-5  text-xs text-white">
              en llegar a destino
            </h5>
            <div className="absolute top-5 right-5 w-30 h-7 bg-bgp rounded-full flex justify-center items-center gap-1">
              <GrFormView className="cursor-pointer hover:text-secondary" onClick={() => { navigate("/viajes/ver/2") }} />
              <div className="cursor-pointer flex text-warning justify-center items-center gap-0.5  bg-gray/30 hover:bg-gray/50 hover:text-white transition-all duration-200 rounded-full px-2">
                <GrNotification size={10} />
                <small className="text-xs">1</small>
              </div>
              <div className="cursor-pointer flex text-warning justify-center items-center  bg-gray/3 hover:bg-gray/50 hover:text-white transition-all duration-200 rounded-full px-2">
                <GrFormClock />
                <small className="text-xs">2</small>
              </div>

            </div>
            <div className="relative flex justify-between items-center mt-15 px-5   w-full border-b border-secondary/5">
              <div className="flex flex-col items-start justify-start gap-2">
                <div className="flex flex-col justify-center items-start">
                  <small className="text-primary">Número de envio</small>
                  <h2 className="font-bold tracking-wider">E-20050006</h2>
                </div>
                <div className="flex flex-col justify-center items-start">
                  <small className="text-primary">Patente vehiculo</small>
                  <h5 className="font-bold tracking-wider">XXXX-00</h5>
                </div>
                <div className="flex flex-col justify-center items-start">
                  <small className="text-primary">Patente Rampla</small>
                  <h5 className="font-bold tracking-wider">XXXX-00</h5>
                </div>
              </div>
              <div className="relative space-y-7">
                <div className="absolute top-0 left-0 w-full h-full blur-3xl bg-zinc-200/50 rounded-full"></div>
                <img src="dashboard/truck.png" alt="mapa" className="relative w-50" />
                <div className="grid grid-cols-2">
                  <div className="flex flex-col justify-center items-star">
                    <small className="text-primary">Hora salida</small>
                    <h5 className="font-bold tracking-wider">11:30:00</h5>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <small className="text-primary">Hora llegada</small>
                    <h5 className="font-bold tracking-wider">18:00:00</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-full px-15 my-5">
              <div className=" border-b-2 border-gray ">
                <div className="absolute w-50 h-0.5 left-15 top-0 bg-white"></div>
                <div className="absolute bg-white -top-1 h-3 w-3 rounded-full">
                  <small className="absolute top-5 -left-2 text-gray">Origen</small>
                  <h4 className="absolute top-9 -left-3 text-nowrap">Castro</h4>
                </div>
                <div className="absolute bg-white -top-1 right-15 h-3 w-3 rounded-full">
                  <small className="absolute top-5 -left-2 text-gray">Destino</small>
                  <h4 className="absolute top-9 -left-9 text-nowrap">Puerto Montt</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 pb-1 text-xs">
            <Button rounded="lg" className=" hover:bg-bgs px-5 gap-2  ">
              <GrPhone size={15} />
              Llamar cliente
            </Button>
            <Button rounded="lg" className=" hover:bg-bgs px-5 gap-2  ">
              <GrSend size={15} />
              Correo
            </Button>
            <Button rounded="lg" className=" hover:bg-bgs px-5 gap-2  ">
              <GrChat size={15} />
              Chat
            </Button>
          </div>
        </article>
        <article className="relative bg-gray/30 col-span-3 flex flex-col gap-2 border border-secondary/5 rounded-2xl">
          <div className="relative bg-bgp/60 text-white  border-t border-bgs w-full h-full  rounded-2xl flex flex-col justify-center items-center gap-2">
            <h3 className="absolute top-3 left-5 font-light">Transportes</h3>
            <h5 className="absolute top-8 left-6 font-light text-xs text-gray">en línea</h5>
            <div className=" flex flex-col justify-center items-center gap-2   px-10 py-5 rounded-2xl">
              <h4 className="text-6xl">8</h4>
              <small>Rastreando viajes</small>
            </div>
            <div className="grid grid-cols-3 gap-2  py-5 border border-bgs px-10 rounded-2xl">
              <div className="flex flex-col w-full justify-center items-center">
                <p className="text-danger">1</p>
                <small>Sin conexión</small>
              </div>
              <div className="flex flex-col w-full  justify-center items-center">
                <p className="text-warning">8</p>
                <small>Pendientes</small>
              </div>
              <div className="flex flex-col w-full  justify-center items-center">
                <p className="text-primary">12</p>
                <small>Finalizados</small>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 pb-1 text-xs">
            <Button rounded="lg" className="bg-bgt hover:bg-bgp px-5  ">
              Crear nuevo viaje
            </Button>
            <Button rounded="lg" className=" hover:bg-bgt px-5  ">
              Lista +10
            </Button>
          </div>
        </article>
        <article className="relative bg-gray/30 col-span-2 flex flex-col gap-2 border border-secondary/5 rounded-2xl">
          <div className="relative bg-bgp/60 text-white  border-t border-bgs w-full h-full  rounded-2xl flex flex-col justify-center items-center gap-2">
            <h3 className="absolute top-3 left-5 font-light">Viaje Rápido</h3>
            <h5 className="absolute top-8 left-6 font-light text-xs text-gray">Organizar</h5>

          </div>

        </article>
        <article className="relative bg-gray/30 col-span-4 flex flex-col gap-2 border border-secondary/5 rounded-2xl">
          <div className="relative bg-bgp/60 text-white  border-t border-bgs w-full h-full  rounded-2xl flex flex-col justify-center items-center gap-2">
            <h3 className="absolute top-3 left-5 font-light">Notificaciones</h3>
            <h5 className="absolute top-8 left-6 font-light text-xs text-gray">del sistema</h5>
            <div className="relative w-full mt-15">
              <div className="flex flex-col gap-1 px-2">
                {
                  Array(4).fill(0).map((_, i) => (
                    <div key={i} className="relative grid grid-cols-3 py-2 px-5 rounded-md bg-gray/30 hover:bg-bgp border-t border-secondary/5 cursor-pointer">
                      <div className="col-span-2 flex items-center gap-5">
                        <GrCircleAlert className="text-gray" />
                        <div>
                          <h5 className="flex justify-start items-center gap-2" >
                            Notificación  de tipo {i + 1}
                            <span className={`text-xs text-warning border border-warning px-2 rounded-full mx-2`}>Alta</span>
                          </h5>
                          <small className="flex text-gray">
                            Descripcion de la notificación
                          </small>
                        </div>
                      </div>
                      <div className="flex justify-end items-center gap-2">
                        <small className="text-gray">
                          2{i + 1} minutos atrás
                        </small>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 pb-1 text-xs">
            <Button rounded="lg" className=" hover:bg-bgt px-5 gap-2  ">
              <GrUp />
              Más notificaciones
            </Button>
          </div>
        </article>
        <article className="col-span-5 rounded-2xl bg-gray/30 border-t border-secondary/5 flex flex-col gap-2 w-full">
          <div className="relative   w-full h-full max-h-[340px]  flex flex-col justify-center items-center gap-2">
            <h3 className="absolute top-3 left-5 font-light">Mapa</h3>
            <h5 className="absolute top-8 left-6 font-light text-xs text-gray">rastreo en línea</h5>
            <MapSvg />
          </div>
          <div className="flex items-center gap-2 text-xs">

          </div>
        </article>
        <article className="col-span-3 flex flex-col gap-2">
          <div className="relative bg-gray/30 border-t border-secondary/5 w-full h-full  rounded-2xl flex flex-col justify-center items-center gap-2 pt-10">
            <h3 className="absolute top-3 left-5 font-light">Reportes</h3>
            <h5 className="absolute top-8 left-6 font-light text-xs text-gray">rápidos</h5>            <ul className="flex flex-col gap-2 w-full p-2">
              {
                Array(5).fill(0).map((_, i) => (
                  <li key={i} className="relative bg-bgp rounded-lg px-2 py-2 flex justify-start items-center gap-2">
                    <span className="px-4 py-1 bg-gray/30 border-t border-secondary/5  rounded-sm">
                      <GrDocumentPdf />
                    </span>
                    <p className="font-light">
                      Documento e{i + 1}.
                    </p>
                    <button className="absolute right-5 px-2 py-2 rounded-xl border-t border-secondary/5 bg-primary text-bgp ">
                      <GrFormNextLink />
                    </button>
                  </li>
                ))
              }

            </ul>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <Button rounded="lg" className=" hover:bg-bgt px-5  ">
              Ver más
            </Button>
            <Button rounded="lg" className=" hover:bg-bgt px-5  ">
              Contactar con soporte
            </Button>
          </div>
        </article>
        <article className="col-span-4 rounded-2xl bg-gray/30 border-t border-secondary/5 flex flex-col gap-2 w-full">
          <div className="relative w-full h-full max-h-[380px]  flex flex-col justify-center items-center gap-2">
            <h3 className="absolute top-3 left-5 font-light">Línea de transporte</h3>
            <h5 className="absolute top-8 left-6 font-light text-xs text-gray">rastreo en línea</h5>
            <img src="dashboard/chartLine.png" alt="mapa" className="w-full h-full" />
          </div>
        </article>
      </div>
    </div >
  );
}


export default Dashboard;
