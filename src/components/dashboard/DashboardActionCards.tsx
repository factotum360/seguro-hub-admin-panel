import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  UserPlus,
  Building,
  AlertTriangle, 
  FileText, 
  Tag,
  FileSearch
} from 'lucide-react';

export const DashboardActionCards: React.FC = () => {
  // Agregar el manejador del clic para la cotización
  const handleQuoteClick = () => {
    const cotizacionesSection = document.getElementById('sidebar-cotizaciones');
    if (cotizacionesSection) {
      cotizacionesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
        <CardContent className="p-4 text-center flex flex-col items-center justify-center">
          <Button variant="outline" size="icon" className="h-10 w-10 rounded-full mb-3">
            <UserPlus className="h-5 w-5 text-insurance-blue" />
          </Button>
          <span className="text-sm font-medium">Nuevo Cliente</span>
        </CardContent>
      </Card>
      
      <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
        <CardContent className="p-4 text-center flex flex-col items-center justify-center">
          <Button variant="outline" size="icon" className="h-10 w-10 rounded-full mb-3">
            <FileText className="h-5 w-5 text-insurance-blue" />
          </Button>
          <span className="text-sm font-medium">Nueva Póliza</span>
        </CardContent>
      </Card>
      
      <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
        <CardContent className="p-4 text-center flex flex-col items-center justify-center">
          <Button variant="outline" size="icon" className="h-10 w-10 rounded-full mb-3">
            <AlertTriangle className="h-5 w-5 text-insurance-blue" />
          </Button>
          <span className="text-sm font-medium">Nuevo Siniestro</span>
        </CardContent>
      </Card>
      
      <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
        <CardContent className="p-4 text-center flex flex-col items-center justify-center">
          <Button variant="outline" size="icon" className="h-10 w-10 rounded-full mb-3">
            <Building className="h-5 w-5 text-insurance-blue" />
          </Button>
          <span className="text-sm font-medium">Aseguradora</span>
        </CardContent>
      </Card>
      
      <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
        <CardContent className="p-4 text-center flex flex-col items-center justify-center">
          <Button variant="outline" size="icon" className="h-10 w-10 rounded-full mb-3">
            <Tag className="h-5 w-5 text-insurance-blue" />
          </Button>
          <span className="text-sm font-medium">Nuevo Ramo</span>
        </CardContent>
      </Card>
      
      {/* Actualizar la card de Cotización con el onClick y cursor pointer */}
      <Card 
        className="bg-white shadow-sm hover:shadow-md transition-shadow cursor-pointer"
        onClick={handleQuoteClick}
      >
        <CardContent className="p-4 text-center flex flex-col items-center justify-center">
          <Button variant="outline" size="icon" className="h-10 w-10 rounded-full mb-3">
            <FileSearch className="h-5 w-5 text-insurance-blue" />
          </Button>
          <span className="text-sm font-medium">Cotización</span>
          <span className="text-xs text-gray-500 mt-1">3 nuevas</span>
        </CardContent>
      </Card>
    </div>
  );
};

export { DashboardActionCards };