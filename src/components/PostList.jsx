import PropTypes from "prop-types";
import "../styles/Community.css";
import axios from "axios";

const PostList = ({ posts, communityId, onPostDeleted }) => {
  const handleDelete = async (postId) => {
    const confirmed = window.confirm("Are you sure you want to delete this post?");
    if (!confirmed) return;

    try {
      await axios.delete(`http://localhost:8080/api/communities/${communityId}/posts/${postId}`);
      onPostDeleted(); // Refresh posts after deletion
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <div className="post-list">
      <h4>Posts:</h4>
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="post-item">
            {post.content}
            <button className="delete-btn" onClick={() => handleDelete(post.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
  communityId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onPostDeleted: PropTypes.func.isRequired,
};

export default PostList;
