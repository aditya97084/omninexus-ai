import React from 'react';
const DashboardView = ({earnings, affiliateStats}: any) => (
  <div className="p-10"><h2 className="text-5xl font-black italic mb-6">Mera Vault.</h2><div className="bg-slate-900 p-10 rounded-[40px] border border-white/5"><p className="text-xs font-black uppercase text-slate-500 mb-2">Total Earnings</p><p className="text-6xl font-black">₹{earnings}</p><button className="mt-8 bg-indigo-600 px-8 py-4 rounded-xl font-black uppercase text-xs">Withdraw to UPI</button></div></div>
);
export default DashboardView;