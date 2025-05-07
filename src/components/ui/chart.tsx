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
      // This is a simplified implementation - would need to expand for real-world use
      const chartType = type || 'bar';
      
      switch (chartType) {
        case 'bar':
          return (
            <RechartsPrimitive.BarChart
              data={series[0]?.data.map((value, index) => ({
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
              data={series[0]?.data.map((value, index) => ({
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
          return (
            <RechartsPrimitive.PieChart width={width || 500} height={height || 300}>
              <RechartsPrimitive.Pie
                data={series[0]?.data.map((value, index) => ({
                  name: options.labels?.[index] || `Item ${index}`,
                  value,
                }))}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              />
              <RechartsPrimitive.Tooltip />
              <RechartsPrimitive.Legend />
            </RechartsPrimitive.PieChart>
          );
        default:
          // Use as React.ReactElement to explicitly cast the children
          return children as React.ReactElement | null;
      }
    }
    
    // Use as React.ReactElement to explicitly cast the children
    return children as React.ReactElement | null;
  };

    return (
      <div ref={ref} className={cn("w-full", className)} {...props}>
        {renderChart()}
      </div>
    )
  }
)
Chart.displayName = "Chart"

export { Chart }
