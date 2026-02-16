import React from 'react';
const LandingPage = ({onGetStarted}: any) => (
  <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
    <h1 className="text-7xl font-black mb-6">AI Use Karo,<br/><span className="text-indigo-500">Paisa Kamao.</span></h1>
    <button onClick={onGetStarted} className="px-12 py-6 bg-indigo-600 rounded-3xl font-black uppercase italic shadow-2xl">Open Market</button>
  </div>
);
export default LandingPage;