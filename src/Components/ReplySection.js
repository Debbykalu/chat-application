import { useState, useEffect } from 'react';

function ReplySection({ onSend, editingMessage, onEditComplete }) {
  const [text, setText] = useState('');

  useEffect(() => {
    setText(editingMessage ? editingMessage.text : text);
}, [editingMessage]);

  const handleSendClick = () => {
    onSend(text);
    setText('');
  };

  const handleEditClick = () => {
    onEditComplete(text);
    setText('');
  };

  return (
    <div className="reply-section">
      <input value={text} onChange={(e) => setText(e.target.value)} />
      {editingMessage ? (
        <button onClick={handleEditClick}>EDIT</button>
      ) : (
        <button onClick={handleSendClick}>SEND</button>
      )}
    </div>
  );
}

export default ReplySection;
