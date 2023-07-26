import React, { useState } from 'react';
import './App.css';
import FriendListPanel from './FriendListPanel';
import RecentMessagesPanel from './RecentMessagesPanel';
import MessageForm from './MessageForm';

const initialFriendsList = [
  { id: 1, name: 'Friend 1', online: true },
  { id: 2, name: 'Friend 2', online: true },
  { id: 3, name: 'Friend 3', online: false },
  { id: 4, name: 'Friend 4', online: true },
  { id: 5, name: 'Friend 5', online: false },
];

function App() {
  const [friendsList, setFriendsList] = useState(initialFriendsList);
  const [recentMessages, setRecentMessages] = useState([]);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [showMessageForm, setShowMessageForm] = useState(false);

  const handleSendMessage = (message) => {
    // Create a new message object
    const newMessage = {
      id: new Date().getTime(),
      friendId: selectedFriend.id,
      friendName: selectedFriend.name,
      message: message.trim(),
      sent: true,
    };

    // Update the recent messages with the new message
    setRecentMessages((prevMessages) => [...prevMessages, newMessage]);

    // Close the message form after sending the message
    setShowMessageForm(false);
  };

  const handleFriendClick = (friend) => {
    // Clear the selected friend's conversation
    setSelectedFriend(null);

    // Set the selected friend to open conversation history
    setTimeout(() => setSelectedFriend(friend), 10);
  };

  const handleShowMessageForm = () => {
    // Toggle the message form visibility
    setShowMessageForm(!showMessageForm);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="app-name">Direct Message App</div>
        <div className="write-icon" onClick={handleShowMessageForm}>
          <span role="img" aria-label="write-icon">
            ✉️
          </span>
        </div>
      </header>
      <div className="message-page-container">
        <FriendListPanel friendsList={friendsList} onFriendClick={handleFriendClick} />
        <RecentMessagesPanel messages={recentMessages} selectedFriend={selectedFriend} />
      </div>
      {showMessageForm && (
        <MessageForm
          selectedFriend={selectedFriend}
          onSendMessage={handleSendMessage}
          onCancel={() => setShowMessageForm(false)}
        />
      )}
    </div>
  );
}

export default App;
