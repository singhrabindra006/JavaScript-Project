import React from 'react';
import './Sidebar.css';

const Sidebar = ({ selectedTab, setSelectedTab }) => {
  return (
    <div className="sidebar">
      <ul className="nav flex-column">
        <li>
          <a
            href="#"
            className={`nav-link px-2 text-white ${selectedTab === "Home" ? "active" : ""}`}
            onClick={() => setSelectedTab("Home")}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`nav-link text-white ${selectedTab === "Create Post" ? "active" : ""}`}
            onClick={() => setSelectedTab("Create Post")}
          >
            Create Post
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
