import { useEffect, useState } from "react";

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  return (
    <div className="profile-container">
      {user ? (
        <div className="profile-box">
          <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Profile" className="profile-pic" />
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Hobby:</strong> {user.hobby}</p>
          <button>Edit</button>
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
};

export default Profile;
