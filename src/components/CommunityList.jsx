import { useContext } from "react";
import { Link } from "react-router-dom";
import { CommunityContext } from "../context/CommunityContext";
import "../styles/Community.css";

const CommunityList = () => {
  const { communities } = useContext(CommunityContext);

  return (
    <div className="community-list">
      <h2>Hobby Communities</h2>
      <ul>
        {communities.map((community) => (
          <li key={community.id}>
            <Link to={`/community/${community.id}`}>
              {community.name} - {community.description}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommunityList;
