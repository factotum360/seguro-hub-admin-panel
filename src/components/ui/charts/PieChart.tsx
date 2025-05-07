
import * as React from "react"
import * as RechartsPrimitive from "recharts"

export interface PieChartProps {
  options: any;
  series: any[];
  width?: number;
  height?: number;
}

export function PieChart({ options, series, width = 500, height = 300 }: PieChartProps) {
  // Handle both regular pie and donut charts
  const isPieDonut = options?.plotOptions?.pie?.donut ? true : false;
  
  // Convert series data for pie chart
  let pieData;
  if (Array.isArray(series) && !Array.isArray(series[0])) {
    // Handle case where series is a simple array of values [30, 70]
    pieData = series.map((value, index) => ({
      name: options.labels?.[index] || `Item ${index}`,
      value: typeof value === 'number' ? value : 0,
    }));
  } else {
    // Handle case with data array
    pieData = series[0]?.data.map((value: number, index: number) => ({
      name: options.labels?.[index] || `Item ${index}`,
      value,
    }));
  }

  // Configure colors from options if available
  const colors = options.colors || ["#8884d8", "#82ca9d"];

  return (
    <RechartsPrimitive.PieChart width={width} height={height}>
      <RechartsPrimitive.Pie
        data={pieData}
        cx="50%"
        cy="50%"
        labelLine={false}
        outerRadius={80}
        innerRadius={isPieDonut ? 60 : 0} // Make it a donut if specified in options
        fill={colors[0]}
        dataKey="value"
      >
        {pieData.map((entry: any, index: number) => (
          <RechartsPrimitive.Cell 
            key={`cell-${index}`} 
            fill={colors[index % colors.length]} 
          />
        ))}
      </RechartsPrimitive.Pie>
      <RechartsPrimitive.Tooltip />
      {!options?.legend?.show === false && <RechartsPrimitive.Legend />}
    </RechartsPrimitive.PieChart>
  );
}
