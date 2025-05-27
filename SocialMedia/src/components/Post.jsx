import React, { useContext } from 'react';
import { MdDelete } from "react-icons/md";
import './Post.css';
import { PostList as PostList } from '../store/post-list-store';

const Post = ({post}) => {
   const{deletePost} =useContext(PostList);
  return (
    <div className="card post-card">
      <div className="card-body">
        <h5 className="card-title">{post.title}
        <span onClick={()=>deletePost(post.id)} className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
         <MdDelete />
        </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags
        .map((tag, index)=>(<span key={index} className="badge text-bg-primary badages-items">{tag}</span>))}
        <div className="alert alert-success reactions" >
            The total number of reactions is {post.reactions} .
        </div>
        
      </div>
    </div>
  );
};

export default Post;
