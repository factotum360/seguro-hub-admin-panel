
import React from 'react';
import { FileCheck } from 'lucide-react';
import PagePlaceholder from '@/components/layout/PagePlaceholder';
import { useParams } from 'react-router-dom';

const Invoices = () => {
  const params = useParams();
  
  return (
    <PagePlaceholder 
      title="Facturas"
      icon={<FileCheck className="h-5 w-5 text-insurance-blue" />}
      description="Gestión de facturación y comprobantes de pago."
    />
  );
};

export default Invoices;
