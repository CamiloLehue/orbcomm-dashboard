// components/EChartComponent.tsx
import React, { useEffect, useRef } from "react";
import * as echarts from "echarts/core";
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
} from "echarts/components";

import { BarChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  BarChart,
  CanvasRenderer,
]);

interface EChartProps {
  option: echarts.EChartsCoreOption;
  style?: React.CSSProperties;
}

const EChartComponent: React.FC<EChartProps> = ({ option, style }) => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      const chartInstance = echarts.init(chartRef.current);
      chartInstance.setOption(option);

      const handleResize = () => {
        chartInstance.resize();
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        chartInstance.dispose();
      };
    }
  }, [option]);

  return (
    <div ref={chartRef} style={style || { width: "100%", height: "100%" }} />
  );
};

export default EChartComponent;