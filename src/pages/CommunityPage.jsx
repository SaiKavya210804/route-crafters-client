import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { getPosts, createPost } from "../services/PostService";
import { CommunityContext } from "../context/CommunityContext";
import "../styles/Community.css"; // Make sure you have some styles here

const CommunityPage = () => {
  const { id } = useParams();
  const { communities } = useContext(CommunityContext);
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");
  const [loadingPosts, setLoadingPosts] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const community = communities.find((c) => String(c.id) === id);


  useEffect(() => {
    if (community) {
      getPosts(id)
        .then((data) => {
          setPosts(data);
          setLoadingPosts(false);
        })
        .catch((error) => {
          console.error("Failed to fetch posts:", error);
          setLoadingPosts(false);
        });
    }
  }, [id, community]);

  const handlePostSubmit = async (e) => {
    e.preventDefault();
    if (newPost.trim() === "") return;

    try {
      setSubmitting(true);
      await createPost(id, { content: newPost });
      const updatedPosts = await getPosts(id);
      setPosts(updatedPosts);
      setNewPost("");
    } catch (error) {
      console.error("Failed to create post:", error);
    } finally {
      setSubmitting(false);
    }
  };

  if (!community) {
    return (
      <div className="community-page">
        <h2>Loading community data...</h2>
        <p>Please wait while we fetch the details.</p>
      </div>
    );
  }
  

  return (
    <div className="community-page">
      <h1>{community.name}</h1>
      <p>{community.description}</p>

      <section className="posts-section">
        <h2>Posts ({posts.length})</h2>
        {loadingPosts ? (
          <p>Loading posts...</p>
        ) : posts.length > 0 ? (
          <ul className="posts-list">
            {posts.map((post) => (
              <li key={post.id}>{post.content}</li>
            ))}
          </ul>
        ) : (
          <p>No posts yet. Be the first to share something!</p>
        )}
      </section>

      <form onSubmit={handlePostSubmit} className="post-form">
        <input
          type="text"
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          placeholder="Write a post..."
          disabled={submitting}
          required
        />
        <button type="submit" disabled={submitting}>
          {submitting ? "Posting..." : "Post"}
        </button>
      </form>
    </div>
  );
};

export default CommunityPage;
