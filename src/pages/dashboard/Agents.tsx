
import React from 'react';
import { UserCheck } from 'lucide-react';
import PagePlaceholder from '@/components/layout/PagePlaceholder';
import { useParams } from 'react-router-dom';

const Agents = () => {
  const params = useParams();
  
  return (
    <PagePlaceholder 
      title="Agentes"
      icon={<UserCheck className="h-5 w-5 text-insurance-green" />}
      description="Gestión de agentes de seguros, comisiones y rendimiento."
    />
  );
};

export default Agents;
