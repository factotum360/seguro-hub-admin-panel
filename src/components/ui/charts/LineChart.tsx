
import * as React from "react"
import * as RechartsPrimitive from "recharts"

export interface LineChartProps {
  options: any;
  series: any[];
  width?: number;
  height?: number;
}

export function LineChart({ options, series, width = 500, height = 300 }: LineChartProps) {
  const chartData = series[0]?.data.map((value: number, index: number) => ({
    name: options.xaxis?.categories?.[index] || `Item ${index}`,
    value,
  }));

  return (
    <RechartsPrimitive.LineChart
      data={chartData}
      width={width}
      height={height}
    >
      <RechartsPrimitive.CartesianGrid strokeDasharray="3 3" />
      <RechartsPrimitive.XAxis dataKey="name" />
      <RechartsPrimitive.YAxis />
      <RechartsPrimitive.Tooltip />
      <RechartsPrimitive.Legend />
      <RechartsPrimitive.Line type="monotone" dataKey="value" stroke="#8884d8" />
    </RechartsPrimitive.LineChart>
  );
}
