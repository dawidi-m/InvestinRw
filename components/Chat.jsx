"use client"
import { useState } from 'react';


export default function Chatbox() {
  const [messages, setMessages] = useState([]);

  async function sendMessage(text) {
    // Call the Flask API to send a message
    const response = await fetch('http://127.0.0.1:5000/predict', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      mode:'cors',
      body: JSON.stringify({ message:text })
    });
    const data = await response.json();

    // Update the messages state with the new message
    // console.log(data.answer);
    // console.log("Mwa");
    setMessages(messages => [...messages,{ isUser:true, text: text}]);
    setMessages(messages => [...messages,{ isUser:false, text: data.answer}]);
    console.log(messages);
  }

  return (
    <div className="chat_box">
        
      <ul className="chat_messages">
        {messages.map((message, index) => (
          <li key={index} className="chat_message">{message.text}</li>
        ))}
      </ul>
      <input type="text" className="chat_input "onKeyDown={event => {
        if (event.key === 'Enter') {
          sendMessage(event.target.value);
          event.target.value = '';
        }
      }} />
    </div>
  );
}