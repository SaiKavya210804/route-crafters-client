import React, { useContext } from "react";
import { CommunityContext } from "../context/CommunityContext";
import "../styles/Community.css";

const CommunityList = ({ onSelect }) => {
  const { communities } = useContext(CommunityContext);

  return (
    <div className="community-list">
      <h2>Hobby Communities</h2>
      <ul>
        {communities.map((community) => (
          <li key={community.id} onClick={() => onSelect(community)}>
            {community.name} - {community.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommunityList;
