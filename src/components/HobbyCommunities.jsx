import React, { useState } from "react";
import "../styles/Community.css";
import CommunityList from "./CommunityList";
import CreateCommunity from "./CreateCommunity";
import CommunityDetail from "./CommunityDetail";

const HobbyCommunities = () => {
  const [selectedCommunity, setSelectedCommunity] = useState(null);

  return (
    <div className="hobby-communities">
      <h2>Hobby Communities</h2>
      <CreateCommunity onCommunityCreated={() => setSelectedCommunity(null)} />
      {!selectedCommunity ? (
        <CommunityList onSelect={setSelectedCommunity} />
      ) : (
        <CommunityDetail community={selectedCommunity} />
      )}
    </div>
  );
};

export default HobbyCommunities;
