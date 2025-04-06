import { useState } from "react";
import PropTypes from "prop-types"; // 👈 import here
import axios from "axios";
import "../styles/Community.css";

const NewPostForm = ({ communityId, onPostCreated }) => {
  const [newPost, setNewPost] = useState({ content: "" });

  const createPost = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:8080/api/communities/${communityId}/posts`, newPost);
      setNewPost({ content: "" });
      onPostCreated(); // Refresh posts
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <form className="new-post-form" onSubmit={createPost}>
      <input
        type="text"
        placeholder="Write a post..."
        value={newPost.content}
        onChange={(e) => setNewPost({ content: e.target.value })}
        required
      />
      <button type="submit">Post</button>
    </form>
  );
};

NewPostForm.propTypes = {
  communityId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onPostCreated: PropTypes.func.isRequired,
};

export default NewPostForm;
