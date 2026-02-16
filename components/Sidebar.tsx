import React from 'react';
import { AppView } from '@/types';
const Sidebar = ({currentView, onNavigate, credits}: any) => (
  <aside className="w-64 bg-slate-950 border-r border-white/5 p-6 flex flex-col">
    <div className="text-2xl font-black italic mb-10 tracking-tighter">OMNINEXUS</div>
    <nav className="flex-1 space-y-2">
      <button onClick={() => onNavigate(AppView.EXPLORER)} className="w-full text-left p-4 rounded-xl hover:bg-white/5 font-bold uppercase text-[10px] tracking-widest transition-all">Market</button>
      <button onClick={() => onNavigate(AppView.DASHBOARD)} className="w-full text-left p-4 rounded-xl hover:bg-white/5 font-bold uppercase text-[10px] tracking-widest transition-all">Vault (₹)</button>
      <button onClick={() => onNavigate(AppView.PRICING)} className="w-full text-left p-4 rounded-xl hover:bg-white/5 font-bold uppercase text-[10px] tracking-widest transition-all">Top-Up</button>
    </nav>
    <div className="p-4 bg-indigo-600/10 rounded-2xl border border-indigo-500/20"><p className="text-[8px] font-black uppercase mb-1">Fuel</p><p className="text-xl font-black">{credits} CRD</p></div>
  </aside>
);
export default Sidebar;