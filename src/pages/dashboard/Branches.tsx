
import React from 'react';
import { Tag } from 'lucide-react';
import PagePlaceholder from '@/components/layout/PagePlaceholder';

const Branches = () => {
  return (
    <PagePlaceholder 
      title="Ramos"
      icon={<Tag className="h-5 w-5 text-insurance-blue" />}
      description="Gestión de los distintos ramos de seguros ofrecidos."
    />
  );
};

export default Branches;
