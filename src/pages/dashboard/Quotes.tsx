
import React from 'react';
import { Clipboard } from 'lucide-react';
import PagePlaceholder from '@/components/layout/PagePlaceholder';
import { useParams } from 'react-router-dom';

const Quotes = () => {
  const params = useParams();
  
  return (
    <PagePlaceholder 
      title="Cotizaciones"
      icon={<Clipboard className="h-5 w-5 text-insurance-green" />}
      description="Gestión de cotizaciones para clientes potenciales y existentes."
    />
  );
};

export default Quotes;
