import { createContext, useReducer } from 'react';

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  addInitialPost: () => {},
});

const postListReducer = (currentPostList, action) => {
  switch (action.type) {
    case "DELETE_POST":
      return currentPostList.filter(post => post.id !== action.payload.postID);
    case "ADD_POST":
      return [action.payload, ...currentPostList];
    case "INITIAL_ADD_POST":
      return action.payload.posts;
    default:
      return currentPostList;
  }
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const addPost = (userId, postTitle, postBody, reaction, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now().toString(),
        title: postTitle,
        body: postBody,
        reactions: reaction.toString(),
        userId: userId,
        tags: tags,
      },
    });
  };

  const addInitialPost = (posts) => {
    dispatchPostList({
      type: "INITIAL_ADD_POST",
      payload: { posts },
    });
  };

  const deletePost = (postID) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: { postID },
    });
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost, addInitialPost }}>
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;