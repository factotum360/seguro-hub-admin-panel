
import React from 'react';
import { CreditCard } from 'lucide-react';
import PagePlaceholder from '@/components/layout/PagePlaceholder';
import { useParams } from 'react-router-dom';

const Payments = () => {
  const params = useParams();
  
  return (
    <PagePlaceholder 
      title="Cobros"
      icon={<CreditCard className="h-5 w-5 text-insurance-green" />}
      description="Gestión de pagos, facturación y seguimiento de cuentas por cobrar."
    />
  );
};

export default Payments;
