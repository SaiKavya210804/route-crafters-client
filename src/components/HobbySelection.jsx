import { useState } from "react";
import axios from "axios";

const HobbySelection = () => {
  const [selectedHobbies, setSelectedHobbies] = useState([]);
  const [destinations, setDestinations] = useState([]);

  const handleHobbyChange = (event) => {
    const { value, checked } = event.target;
    setSelectedHobbies((prev) =>
      checked ? [...prev, value] : prev.filter((h) => h !== value)
    );
  };

  const getHobbyRecommendations = async () => {
    if (selectedHobbies.length === 0) {
      alert("Please select at least one hobby!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/api/destinations/recommend/hobbies", {
        interests: selectedHobbies
      });
      setDestinations(response.data);
    } catch (error) {
      console.error("Error fetching recommendations:", error);
    }
  };

  return (
    <div className="hobby-selection-container">
      <h2>Select Your Hobbies:</h2>
      {[
        "Photography",
        "Beaches",
        "Culture",
        "Trekking",
        "Wildlife",
        "Nature",
        "History",
        "Adventure",
        "Architecture",
        "Surfing",
        "Exploration",
        "Diving",
        "Nightlife",
        "Markets",
        "Skiing",
        "Mountaineering"
    ].map((hobby) => (

        <label key={hobby}>
          <input type="checkbox" value={hobby} onChange={handleHobbyChange} />
          {hobby}
        </label>
      ))}
      <button className="btn" onClick={getHobbyRecommendations}>Get Recommendations</button>

      {/* Display recommendations BELOW the selection */}
      {destinations.length > 0 && (
        <div className="destination-list">
          <h3>Recommended Destinations:</h3>
          {destinations.map((dest) => (
            <div key={dest.id} className="destination-card">
              <h4>{dest.name}</h4>
              <p>{dest.shortDescription}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HobbySelection;
