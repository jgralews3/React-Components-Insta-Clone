//Complete the necessary code in this file
// import useState
import React, {useState} from "react";
import Post from "./Post";
import "./Posts.css";
import dummyData from "../../dummy-data";
// import data 

const PostsPage = () => {
  const [data] = useState(dummyData);
  console.log (data);
  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
      {data.map ((p, index)=>(<Post key={index} props1={p} />))}
    </div>
  );
};

export default PostsPage;
