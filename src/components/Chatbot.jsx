import React, { useState } from 'react';
import axios from 'axios';
import './Chatbot.css'; // Import the CSS file for styles

const Chatbot = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  // Resume details structured prompt
  const structuredPrompt = `You are a helpful assistant designed to answer questions about my resume. My name is Raushan Kumar. I have experience as a Web Developer at Datex Technologies Pvt. Ltd., where I designed and developed tasks like a Resume Builder Website, Landing Page of Koo App, and Todo List App using HTML, CSS, and JavaScript. I also developed a Stock Price Tracker npm package that monitors stock prices using the Alpha Vantage API, and a personalized portfolio website using React Js. I have hands-on experience in Linux-based embedded software development, C++, Java, Python, and Go. I served as the Management Head of the IEEE Student Branch at NIT Patna and as Joint Secretary of IEEE MTTS. Additionally, I contributed to NSS Sankalp Club to support the education of underprivileged children. Please answer queries about my work experience, skills, projects, certifications, and leadership roles.`;

  // Send message function
  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);

    try {
      const response = await axios.post(
        'https://api.groq.com/v1/chat/completions', // Updated API endpoint for Groq Cloud
        {
          model: 'mistral-7b',
          messages: [{ role: 'system', content: structuredPrompt }, ...messages, userMessage],
          temperature: 0.7,
          max_tokens: 500,
        },
        {
          headers: {
            Authorization: `Bearer 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`, // Replace with your Groq Cloud API key
            'Content-Type': 'application/json',
          },
        }
      );

      // Append the bot's response
      const botMessage = { role: 'assistant', content: response.data.choices[0].message.content };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Error communicating with the chatbot:', error);
      setMessages((prev) => [...prev, { role: 'assistant', content: 'Sorry, something went wrong!' }]);
    }

    setInput('');
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      {!isOpen && (
        <div
          className="chatbot-toggle-button"
          onClick={() => setIsOpen(true)}
        >
          Open Chatbot
        </div>
      )}

      {/* Chatbot Popup */}
      {isOpen && (
        <div className="chatbot-container">
          {/* Close Button */}
          <div
            className="close-chat-button"
            onClick={() => setIsOpen(false)}
          >
            Close Chat
          </div>
          <div className="chatbot-header">Resume Chatbot</div>
          <div className="chat-window">
            {messages.map((msg, idx) => (
              <div key={idx} className={`message ${msg.role === 'user' ? 'user-message' : 'bot-message'}`}>
                <strong>{msg.role === 'user' ? 'You: ' : 'Bot: '}</strong>
                {msg.content}
              </div>
            ))}
          </div>
          <div className="input-container">
            <input
              type="text"
              className="chat-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
            />
            <button className="send-button" onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
