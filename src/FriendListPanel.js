import React from 'react';

const FriendListPanel = ({ friendsList, onFriendClick }) => {
  return (
    <div className="friends-panel">
      <h3>Friends List</h3>
      {friendsList.map((friend) => (
        <div key={friend.id} className="friend" onClick={() => onFriendClick(friend)}>
          <img src={friend.profilePic} alt={friend.name} />
          <div className="friend-info">
            <div className="friend-name">{friend.name}</div>
            <div className="friend-status">{friend.online ? 'Online' : 'Offline'}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FriendListPanel;
