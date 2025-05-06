
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Calendar, Gift } from 'lucide-react';

type BirthdayItem = {
  id: string;
  name: string;
  date: string;
  daysLeft: number;
  avatarUrl?: string;
  initials: string;
};

const BirthdaysList = () => {
  // Datos simulados de cumpleaños
  const birthdays: BirthdayItem[] = [
    {
      id: '1',
      name: 'María González',
      date: '7 Mayo',
      daysLeft: 1,
      initials: 'MG',
    },
    {
      id: '2',
      name: 'Carlos Rodríguez',
      date: '8 Mayo',
      daysLeft: 2,
      initials: 'CR',
    },
    {
      id: '3',
      name: 'Ana López',
      date: '10 Mayo',
      daysLeft: 4,
      initials: 'AL',
    },
  ];

  return (
    <div className="space-y-3">
      {birthdays.map((birthday) => (
        <div key={birthday.id} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50">
          <Avatar className="h-9 w-9 border border-gray-200">
            <AvatarImage src={birthday.avatarUrl} />
            <AvatarFallback className="bg-insurance-blue/10 text-insurance-blue">
              {birthday.initials}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-medium truncate">{birthday.name}</div>
            <div className="flex items-center text-xs text-gray-500">
              <Calendar className="h-3 w-3 mr-1" />
              {birthday.date}
              {birthday.daysLeft === 0 ? (
                <span className="ml-1 inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                  <Gift className="h-3 w-3 mr-1" />
                  Hoy
                </span>
              ) : (
                <span className="ml-1">
                  (en {birthday.daysLeft} {birthday.daysLeft === 1 ? 'día' : 'días'})
                </span>
              )}
            </div>
          </div>
        </div>
      ))}

      {birthdays.length === 0 && (
        <div className="text-center py-4 text-gray-500 text-sm">
          No hay cumpleaños próximos
        </div>
      )}
      
      <Button variant="outline" size="sm" className="w-full mt-2">
        Ver todos los cumpleaños
      </Button>
    </div>
  );
};

export default BirthdaysList;
