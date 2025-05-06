
import React from 'react';
import AdminLayout from '@/components/layout/AdminLayout';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { 
  Download,
  FileText, 
  Filter, 
  MoreHorizontal, 
  Phone, 
  Plus, 
  Search, 
  UserPlus 
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

type ClientStatus = 'active' | 'inactive' | 'prospect';

type Client = {
  id: string;
  name: string;
  email: string;
  phone: string;
  policies: number;
  claims: number;
  status: ClientStatus;
  lastContact: string;
  initials: string;
};

const Clients = () => {
  // Datos simulados de clientes
  const clients: Client[] = [
    {
      id: '1',
      name: 'Juan Pérez',
      email: 'juan.perez@example.com',
      phone: '+1234567890',
      policies: 3,
      claims: 1,
      status: 'active',
      lastContact: '02/05/2025',
      initials: 'JP',
    },
    {
      id: '2',
      name: 'María González',
      email: 'maria.gonzalez@example.com',
      phone: '+1234567891',
      policies: 2,
      claims: 0,
      status: 'active',
      lastContact: '28/04/2025',
      initials: 'MG',
    },
    {
      id: '3',
      name: 'Carlos Rodríguez',
      email: 'carlos.rodriguez@example.com',
      phone: '+1234567892',
      policies: 1,
      claims: 1,
      status: 'active',
      lastContact: '15/04/2025',
      initials: 'CR',
    },
    {
      id: '4',
      name: 'Ana López',
      email: 'ana.lopez@example.com',
      phone: '+1234567893',
      policies: 0,
      claims: 0,
      status: 'prospect',
      lastContact: '10/04/2025',
      initials: 'AL',
    },
    {
      id: '5',
      name: 'Pedro Martínez',
      email: 'pedro.martinez@example.com',
      phone: '+1234567894',
      policies: 4,
      claims: 2,
      status: 'active',
      lastContact: '05/04/2025',
      initials: 'PM',
    },
    {
      id: '6',
      name: 'Laura Sánchez',
      email: 'laura.sanchez@example.com',
      phone: '+1234567895',
      policies: 1,
      claims: 0,
      status: 'inactive',
      lastContact: '01/04/2025',
      initials: 'LS',
    },
    {
      id: '7',
      name: 'Miguel Torres',
      email: 'miguel.torres@example.com',
      phone: '+1234567896',
      policies: 2,
      claims: 1,
      status: 'active',
      lastContact: '28/03/2025',
      initials: 'MT',
    },
  ];

  // Obtener un color de insignia según el estado
  const getStatusBadge = (status: ClientStatus) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Activo</Badge>;
      case 'inactive':
        return <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">Inactivo</Badge>;
      case 'prospect':
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Prospecto</Badge>;
      default:
        return null;
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6 animate-fade-in">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Clientes</h1>
            <p className="text-gray-500 text-sm">Gestiona y visualiza todos tus clientes</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Exportar
            </Button>
            <Button className="flex items-center gap-2">
              <UserPlus className="h-4 w-4" />
              Nuevo Cliente
            </Button>
          </div>
        </div>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Lista de Clientes</CardTitle>
            <CardDescription>
              Mostrando {clients.length} clientes en total
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input placeholder="Buscar cliente..." className="pl-10" />
              </div>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Filtros
              </Button>
            </div>
            
            <div className="border rounded-lg overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Cliente</TableHead>
                    <TableHead className="hidden md:table-cell">Email</TableHead>
                    <TableHead className="hidden md:table-cell">Teléfono</TableHead>
                    <TableHead className="hidden md:table-cell">Pólizas</TableHead>
                    <TableHead className="hidden md:table-cell">Siniestros</TableHead>
                    <TableHead>Estado</TableHead>
                    <TableHead className="hidden md:table-cell">Último contacto</TableHead>
                    <TableHead className="w-[50px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {clients.map((client) => (
                    <TableRow key={client.id}>
                      <TableCell className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback className="bg-insurance-blue/10 text-insurance-blue text-xs">
                            {client.initials}
                          </AvatarFallback>
                        </Avatar>
                        <div className="font-medium">{client.name}</div>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">{client.email}</TableCell>
                      <TableCell className="hidden md:table-cell">{client.phone}</TableCell>
                      <TableCell className="hidden md:table-cell">
                        <div className="flex items-center">
                          <FileText className="h-4 w-4 mr-1 text-gray-400" />
                          {client.policies}
                        </div>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">{client.claims}</TableCell>
                      <TableCell>{getStatusBadge(client.status)}</TableCell>
                      <TableCell className="hidden md:table-cell">{client.lastContact}</TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>Ver detalles</DropdownMenuItem>
                            <DropdownMenuItem>Editar</DropdownMenuItem>
                            <DropdownMenuItem>Ver pólizas</DropdownMenuItem>
                            <DropdownMenuItem>Ver siniestros</DropdownMenuItem>
                            <DropdownMenuItem>
                              <Phone className="h-4 w-4 mr-2" />
                              Llamar
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">Desactivar</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            
            <div className="flex items-center justify-between mt-4">
              <div className="text-sm text-gray-500">
                Mostrando página 1 de 1
              </div>
              <div className="flex gap-1">
                <Button variant="outline" size="sm" disabled>
                  Anterior
                </Button>
                <Button variant="outline" size="sm" disabled>
                  Siguiente
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default Clients;
