// You will add code in this file
import React, {useState} from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

import "./Posts.css";

// pass props in this file to
const Post = props => {
  // set up state for the likes
  console.log (props.props1.thumbnailUrl)
  const [likes, setLikes] = useState(props.props1.likes);
  const incrementLikes = ()=>{setLikes(likes+1)};
  const [comments, setComments] = useState(props.props1.comments);
  return (
    <div className="post-border">
      <PostHeader
        username={props.props1.username}
        thumbnailUrl={
          props.props1.thumbnailUrl
        }
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.props1.imageUrl}
        />
      </div>
      <LikeSection 
      likes = {likes} incrementLikes={incrementLikes}
      />
      <CommentSection
        postId={props.props1.imageUrl}
        comments={props.props1.comments}
      />
    </div>
  );
};

export default Post;
