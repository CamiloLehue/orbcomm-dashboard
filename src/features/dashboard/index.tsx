import Notification from "../notification/components/Notification";
// import { MapView } from "../maps";
import TripList from "../trips/components/TripList";
import StatisticsAccesDirect from "../statistics/components/StatisticsAccesDirect";
import StatisticsSpeed from "../statistics/components/StatisticsSpeed";
import MultiMapView from "../maps/components/MultiMapView";
import AccessDirectTrip from "../trips/components/AccessDirectTrip";
// import ReportList from "../reports/components/ReportList";
function Dashboard() {
  return (
    <div className="relative h-full w-full bg-bgs  flex flex-col justify-start items-start p-2">
      <div className="grid grid-cols-12 gap-2 w-full">
        <div className="col-span-6 flex flex-col gap-2"
        >
          <div className="grid grid-cols-2 gap-2 ">
            <TripFast />
            <div className="border border-gray/20 p-1">
              <TripList />
            </div>
          </div>
          <div className="col-span-2 grid grid-cols-2 gap-2 ">
            <div className="border border-gray/20 p-1">
              <StatisticsAccesDirect />
            </div>
            <div className="border border-gray/20 p-1">
              <StatisticsSpeed />
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <Notification />
        </div>
        <div className="col-span-4 h-full">
          <MultiMapView height="700px" options={true} />
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
      progress: 50,
      nextPoint: 50,
    },
    {
      id: 3,
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

// const Reports = () => {
//   return (
//     <article className="flex flex-col gap-2">
//       <div className="relative bg-gray/30 border-t border-secondary/5 w-full h-full  rounded-2xl flex flex-col justify-center items-center gap-2 pt-10">
//         <h3 className="absolute top-3 left-5 font-light">Reportes</h3>
//         <h5 className="absolute top-8 left-6 font-light text-xs text-gray">rápidos</h5>            <ul className="flex flex-col gap-2 w-full p-2">
//           {
//             Array(5).fill(0).map((_, i) => (
//               <li key={i} className="relative bg-bgp rounded-lg px-2 py-2 flex justify-start items-center gap-2">
//                 <span className="px-4 py-1 bg-gray/30 border-t border-secondary/5  rounded-sm">
//                   <GrDocumentPdf />
//                 </span>
//                 <p className="font-light">
//                   Documento e{i + 1}.
//                 </p>
//                 <button className="absolute right-5 px-2 py-2 rounded-xl border-t border-secondary/5 bg-primary text-bgp ">
//                   <GrFormNextLink />
//                 </button>
//               </li>
//             ))
//           }

//         </ul>
//       </div>
//       <div className="flex items-center gap-2 text-xs">
//         <Button rounded="lg" className=" hover:bg-bgt px-5  ">
//           Ver más
//         </Button>
//         <Button rounded="lg" className=" hover:bg-bgt px-5  ">
//           Contactar con soporte
//         </Button>
//       </div>
//     </article>
//   )
// }


export default Dashboard;
