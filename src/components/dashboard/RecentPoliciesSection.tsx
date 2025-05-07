
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import RecentPoliciesTable from '@/components/dashboard/RecentPoliciesTable';

const RecentPoliciesSection = () => {
  const navigate = useNavigate();
  
  return (
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
  );
};

export default RecentPoliciesSection;
