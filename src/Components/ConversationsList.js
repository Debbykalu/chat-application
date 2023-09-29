import React from 'react';

function ConversationsList({ conversations, onSelect }) {
  const sortedConversations = [...conversations].sort((a, b) => new Date(b.last_updated) - new Date(a.last_updated));

  return (
    <div className="conversations-list">
      {sortedConversations.map((conversation, index) => (
        <div key={conversation.id} onClick={() => onSelect(index)}>
          {`Conversation ${index + 1}`}
        </div>
      ))}
    </div>
  );
}

export default ConversationsList;
