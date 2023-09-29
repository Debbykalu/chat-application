import React from 'react';

function MessagesList({ messages, onEditMessage }) {
  const sortedMessages = [...messages].sort((a, b) => new Date(a.last_updated) - new Date(b.last_updated));

  return (
    <div className="messages-list">
      {sortedMessages.map((message) => (
        <div key={message.id} onClick={() => onEditMessage(message)}>
          <div>{message.last_updated = new Date().toISOString()}</div>
          <div>{message.text}</div>
        </div>
      ))}
    </div>
  );
}

export default MessagesList;
