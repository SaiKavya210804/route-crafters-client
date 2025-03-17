import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3000/users/1") // Assuming single user profile for now
      .then((response) => setProfile(response.data))
      .catch((error) => console.error("Error fetching profile:", error));
  }, []);

  const handleEditProfile = () => {
    navigate("/EditProfile");
  };

  return (
    <div className="profile-container flex items-center justify-center h-screen">
      {profile ? (
        <div className="profile-box bg-white p-6 rounded-lg shadow-md text-center">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" 
            alt="Profile" 
            className="profile-image w-24 h-24 rounded-full mx-auto mb-4"
          />
          <p className="text-lg font-semibold">{profile.name}</p>
          <p className="text-gray-600"><strong>Email:</strong> {profile.email}</p>
          <p className="text-gray-600"><strong>Hobby:</strong> {profile.hobby || "Not specified"}</p>
          <button 
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={handleEditProfile}
          >
            Edit Profile
          </button>
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
};

export default Profile;
