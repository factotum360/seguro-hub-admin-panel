
import React from 'react';
import AdminLayout from '@/components/layout/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

interface PagePlaceholderProps {
  title: string;
  icon: React.ReactNode;
  description: string;
}

const PagePlaceholder = ({ title, icon, description }: PagePlaceholderProps) => {
  const navigate = useNavigate();
  
  return (
    <AdminLayout>
      <div className="space-y-6 animate-fade-in">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => navigate(-1)}
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Volver
            </button>
          </div>
        </div>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="bg-blue-100 p-2 rounded-full">
                {icon}
              </div>
              <CardTitle>{title}</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-500">{description}</p>
            <div className="flex justify-center items-center h-80">
              <div className="text-center">
                <div className="text-6xl opacity-20 mb-4">{icon}</div>
                <p className="text-xl font-medium">Página en construcción</p>
                <p className="text-gray-500 mt-2">Esta funcionalidad estará disponible próximamente</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default PagePlaceholder;
