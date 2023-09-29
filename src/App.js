import React, { useState } from 'react';
import './App.css';
import ConversationList from "./Components/ConversationsList"
import MessageList from "./Components/MessageList"
import ReplySection from "./Components/ReplySection"
import conversationsData from './testData.json';

function App() {
  const [conversations, setConversations] = useState(conversationsData);
  const [selectedConversationIndex, setSelectedConversationIndex] = useState(null);
  const [editingMessage, setEditingMessage] = useState(null);

  const handleSelectConversation = (index) => {
    setSelectedConversationIndex(index);
    setEditingMessage(null);
  };

  const handleSendMessage = (message) => {
    const updatedConversations = [...conversations];
    updatedConversations[selectedConversationIndex].messages.push({
      id: Math.random().toString(), 
      text: message,
    });

    setConversations(updatedConversations);
  };

  const handleEditComplete = () => {
    if (!editingMessage) return;

    const updatedConversations = [...conversations];
    const messageIndex = updatedConversations[selectedConversationIndex].messages.findIndex(
      msg => msg.id === editingMessage.id
    );

    if (messageIndex !== -1) {
      updatedConversations[selectedConversationIndex].messages[messageIndex].text = editingMessage.text;
      setConversations(updatedConversations);
      setEditingMessage(null); 
    }
  };

  return (
  <div className="app">
    <div className="sidebar">
      <ConversationList conversations={conversations}
      onSelect={handleSelectConversation} />
    </div>
    <div className="content">
      <div className="message-list-container">
        {selectedConversationIndex !== null && (
          <MessageList 
            messages={conversations[selectedConversationIndex].messages}
            onEditMessage={setEditingMessage}  
          />
        )}
      </div>
      <div className="reply-section">
        <ReplySection onSend={handleSendMessage}
          editingMessage={editingMessage}
          onEditComplete={handleEditComplete} />
      </div>
    </div>
  </div>
);
}

export default App;
