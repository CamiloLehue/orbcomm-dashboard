import * as echarts from "echarts";
import EChartComponent from "../../../components/charts/eChartTests";


const route: [number, number][] = [
  [-43.137355, -73.643163], [-43.137248, -73.643457], [-43.130023, -73.643429],
  [-43.129936, -73.643298], [-43.129865, -73.643153], [-43.129824, -73.642996],
  [-43.12962, -73.643237], [-43.12938, -73.643405], [-43.128647, -73.643404],
  [-43.127819, -73.643398], [-43.127479, -73.643384], [-43.12727, -73.643388],
  [-43.125706, -73.643354], [-43.125518, -73.643353], [-43.124939, -73.643349],
  [-43.124326, -73.643257], [-43.123897, -73.643166], [-43.123296, -73.642958],
  [-43.123219, -73.642924], [-43.123018, -73.642828], [-43.122423, -73.642469],
  [-43.121862, -73.642019],
];

function haversineDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371000;
  const toRad = (deg: number) => deg * Math.PI / 180;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

const generateTimestamps = (startDate: Date, count: number, intervalSec = 15) => {
  return Array.from({ length: count }, (_, i) => {
    const newTime = new Date(startDate.getTime() + i * intervalSec * 1000);
    return newTime.toISOString().replace("T", " ").split(".")[0];
  });
};

const rawDataList = Array.from({ length: 7 }, (_, idx) => {
  const offset = Math.floor(Math.random() * 5);
  const dataLength = 10 + Math.floor(Math.random() * 5);
  const baseDate = new Date("2025-01-23T09:00:00");
  baseDate.setMinutes(baseDate.getMinutes() + idx * 7);

  const timestamps = generateTimestamps(baseDate, dataLength);
  const points = route.slice(offset, offset + dataLength);

  let totalDistance = 0;
  const distances = points.map((point, i) => {
    if (i === 0) return 0;
    const [lat1, lon1] = points[i - 1];
    const [lat2, lon2] = point;
    totalDistance += haversineDistance(lat1, lon1, lat2, lon2);
    return totalDistance;
  });

  return timestamps.map((time, i) => ({
    time,
    distance: distances[i],
  }));
});

const colors = [
  "#e6194b", "#3cb44b", "#ffe119", "#4363d8", "#f58231",
  "#911eb4", "#46f0f0", "#f032e6", "#bcf60c", "#fabebe"
];

export default function TiempoXDistancia() {
  const series = rawDataList.map((camionData, idx) => ({
    name: `Camión #${idx + 1}`,
    type: "line",
    smooth: true,
    showSymbol: true,
    lineStyle: {
      width: 2,
    },
    areaStyle: {
      opacity: 0.4,
      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        { offset: 0, color: colors[idx] },
        { offset: 1, color: "rgba(0,0,0,0)" },
      ]),
    },
    emphasis: {
      focus: "series",
    },
    data: camionData.map((entry) => [entry.time, entry.distance.toFixed(2)]),
  }));

  const option = {
    color: colors,
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#6a7985",
        },
      },
    },
    legend: {
      data: series.map((s) => s.name),
      textStyle: { color: "#fff" },
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "10%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      name: "Tiempo",

    },
    yAxis: {
      type: "value",
      name: "Distancia (m)",
      axisLabel: { color: "#fff" },
    },
    series,
  };

  // Calcular duración de cada viaje
  // const duraciones = rawDataList.map((camion, idx) => {
  //   const start = new Date(camion[0].time).getTime();
  //   const end = new Date(camion[camion.length - 1].time).getTime();
  //   const durationMs = end - start;

  //   const minutos = Math.floor(durationMs / 60000);
  //   const segundos = Math.floor((durationMs % 60000) / 1000);

  //   return {
  //     camion: `Camión ${idx + 1}`,
  //     inicio: camion[0].time,
  //     fin: camion[camion.length - 1].time,
  //     minutos,
  //     segundos,
  //     totalSegundos: durationMs / 1000,
  //   };
  // });

  // const masRapido = duraciones.reduce((prev, curr) =>
  //   curr.totalSegundos < prev.totalSegundos ? curr : prev
  // );

  return (
    <div className="relative" >
      <EChartComponent
        option={option}
        style={{ width: "100%", height: "320px", }}
      />

      {/* <div className="mt-4 text-white text-sm">
        <h3 className="font-semibold mb-2">Duración de cada viaje</h3>
        <table className="w-full text-left border border-gray-500">
          <thead>
            <tr>
              <th className="border border-gray-500 px-2 py-1">Camión</th>
              <th className="border border-gray-500 px-2 py-1">Inicio</th>
              <th className="border border-gray-500 px-2 py-1">Fin</th>
              <th className="border border-gray-500 px-2 py-1">Duración</th>
            </tr>
          </thead>
          <tbody>
            {duraciones.map((d, idx) => (
              <tr key={idx} className={d.camion === masRapido.camion ? "bg-green-700" : ""}>
                <td className="border border-gray-500 px-2 py-1">{d.camion}</td>
                <td className="border border-gray-500 px-2 py-1">{d.inicio}</td>
                <td className="border border-gray-500 px-2 py-1">{d.fin}</td>
                <td className="border border-gray-500 px-2 py-1">
                  {d.minutos} min {d.segundos} seg
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <p className="mt-3 font-semibold">
          🏁 Camión más rápido:{" "}
          <span className="text-green-400">
            {masRapido.camion} ({masRapido.minutos} min {masRapido.segundos} seg)
          </span>
        </p>
      </div> */}
    </div>
  );
}