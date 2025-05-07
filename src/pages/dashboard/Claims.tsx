
import React from 'react';
import AdminLayout from '@/components/layout/AdminLayout';
import { FileText, AlertTriangle } from 'lucide-react';
import PagePlaceholder from '@/components/layout/PagePlaceholder';
import { useParams } from 'react-router-dom';

const Claims = () => {
  const params = useParams();
  
  // Check if we're on a specific claim or specific view
  if (params.id) {
    return (
      <PagePlaceholder 
        title={`Detalle de Siniestro #${params.id}`}
        icon={<AlertTriangle className="h-5 w-5 text-insurance-red" />}
        description="Vista detallada del siniestro, incluyendo información del cliente, fechas, estado y documentos asociados."
      />
    );
  }
  
  return (
    <AdminLayout>
      <div className="space-y-6 animate-fade-in">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">Siniestros</h1>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500">Última actualización: Mayo 7, 2025 - 09:45 AM</span>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium">Pendientes</h3>
              <div className="bg-yellow-100 p-2 rounded-full">
                <AlertTriangle className="h-5 w-5 text-yellow-500" />
              </div>
            </div>
            <p className="text-3xl font-bold mt-2">8</p>
            <p className="text-sm text-gray-500 mt-1">2 nuevos esta semana</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium">En proceso</h3>
              <div className="bg-blue-100 p-2 rounded-full">
                <FileText className="h-5 w-5 text-blue-500" />
              </div>
            </div>
            <p className="text-3xl font-bold mt-2">12</p>
            <p className="text-sm text-gray-500 mt-1">5 actualizados hoy</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium">Resueltos</h3>
              <div className="bg-green-100 p-2 rounded-full">
                <FileText className="h-5 w-5 text-green-500" />
              </div>
            </div>
            <p className="text-3xl font-bold mt-2">15</p>
            <p className="text-sm text-gray-500 mt-1">Este mes</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium">Rechazados</h3>
              <div className="bg-red-100 p-2 rounded-full">
                <FileText className="h-5 w-5 text-red-500" />
              </div>
            </div>
            <p className="text-3xl font-bold mt-2">3</p>
            <p className="text-sm text-gray-500 mt-1">Este mes</p>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold mb-4">Listado de Siniestros</h2>
          <div className="opacity-50 flex justify-center items-center p-20">
            <p className="text-lg">Implementación pendiente del listado de siniestros</p>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Claims;
