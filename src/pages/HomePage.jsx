import React, { useContext } from "react";
import { CommunityContext } from "../context/CommunityContext";
import { useNavigate } from "react-router-dom";
import "../styles/Community.css";

const HomePage = () => {
  const { communities } = useContext(CommunityContext);
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <h1>Hobby Communities</h1>
      <ul>
        {communities.map((community) => (
          <li key={community.id} onClick={() => navigate(`/community/${community.id}`)}>
            <h3>{community.name}</h3>
            <p>{community.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
