
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AdminLayout from '@/components/layout/AdminLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Calendar,
  CreditCard, 
  DollarSign, 
  FileText, 
  PieChart, 
  UserCheck,
  ArrowRight
} from 'lucide-react';
import { Chart } from '@/components/ui/chart';
import DashboardStatCard from '@/components/dashboard/DashboardStatCard';
import TasksList from '@/components/dashboard/TasksList';
import BirthdaysList from '@/components/dashboard/BirthdaysList';
import RecentPoliciesTable from '@/components/dashboard/RecentPoliciesTable';
import DashboardActionCards from '@/components/dashboard/DashboardActionCards';
import { useCurrency } from '@/contexts/CurrencyContext';
import { Button } from '@/components/ui/button';

const Dashboard = () => {
  const navigate = useNavigate();
  const { currency, formatCurrency } = useCurrency();

  // Updated colors based on the requirements
  const activeColor = "#27AE60";  // Verde
  const renewalColor = "#E67E22"; // Naranja
  const expiredColor = "#E74C3C";  // Rojo
  const expeditionColor = "#3498DB";  // Azul

  return (
    <AdminLayout>
      <div className="space-y-6 animate-fade-in">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">Panel de Control</h1>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500">Última actualización: Mayo 7, 2025 - 10:30 AM</span>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <DashboardStatCard
            title="Cotizaciones"
            value="24"
            description="3 nuevas hoy"
            icon={FileText}
            trend={{
              value: "+12%",
              positive: true
            }}
            color="blue"
          />
          <Link to="/dashboard/policies?estado=por-renovar" className="block">
            <DashboardStatCard
              title="Pólizas Por Renovar"
              value="17"
              description="5 esta semana"
              icon={Calendar}
              trend={{
                value: "-2%",
                positive: false
              }}
              color="yellow"
            />
          </Link>
          <Link to="/dashboard/policies?estado=vencidas" className="block">
            <DashboardStatCard
              title="Pólizas Vencidas"
              value="8"
              description="2 nuevas este mes"
              icon={FileText}
              trend={{
                value: "+5%",
                positive: false
              }}
              color="red"
            />
          </Link>
          <Link to="/dashboard/policies?estado=expedicion" className="block">
            <DashboardStatCard
              title="En Expedición"
              value="12"
              description="4 desde ayer"
              icon={FileText}
              trend={{
                value: "+8%",
                positive: true
              }}
              color="green"
            />
          </Link>
        </div>

        {/* Quick Action Cards */}
        <DashboardActionCards />

        {/* Main Content Area */}
        <div className="grid gap-6 md:grid-cols-6">
          {/* Left side (4 cols on larger screens) */}
          <div className="md:col-span-4 space-y-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <div>
                  <CardTitle>Resumen de Pólizas</CardTitle>
                  <CardDescription>Distribución de pólizas por ramo</CardDescription>
                </div>
                <Tabs defaultValue="mensual">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="mensual">Mensual</TabsTrigger>
                    <TabsTrigger value="trimestral">Trimestral</TabsTrigger>
                    <TabsTrigger value="anual">Anual</TabsTrigger>
                  </TabsList>
                </Tabs>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <Chart 
                    options={{
                      chart: { type: 'bar', stacked: false },
                      xaxis: { categories: ["Auto", "Hogar", "Vida", "Salud", "Empresarial"] },
                      tooltip: { shared: true, intersect: false },
                      colors: [activeColor, renewalColor, expiredColor]
                    }}
                    series={[
                      { name: "Activas", data: [65, 34, 28, 42, 20] },
                      { name: "Por renovar", data: [12, 8, 5, 10, 7] },
                      { name: "Vencidas", data: [5, 2, 1, 3, 2] },
                    ]}
                    type="bar"
                    height={320}
                  />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Pólizas Recientes</CardTitle>
                  <CardDescription>
                    Últimas pólizas registradas en el sistema
                  </CardDescription>
                </div>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => navigate('/dashboard/policies')}
                >
                  Ver todas <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent>
                <RecentPoliciesTable />
              </CardContent>
            </Card>
          </div>

          {/* Right side (2 cols on larger screens) */}
          <div className="md:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Clientes Activos</CardTitle>
                <CardDescription>Porcentaje de clientes en seguimiento</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center space-y-4">
                  <div className="relative flex items-center justify-center h-40 w-40">
                    <div className="absolute text-2xl font-bold">76%</div>
                    <Chart 
                      options={{
                        chart: { type: 'donut' },
                        labels: ['Activos', 'Inactivos'],
                        colors: [activeColor, '#e4e4e7'],
                        legend: { show: false },
                        plotOptions: {
                          pie: {
                            donut: {
                              size: '85%'
                            }
                          }
                        },
                        dataLabels: { enabled: false },
                      }}
                      series={[76, 24]}
                      type="donut"
                      width="100%"
                      height={160}
                    />
                  </div>
                  <div className="text-sm text-gray-500 text-center">
                    <div className="flex items-center gap-2 justify-center">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: activeColor }}></div>
                      <span>152 clientes activos</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center mt-2">
                      <div className="w-3 h-3 rounded-full bg-gray-200"></div>
                      <span>48 clientes inactivos</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Tareas</CardTitle>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => navigate('/dashboard/tasks')}
                >
                  Ver todas <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent>
                <TasksList />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Próximos Cumpleaños</CardTitle>
                <CardDescription>Clientes con cumpleaños en los próximos 5 días</CardDescription>
              </CardHeader>
              <CardContent>
                <BirthdaysList />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Resumen de Siniestros</CardTitle>
                <CardDescription>Estado de siniestros reportados</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center text-sm">
                  <div className="font-medium">Pendientes</div>
                  <div className="text-gray-500">8 siniestros</div>
                </div>
                <Progress value={40} className="h-2" />
                
                <div className="flex justify-between items-center text-sm">
                  <div className="font-medium">En proceso</div>
                  <div className="text-gray-500">12 siniestros</div>
                </div>
                <Progress value={60} className="h-2 bg-gray-100">
                  <div className="h-full" style={{ backgroundColor: renewalColor, borderRadius: '0.25rem' }} />
                </Progress>
                
                <div className="flex justify-between items-center text-sm">
                  <div className="font-medium">Resueltos (este mes)</div>
                  <div className="text-gray-500">15 siniestros</div>
                </div>
                <Progress value={75} className="h-2 bg-gray-100">
                  <div className="h-full" style={{ backgroundColor: activeColor, borderRadius: '0.25rem' }} />
                </Progress>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Cobros Pendientes</CardTitle>
                <CardDescription>Cobros con más de 90 días</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold">{formatCurrency(24560)}</div>
                  <DollarSign className="h-12 w-12" style={{ color: `${expiredColor}20` }} />
                </div>
                <div className="text-sm mt-2" style={{ color: expiredColor }}>
                  12 pólizas con pagos atrasados
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
