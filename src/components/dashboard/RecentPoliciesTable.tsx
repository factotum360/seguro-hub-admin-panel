
import React from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MoreHorizontal } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

type PolicyStatus = 'active' | 'pending' | 'expired' | 'canceled';

type Policy = {
  id: string;
  policyNumber: string;
  customer: string;
  insuranceType: string;
  insurer: string;
  startDate: string;
  endDate: string;
  premium: string;
  status: PolicyStatus;
};

const RecentPoliciesTable = () => {
  // Datos simulados de pólizas
  const policies: Policy[] = [
    {
      id: '1',
      policyNumber: 'POL-2023-001',
      customer: 'Juan Pérez',
      insuranceType: 'Auto',
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
      insurer: 'Zurich',
      startDate: '20/04/2025',
      endDate: '19/04/2026',
      premium: '$1,350.00',
      status: 'active',
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
      default:
        return null;
    }
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Nº Póliza</TableHead>
          <TableHead>Cliente</TableHead>
          <TableHead className="hidden md:table-cell">Tipo</TableHead>
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
            <TableCell>{policy.customer}</TableCell>
            <TableCell className="hidden md:table-cell">{policy.insuranceType}</TableCell>
            <TableCell className="hidden md:table-cell">{policy.insurer}</TableCell>
            <TableCell className="hidden md:table-cell">{`${policy.startDate} - ${policy.endDate}`}</TableCell>
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
                  <DropdownMenuItem>Renovar</DropdownMenuItem>
                  <DropdownMenuItem>Cancelar</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default RecentPoliciesTable;
