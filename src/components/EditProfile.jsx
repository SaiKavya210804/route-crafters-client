import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const EditProfile = () => {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    hobby: ""
  });
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3000/users/1") // Assuming single user profile for now
      .then((response) => setProfile(response.data))
      .catch((error) => console.error("Error fetching profile:", error));
  }, []);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put("http://localhost:3000/users/1", profile)
      .then(() => navigate("/profile"))
      .catch((error) => console.error("Error updating profile:", error));
  };

  return (
    <div className="edit-profile-container flex items-center justify-center h-screen">
      <form 
        onSubmit={handleSubmit} 
        className="edit-profile-box bg-white p-6 rounded-lg shadow-md text-center"
      >
        <h2 className="text-lg font-semibold mb-4">Edit Profile</h2>
        <input
          type="text"
          name="name"
          value={profile.name}
          onChange={handleChange}
          placeholder="Name"
          className="w-full mb-3 p-2 border rounded"
          required
        />
        <input
          type="email"
          name="email"
          value={profile.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full mb-3 p-2 border rounded"
          required
          disabled // Email should typically not be editable
        />
        <input
          type="text"
          name="hobby"
          value={profile.hobby}
          onChange={handleChange}
          placeholder="Hobby"
          className="w-full mb-3 p-2 border rounded"
        />
        <button 
          type="submit"
          className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Save Changes
        </button>
        <button 
          type="button"
          onClick={() => navigate("/profile")}
          className="mt-2 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
