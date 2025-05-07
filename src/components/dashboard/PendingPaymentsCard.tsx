
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { DollarSign } from 'lucide-react';
import { useCurrency } from '@/contexts/CurrencyContext';

interface PendingPaymentsCardProps {
  expiredColor: string;
}

const PendingPaymentsCard = ({ expiredColor }: PendingPaymentsCardProps) => {
  const { formatCurrency } = useCurrency();

  return (
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
  );
};

export default PendingPaymentsCard;
