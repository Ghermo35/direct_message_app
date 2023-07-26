import React, { useState } from 'react';

const MessageForm = ({ selectedFriend, onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (message.trim() !== '') {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <div className="message-form-container">
      {selectedFriend ? ( /* Check if selectedFriend is not null */
        <>
          <div className="message-header">
            <img src={selectedFriend.profilePic} alt={selectedFriend.name} />
            <div className="friend-name">{selectedFriend.name}</div>
          </div>
          <form onSubmit={handleSubmit}>
            <textarea
              placeholder="Type your message..."
              value={message}
              onChange={handleInputChange}
            />
            <div className="message-buttons">
              <button type="submit" disabled={message.trim() === ''}>
                Send
              </button>
            </div>
          </form>
        </>
      ) : (
        <div className="no-friend-selected">Select a friend to view messages.</div>
      )}
    </div>
  );
};

export default MessageForm;
