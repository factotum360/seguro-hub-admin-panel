
import React from 'react';
import { Phone } from 'lucide-react';
import PagePlaceholder from '@/components/layout/PagePlaceholder';
import { useParams } from 'react-router-dom';

const Leads = () => {
  const params = useParams();
  
  return (
    <PagePlaceholder 
      title="Leads"
      icon={<Phone className="h-5 w-5 text-insurance-blue" />}
      description="Gestión de prospectos y leads para ventas potenciales."
    />
  );
};

export default Leads;
