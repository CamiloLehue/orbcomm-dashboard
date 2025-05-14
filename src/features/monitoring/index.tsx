import TopBar from "./TopBar";
import LeftBar from "./LeftBar";
import Content from "./Content";
import { useState } from "react";

function Monitoring() {
  const origen: [number, number] = [-43.1375, -73.6400];
  const destino: [number, number] = [-42.1350, -73.6400];



  const [origenDestinyAsigned, setOrigenDestinyAsigned] = useState<[number[], number[]] | null>([origen, destino]);

  const origenAsignado = origenDestinyAsigned?.[0];
  const destinoAsignado = origen;

  console.log(
    "d : " + origenAsignado + " ------------------------------- " + destinoAsignado
  );
  return (
    <div className="relative h-full w-full flex flex-col justify-start items-start pr-5">
      <TopBar />
      <div className="relative min-h-170 h-full w-full flex justify-start items-start gap-5 ">
        <LeftBar setOrigenDestinyAsigned={setOrigenDestinyAsigned} />
        <Content origen={origen} destino={destino} origenDestinyAsigned={origenDestinyAsigned} />
      </div>
    </div>
  );
}


export default Monitoring;
