import React, { useState } from 'react';
import './ChatApp.css';

// Rest of the component code...

function App() {
  const [messages, setMessages] = useState([]);

  const handleUserMessage = (e) => {
    e.preventDefault();
    const userInput = e.target.message.value;
    if (userInput.trim() !== '') {
      setMessages([...messages, { sender: 'user', text: userInput }]);
      e.target.message.value = '';
    }
  };

  return (
    <div className="App">
      <h1>Chatbot Example</h1>
      <div className="chat-container">
        <div className="messages">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`message ${message.sender === 'user' ? 'user' : 'bot'}`}
            >
              {message.text}
            </div>
          ))}
        </div>
        <form className="user-input" onSubmit={handleUserMessage}>
          <input type="text" name="message" placeholder="Type your message..." />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default App;
