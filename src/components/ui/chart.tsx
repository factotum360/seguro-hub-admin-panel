
import * as React from "react"
import * as RechartsPrimitive from "recharts"

import { cn } from "@/lib/utils"
import { BarChart } from "./charts/BarChart"
import { LineChart } from "./charts/LineChart"
import { PieChart } from "./charts/PieChart"

export interface ChartProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: "line" | "bar" | "area" | "pie" | "scatter" | "radar" | "tree" | "composed"
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
          return <BarChart options={options} series={series} width={width} height={height} />;
        case 'line':
          return <LineChart options={options} series={series} width={width} height={height} />;
        case 'pie':
          return <PieChart options={options} series={series} width={width} height={height} />;
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
