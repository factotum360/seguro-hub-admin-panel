
import React from 'react';
import { Calendar as CalendarIcon } from 'lucide-react';
import PagePlaceholder from '@/components/layout/PagePlaceholder';

const Calendar = () => {
  return (
    <PagePlaceholder 
      title="Calendario"
      icon={<CalendarIcon className="h-5 w-5 text-insurance-blue" />}
      description="Calendario de eventos, vencimientos y recordatorios."
    />
  );
};

export default Calendar;
