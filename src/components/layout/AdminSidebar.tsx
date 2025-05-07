import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  LayoutDashboard, 
  Users, 
  FileText, 
  AlertCircle, 
  Mail, 
  Calendar, 
  Banknote, 
  FileArchive, 
  Settings, 
  ChevronRight,
  FileSearch, // Agregado para cotizaciones
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Logo from './Logo';

interface SidebarProps {
  isOpen: boolean;
  onClose?: () => void;
}

interface SidebarItemProps {
  icon: React.FC<{ className?: string }>;
  label: string;
  href: string;
  isActive: boolean;
  hasSubMenu?: boolean;
  onClick?: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon: Icon,
  label,
  href,
  isActive,
  hasSubMenu = false,
  onClick
}) => {
  return (
    <Link
      to={href}
      onClick={onClick}
      className={cn(
        "flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
        isActive ? "bg-blue-50 text-blue-800" : "hover:bg-gray-100"
      )}
    >
      <Icon className={cn("h-5 w-5", isActive ? "text-blue-600" : "text-gray-500")} />
      <span className="flex-1">{label}</span>
      {hasSubMenu && <ChevronRight className="h-4 w-4" />}
    </Link>
  );
};

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation();
  
  const handleItemClick = () => {
    if (onClose) {
      onClose();
    }
  };
  
  return (
    <aside 
      className={cn(
        "fixed inset-y-0 left-0 z-20 flex w-64 flex-col border-r bg-white transition-transform duration-300 ease-in-out md:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <div className="flex h-16 items-center border-b px-6">
        <h1 className="text-2xl font-bold text-blue-700">Hubseguros</h1>
      </div>
      
      <div className="flex-1 overflow-y-auto p-3">
        <nav className="flex flex-col gap-1">
          {/* PRINCIPALES */}
          <div className="mb-4">
            <h2 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
              Principales
            </h2>
            <SidebarItem
              icon={Home}
              label="Inicio"
              href="/"
              isActive={location.pathname === '/'}
              onClick={handleItemClick}
            />
            <SidebarItem
              icon={LayoutDashboard}
              label="Dashboard"
              href="/dashboard"
              isActive={location.pathname === '/dashboard'}
              onClick={handleItemClick}
            />
            <SidebarItem
              icon={Users}
              label="Clientes"
              href="/clients"
              isActive={location.pathname === '/clients'}
              onClick={handleItemClick}
            />
            <SidebarItem
              icon={FileText}
              label="Pólizas"
              href="/policies"
              isActive={location.pathname === '/policies'}
              onClick={handleItemClick}
            />
            <SidebarItem
              icon={AlertCircle}
              label="Siniestros"
              href="/claims"
              isActive={location.pathname === '/claims'}
              onClick={handleItemClick}
            />
            <SidebarItem
              icon={Calendar}
              label="Tareas"
              href="/tasks"
              isActive={location.pathname === '/tasks'}
              onClick={handleItemClick}
            />
            <SidebarItem
              icon={Mail}
              label="Correos"
              href="/emails"
              isActive={location.pathname === '/emails'}
              onClick={handleItemClick}
            />
            <SidebarItem
              icon={Banknote}
              label="Pagos"
              href="/payments"
              isActive={location.pathname === '/payments'}
              onClick={handleItemClick}
            />
          </div>

          {/* REPORTES */}
          <div className="mb-4">
            <h2 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
              Reportes
            </h2>
            
            {/* Sección de Cotizaciones con ID para vinculación */}
            <div id="sidebar-cotizaciones">
              <SidebarItem
                icon={FileSearch}
                label="Cotizaciones"
                href="/quotes"
                isActive={location.pathname === '/quotes'}
                onClick={handleItemClick}
              />
              <div className="ml-11 -mt-2">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  3 nuevas
                </span>
              </div>
            </div>

            <SidebarItem
              icon={FileArchive}
              label="Archivos"
              href="/files"
              isActive={location.pathname === '/files'}
              onClick={handleItemClick}
            />
          </div>
          
          {/* SISTEMA */}
          <div className="mb-4">
            <h2 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
              Sistema
            </h2>
            <SidebarItem
              icon={Settings}
              label="Configuración"
              href="/settings"
              isActive={location.pathname.startsWith('/settings')}
              hasSubMenu={true}
              onClick={handleItemClick}
            />
          </div>
        </nav>
      </div>
      
      <div className="border-t p-4">
        <div className="rounded-lg bg-blue-50 p-4">
          <h4 className="text-sm font-medium text-blue-800">¿Necesitas ayuda?</h4>
          <p className="mt-1 text-xs text-blue-600">
            Nuestro equipo de soporte está aquí para ayudarte.
          </p>
          <button className="mt-2 w-full rounded-md bg-blue-700 py-1.5 text-xs text-white hover:bg-blue-800">
            Contactar soporte
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;