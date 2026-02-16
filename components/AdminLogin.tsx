import React, { useState } from 'react';
const AdminLogin = ({onLoginSuccess}: any) => {
  const [p, setP] = useState('');
  return (<div className="h-screen flex items-center justify-center bg-slate-950 p-6">
    <div className="max-w-md w-full bg-slate-900 p-10 rounded-[40px] border border-white/5 text-center shadow-3xl">
      <h2 className="text-2xl font-black mb-6 uppercase tracking-tighter italic">Owner Terminal</h2>
      <input type="password" value={p} onChange={e=>setP(e.target.value)} className="w-full bg-black border border-white/10 p-4 rounded-xl mb-4 text-center font-black" placeholder="Password" />
      <button onClick={()=>p==='aditya@77' && onLoginSuccess()} className="w-full bg-indigo-600 p-4 rounded-xl font-black uppercase tracking-widest text-xs">Verify Access</button>
    </div>
  </div>);
};
export default AdminLogin;