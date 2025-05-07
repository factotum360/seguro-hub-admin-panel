
import React from 'react';
import ClientsStatsCard from './ClientsStatsCard';
import TasksList from './TasksList';
import BirthdaysList from './BirthdaysList';
import ClaimsSummaryCard from './ClaimsSummaryCard';
import PendingPaymentsCard from './PendingPaymentsCard';

interface RightSidebarContentProps {
  activeColor: string;
  renewalColor: string;
  expiredColor: string;
}

const RightSidebarContent = ({ 
  activeColor, 
  renewalColor, 
  expiredColor 
}: RightSidebarContentProps) => {
  return (
    <div className="md:col-span-2 space-y-6">
      <ClientsStatsCard activeColor={activeColor} />
      <TasksList />
      <BirthdaysList />
      <ClaimsSummaryCard activeColor={activeColor} renewalColor={renewalColor} />
      <PendingPaymentsCard expiredColor={expiredColor} />
    </div>
  );
};

export default RightSidebarContent;
