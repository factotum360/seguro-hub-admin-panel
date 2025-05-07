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
import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

const DashboardActionCards = () => {
  const navigate = useNavigate();
  const [quoteCount, setQuoteCount] = useState<number>(0);
  const [newQuotesCount, setNewQuotesCount] = useState<number>(3); // Default value from your requirements

  useEffect(() => {
    const fetchQuotesCount = async () => {
      try {
        // Fetch total quotes count
        const { count, error } = await supabase
          .from('quotes')
          .select('*', { count: 'exact', head: true });

        if (error) throw error;

        if (count !== null) {
          setQuoteCount(count);
        }

        // Fetch today's new quotes count
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Reset to midnight

        const { count: newCount, error: newError } = await supabase
          .from('quotes')
          .select('*', { count: 'exact', head: true })
          .gte('created_at', today.toISOString());

        if (newError) throw newError;

        if (newCount !== null) {
          setNewQuotesCount(newCount);
        }
      } catch (error) {
        console.error('Error fetching quotes count:', error);
        toast.error('Error al cargar las cotizaciones. Intenta nuevamente.');
      }
    };

    fetchQuotesCount();
  }, []);

  const handleQuoteClick = () => {
    navigate('/dashboard/quotes', { 
      state: { fromDashboard: true }
    });

    // Highlight the sidebar item
    setTimeout(() => {
      const sidebarQuotesItem = document.querySelector('[data-sidebar-item="quotes"]');
      if (sidebarQuotesItem) {
        sidebarQuotesItem.scrollIntoView({ behavior: 'smooth' });

        sidebarQuotesItem.classList.add('highlight-item');
        setTimeout(() => {
          sidebarQuotesItem.classList.remove('highlight-item');
        }, 2000);
      }
    }, 100);
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
        <CardContent className="p-4 text-center flex flex-col items-center justify-center">
          <Button variant="outline" size="icon" className="h-10 w-10 rounded-full mb-3">
            <UserPlus className="h-5 w-5 text-insurance-blue" />
          </Button>
          <span className="text-sm font-medium">Nuevo Cliente</span>
        </CardContent>
      </Card>

      <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
        <CardContent className="p-4 text-center flex flex-col items-center justify-center">
          <Button variant="outline" size="icon" className="h-10 w-10 rounded-full mb-3">
            <FileText className="h-5 w-5 text-insurance-blue" />
          </Button>
          <span className="text-sm font-medium">Nueva Póliza</span>
        </CardContent>
      </Card>

      <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
        <CardContent className="p-4 text-center flex flex-col items-center justify-center">
          <Button variant="outline" size="icon" className="h-10 w-10 rounded-full mb-3">
            <AlertTriangle className="h-5 w-5 text-insurance-blue" />
          </Button>
          <span className="text-sm font-medium">Nuevo Siniestro</span>
        </CardContent>
      </Card>

      <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
        <CardContent className="p-4 text-center flex flex-col items-center justify-center">
          <Button variant="outline" size="icon" className="h-10 w-10 rounded-full mb-3">
            <Building className="h-5 w-5 text-insurance-blue" />
          </Button>
          <span className="text-sm font-medium">Aseguradora</span>
        </CardContent>
      </Card>

      <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
        <CardContent className="p-4 text-center flex flex-col items-center justify-center">
          <Button variant="outline" size="icon" className="h-10 w-10 rounded-full mb-3">
            <Tag className="h-5 w-5 text-insurance-blue" />
          </Button>
          <span className="text-sm font-medium">Nuevo Ramo</span>
        </CardContent>
      </Card>

      <Card 
        className="bg-white shadow-sm hover:shadow-md transition-shadow cursor-pointer hover:bg-gray-50 animate-fade-in transform hover:scale-105 duration-200"
        onClick={handleQuoteClick}
        tabIndex={0}
        role="button"
        aria-label="Ver cotizaciones"
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
          <span className="text-xs text-gray-500 mt-1">{newQuotesCount} nuevas</span>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardActionCards;