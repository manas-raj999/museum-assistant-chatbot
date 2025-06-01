import React, { useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../config'; // Import the base URL

const ChatBox = () => {
  const [messages, setMessages] = useState([
    { text: 'Hello! How can I assist you with museum tickets today?', sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input.trim(), sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await axios.post(`${API_BASE_URL}/chat`, { message: input.trim() });
      const botReply = { text: response.data.reply, sender: 'bot' };
      setMessages(prev => [...prev, botReply]);
    } catch (error) {
      const botReply = { text: 'Sorry, there was an error connecting to the chatbot service.', sender: 'bot' };
      setMessages(prev => [...prev, botReply]);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div style={{
      border: '2px solid #4a90e2',
      borderRadius: '10px',
      padding: '1rem',
      maxWidth: '600px',
      margin: '2rem auto',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f9f9f9'
    }}>
      <div style={{
        height: '300px',
        overflowY: 'auto',
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '1rem',
        marginBottom: '1rem',
        backgroundColor: 'white'
      }}>
        {messages.map((msg, idx) => (
          <div key={idx} style={{
            textAlign: msg.sender === 'user' ? 'right' : 'left',
            marginBottom: '0.8rem'
          }}>
            <span style={{
              display: 'inline-block',
              padding: '0.6rem 1rem',
              borderRadius: '20px',
              backgroundColor: msg.sender === 'user' ? '#4a90e2' : '#e1e1e1',
              color: msg.sender === 'user' ? 'white' : '#333',
              maxWidth: '75%',
              wordWrap: 'break-word'
            }}>
              {msg.text}
            </span>
          </div>
        ))}
        {loading && <div style={{ textAlign: 'center', color: '#4a90e2' }}>Typing...</div>}
      </div>

      <input
        type="text"
        placeholder="Type your message..."
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyPress={handleKeyPress}
        style={{
          width: '80%',
          padding: '0.5rem',
          fontSize: '1rem',
          borderRadius: '20px',
          border: '1px solid #ccc',
          outline: 'none',
          marginRight: '0.5rem'
        }}
      />
      <button
        onClick={handleSend}
        style={{
          padding: '0.55rem 1.2rem',
          backgroundColor: '#4a90e2',
          border: 'none',
          borderRadius: '20px',
          color: 'white',
          fontSize: '1rem',
          cursor: 'pointer'
        }}
      >
        Send
      </button>
    </div>
  );
};

export default ChatBox;
