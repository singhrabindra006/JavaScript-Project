import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="app-header">
      <div className="container d-flex justify-content-between align-items-center">
        <h2 className="text-white">My App</h2>
        <div>
          <button className="btn btn-outline-light me-2">Login</button>
          <button className="btn btn-warning">Sign-up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
