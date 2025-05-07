
import React from 'react';
import { Building } from 'lucide-react';
import PagePlaceholder from '@/components/layout/PagePlaceholder';

const Insurers = () => {
  return (
    <PagePlaceholder 
      title="Aseguradoras"
      icon={<Building className="h-5 w-5 text-insurance-blue" />}
      description="Gestión de compañías aseguradoras y sus productos."
    />
  );
};

export default Insurers;
