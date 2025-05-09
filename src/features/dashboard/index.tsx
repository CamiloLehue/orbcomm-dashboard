import { GrCircleAlert, GrDocumentPdf, GrFormNextLink, GrUp } from "react-icons/gr";
import Button from "../../components/ui/Button";
import MapSvg from "../../components/mapsold/MapSvg";
import AccessDirectTrip from "../trips/components/AccessDirectTrip";

function Dashboard() {
  return (
    <div className="relative h-full w-full flex flex-col justify-start items-start px-5">
      <h1 className="text-white pb-5">Explorar</h1>
      <div className="grid grid-cols-12 gap-2 w-full">
        <div className="col-span-6 grid grid-cols-2 gap-2">
          <TripFast />
          <TripList />
          <Notification />
          <Reports />
          {/* <article className="rounded-2xl bg-gray/30 border-t border-secondary/5 flex flex-col gap-2 w-full">
            <div className="relative w-full h-full max-h-[380px]  flex flex-col justify-center items-center gap-2">
              <h3 className="absolute top-3 left-5 font-light">Línea de transporte</h3>
              <h5 className="absolute top-8 left-6 font-light text-xs text-gray">rastreo en línea</h5>
              <img src="dashboard/chartLine.png" alt="mapa" className="w-full h-full" />
            </div>
          </article> */}
        </div>
        <div className="col-span-6 h-full">
          <article className="rounded-2xl overflow-hidden bg-gray/30 border-t border-secondary/5 flex flex-col gap-2 w-full h-full">
            <div className="relative   w-full h-full max-h-[340px]  flex flex-col justify-center items-center gap-2">
              <div className="relative w-full bg-bgb h-20 z-50">
                <h3 className="absolute top-3 left-5 font-light">Mapa</h3>
                <h5 className="absolute top-8 left-6 font-light text-xs text-gray">rastreo en línea</h5>
              </div>
              <div className="relative bottom-10 left-50 scale-150 w-full h-full">
                <MapSvg />
              </div>
            </div>
          </article>
        </div>
      </div>
    </div >
  );
}


const TripFast = () => {
  const origen = "Castro";
  const destino = "Puerto Montt";
  const numeroViaje = "E-20050006";
  const patenteVehiculo = "XXXX-00";
  const patenteRampa = "XXXX-00";
  const horaSalida = "11:30:00";
  const horaLlegada = "18:00:00";
  const trayectoRecorrido = 20;
  const zonePoints = [
    {
      id: 1,
      name: origen,
      hours: "11:30:00",
      lat: -33.448889,
      lng: -70.669265,
      estado: true,
      progress: 0,
      nextPoint: 25,
    },
    {
      id: 2,
      name: "Ancud",
      hours: "13:30:00",
      lat: -33.453944,
      lng: -70.672517,
      estado: true,
      progress: 25,
      nextPoint: 50,
    },
    {
      id: 3,
      name: "Pargua",
      hours: "14:30:00",
      lat: -33.453944,
      lng: -70.672517,
      estado: true,
      progress: 50,
      nextPoint: 100,
    },
    {
      id: 4,
      name: destino,
      hours: "15:30:00",
      lat: -33.453944,
      lng: -70.672517,
      estado: true,
      progress: 75,
      nextPoint: 100,
    },
    {
      id: 5,
      name: destino,
      hours: "15:30:00",
      lat: -33.453944,
      lng: -70.672517,
      estado: true,
      progress: 100,
      nextPoint: 100,
    },

  ]

  return (
    <AccessDirectTrip
      origen={origen}
      destino={destino}
      numeroViaje={numeroViaje}
      patenteVehiculo={patenteVehiculo}
      patenteRampa={patenteRampa}
      horaSalida={horaSalida}
      horaLlegada={horaLlegada}
      trayectoRecorrido={trayectoRecorrido}
      estado="En Camino"
      zonePoints={zonePoints}
    />
  )
}
const TripList = () => {
  return (
    <article className="relative bg-gray/30  flex flex-col gap-2 border border-secondary/5 rounded-2xl">
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
  )
}
const Notification = () => {
  return (
    <article className="relative bg-gray/30  flex flex-col gap-2 border border-secondary/5 rounded-lg">
      <div className="relative bg-bgp/60 text-white  border-t border-bgs w-full h-full  rounded-lg flex flex-col justify-center items-center gap-2">
        <h3 className="absolute top-3 left-5 font-light">Notificaciones</h3>
        <h5 className="absolute top-8 left-6 font-light text-xs text-gray">del sistema</h5>
        <div className="relative w-full mt-15">
          <div className="flex flex-col gap-1 px-2 py-3">
            {
              Array(4).fill(0).map((_, i) => (
                <div key={i} className="relative grid grid-cols-3 py-2 px-5 rounded-md bg-gray/30 hover:bg-transparent border-t border-secondary/5 cursor-pointer">
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
  )
}
const Reports = () => {
  return (
    <article className="flex flex-col gap-2">
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
  )
}
export default Dashboard;
