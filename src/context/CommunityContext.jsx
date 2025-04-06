import React, { createContext, useState, useEffect } from "react";
import { getCommunities, createCommunity } from "../services/CommunityService";

export const CommunityContext = createContext();

export const CommunityProvider = ({ children }) => {
  const [communities, setCommunities] = useState([]);

  // Fetch communities on mount
  useEffect(() => {
    getCommunities()
      .then(setCommunities)
      .catch(console.error);
  }, []);

  // Function to add a new community
  const addCommunity = async (newCommunity) => {
    try {
      const createdCommunity = await createCommunity(newCommunity);
      setCommunities([...communities, createdCommunity]); // Update state
    } catch (error) {
      console.error("Error creating community:", error);
    }
  };

  return (
    <CommunityContext.Provider value={{ communities, addCommunity }}>
      {children}
    </CommunityContext.Provider>
  );
};
