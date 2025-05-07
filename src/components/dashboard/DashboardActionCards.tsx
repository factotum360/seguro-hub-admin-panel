import React, { useEffect, useState, useCallback, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  UserPlus,
  Building,
  AlertTriangle, 
  FileText, 
  Tag,
  FileSearch
} from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

interface QuoteCountsResponse {
  count: number | null;
  error: Error | null;
}

interface CardItem {
  icon: React.FC<{ className?: string }>;
  text: string;
  path: string;
  permissions?: string[];
}

const DashboardCard = memo(({ icon: Icon, text, onClick }: {
  icon: React.FC<{ className?: string }>;
  text: string;
  onClick: () => void;
}) => (
  <Card 
    className="bg-white shadow-sm hover:shadow-md transition-shadow cursor-pointer"
    onClick={onClick}
  >
    <CardContent className="p-4 text-center flex flex-col items-center justify-center">
      <Button variant="outline" size="icon" className="h-10 w-10 rounded-full mb-3">
        <Icon className="h-5 w-5 text-insurance-blue" />
      </Button>
      <span className="text-sm font-medium">{text}</span>
    </CardContent>
  </Card>
));

DashboardCard.displayName = 'DashboardCard';

const DashboardActionCards: React.FC = () => {
  const navigate = useNavigate();
  const [quoteCounts, setQuoteCounts] = useState({ total: 0, new: 3 });
  const [isLoading, setIsLoading] = useState(true);

  const CARDS: CardItem[] = [
    {
      icon: UserPlus,
      text: "Nuevo Cliente",
      path: '/dashboard/clients/new',
      permissions: ['create:clients']
    },
    {
      icon: FileText,
      text: "Nueva Póliza",
      path: '/dashboard/policies/new',
      permissions: ['create:policies']
    },
    {
      icon: AlertTriangle,
      text: "Nuevo Siniestro",
      path: '/dashboard/claims/new',
      permissions: ['create:claims']
    },
    {
      icon: Building,
      text: "Aseguradora",
      path: '/dashboard/insurers',
      permissions: ['view:insurers']
    },
    {
      icon: Tag,
      text: "Nuevo Ramo",
      path: '/dashboard/branches/new',
      permissions: ['create:branches']
    }
  ];

  const fetchQuoteCounts = useCallback(async () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    try {
      const [totalQuotes, newQuotes] = await Promise.all([
        supabase
          .from('quotes')
          .select('*', { count: 'exact', head: true })
          .eq('organization_id', localStorage.getItem('org_id')),
        supabase
          .from('quotes')
          .select('*', { count: 'exact', head: true })
          .eq('organization_id', localStorage.getItem('org_id'))
          .gte('created_at', today.toISOString())
      ]);

      setQuoteCounts({
        total: totalQuotes.count || 0,
        new: newQuotes.count || 0
      });
    } catch (error) {
      console.error('Error fetching quotes:', error);
      toast.error('Error al cargar las cotizaciones', {
        description: 'Por favor, intenta nuevamente más tarde'
      });
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchQuoteCounts();
    
    // Configurar actualización periódica
    const intervalId = setInterval(fetchQuoteCounts, 300000); // 5 minutos
    
    return () => clearInterval(intervalId);
  }, [fetchQuoteCounts]);

  const handleQuoteClick = useCallback(() => {
    navigate('/dashboard/quotes', { 
      state: { fromDashboard: true }
    });

    requestAnimationFrame(() => {
      const sidebarQuotesItem = document.querySelector('[data-sidebar-item="quotes"]');
      if (sidebarQuotesItem) {
        sidebarQuotesItem.scrollIntoView({ behavior: 'smooth' });
        sidebarQuotesItem.classList.add('highlight-item');
        setTimeout(() => {
          sidebarQuotesItem.classList.remove('highlight-item');
        }, 2000);
      }
    });
  }, [navigate]);

  if (isLoading) {
    return <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 animate-pulse">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="h-32 bg-gray-200 rounded-lg"></div>
      ))}
    </div>;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {CARDS.map((card, index) => (
        <DashboardCard
          key={index}
          icon={card.icon}
          text={card.text}
          onClick={() => navigate(card.path)}
        />
      ))}

      <Card 
        className="bg-white shadow-sm hover:shadow-md transition-shadow cursor-pointer hover:bg-gray-50 animate-fade-in transform hover:scale-105 duration-200"
        onClick={handleQuoteClick}
        tabIndex={0}
        role="button"
        aria-label={`Ver cotizaciones (${quoteCounts.new} nuevas)`}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleQuoteClick();
          }
        }}
      >
        <CardContent className="p-4 text-center flex flex-col items-center justify-center">
          <Button 
            variant="outline" 
            size="icon" 
            className="h-10 w-10 rounded-full mb-3 group-hover:bg-blue-50"
          >
            <FileSearch className="h-5 w-5 text-insurance-blue" />
          </Button>
          <span className="text-sm font-medium">Cotización</span>
          <span className="text-xs text-gray-500 mt-1">
            {quoteCounts.new} {quoteCounts.new === 1 ? 'nueva' : 'nuevas'}
          </span>
        </CardContent>
      </Card>
    </div>
  );
};

export default memo(DashboardActionCards);