
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Chart } from '@/components/ui/chart';

interface ClientsStatsCardProps {
  activeColor: string;
}

const ClientsStatsCard = ({ activeColor }: ClientsStatsCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Clientes Activos</CardTitle>
        <CardDescription>Porcentaje de clientes en seguimiento</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center space-y-4">
          <div className="relative flex items-center justify-center h-40 w-40">
            <div className="absolute text-2xl font-bold">76%</div>
            <Chart 
              options={{
                chart: { type: 'pie' },
                labels: ['Activos', 'Inactivos'],
                colors: [activeColor, '#e4e4e7'],
                legend: { show: false },
                plotOptions: {
                  pie: {
                    donut: {
                      size: '85%'
                    }
                  }
                },
                dataLabels: { enabled: false },
              }}
              series={[76, 24]} // Ensuring this is an array of numbers, not strings
              type="pie"
              width={100} // Changed from "100%" to 100 as the type expects a number
              height={160}
            />
          </div>
          <div className="text-sm text-gray-500 text-center">
            <div className="flex items-center gap-2 justify-center">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: activeColor }}></div>
              <span>152 clientes activos</span>
            </div>
            <div className="flex items-center gap-2 justify-center mt-2">
              <div className="w-3 h-3 rounded-full bg-gray-200"></div>
              <span>48 clientes inactivos</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ClientsStatsCard;
