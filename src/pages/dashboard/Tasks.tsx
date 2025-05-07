
import React from 'react';
import { CheckSquare } from 'lucide-react';
import PagePlaceholder from '@/components/layout/PagePlaceholder';
import { useParams } from 'react-router-dom';

const Tasks = () => {
  const params = useParams();
  
  return (
    <PagePlaceholder 
      title="Tareas"
      icon={<CheckSquare className="h-5 w-5 text-insurance-yellow" />}
      description="Gestión de tareas pendientes, recordatorios y seguimiento de actividades."
    />
  );
};

export default Tasks;
