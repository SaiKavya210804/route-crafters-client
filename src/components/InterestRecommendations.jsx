import { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const InterestRecommendations = ({ setRecommendations }) => {
  const [selectedInterests, setSelectedInterests] = useState([]);

  const hobbies = [
    "Travelling",
    "Photography",
    "Trekking",
    "Culinary Arts",
    "Cycling",
    "Yoga",
    "Watching Movies",
    "Birdwatching",
    "Art & Culture",
  ];

  const handleInterestChange = (interest) => {
    setSelectedInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((item) => item !== interest)
        : [...prev, interest]
    );
  };

  const fetchRecommendations = async () => {
    if (selectedInterests.length === 0) {
      alert("Please select at least one interest.");
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:8080/api/destinations/recommend",
        { interests: selectedInterests }
      );
      setRecommendations(response.data);
    } catch (error) {
      console.error("Error fetching recommendations:", error);
    }
  };

  return (
    <div>
      <h2>Select Your Interests</h2>
      <div>
        {hobbies.map((hobby) => (
          <label key={hobby} style={{ display: "block", marginBottom: "5px" }}>
            <input
              type="checkbox"
              value={hobby}
              onChange={() => handleInterestChange(hobby)}
            />
            {hobby}
          </label>
        ))}
      </div>
      <button onClick={fetchRecommendations}>Get Recommendations</button>
    </div>
  );
};

// ✅ PropTypes for Validation
InterestRecommendations.propTypes = {
  setRecommendations: PropTypes.func.isRequired,
};

export default InterestRecommendations;
