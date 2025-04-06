import axios from "axios";

const API_URL = "http://localhost:8080/api/communities";

// Fetch all communities
export const getCommunities = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching communities:", error);
    throw error;
  }
};

// Create a new community
export const createCommunity = async (communityData) => {
  try {
    const response = await axios.post(API_URL, communityData);
    return response.data;
  } catch (error) {
    console.error("Error creating community:", error);
    throw error;
  }
};

// Fetch a single community by ID
export const getCommunityById = async (communityId) => {
  try {
    const response = await axios.get(`${API_URL}/${communityId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching community:", error);
    throw error;
  }
};
