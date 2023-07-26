import React from 'react';
import { FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

const RecentMessagesPanel = ({ messages, selectedFriend }) => {
  return (
    <div className="recent-messages-panel">
      {selectedFriend ? (
        <>
          <div className="message-header">
            <img src={selectedFriend.profilePic} alt={selectedFriend.name} />
            <div className="friend-name">{selectedFriend.name}</div>
          </div>
          <div className="message-history">
            {messages.map((msg) => (
              <div key={msg.id} className={`message ${msg.sent ? 'sent' : 'failed'}`}>
                <div className="message-text">{msg.message}</div>
                {msg.sent ? (
                  <FaCheckCircle className="message-status sent" />
                ) : (
                  <FaExclamationCircle className="message-status failed" />
                )}
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="no-friend-selected">Select a friend to view messages.</div>
      )}
    </div>
  );
};

export default RecentMessagesPanel;
