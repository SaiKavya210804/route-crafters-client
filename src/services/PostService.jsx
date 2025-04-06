import axios from "axios";

const API_URL = "http://localhost:8080/api/communities";

// Fetch posts in a community
export const getPosts = async (communityId) => {
  try {
    const response = await axios.get(`${API_URL}/${communityId}/posts`);
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};

// Create a new post inside a community
export const createPost = async (communityId, postData) => {
  try {
    const response = await axios.post(`${API_URL}/${communityId}/posts`, postData);
    return response.data;
  } catch (error) {
    console.error("Error creating post:", error);
    throw error;
  }
};
