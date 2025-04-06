import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { getCommunities, createCommunity } from "../services/CommunityService";

export const CommunityContext = createContext();

export const CommunityProvider = ({ children }) => {
  const [communities, setCommunities] = useState([]);

  useEffect(() => {
    getCommunities()
      .then(setCommunities)
      .catch(console.error);
  }, []);

  const addCommunity = async (newCommunity) => {
    try {
      const createdCommunity = await createCommunity(newCommunity);
      setCommunities([...communities, createdCommunity]);
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

CommunityProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
