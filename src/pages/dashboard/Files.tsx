
import React from 'react';
import { FolderOpen } from 'lucide-react';
import PagePlaceholder from '@/components/layout/PagePlaceholder';

const Files = () => {
  return (
    <PagePlaceholder 
      title="Archivos"
      icon={<FolderOpen className="h-5 w-5 text-insurance-yellow" />}
      description="Repositorio central de documentos y archivos."
    />
  );
};

export default Files;
