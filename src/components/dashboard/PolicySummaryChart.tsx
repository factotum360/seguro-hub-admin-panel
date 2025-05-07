
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Chart } from '@/components/ui/chart';

interface PolicySummaryChartProps {
  activeColor: string;
  renewalColor: string;
  expiredColor: string;
}

const PolicySummaryChart = ({ activeColor, renewalColor, expiredColor }: PolicySummaryChartProps) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle>Resumen de Pólizas</CardTitle>
          <CardDescription>Distribución de pólizas por ramo</CardDescription>
        </div>
        <Tabs defaultValue="mensual">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="mensual">Mensual</TabsTrigger>
            <TabsTrigger value="trimestral">Trimestral</TabsTrigger>
            <TabsTrigger value="anual">Anual</TabsTrigger>
          </TabsList>
        </Tabs>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <Chart 
            options={{
              chart: { type: 'bar', stacked: false },
              xaxis: { categories: ["Auto", "Hogar", "Vida", "Salud", "Empresarial"] },
              tooltip: { shared: true, intersect: false },
              colors: [activeColor, renewalColor, expiredColor]
            }}
            series={[
              { name: "Activas", data: [65, 34, 28, 42, 20] },
              { name: "Por renovar", data: [12, 8, 5, 10, 7] },
              { name: "Vencidas", data: [5, 2, 1, 3, 2] },
            ]}
            type="bar"
            height={320}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default PolicySummaryChart;
