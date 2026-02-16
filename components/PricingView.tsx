import React from 'react';
const PricingView = ({onPaymentSuccess}: any) => (
  <div className="p-10 text-center"><h2 className="text-4xl font-black mb-10 uppercase tracking-tighter">Choose Fuel Plan</h2><button onClick={()=>onPaymentSuccess(1599, 5000)} className="p-8 bg-indigo-600 rounded-3xl font-black uppercase tracking-widest">Buy 5000 Credits (₹1599)</button></div>
);
export default PricingView;