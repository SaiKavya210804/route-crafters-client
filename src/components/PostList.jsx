import React from "react";
import "../styles/Community.css";

const PostList = ({ posts }) => {
  return (
    <div className="post-list">
      <h4>Posts:</h4>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
