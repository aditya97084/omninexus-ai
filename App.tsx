import React, { useState, useEffect } from 'react';
import { AppView, Tool } from './types';
import LandingPage from './components/LandingPage';
import ExplorerView from './components/ExplorerView';
import CreateView from './components/CreateView';
import DashboardView from './components/DashboardView';
import PricingView from './components/PricingView';
import ToolExecutionView from './components/ToolExecutionView';
import Sidebar from './components/Sidebar';
import AdminView from './components/AdminView';
import AdminLogin from './components/AdminLogin';

const INITIAL_TOOLS = [
  { id: '1', name: 'SEO Content King', category: 'Text', gradient: 'from-blue-500 to-cyan-500', epc: 15.00 },
  { id: '14', name: 'Midjourney v6.1 Pro', category: 'Image', gradient: 'from-yellow-400 to-red-500', epc: 75.00 },
  { id: '15', name: 'Luma Dream Machine', category: 'Video', gradient: 'from-indigo-400 to-pink-500', epc: 180.00 },
  { id: '16', name: 'Higgsfield Social Video', category: 'Video', gradient: 'from-fuchsia-600 to-purple-800', epc: 140.00 },
  { id: '17', name: 'Suno v4 AI Music', category: 'Voice', gradient: 'from-cyan-400 to-blue-600', epc: 110.00 },
  { id: '8', name: 'ElevenLabs Voice', category: 'Voice', gradient: 'from-green-400 to-cyan-500', epc: 95.00 },
];

const App = () => {
  const [credits, setCredits] = useState(() => Number(localStorage.getItem('omni_credits')) || 500);
  const [earnings, setEarnings] = useState(() => Number(localStorage.getItem('omni_earnings')) || 0);
  const [currentView, setCurrentView] = useState(AppView.LANDING);
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
    <div className="flex h-screen bg-[#020617] text-slate-100 overflow-hidden">
      <Sidebar currentView={currentView} onNavigate={setCurrentView} credits={credits} />
      <main className="flex-1 overflow-y-auto no-scrollbar">
        {currentView === AppView.EXPLORER && <ExplorerView onSelectTool={(t) => setCurrentView(AppView.TOOL_EXECUTION)} availableTools={INITIAL_TOOLS} />}
        {currentView === AppView.DASHBOARD && <DashboardView earnings={earnings} onWithdraw={()=>{}} affiliateStats={{referralCode:'BHAU-123', totalReferrals:0, referralEarnings:0, conversionRate:'0%'}} />}
        {currentView === AppView.PRICING && <PricingView onPaymentSuccess={(a,c)=>setCredits(p=>p+c)} />}
      </main>
    </div>
  );
};
export default App;