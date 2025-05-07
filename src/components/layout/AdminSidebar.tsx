
import React from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { 
  Home, 
  Users, 
  FileText, 
  Briefcase, 
  CreditCard, 
  AlertTriangle, 
  Phone, 
  UserCheck, 
  Tag, 
  Building, 
  CheckSquare, 
  Calendar, 
  Bell, 
  BarChart2, 
  Settings,
  FolderOpen,
  FileCheck,
  Clipboard
} from 'lucide-react';

type SidebarItemProps = {
  icon: React.ElementType;
  label: string;
  to: string;
  active?: boolean;
  id?: string;
};

const SidebarItem = ({ icon: Icon, label, to, active = false, id }: SidebarItemProps) => {
  return (
    <Link 
      to={to} 
      className={cn(
        'sidebar-item', 
        active && 'active',
        'transition-all duration-300'
      )}
      id={id}
      data-sidebar-item={id}
    >
      <Icon size={18} />
      <span className="text-sm">{label}</span>
    </Link>
  );
};

type SidebarCategoryProps = {
  title: string;
};

const SidebarCategory = ({ title }: SidebarCategoryProps) => {
  return <div className="sidebar-category">{title}</div>;
};

type AdminSidebarProps = {
  open: boolean;
};

const AdminSidebar = ({ open }: AdminSidebarProps) => {
  // Get current path for highlighting active link
  const pathname = window.location.pathname;

  // Add CSS for highlight animation to document head
  React.useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      .highlight-item {
        animation: pulse 1s ease-in-out;
        background-color: rgba(59, 130, 246, 0.15);
      }
      
      @keyframes pulse {
        0% { background-color: rgba(59, 130, 246, 0.1); }
        50% { background-color: rgba(59, 130, 246, 0.3); }
        100% { background-color: rgba(59, 130, 246, 0.1); }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <aside className={cn(
      "bg-sidebar h-screen overflow-y-auto overflow-x-hidden transition-all duration-300",
      open ? "w-64" : "w-0 md:w-16"
    )}>
      <div className="px-4 py-5 flex justify-center items-center">
        <div className={cn(
          "text-white font-bold text-xl transition-all duration-300",
          open ? "opacity-100" : "opacity-0 md:opacity-100"
        )}>
          {open ? (
            "SeguroHub"
          ) : (
            "SH"
          )}
        </div>
      </div>

      <nav className="mt-5 px-2 space-y-1">
        <SidebarItem 
          icon={Home} 
          label="Dashboard" 
          to="/dashboard" 
          active={pathname === '/dashboard'}
          id="dashboard"
        />

        <SidebarCategory title="Principales" />
        <SidebarItem 
          icon={Users} 
          label="Clientes" 
          to="/dashboard/clients" 
          active={pathname.includes('/dashboard/clients')}
          id="clients"
        />
        <SidebarItem 
          icon={FileText} 
          label="Pólizas" 
          to="/dashboard/policies" 
          active={pathname.includes('/dashboard/policies')}
          id="policies"
        />
        <SidebarItem 
          icon={AlertTriangle} 
          label="Siniestros" 
          to="/dashboard/claims" 
          active={pathname.includes('/dashboard/claims')}
          id="claims"
        />
        <SidebarItem 
          icon={Briefcase} 
          label="Ventas" 
          to="/dashboard/sales" 
          active={pathname.includes('/dashboard/sales')}
          id="sales"
        />
        <SidebarItem 
          icon={CreditCard} 
          label="Cobros" 
          to="/dashboard/payments" 
          active={pathname.includes('/dashboard/payments')}
          id="payments"
        />

        <SidebarCategory title="Gestión" />
        <SidebarItem 
          icon={Phone} 
          label="Leads" 
          to="/dashboard/leads" 
          active={pathname.includes('/dashboard/leads')}
          id="leads"
        />
        <SidebarItem 
          icon={UserCheck} 
          label="Agentes" 
          to="/dashboard/agents" 
          active={pathname.includes('/dashboard/agents')}
          id="agents"
        />
        <SidebarItem 
          icon={Tag} 
          label="Ramos" 
          to="/dashboard/branches" 
          active={pathname.includes('/dashboard/branches')}
          id="branches"
        />
        <SidebarItem 
          icon={Building} 
          label="Aseguradoras" 
          to="/dashboard/insurers" 
          active={pathname.includes('/dashboard/insurers')}
          id="insurers"
        />
        <SidebarItem 
          icon={CheckSquare} 
          label="Tareas" 
          to="/dashboard/tasks" 
          active={pathname.includes('/dashboard/tasks')}
          id="tasks"
        />
        <SidebarItem 
          icon={Calendar} 
          label="Calendario" 
          to="/dashboard/calendar" 
          active={pathname.includes('/dashboard/calendar')}
          id="calendar"
        />
        <SidebarItem 
          icon={Bell} 
          label="Notificaciones" 
          to="/dashboard/notifications" 
          active={pathname.includes('/dashboard/notifications')}
          id="notifications"
        />
        
        <SidebarCategory title="Reportes" />
        <SidebarItem 
          icon={BarChart2} 
          label="Estadísticas" 
          to="/dashboard/statistics" 
          active={pathname.includes('/dashboard/statistics')}
          id="statistics"
        />
        <SidebarItem 
          icon={Clipboard} 
          label="Cotizaciones" 
          to="/dashboard/quotes" 
          active={pathname.includes('/dashboard/quotes')}
          id="quotes"
        />
        <SidebarItem 
          icon={FolderOpen} 
          label="Archivos" 
          to="/dashboard/files" 
          active={pathname.includes('/dashboard/files')}
          id="files"
        />
        <SidebarItem 
          icon={FileCheck} 
          label="Facturas" 
          to="/dashboard/invoices" 
          active={pathname.includes('/dashboard/invoices')}
          id="invoices"
        />
        
        <SidebarCategory title="Sistema" />
        <SidebarItem 
          icon={Settings} 
          label="Configuración" 
          to="/dashboard/settings" 
          active={pathname.includes('/dashboard/settings')}
          id="settings"
        />
      </nav>
    </aside>
  );
};

export default AdminSidebar;
