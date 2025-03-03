import { useState, useEffect } from "react";
import axios from "axios";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({});

  useEffect(() => {
    // Fetch the logged-in user's data from the backend
    axios.get("http://localhost:3000/users/1") // Change "1" to dynamic user ID
      .then((response) => {
        setUser(response.data);
        setEditedUser(response.data);
      })
      .catch((error) => console.error("Error fetching user data:", error));
  }, []);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  const handleSave = () => {
    axios.put(`http://localhost:3000/users/${user.id}`, editedUser)
      .then(() => {
        setUser(editedUser);
        setIsEditing(false);
        alert("Profile updated successfully!");
      })
      .catch((error) => console.error("Error updating profile:", error));
  };

  return (
    <div className="profile-container">
      {user ? (
        <div className="profile-box">
          <img className="profile-picture" src="https://static.vecteezy.com/system/resources/previews/000/380/793/original/edit-profile-vector-icon.jpg" alt="Profile" />
          {isEditing ? (
            <>
              <input type="text" name="name" value={editedUser.name} onChange={handleChange} />
              <input type="email" name="email" value={editedUser.email} onChange={handleChange} />
              <input type="text" name="hobby" value={editedUser.hobby} onChange={handleChange} />
              <button onClick={handleSave}>Save</button>
            </>
          ) : (
            <>
              <h2>{user.name}</h2>
              <p>Email: {user.email}</p>
              <p>Hobby: {user.hobby}</p>
              <button onClick={handleEdit}>Edit</button>
            </>
          )}
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
};

export default Profile;
