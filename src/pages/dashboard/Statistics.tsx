
import React from 'react';
import { BarChart2 } from 'lucide-react';
import PagePlaceholder from '@/components/layout/PagePlaceholder';

const Statistics = () => {
  return (
    <PagePlaceholder 
      title="Estadísticas"
      icon={<BarChart2 className="h-5 w-5 text-insurance-blue" />}
      description="Reportes estadísticos y análisis de datos."
    />
  );
};

export default Statistics;
