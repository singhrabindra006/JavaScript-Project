import React from 'react';
import './WelcomeMessage.css'

const WelcomeMessage = ({ onGetPostsClick }) => {
  return (
    <div className="welcome-message-container">
      <h1 className="empty-state-title">No Posts Found</h1>
      <p className="empty-state-message">Start by creating a new post or load sample posts</p>
      <div className="button-group">
        <button 
          className="btn load-posts-btn"
          onClick={onGetPostsClick}
        >
          Featch Data From Server
        </button>
      </div>
    </div>
  );
};

export default WelcomeMessage;