import React, { useContext, useEffect } from 'react';
import Post from './Post';
import './PostList.css';
import { PostList as PostListContext } from '../store/post-list-store';
import WelcomeMessage from './WelcomeMessage';

const PostList = () => {
  const { postList, addInitialPost } = useContext(PostListContext);

  const handleGetPostClick = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then(data => {
        const formattedPosts = data.posts.map(post => ({
          id: post.id.toString(),
          title: post.title,
          body: post.body,
          reactions: post.reactions.toString(),
          userId: `user-${post.userId}`,
          tags: post.tags
        }));
        addInitialPost(formattedPosts);
      });
  };

  return (
    <div className="post-container">
      {postList.length === 0 ? (
        <WelcomeMessage onGetPostsClick={handleGetPostClick} />
      ) : (
        <div className="post-list">
          {postList.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PostList;