import { useState } from "react";
import axios from "axios";

const SeasonSelection = () => {
  const [selectedSeasons, setSelectedSeasons] = useState([]);
  const [destinations, setDestinations] = useState([]);

  const handleSeasonChange = (event) => {
    const { value, checked } = event.target;
    setSelectedSeasons((prev) =>
      checked ? [...prev, value] : prev.filter((s) => s !== value)
    );
  };

  const getSeasonRecommendations = async () => {
    if (selectedSeasons.length === 0) {
      alert("Please select at least one season!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/api/destinations/recommend/seasons", {
        seasons: selectedSeasons
      });
      setDestinations(response.data);
    } catch (error) {
      console.error("Error fetching recommendations:", error);
    }
  };

  return (
    <div className="season-selection-container">
      <h2>Select Preferred Seasons:</h2>
      {["Winter", "Spring", "Summer", "Autumn"].map((season) => (
        <label key={season}>
          <input type="checkbox" value={season} onChange={handleSeasonChange} />
          {season}
        </label>
      ))}
      <button className="btn" onClick={getSeasonRecommendations}>Get Recommendations</button>

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

export default SeasonSelection;
