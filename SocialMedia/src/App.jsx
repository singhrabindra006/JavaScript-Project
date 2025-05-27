import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';
import PostListProvider from './store/post-list-store';

const App = () => {
  const [selectedTab, setSelectedTab] = useState('Home');

  return (
    <PostListProvider>
    <div className="app-container">
      <Header />
      <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <div className="main-content">
        {selectedTab === "Create Post" ? <CreatePost /> : <PostList />}
      </div>
      <Footer />
    </div>
    </PostListProvider>
  );
};

export default App;
