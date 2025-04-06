import { useState } from "react";
import axios from "axios";

const Explore = () => {
  const [step, setStep] = useState(0); // Step: 0 = start, 1 = select filters, 2 = show recommendations
  const [mode, setMode] = useState(null); // "hobby" or "season"
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [destinations, setDestinations] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState(null);

  const hobbies = ["Hiking", "Photography", "Cultural Exploration", "Surfing", "Cycling"];
  const seasons = ["Spring", "Summer", "Autumn", "Winter"];
  const seasonToMonths = {
    Spring: ["March", "April", "May"],
    Summer: ["June", "July", "August"],
    Autumn: ["September", "October", "November"],
    Winter: ["December", "January", "February"],
    Rainy: ["June", "July", "August"] // Optional if you're supporting monsoon season
  };
  
  const handleModeSelect = (selectedMode) => {
    setMode(selectedMode);
    setSelectedFilters([]);
    setDestinations([]);
    setStep(1);
  };

  const handleFilterChange = (event) => {
    const { value, checked } = event.target;
    const updatedFilters = checked
      ? [...selectedFilters, value]
      : selectedFilters.filter((item) => item !== value);
    setSelectedFilters(updatedFilters);
  };

  const handleGetRecommendations = async () => {
    if (selectedFilters.length === 0) {
      alert("Please select at least one option!");
      return;
    }

    try {
      const response = await axios.get(
        `http://localhost:8080/api/destinations/recommend/${mode === "hobby" ? "hobbies" : "seasons"}`,
        {
          params: mode === "hobby"
            ? { interests: selectedFilters }
            : { bestTime: selectedFilters.flatMap(season => seasonToMonths[season]) },

          paramsSerializer: (params) => {
            const searchParams = new URLSearchParams();
            Object.keys(params).forEach((key) => {
              const value = params[key];
              if (Array.isArray(value)) {
                value.forEach((v) => searchParams.append(key, v));
              } else {
                searchParams.append(key, value);
              }
            });
            return searchParams.toString();
          },
        }
      );
      // setDestinations(response.data);
      // Remove duplicates based on destination name
      const uniqueDestinations = Array.from(
      new Map(response.data.map(dest => [dest.name, dest])).values()
      );
      setDestinations(uniqueDestinations);

      setStep(2);
    } catch (error) {
      console.error("Error fetching recommendations:", error);
    }
  }; // ✅ this was missing!

  // ✅ Move this outside
  const handleDestinationClick = (destination) => {
    setSelectedDestination(destination);
    setShowPopup(true);
  };


  return (
    <div className="explore-container">
      {step === 0 && (
        <>
          <h2>🌍 &quot;Travel far enough, you meet yourself.&quot; - David Mitchell</h2>
          <p>Get recommended locations based on...</p>
          <div className="mode-buttons">
            <button onClick={() => handleModeSelect("hobby")}>Based on Hobbies</button>
            <button onClick={() => handleModeSelect("season")}>Based on Seasons</button>
          </div>
        </>
      )}

      {step === 1 && (
        <>
          <h3>{mode === "hobby" ? "Select your Hobbies:" : "Select a Season:"}</h3>
          <div className="checkboxes">
            {(mode === "hobby" ? hobbies : seasons).map((item) => (
              <label key={item}>
                <input
                  type={mode === "season" ? "radio" : "checkbox"}
                  name="filter"
                  value={item}
                  checked={selectedFilters.includes(item)}
                  onChange={handleFilterChange}
                />
                {item}
              </label>
            ))}
          </div>
          <button className="get-recommendations-button" onClick={handleGetRecommendations}>
            Get Recommended Destinations
          </button>
        </>
      )}

      {step === 2 && (
        <div className="results">
          <h3>📌 Recommended Destinations:</h3>
          {destinations.length === 0 ? (
            <p>No recommendations found.</p>
          ) : (
            <ul>
              {destinations.map((dest) => (
                <li key={dest._id?.$oid || dest.name} onClick={() => handleDestinationClick(dest)}>
                  <strong>{dest.name}</strong>
                </li>
              ))}
            </ul>
          //   <ul>
          //   {destinations.map((dest) => (
          //     <li key={dest._id?.$oid || dest.name} onClick={() => handleDestinationClick(dest)}>
          //       <strong>{dest.name}</strong>
          //     </li>
          //   ))}
          // </ul>
          
          )}
        </div>
      )}

      {showPopup && selectedDestination && (
        <div className="popup-overlay" onClick={() => setShowPopup(false)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedDestination.name}</h2>
            <p>{selectedDestination.description}</p>
            <p><strong>Country:</strong> {selectedDestination.country}</p>
            <p><strong>Best Season:</strong> {selectedDestination.bestSeason}</p>
            <p><strong>Top Hobbies:</strong> {selectedDestination.topHobbies?.join(", ")}</p>
            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Explore;
