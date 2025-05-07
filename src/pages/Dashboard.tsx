
import React from 'react';
import AdminLayout from '@/components/layout/AdminLayout';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import StatsOverview from '@/components/dashboard/StatsOverview';
import DashboardActionCards from '@/components/dashboard/DashboardActionCards';
import PolicySummaryChart from '@/components/dashboard/PolicySummaryChart';
import RecentPoliciesSection from '@/components/dashboard/RecentPoliciesSection';
import RightSidebarContent from '@/components/dashboard/RightSidebarContent';

const Dashboard = () => {
  // Updated colors based on the requirements
  const activeColor = "#27AE60";  // Verde
  const renewalColor = "#E67E22"; // Naranja
  const expiredColor = "#E74C3C";  // Rojo
  const expeditionColor = "#3498DB";  // Azul

  return (
    <AdminLayout>
      <div className="space-y-6 animate-fade-in">
        <DashboardHeader />

        {/* Stats Overview */}
        <StatsOverview />

        {/* Quick Action Cards */}
        <DashboardActionCards />

        {/* Main Content Area */}
        <div className="grid gap-6 md:grid-cols-6">
          {/* Left side (4 cols on larger screens) */}
          <div className="md:col-span-4 space-y-6">
            <PolicySummaryChart 
              activeColor={activeColor}
              renewalColor={renewalColor}
              expiredColor={expiredColor}
            />
            
            <RecentPoliciesSection />
          </div>

          {/* Right side (2 cols on larger screens) */}
          <RightSidebarContent 
            activeColor={activeColor}
            renewalColor={renewalColor}
            expiredColor={expiredColor}
          />
        </div>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
