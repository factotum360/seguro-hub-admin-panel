
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowDown, ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';

type StatTrend = {
  value: string;
  positive: boolean;
};

type DashboardStatCardProps = {
  title: string;
  value: string;
  description: string;
  icon: React.ElementType;
  trend?: StatTrend;
  color?: 'blue' | 'green' | 'red' | 'yellow' | 'gray';
};

const DashboardStatCard = ({
  title,
  value,
  description,
  icon: Icon,
  trend,
  color = 'blue'
}: DashboardStatCardProps) => {
  const colorClasses = {
    blue: 'bg-insurance-blue/10 text-insurance-blue',
    green: 'bg-insurance-green/10 text-insurance-green',
    red: 'bg-insurance-red/10 text-insurance-red',
    yellow: 'bg-insurance-yellow/10 text-insurance-orange',
    gray: 'bg-insurance-gray/10 text-insurance-gray'
  };

  const trendClasses = trend?.positive
    ? 'text-green-600 bg-green-50'
    : 'text-red-600 bg-red-50';

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">{title}</p>
            <h3 className="text-2xl font-bold mt-1">{value}</h3>
            <p className="text-xs text-gray-500 mt-1">{description}</p>
          </div>
          <div className={cn('rounded-full p-2', colorClasses[color])}>
            <Icon className="h-5 w-5" />
          </div>
        </div>
        {trend && (
          <div className="mt-4">
            <span className={cn('text-xs py-1 px-2 rounded-full inline-flex items-center', trendClasses)}>
              {trend.positive ? (
                <ArrowUp className="h-3 w-3 mr-1" />
              ) : (
                <ArrowDown className="h-3 w-3 mr-1" />
              )}
              {trend.value} vs mes anterior
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default DashboardStatCard;
