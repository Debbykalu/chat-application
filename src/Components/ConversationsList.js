function ConversationsList({ conversations, onSelect }) {
  const sortedConversations = [...conversations].sort((a, b) => new Date(b.last_updated) - new Date(a.last_updated)).slice(0, 4);  // Slice to get the first 4 conversations

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
