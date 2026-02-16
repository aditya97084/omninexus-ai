import React, { useState } from 'react';
import { GeminiService } from '../geminiService';
const ChatView = () => {
  const [input, setInput] = useState('');
  const [msgs, setMsgs] = useState([]);
  const send = async () => {
    const res = await GeminiService.chat(input);
    setMsgs([...msgs, {role:'user', text:input}, {role:'ai', text:res.text}]);
    setInput('');
  };
  return <div className="p-6"> {msgs.map((m,i)=><div key={i} className="mb-4">{m.text}</div>)} <input value={input} onChange={e=>setInput(e.target.value)} /><button onClick={send}>Send</button></div>;
};
export default ChatView;