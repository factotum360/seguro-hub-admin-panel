
import * as React from "react"
import * as RechartsPrimitive from "recharts"

export interface BarChartProps {
  options: any;
  series: any[];
  width?: number;
  height?: number;
}

export function BarChart({ options, series, width = 500, height = 300 }: BarChartProps) {
  const chartData = series[0]?.data.map((value: number, index: number) => ({
    name: options.xaxis?.categories?.[index] || `Item ${index}`,
    value,
  }));

  return (
    <RechartsPrimitive.BarChart
      data={chartData}
      width={width}
      height={height}
    >
      <RechartsPrimitive.CartesianGrid strokeDasharray="3 3" />
      <RechartsPrimitive.XAxis dataKey="name" />
      <RechartsPrimitive.YAxis />
      <RechartsPrimitive.Tooltip />
      <RechartsPrimitive.Legend />
      <RechartsPrimitive.Bar dataKey="value" fill="#8884d8" />
    </RechartsPrimitive.BarChart>
  );
}
