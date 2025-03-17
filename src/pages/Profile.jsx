import { useState, useEffect } from "react";
import axios from "axios";

const Profile = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [editingField, setEditingField] = useState(null);
  const [tempValue, setTempValue] = useState("");

  useEffect(() => {
    axios
      .get("https://route-crafters-server.onrender.com/users")
      .then((response) => {
        const uniqueUsers = [];
        const seenIds = new Set();

        response.data.forEach((user) => {
          if (!seenIds.has(user.id)) {
            seenIds.add(user.id);
            uniqueUsers.push(user);
          }
        });

        setUsers(uniqueUsers);
      })
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  const handleEdit = (field, value) => {
    setEditingField(field);
    setTempValue(value);
  };

  const handleSave = async () => {
    if (!selectedUser) return;

    const updatedUser = { ...selectedUser, [editingField]: tempValue };

    try {
      const response = await axios.put(
        `https://route-crafters-server.onrender.com/users/${selectedUser.id}`,
        updatedUser
      );

      setUsers((prevUsers) =>
        prevUsers.map((user) => (user.id === selectedUser.id ? response.data : user))
      );
      setSelectedUser(response.data);
    } catch (error) {
      console.error("Error updating user:", error);
    }

    setEditingField(null);
  };

  const handleDelete = async () => {
    if (!selectedUser) return;

    const confirmDelete = window.confirm("Are you sure you want to delete this profile?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`https://route-crafters-server.onrender.com/users/${selectedUser.id}`);

      // Remove deleted user from UI
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== selectedUser.id));

      // Return to profile list after deletion
      setSelectedUser(null);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div className="profile-page-container">
      <h2>Profiles</h2>

      {selectedUser ? (
        <div className="profile-edit-container">
          <h3>Edit Profile</h3>
          <img
            src={selectedUser.profilePic || "https://www.w3schools.com/howto/img_avatar.png"}
            alt="Profile"
            className="profile-image"
          />
          <div className="profile-fields">
            {Object.keys(selectedUser).map(
              (key) =>
                key !== "id" &&
                key !== "profilePic" && (
                  <div key={key} className="profile-field">
                    <span>{key}:</span>
                    {editingField === key ? (
                      <input
                        type="text"
                        value={tempValue}
                        onChange={(e) => setTempValue(e.target.value)}
                        className="profile-input"
                      />
                    ) : (
                      <span>{selectedUser[key]}</span>
                    )}
                    {editingField === key ? (
                      <button onClick={handleSave} className="profile-btn save-btn">
                        Save
                      </button>
                    ) : (
                      <button onClick={() => handleEdit(key, selectedUser[key])} className="profile-btn edit-btn">
                        Edit
                      </button>
                    )}
                  </div>
                )
            )}
          </div>

          {/* Button container for Back to Profiles and Delete Profile */}
          <div className="button-container">
            <button onClick={() => setSelectedUser(null)} className="back-btn">
              Back to Profiles
            </button>
            <button onClick={handleDelete} className="delete-btn">
              Delete Profile
            </button>
          </div>
        </div>
      ) : (
        <div className="profile-grid">
          {users.map((user) => (
            <div key={user.id} className="profile-card" onClick={() => setSelectedUser(user)}>
              <img
                src={user.profilePic || "https://www.w3schools.com/howto/img_avatar.png"}
                alt="Profile"
                className="profile-card-image"
              />
              <h4>
                {user.fullName
                  ? user.fullName
                  : user.personal?.name
                  ? user.personal.name
                  : "Unnamed User"}
              </h4>
              <p>{user.email || user.personal?.email || "No Email Provided"}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Profile;
