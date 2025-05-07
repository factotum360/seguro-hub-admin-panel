
import React from 'react';
import { Bell } from 'lucide-react';
import PagePlaceholder from '@/components/layout/PagePlaceholder';

const Notifications = () => {
  return (
    <PagePlaceholder 
      title="Notificaciones"
      icon={<Bell className="h-5 w-5 text-insurance-red" />}
      description="Centro de notificaciones y alertas del sistema."
    />
  );
};

export default Notifications;
