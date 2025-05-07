
import React from 'react';

interface DashboardHeaderProps {
  lastUpdated?: string;
}

const DashboardHeader = ({ lastUpdated = "Mayo 7, 2025 - 10:30 AM" }: DashboardHeaderProps) => {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-2xl font-bold tracking-tight">Panel de Control</h1>
      <div className="flex items-center space-x-2">
        <span className="text-sm text-gray-500">Última actualización: {lastUpdated}</span>
      </div>
    </div>
  );
};

export default DashboardHeader;
