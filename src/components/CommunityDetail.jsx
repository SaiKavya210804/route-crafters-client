import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Community.css";
import PostList from "./PostList";
import NewPostForm from "./NewPostForm";

const CommunityDetail = ({ community }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (community) fetchPosts();
  }, [community]);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/communities/${community.id}/posts`);
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  return (
    <div className="community-detail">
      <h3>{community.name} - Discussions</h3>
      <PostList posts={posts} />
      <NewPostForm communityId={community.id} onPostCreated={fetchPosts} />
    </div>
  );
};

export default CommunityDetail;
