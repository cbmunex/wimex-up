import React, { useState } from 'react';

export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input) return;
    const newMessages = [...messages, { type: 'user', text: input }];
    // Simulação de resposta do chatbot
    setTimeout(() => {
      newMessages.push({ type: 'bot', text: `Ótimo! Em inglês: "${input}" soa natural. Pratique mais: "How can I help you today?"` });
      setMessages(newMessages);
    }, 500);
    setMessages(newMessages);
    setInput('');
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg my-10">
      <h3 className="text-xl font-bold mb-4 text-center">Chatbot de Conversação IA</h3>
      <div className="h-48 overflow-y-auto border p-3 mb-3 bg-gray-50 rounded">
        {messages.map((msg, i) => (
          <div key={i} className={`mb-2 p-2 rounded ${msg.type === 'user' ? 'bg-blue-100 text-right' : 'bg-green-100'}`}>
            <strong>{msg.type === 'user' ? 'Você' : 'IA'}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          placeholder="Digite sua mensagem em inglês..."
          className="flex-1 p-2 border rounded-l"
        />
        <button onClick={sendMessage} className="bg-blue-600 text-white px-4 rounded-r">Enviar</button>
      </div>
    </div>
  );
}
