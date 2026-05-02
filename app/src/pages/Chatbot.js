import React, { useState } from "react";

function Chatbot() {
  const [msg, setMsg] = useState("");
  const [chat, setChat] = useState([]);

  const sendMessage = () => {
    setChat([...chat, { user: msg, bot: "I am your career AI assistant 🤖" }]);
    setMsg("");
  };

  return (
    <div className="container">
      <h2>AI Career Assistant</h2>

      <div className="card">
        {chat.map((c, i) => (
          <p key={i}>
            <b>You:</b> {c.user} <br />
            <b>Bot:</b> {c.bot}
          </p>
        ))}
      </div>

      <input
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        placeholder="Ask something..."
      />

      <button className="button" onClick={sendMessage}>
        Send
      </button>
    </div>
  );
}

export default Chatbot;