import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import axios from "axios";

const Profile = () => {
  const { user, setUser } = useAuth();
  const [userData, setUserData] = useState(null);
  const [editingField, setEditingField] = useState(null);
  const [tempValue, setTempValue] = useState("");
  const [profilePic, setProfilePic] = useState("");

  useEffect(() => {
    if (!user || !user.id) return;

    axios
      .get(`https://route-crafters-server.onrender.com/users/${user.id}`)
      .then((response) => {
        setUserData(response.data);
        setProfilePic(response.data.profilePic || "https://www.w3schools.com/howto/img_avatar.png");
      })
      .catch((error) => console.error("Error fetching user data:", error));
  }, [user]);

  const handleEdit = (field, value) => {
    setEditingField(field);
    setTempValue(value);
  };

  const handleSave = async () => {
    if (!userData || !userData.id) return;

    const updatedUser = { ...userData, [editingField]: tempValue };

    try {
      const response = await axios.put(
        `https://route-crafters-server.onrender.com/users/${userData.id}`,
        updatedUser
      );
      setUserData(response.data);
      if (setUser) setUser(response.data);
    } catch (error) {
      console.error("Error updating user:", error);
    }

    setEditingField(null);
  };

  return (
    <div className="full-profile-container">
      <h2>Profile</h2>

      {userData ? (
        <div>
          {/* Profile Picture Section */}
          <div>
            <img src={profilePic} alt="Profile" className="full-profile-image" />
            <input
              type="text"
              placeholder="Enter image URL"
              value={profilePic}
              onChange={(e) => setProfilePic(e.target.value)}
              className="full-profile-image-input"
            />
          </div>

          {/* Editable Fields */}
          <div className="full-profile-fields">
            {Object.keys(userData).map(
              (key) =>
                key !== "id" &&
                key !== "profilePic" && (
                  <div key={key} className="full-profile-field">
                    <span>{key}:</span>
                    {editingField === key ? (
                      <input
                        type="text"
                        value={tempValue}
                        onChange={(e) => setTempValue(e.target.value)}
                        className="full-profile-input"
                      />
                    ) : (
                      <span>{userData[key]}</span>
                    )}
                    {editingField === key ? (
                      <button onClick={handleSave} className="full-profile-btn full-save-btn">
                        Save
                      </button>
                    ) : (
                      <button onClick={() => handleEdit(key, userData[key])} className="full-profile-btn full-edit-btn">
                        Edit
                      </button>
                    )}
                  </div>
                )
            )}
          </div>
        </div>
      ) : (
        <p>No user data found.</p>
      )}
    </div>
  );
};

export default Profile;
