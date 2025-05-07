
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Page imports
import Dashboard from "./pages/Dashboard";
import Clients from "./pages/dashboard/Clients";
import Policies from "./pages/dashboard/Policies";
import NotFound from "./pages/NotFound";

// Currency context provider
import { CurrencyProvider } from "./contexts/CurrencyContext";

// Main section routes
import Claims from "./pages/dashboard/Claims";
import Sales from "./pages/dashboard/Sales";
import Payments from "./pages/dashboard/Payments";

// Management routes
import Leads from "./pages/dashboard/Leads";
import Agents from "./pages/dashboard/Agents";
import Branches from "./pages/dashboard/Branches";
import Insurers from "./pages/dashboard/Insurers";
import Tasks from "./pages/dashboard/Tasks";
import Calendar from "./pages/dashboard/Calendar";
import Notifications from "./pages/dashboard/Notifications";

// Report routes
import Statistics from "./pages/dashboard/Statistics";
import Quotes from "./pages/dashboard/Quotes";
import Files from "./pages/dashboard/Files";
import Invoices from "./pages/dashboard/Invoices";

// System routes
import Settings from "./pages/dashboard/Settings";
import CurrencySettings from "./pages/dashboard/settings/CurrencySettings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <CurrencyProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            
            {/* Dashboard route */}
            <Route path="/dashboard" element={<Dashboard />} />
            
            {/* Main section routes */}
            <Route path="/dashboard/clients" element={<Clients />} />
            <Route path="/dashboard/clients/new" element={<Clients />} />
            <Route path="/dashboard/clients/:id" element={<Clients />} />
            <Route path="/dashboard/clients/edit/:id" element={<Clients />} />
            
            <Route path="/dashboard/policies" element={<Policies />} />
            <Route path="/dashboard/policies/new" element={<Policies />} />
            <Route path="/dashboard/policies/:id" element={<Policies />} />
            <Route path="/dashboard/policies/edit/:id" element={<Policies />} />
            
            <Route path="/dashboard/claims" element={<Claims />} />
            <Route path="/dashboard/claims/new" element={<Claims />} />
            <Route path="/dashboard/claims/:id" element={<Claims />} />
            <Route path="/dashboard/claims/edit/:id" element={<Claims />} />
            
            <Route path="/dashboard/sales" element={<Sales />} />
            <Route path="/dashboard/sales/new" element={<Sales />} />
            <Route path="/dashboard/sales/:id" element={<Sales />} />
            
            <Route path="/dashboard/payments" element={<Payments />} />
            <Route path="/dashboard/payments/new" element={<Payments />} />
            <Route path="/dashboard/payments/:id" element={<Payments />} />
            
            {/* Management section routes */}
            <Route path="/dashboard/leads" element={<Leads />} />
            <Route path="/dashboard/leads/new" element={<Leads />} />
            <Route path="/dashboard/leads/:id" element={<Leads />} />
            
            <Route path="/dashboard/agents" element={<Agents />} />
            <Route path="/dashboard/agents/new" element={<Agents />} />
            <Route path="/dashboard/agents/:id" element={<Agents />} />
            <Route path="/dashboard/agents/edit/:id" element={<Agents />} />
            
            <Route path="/dashboard/branches" element={<Branches />} />
            <Route path="/dashboard/insurers" element={<Insurers />} />
            
            <Route path="/dashboard/tasks" element={<Tasks />} />
            <Route path="/dashboard/tasks/new" element={<Tasks />} />
            <Route path="/dashboard/tasks/:id" element={<Tasks />} />
            <Route path="/dashboard/tasks/edit/:id" element={<Tasks />} />
            
            <Route path="/dashboard/calendar" element={<Calendar />} />
            <Route path="/dashboard/notifications" element={<Notifications />} />
            <Route path="/dashboard/notifications/settings" element={<Notifications />} />
            
            {/* Reports section routes */}
            <Route path="/dashboard/statistics" element={<Statistics />} />
            <Route path="/dashboard/statistics/agents" element={<Statistics />} />
            <Route path="/dashboard/statistics/policies" element={<Statistics />} />
            <Route path="/dashboard/statistics/claims" element={<Statistics />} />
            <Route path="/dashboard/statistics/export" element={<Statistics />} />
            
            <Route path="/dashboard/quotes" element={<Quotes />} />
            <Route path="/dashboard/quotes/new" element={<Quotes />} />
            <Route path="/dashboard/quotes/:id" element={<Quotes />} />
            
            <Route path="/dashboard/files" element={<Files />} />
            <Route path="/dashboard/files/new" element={<Files />} />
            
            <Route path="/dashboard/invoices" element={<Invoices />} />
            <Route path="/dashboard/invoices/new" element={<Invoices />} />
            <Route path="/dashboard/invoices/:id" element={<Invoices />} />
            
            {/* System section routes */}
            <Route path="/dashboard/settings" element={<Settings />} />
            <Route path="/dashboard/settings/users" element={<Settings />} />
            <Route path="/dashboard/settings/preferences" element={<Settings />} />
            <Route path="/dashboard/settings/notifications" element={<Settings />} />
            <Route path="/dashboard/settings/roles" element={<Settings />} />
            <Route path="/dashboard/settings/currency" element={<CurrencySettings />} />
            
            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </CurrencyProvider>
  </QueryClientProvider>
);

export default App;
