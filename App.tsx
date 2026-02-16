import React, { useState, useEffect } from 'react';
import { AppView, Tool, GlobalStats } from './types';
import LandingPage from './components/LandingPage';
import ExplorerView from './components/ExplorerView';
import CreateView from './components/CreateView';
import DashboardView from './components/DashboardView';
import PricingView from './components/PricingView';
import ToolExecutionView from './components/ToolExecutionView';
import Sidebar from './components/Sidebar';
import AdminView from './components/AdminView';
import AdminLogin from './components/AdminLogin';

const App: React.FC = () => {
  const [credits, setCredits] = useState(() => Number(localStorage.getItem('omni_credits')) || 500);
  const [earnings, setEarnings] = useState(() => Number(localStorage.getItem('omni_earnings')) || 0);
  const [currentView, setCurrentView] = useState<AppView>(AppView.LANDING);
  const [isAdminAuth, setIsAdminAuth] = useState(false);

  useEffect(() => {
    const h = () => {
       if(window.location.hash==='#master') setCurrentView(isAdminAuth ? AppView.ADMIN_PANEL : AppView.ADMIN_LOGIN);
    };
    h(); window.addEventListener('hashchange', h);
    return () => window.removeEventListener('hashchange', h);
  }, [isAdminAuth]);

  if (currentView === AppView.ADMIN_LOGIN) return <AdminLogin onLoginSuccess={() => setIsAdminAuth(true)} onCancel={() => {window.location.hash=''; setCurrentView(AppView.LANDING);}} />;
  if (currentView === AppView.ADMIN_PANEL) return <AdminView stats={{totalUsers: 2540, activeNodes: 112, totalPlatformRevenue: 1540000, totalRuns: 98200, serverStatus: 'online'}} isGlobalLive={true} setIsGlobalLive={()=>{}} />;
  if (currentView === AppView.LANDING) return <LandingPage onGetStarted={() => setCurrentView(AppView.EXPLORER)} />;

  return (
    <div className="flex h-screen bg-[#020617] text-slate-100 overflow-hidden font-sans">
      <Sidebar currentView={currentView} onNavigate={setCurrentView} isOpen={false} setIsOpen={()=>{}} credits={credits} isAdmin={false} onToggleAdmin={()=>{}} />
      <main className="flex-1 overflow-y-auto">
        {currentView === AppView.EXPLORER && <ExplorerView onSelectTool={(t) => setCurrentView(AppView.TOOL_EXECUTION)} availableTools={[]} />}
        {currentView === AppView.DASHBOARD && <DashboardView earnings={earnings} onWithdraw={()=>{}} payoutMethod="" setPayoutMethod={()=>{}} affiliateStats={{referralCode:'BHAU-123', totalReferrals:0, referralEarnings:0, conversionRate:'0%'}} />}
      </main>
    </div>
  );
};
export default App;