
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
  Calendar,
  Download,
  FileText, 
  Filter, 
  MoreHorizontal, 
  Plus, 
  Search, 
  User
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';

type PolicyStatus = 'active' | 'pending' | 'expired' | 'canceled' | 'renewal';

type Policy = {
  id: string;
  policyNumber: string;
  customer: string;
  insuranceType: string;
  branch: string;
  insurer: string;
  startDate: string;
  endDate: string;
  premium: string;
  status: PolicyStatus;
};

const Policies = () => {
  // Datos simulados de pólizas
  const policies: Policy[] = [
    {
      id: '1',
      policyNumber: 'POL-2023-001',
      customer: 'Juan Pérez',
      insuranceType: 'Auto',
      branch: 'Vehículos',
      insurer: 'Mapfre',
      startDate: '01/01/2025',
      endDate: '31/12/2025',
      premium: '$1,200.00',
      status: 'active',
    },
    {
      id: '2',
      policyNumber: 'POL-2023-002',
      customer: 'María González',
      insuranceType: 'Hogar',
      branch: 'Residencial',
      insurer: 'Allianz',
      startDate: '15/02/2025',
      endDate: '14/02/2026',
      premium: '$850.00',
      status: 'active',
    },
    {
      id: '3',
      policyNumber: 'POL-2023-003',
      customer: 'Carlos Rodríguez',
      insuranceType: 'Vida',
      branch: 'Vida',
      insurer: 'AXA',
      startDate: '10/03/2025',
      endDate: '09/03/2026',
      premium: '$1,500.00',
      status: 'pending',
    },
    {
      id: '4',
      policyNumber: 'POL-2023-004',
      customer: 'Ana López',
      insuranceType: 'Salud',
      branch: 'Salud',
      insurer: 'BUPA',
      startDate: '05/04/2024',
      endDate: '04/04/2025',
      premium: '$2,100.00',
      status: 'expired',
    },
    {
      id: '5',
      policyNumber: 'POL-2023-005',
      customer: 'Pedro Martínez',
      insuranceType: 'Auto',
      branch: 'Vehículos',
      insurer: 'Zurich',
      startDate: '20/04/2025',
      endDate: '19/04/2026',
      premium: '$1,350.00',
      status: 'active',
    },
    {
      id: '6',
      policyNumber: 'POL-2023-006',
      customer: 'Laura Sánchez',
      insuranceType: 'RC Profesional',
      branch: 'Empresarial',
      insurer: 'Liberty',
      startDate: '01/05/2025',
      endDate: '30/04/2026',
      premium: '$3,200.00',
      status: 'active',
    },
    {
      id: '7',
      policyNumber: 'POL-2023-007',
      customer: 'Miguel Torres',
      insuranceType: 'Auto',
      branch: 'Vehículos',
      insurer: 'Mapfre',
      startDate: '10/05/2024',
      endDate: '09/05/2025',
      premium: '$1,150.00',
      status: 'renewal',
    },
  ];

  // Obtener un color de insignia según el estado
  const getStatusBadge = (status: PolicyStatus) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Activa</Badge>;
      case 'pending':
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Pendiente</Badge>;
      case 'expired':
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Vencida</Badge>;
      case 'canceled':
        return <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">Cancelada</Badge>;
      case 'renewal':
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Por renovar</Badge>;
      default:
        return null;
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6 animate-fade-in">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Pólizas</h1>
            <p className="text-gray-500 text-sm">Gestiona y visualiza todas las pólizas</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Exportar
            </Button>
            <Button className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Nueva Póliza
            </Button>
          </div>
        </div>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Lista de Pólizas</CardTitle>
            <CardDescription>
              Mostrando {policies.length} pólizas en total
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input placeholder="Buscar póliza..." className="pl-10" />
              </div>
              <div className="flex flex-row gap-2">
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Estado" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="all">Todos</SelectItem>
                      <SelectItem value="active">Activas</SelectItem>
                      <SelectItem value="pending">Pendientes</SelectItem>
                      <SelectItem value="renewal">Por renovar</SelectItem>
                      <SelectItem value="expired">Vencidas</SelectItem>
                      <SelectItem value="canceled">Canceladas</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <Button variant="outline" className="flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  Más Filtros
                </Button>
              </div>
            </div>
            
            <div className="border rounded-lg overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nº Póliza</TableHead>
                    <TableHead className="hidden md:table-cell">Cliente</TableHead>
                    <TableHead className="hidden md:table-cell">Tipo</TableHead>
                    <TableHead className="hidden md:table-cell">Ramo</TableHead>
                    <TableHead className="hidden md:table-cell">Aseguradora</TableHead>
                    <TableHead className="hidden md:table-cell">Vigencia</TableHead>
                    <TableHead className="hidden md:table-cell">Prima</TableHead>
                    <TableHead>Estado</TableHead>
                    <TableHead className="w-[50px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {policies.map((policy) => (
                    <TableRow key={policy.id}>
                      <TableCell className="font-medium">{policy.policyNumber}</TableCell>
                      <TableCell className="hidden md:table-cell">{policy.customer}</TableCell>
                      <TableCell className="hidden md:table-cell">{policy.insuranceType}</TableCell>
                      <TableCell className="hidden md:table-cell">{policy.branch}</TableCell>
                      <TableCell className="hidden md:table-cell">{policy.insurer}</TableCell>
                      <TableCell className="hidden md:table-cell">
                        <div className="flex items-center text-sm">
                          <Calendar className="h-3 w-3 mr-1 text-gray-400" />
                          {policy.startDate} - {policy.endDate}
                        </div>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">{policy.premium}</TableCell>
                      <TableCell>{getStatusBadge(policy.status)}</TableCell>
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
                            <DropdownMenuItem>Ver cliente</DropdownMenuItem>
                            <DropdownMenuItem>Renovar</DropdownMenuItem>
                            <DropdownMenuItem>Reportar siniestro</DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">Cancelar</DropdownMenuItem>
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

export default Policies;
