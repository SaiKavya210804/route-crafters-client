import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { getPosts, createPost } from "../services/PostService";
import { CommunityContext } from "../context/CommunityContext";
import "../styles/Community.css";

const CommunityPage = () => {
  const { id } = useParams();
  const { communities } = useContext(CommunityContext);
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");

  const community = communities.find((c) => c.id === id);

  useEffect(() => {
    if (community) {
      getPosts(id).then(setPosts).catch(console.error);
    }
  }, [id, community]);

  const handlePostSubmit = async (e) => {
    e.preventDefault();
    if (newPost.trim() !== "") {
      await createPost(id, { content: newPost });
      setNewPost("");
      getPosts(id).then(setPosts).catch(console.error);
    }
  };

  if (!community) return <h2>Loading...</h2>;

  return (
    <div className="community-page">
      <h1>{community.name}</h1>
      <p>{community.description}</p>

      <h2>Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.content}</li>
        ))}
      </ul>

      <form onSubmit={handlePostSubmit} className="post-form">
        <input
          type="text"
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          placeholder="Write a post..."
          required
        />
        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default CommunityPage;
