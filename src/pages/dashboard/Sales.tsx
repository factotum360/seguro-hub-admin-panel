
import React from 'react';
import { Briefcase } from 'lucide-react';
import PagePlaceholder from '@/components/layout/PagePlaceholder';
import { useParams } from 'react-router-dom';

const Sales = () => {
  const params = useParams();
  
  return (
    <PagePlaceholder 
      title="Ventas"
      icon={<Briefcase className="h-5 w-5 text-insurance-blue" />}
      description="Gestión de ventas de pólizas, comisiones, y seguimiento de ventas por agente."
    />
  );
};

export default Sales;
