
import React, { useEffect, useState } from 'react';
import { Clipboard, Plus, Search, Filter, MoreHorizontal, Download } from 'lucide-react';
import PagePlaceholder from '@/components/layout/PagePlaceholder';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import AdminLayout from '@/components/layout/AdminLayout';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';

type QuoteStatus = 'pending' | 'sent' | 'accepted' | 'rejected' | 'expired';

type Quote = {
  id: string;
  quote_number: string;
  client_name: string;
  insurance_type: string;
  insurer: string;
  date_created: string;
  expiry_date: string;
  amount: string;
  status: QuoteStatus;
};

const Quotes = () => {
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Check if we came from the dashboard by looking for state
    const fromDashboard = location.state?.fromDashboard;
    
    if (fromDashboard) {
      toast.info('Bienvenido a la sección de cotizaciones', {
        description: 'Aquí podrás gestionar todas tus cotizaciones.',
      });
    }

    fetchQuotes();
  }, [location]);

  // Function to fetch quotes from Supabase
  const fetchQuotes = async () => {
    try {
      setLoading(true);
      
      // Placeholder query - replace with actual implementation based on your database structure
      // const { data, error } = await supabase.from('quotes').select('*');
      
      // For now, we'll use mock data since we don't know your exact table structure
      const mockQuotes: Quote[] = [
        {
          id: '1',
          quote_number: 'COT-2025-001',
          client_name: 'Juan Pérez',
          insurance_type: 'Auto',
          insurer: 'Mapfre',
          date_created: '01/05/2025',
          expiry_date: '15/05/2025',
          amount: '$1,250.00',
          status: 'pending',
        },
        {
          id: '2',
          quote_number: 'COT-2025-002',
          client_name: 'María González',
          insurance_type: 'Hogar',
          insurer: 'Allianz',
          date_created: '02/05/2025',
          expiry_date: '16/05/2025',
          amount: '$950.00',
          status: 'sent',
        },
        {
          id: '3',
          quote_number: 'COT-2025-003',
          client_name: 'Carlos Rodríguez',
          insurance_type: 'Vida',
          insurer: 'AXA',
          date_created: '03/05/2025',
          expiry_date: '17/05/2025',
          amount: '$1,800.00',
          status: 'accepted',
        },
        {
          id: '4',
          quote_number: 'COT-2025-004',
          client_name: 'Ana López',
          insurance_type: 'Salud',
          insurer: 'BUPA',
          date_created: '04/05/2025',
          expiry_date: '18/05/2025',
          amount: '$2,300.00',
          status: 'rejected',
        },
        {
          id: '5',
          quote_number: 'COT-2025-005',
          client_name: 'Pedro Martínez',
          insurance_type: 'Auto',
          insurer: 'MeryNatera',
          date_created: '05/05/2025',
          expiry_date: '19/05/2025',
          amount: '$1,150.00',
          status: 'pending',
        },
      ];
      
      setQuotes(mockQuotes);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching quotes:', error);
      toast.error('Error al cargar las cotizaciones');
      setLoading(false);
    }
  };

  // Obtener un color de insignia según el estado
  const getStatusBadge = (status: QuoteStatus) => {
    switch (status) {
      case 'pending':
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Pendiente</Badge>;
      case 'sent':
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Enviada</Badge>;
      case 'accepted':
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Aceptada</Badge>;
      case 'rejected':
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Rechazada</Badge>;
      case 'expired':
        return <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">Vencida</Badge>;
      default:
        return null;
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6 animate-fade-in">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Cotizaciones</h1>
            <p className="text-gray-500 text-sm">Gestiona y visualiza todas las cotizaciones</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Exportar
            </Button>
            <Button className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Nueva Cotización
            </Button>
          </div>
        </div>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Lista de Cotizaciones</CardTitle>
            <CardDescription>
              {loading ? 'Cargando...' : `Mostrando ${quotes.length} cotizaciones en total`}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input placeholder="Buscar cotización..." className="pl-10" />
              </div>
              <div className="flex flex-row gap-2">
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Estado" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos</SelectItem>
                    <SelectItem value="pending">Pendientes</SelectItem>
                    <SelectItem value="sent">Enviadas</SelectItem>
                    <SelectItem value="accepted">Aceptadas</SelectItem>
                    <SelectItem value="rejected">Rechazadas</SelectItem>
                    <SelectItem value="expired">Vencidas</SelectItem>
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
                    <TableHead>Nº Cotización</TableHead>
                    <TableHead className="hidden md:table-cell">Cliente</TableHead>
                    <TableHead className="hidden md:table-cell">Tipo</TableHead>
                    <TableHead className="hidden md:table-cell">Aseguradora</TableHead>
                    <TableHead className="hidden md:table-cell">Fecha</TableHead>
                    <TableHead className="hidden md:table-cell">Vence</TableHead>
                    <TableHead className="hidden md:table-cell">Monto</TableHead>
                    <TableHead>Estado</TableHead>
                    <TableHead className="w-[50px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {loading ? (
                    <TableRow>
                      <TableCell colSpan={9} className="text-center py-4">Cargando cotizaciones...</TableCell>
                    </TableRow>
                  ) : quotes.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={9} className="text-center py-4">No hay cotizaciones disponibles</TableCell>
                    </TableRow>
                  ) : (
                    quotes.map((quote) => (
                      <TableRow key={quote.id}>
                        <TableCell className="font-medium">{quote.quote_number}</TableCell>
                        <TableCell className="hidden md:table-cell">{quote.client_name}</TableCell>
                        <TableCell className="hidden md:table-cell">{quote.insurance_type}</TableCell>
                        <TableCell className="hidden md:table-cell">{quote.insurer}</TableCell>
                        <TableCell className="hidden md:table-cell">{quote.date_created}</TableCell>
                        <TableCell className="hidden md:table-cell">{quote.expiry_date}</TableCell>
                        <TableCell className="hidden md:table-cell">{quote.amount}</TableCell>
                        <TableCell>{getStatusBadge(quote.status)}</TableCell>
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
                              <DropdownMenuItem>Enviar al cliente</DropdownMenuItem>
                              <DropdownMenuItem>Convertir a póliza</DropdownMenuItem>
                              <DropdownMenuItem className="text-red-600">Eliminar</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
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

export default Quotes;
