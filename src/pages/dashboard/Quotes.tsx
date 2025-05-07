
import React, { useEffect } from 'react';
import { Clipboard } from 'lucide-react';
import PagePlaceholder from '@/components/layout/PagePlaceholder';
import { useParams, useLocation } from 'react-router-dom';
import { toast } from 'sonner';

const Quotes = () => {
  const params = useParams();
  const location = useLocation();
  
  useEffect(() => {
    // Check if we came from the dashboard by looking for state
    const fromDashboard = location.state?.fromDashboard;
    
    if (fromDashboard) {
      toast.info('Bienvenido a la sección de cotizaciones', {
        description: 'Aquí podrás gestionar todas tus cotizaciones.',
      });
    }
  }, [location]);
  
  return (
    <PagePlaceholder 
      title="Cotizaciones"
      icon={<Clipboard className="h-5 w-5 text-insurance-green" />}
      description="Gestión de cotizaciones para clientes potenciales y existentes."
    />
  );
};

export default Quotes;
