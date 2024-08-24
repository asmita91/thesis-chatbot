import React, { useState } from 'react';
import axios from 'axios';

function GPT() {
  const [message, setMessage] = useState('');
  const [reply, setReply] = useState('');

  const sendMessage = async () => {
    try {
      const response = await axios.post('http://localhost:5000/chat', { message });
      setReply(response.data.reply);
    } catch (error) {
      console.error('Error:', error);
      setReply('Failed to get response');
    }
  };

  return (
    <div>
      <h1>Chat with OpenAI</h1>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message here..."
      />
      <button onClick={sendMessage}>Send</button>
      <p>Reply: {reply}</p>
    </div>
  );
}

export default GPT;
