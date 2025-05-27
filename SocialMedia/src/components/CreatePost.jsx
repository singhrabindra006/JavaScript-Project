import React, { useContext, useRef } from 'react';
import './CreatePost.css';
import { MdConstruction } from 'react-icons/md';
import {PostList} from '../store/post-list-store';

const CreatePost = () => {
   const{addPost}= useContext(PostList) ;

   const userIdElement = useRef();
   const postTitleElement = useRef();
   const postBodyElement= useRef();
   const reactionsElement = useRef();
   const tagsElement= useRef();

   const hadleSubmit= (event)=>{
    event.preventDefault();
    const userId= userIdElement.current.value;
    const postTitle= postTitleElement.current.value;
    const postBody= postBodyElement.current.value;
    const reaction= reactionsElement.current.value;
    const tags= tagsElement.current.value.split(" ");

     userIdElement.current.value="";
     postTitleElement.current.value="";
    postBodyElement.current.value="";
    reactionsElement.current.value="";
    tagsElement.current.value="";

    addPost(userId, postTitle, postBody, reaction,tags)
   }
   

  return (
    <form className="create-post-form" onSubmit={hadleSubmit}>
      <h3>Create a New Post</h3>
      <br />
      <div className="mb-3">
        <label>User ID</label>
        <input type="text" className="form-control" ref={userIdElement}/>
      </div>
      <div className="mb-3">
        <label>Title of Post</label>
        <input type="text" className="form-control" ref={postTitleElement}/>
      </div>
      <div className="mb-3">
        <label>Description</label>
        <textarea type="textarea" className="form-control" ref={postBodyElement}/>
      </div>
      <div className="mb-3">
        <label>No of Reactions</label>
        <input type="text" className="form-control" ref={reactionsElement}/>
      </div>
      <div className="mb-3">
        <label>Enter your hastags</label>
        <input type="text" className="form-control" ref={tagsElement} />
      </div>
      
     
      <button type="submit" className="btn btn-primary">Post</button>
    </form>
  );
};

export default CreatePost;
