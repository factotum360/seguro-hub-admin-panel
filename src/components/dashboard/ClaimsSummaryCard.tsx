
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

interface ClaimsSummaryCardProps {
  activeColor: string;
  renewalColor: string;
}

const ClaimsSummaryCard = ({ activeColor, renewalColor }: ClaimsSummaryCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Resumen de Siniestros</CardTitle>
        <CardDescription>Estado de siniestros reportados</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-between items-center text-sm">
          <div className="font-medium">Pendientes</div>
          <div className="text-gray-500">8 siniestros</div>
        </div>
        <Progress value={40} className="h-2" />
        
        <div className="flex justify-between items-center text-sm">
          <div className="font-medium">En proceso</div>
          <div className="text-gray-500">12 siniestros</div>
        </div>
        <Progress value={60} className="h-2 bg-gray-100">
          <div className="h-full" style={{ backgroundColor: renewalColor, borderRadius: '0.25rem' }} />
        </Progress>
        
        <div className="flex justify-between items-center text-sm">
          <div className="font-medium">Resueltos (este mes)</div>
          <div className="text-gray-500">15 siniestros</div>
        </div>
        <Progress value={75} className="h-2 bg-gray-100">
          <div className="h-full" style={{ backgroundColor: activeColor, borderRadius: '0.25rem' }} />
        </Progress>
      </CardContent>
    </Card>
  );
};

export default ClaimsSummaryCard;
