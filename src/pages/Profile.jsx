import { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    // Fetch all profiles from db.json
    axios.get("https://route-crafters-server.onrender.com/users")
      .then((response) => setProfiles(response.data))
      .catch((error) => console.error("Error fetching profiles:", error));
  }, []);

  return (
    <div className="profile-container">
      {profiles.length > 0 ? (
        profiles.map((user) => (
          <div key={user.id} className="profile-box">
            <img 
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" 
              alt="Profile" 
              className="profile-image"
            />
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Hobby:</strong> {user.hobby || "Not specified"}</p>
          </div>
        ))
      ) : (
        <p>Loading profiles...</p>
      )}
    </div>
  );
};

export default Profile;
