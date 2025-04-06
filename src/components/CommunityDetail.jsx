import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import "../styles/Community.css";
import PostList from "./PostList";
import NewPostForm from "./NewPostForm";

const CommunityDetail = ({ community }) => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/communities/${community.id}/posts`);
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    if (community) {
      fetchPosts();
    }
  }, [community]);

  return (
    <div className="community-detail">
      <h3>{community.name} - Discussions</h3>

      {/* ✅ Make sure these props are passed */}
      <PostList
        posts={posts}
        communityId={community.id}
        onPostDeleted={fetchPosts}
      />

      <NewPostForm
        communityId={community.id}
        onPostCreated={fetchPosts}
      />
    </div>
  );
};

CommunityDetail.propTypes = {
  community: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
  }),
};

export default CommunityDetail;
