
import * as React from "react"
import * as RechartsPrimitive from "recharts"

import { cn } from "@/lib/utils"

export interface ChartProps extends React.HTMLAttributes<HTMLDivElement> {
  type?:
    | "line"
    | "bar"
    | "area"
    | "pie"
    | "scatter"
    | "radar"
    | "tree"
    | "composed"
  options?: any
  series?: any[]
  width?: number
  height?: number
}

const Chart = React.forwardRef<HTMLDivElement, ChartProps>(
  ({ className, type, options, series, width, height, children, ...props }, ref) => {

  const renderChart = (): React.ReactElement | null => {
    if (options && series) {
      // Use provided type or default to bar
      const chartType = type || 'bar';
      
      switch (chartType) {
        case 'bar':
          return (
            <RechartsPrimitive.BarChart
              data={series[0]?.data.map((value: number, index: number) => ({
                name: options.xaxis?.categories?.[index] || `Item ${index}`,
                value,
              }))}
              width={width || 500}
              height={height || 300}
            >
              <RechartsPrimitive.CartesianGrid strokeDasharray="3 3" />
              <RechartsPrimitive.XAxis dataKey="name" />
              <RechartsPrimitive.YAxis />
              <RechartsPrimitive.Tooltip />
              <RechartsPrimitive.Legend />
              <RechartsPrimitive.Bar dataKey="value" fill="#8884d8" />
            </RechartsPrimitive.BarChart>
          );
        case 'line':
          return (
            <RechartsPrimitive.LineChart
              data={series[0]?.data.map((value: number, index: number) => ({
                name: options.xaxis?.categories?.[index] || `Item ${index}`,
                value,
              }))}
              width={width || 500}
              height={height || 300}
            >
              <RechartsPrimitive.CartesianGrid strokeDasharray="3 3" />
              <RechartsPrimitive.XAxis dataKey="name" />
              <RechartsPrimitive.YAxis />
              <RechartsPrimitive.Tooltip />
              <RechartsPrimitive.Legend />
              <RechartsPrimitive.Line type="monotone" dataKey="value" stroke="#8884d8" />
            </RechartsPrimitive.LineChart>
          );
        case 'pie':
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
          
          return (
            <RechartsPrimitive.PieChart width={width || 500} height={height || 300}>
              <RechartsPrimitive.Pie
                data={pieData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                innerRadius={isPieDonut ? 60 : 0} // Make it a donut if specified in options
                fill="#8884d8"
                dataKey="value"
              />
              <RechartsPrimitive.Tooltip />
              {!options?.legend?.show === false && <RechartsPrimitive.Legend />}
            </RechartsPrimitive.PieChart>
          );
        default:
          return null;
      }
    }
    
    // Use React.Children.count to check if children exists and is not null
    if (React.Children.count(children) > 0) {
      return children as React.ReactElement;
    }
    
    return null;
  };

  return (
    <div ref={ref} className={cn("w-full", className)} {...props}>
      {renderChart()}
    </div>
  )
})
Chart.displayName = "Chart"

export { Chart }
