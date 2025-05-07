
import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Calendar, AlertTriangle } from 'lucide-react';
import DashboardStatCard from '@/components/dashboard/DashboardStatCard';

const StatsOverview = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <DashboardStatCard
        title="Cotizaciones"
        value="24"
        description="3 nuevas hoy"
        icon={FileText}
        trend={{
          value: "+12%",
          positive: true
        }}
        color="blue"
      />
      <Link to="/dashboard/policies?estado=por-renovar" className="block">
        <DashboardStatCard
          title="Pólizas Por Renovar"
          value="17"
          description="5 esta semana"
          icon={Calendar}
          trend={{
            value: "-2%",
            positive: false
          }}
          color="yellow"
        />
      </Link>
      <Link to="/dashboard/policies?estado=vencidas" className="block">
        <DashboardStatCard
          title="Pólizas Vencidas"
          value="8"
          description="2 nuevas este mes"
          icon={FileText}
          trend={{
            value: "+5%",
            positive: false
          }}
          color="red"
        />
      </Link>
      <Link to="/dashboard/policies?estado=expedicion" className="block">
        <DashboardStatCard
          title="En Expedición"
          value="12"
          description="4 desde ayer"
          icon={FileText}
          trend={{
            value: "+8%",
            positive: true
          }}
          color="green"
        />
      </Link>
    </div>
  );
};

export default StatsOverview;
