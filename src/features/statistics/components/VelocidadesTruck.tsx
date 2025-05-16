import * as echarts from "echarts";
import EChartComponent from "../../../components/charts/eChartTests";
import { useEffect, useState, useRef } from "react";

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

const getCurrentTimestamp = () => {
  const now = new Date();
  return now.toISOString().replace("T", " ").split(".")[0];
};

const colors = [
  "#e6194b", "#3cb44b", "#ffe119", "#4363d8", "#f58231",
  "#911eb4", "#46f0f0", "#f032e6", "#bcf60c", "#fabebe"
];

interface SpeedData {
  time: string;
  speed: number;
}

export default function VelocidadesTruck() {
  const [seriesData, setSeriesData] = useState<SpeedData[][]>([]);
  const chartRef = useRef<echarts.ECharts | null>(null);
  const positionsRef = useRef<number[]>([]);
  const speedsRef = useRef<number[]>([]);
  const lastUpdateRef = useRef<number>(0);

  useEffect(() => {
    const initialData = Array.from({ length: 5 }, (_, idx) => {
      const initialPosition = Math.floor(Math.random() * 5);
      positionsRef.current[idx] = initialPosition;
      speedsRef.current[idx] = 5 / 3.6; // Velocidad inicial en m/s

      return [{
        time: getCurrentTimestamp(),
        speed: speedsRef.current[idx]
      }];
    });

    setSeriesData(initialData);

    const interval = setInterval(updateData, 3000); // Actualizar cada 3 segundos

    return () => clearInterval(interval);
  }, []);

  const updateData = () => {
    const now = Date.now();
    if (now - lastUpdateRef.current < 2000) return; // Limitar actualizaciones
    lastUpdateRef.current = now;

    setSeriesData(prevData => {
      return prevData.map((truckData, idx) => {
        // Avanzar posición en la ruta
        positionsRef.current[idx] = (positionsRef.current[idx] + 1) % route.length;
        const currentPos = positionsRef.current[idx];
        const prevPos = currentPos > 0 ? currentPos - 1 : route.length - 1;

        // Calcular nueva velocidad
        const [lat1, lon1] = route[prevPos];
        const [lat2, lon2] = route[currentPos];
        const distance = haversineDistance(lat1, lon1, lat2, lon2);

        // Simular variación de velocidad
        const delta = (Math.random() - 0.5) * 10; // +/- 5 km/h en variación
        let kmhSpeed = (distance / 3) * 3.6 + delta; // 3 segundos entre actualizaciones
        kmhSpeed = Math.max(1, Math.min(kmhSpeed, 90)); // límites realistas

        speedsRef.current[idx] = kmhSpeed / 3.6; // Guardar en m/s

        // Añadir nuevo punto de datos
        const newDataPoint = {
          time: getCurrentTimestamp(),
          speed: speedsRef.current[idx]
        };

        const updatedData = [...truckData, newDataPoint];
        if (updatedData.length > 20) {
          updatedData.shift();
        }

        return updatedData;
      });
    });
  };

  const series = seriesData.map((camionData, idx) => ({
    name: `C#${idx + 1}`,
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
    data: camionData.map((entry) => [entry.time, (entry.speed * 3.6).toFixed(2)]),
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
      axisLabel: { color: "#fff", rotate: 45 },
      boundaryGap: false,
    },
    yAxis: {
      type: "value",
      name: "Velocidad (km/h)",
      max: 120,
      axisLabel: { color: "#fff" },
    },
    series,
    animation: true,
    animationDuration: 1000,
    animationEasing: 'cubicInOut',
  };

  return (
    <div className="relative">
      <EChartComponent
        option={option as echarts.EChartsOption}
        style={{ width: "100%", height: "320px" }}
        onChartReady={(chart: echarts.ECharts) => { chartRef.current = chart; }}
      />
    </div>
  );
}