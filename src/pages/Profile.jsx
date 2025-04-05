import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import axios from "axios";

const Profile = () => {
  const { setUser } = useAuth();
  const [userData, setUserData] = useState(null);
  const [editingField, setEditingField] = useState(null);
  const [tempValue, setTempValue] = useState("");
  const [profilePic, setProfilePic] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/users/check-auth",
          { withCredentials: true }
        );
        if (response && response.data) {
          setUserData(response.data.user);
          setProfilePic(
            response.data.profilePic ||
              "https://www.w3schools.com/howto/img_avatar.png"
          );
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUserData();
  }, []);

  const handleEdit = (field, value) => {
    setEditingField(field);
    setTempValue(value);
  };

  const handleSave = async (field, updatedValue) => {
    if (!userData || !userData.id) return;
    const updatedUser = { ...userData };

    // Determine which section to update
    if (field.startsWith("address")) {
      const [, key] = field.split(".");
      updatedUser.address[key] = updatedValue;
    } else if (field === "hobbies") {
      updatedUser.hobbies = updatedValue;
    } else if (field.startsWith("languages")) {
      const [, index, subField] = field.split(".");
      updatedUser.languages[index][subField] = updatedValue;
    } else {
      updatedUser.personal[field] = updatedValue;
    }

    try {
      const response = await axios.put(
        `http://localhost:8080/api/users/update/${userData.id}`,
        updatedUser,
        { withCredentials: true }
      );
      setUserData(response.data);
      if (setUser) setUser(response.data);
      setEditingField(null);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  // Add or Remove Hobbies
  const handleAddHobby = () => {
    setUserData({ ...userData, hobbies: [...userData.hobbies, ""] });
  };
  const handleRemoveHobby = (index) => {
    const updatedHobbies = [...userData.hobbies];
    updatedHobbies.splice(index, 1);
    handleSave("hobbies", updatedHobbies);
  };
  const handleHobbyChange = (index, value) => {
    const updatedHobbies = [...userData.hobbies];
    updatedHobbies[index] = value;
    setUserData({ ...userData, hobbies: updatedHobbies });
  };

  // Toggle Checkbox for Languages
  const handleLanguageToggle = (index, field) => {
    const updatedLanguages = [...userData.languages];
    updatedLanguages[index][field] = !updatedLanguages[index][field];
    handleSave(`languages.${index}.${field}`, updatedLanguages[index][field]);
  };

  const handleEditProfile = () => {
    navigate("/EditProfile");
  };

  return (
    <div className="profile-container">
      <h2>Profile</h2>

      {userData ? (
        <div>
          <div>
            <img src={profilePic} alt="Profile" className="profile-image" />
            <input
              type="text"
              placeholder="Enter image URL"
              value={profilePic}
              onChange={(e) => setProfilePic(e.target.value)}
              className="profile-image-input"
            />
          </div>

          <div className="profile-section">
            <h3>Personal Information</h3>
            {userData.personal &&
              Object.keys(userData.personal).map((key) => (
                <div key={key} className="profile-field">
                  <strong>{key}:</strong>
                  {editingField === key ? (
                    <input
                      type="text"
                      value={tempValue}
                      onChange={(e) => setTempValue(e.target.value)}
                      className="profile-input"
                    />
                  ) : (
                    <span>{userData.personal[key]}</span>
                  )}
                  {editingField === key ? (
                    <button onClick={() => handleSave(key, tempValue)} className="profile-btn save-btn">
                      Save
                    </button>
                  ) : (
                    <button
                      onClick={() => handleEdit(key, userData.personal[key])}
                      className="profile-btn edit-btn"
                    >
                      Edit
                    </button>
                  )}
                </div>
              ))}
          </div>

          <div className="profile-section">
            <h3>Address</h3>
            {userData.address && (
              <>
                {["permanent", "current"].map((type) => (
                  <div key={type}>
                    <strong>{type}:</strong>
                    {editingField === `address.${type}` ? (
                      <input
                        type="text"
                        value={tempValue}
                        onChange={(e) => setTempValue(e.target.value)}
                      />
                    ) : (
                      <span>{userData.address[type]}</span>
                    )}
                    {editingField === `address.${type}` ? (
                      <button onClick={() => handleSave(`address.${type}`, tempValue)}>Save</button>
                    ) : (
                      <button
                        onClick={() => handleEdit(`address.${type}`, userData.address[type])}
                      >
                        Edit
                      </button>
                    )}
                  </div>
                ))}
              </>
            )}
          </div>

          <div className="profile-section">
            <h3>Languages</h3>
            {userData.languages &&
              userData.languages.map((lang, index) => (
                <div key={index}>
                  <input
                    type="text"
                    value={lang.name}
                    onChange={(e) => {
                      const updatedLanguages = [...userData.languages];
                      updatedLanguages[index].name = e.target.value;
                      setUserData({ ...userData, languages: updatedLanguages });
                    }}
                  />
                  <div>
                    Read:{" "}
                    <input
                      type="checkbox"
                      checked={lang.read}
                      onChange={() => handleLanguageToggle(index, "read")}
                    />
                    Write:{" "}
                    <input
                      type="checkbox"
                      checked={lang.write}
                      onChange={() => handleLanguageToggle(index, "write")}
                    />
                    Speak:{" "}
                    <input
                      type="checkbox"
                      checked={lang.speak}
                      onChange={() => handleLanguageToggle(index, "speak")}
                    />
                  </div>
                </div>
              ))}
          </div>

          <div className="profile-section">
            <h3>Hobbies</h3>
            {userData.hobbies &&
              userData.hobbies.map((hobby, index) => (
                <div key={index}>
                  <input
                    type="text"
                    value={hobby}
                    onChange={(e) => handleHobbyChange(index, e.target.value)}
                  />
                  <button onClick={() => handleRemoveHobby(index)}>Remove</button>
                </div>
              ))}
            <button onClick={handleAddHobby}>Add Hobby</button>
          </div>
        </div>
      ) : (
        <p>No user data found.</p>
      )}
    </div>
  );
};

export default Profile;
