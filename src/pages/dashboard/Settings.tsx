
import React from 'react';
import AdminLayout from '@/components/layout/AdminLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';
import { Settings as SettingsIcon, Users, Bell, Shield, DollarSign } from 'lucide-react';

const Settings = () => {
  return (
    <AdminLayout>
      <div className="space-y-6 animate-fade-in">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">Configuración</h1>
        </div>

        <Tabs defaultValue="general">
          <TabsList className="grid grid-cols-5 w-full max-w-3xl">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="users">Usuarios</TabsTrigger>
            <TabsTrigger value="notifications">Notificaciones</TabsTrigger>
            <TabsTrigger value="roles">Roles</TabsTrigger>
            <TabsTrigger value="currency">Moneda</TabsTrigger>
          </TabsList>
          
          <TabsContent value="general" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Configuración General</CardTitle>
                <CardDescription>Configura las opciones generales del sistema</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="opacity-50 flex justify-center items-center p-20">
                  <p className="text-lg">Implementación pendiente</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="users" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Usuarios</CardTitle>
                <CardDescription>Gestión de usuarios del sistema</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="opacity-50 flex justify-center items-center p-20">
                  <p className="text-lg">Implementación pendiente</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="notifications" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Notificaciones</CardTitle>
                <CardDescription>Configura las notificaciones del sistema</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="opacity-50 flex justify-center items-center p-20">
                  <p className="text-lg">Implementación pendiente</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="roles" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Roles</CardTitle>
                <CardDescription>Gestión de roles y permisos</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="opacity-50 flex justify-center items-center p-20">
                  <p className="text-lg">Implementación pendiente</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="currency" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Moneda</CardTitle>
                <CardDescription>Configuración de moneda y tasas de cambio</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Gestiona la configuración de monedas y tasas de cambio del sistema.</p>
                
                <Link 
                  to="/dashboard/settings/currency"
                  className="inline-flex items-center px-4 py-2 bg-insurance-blue text-white rounded-md hover:bg-insurance-blue/90"
                >
                  <DollarSign className="h-4 w-4 mr-2" />
                  Ir a configuración de moneda
                </Link>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  );
};

export default Settings;
