import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated");
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (authStatus && storedUser) {
      setIsAuthenticated(true);
      setUser(storedUser);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("user");
    setIsAuthenticated(false);
    setShowProfile(false);
    setUser(null);
    navigate("/login"); // ✅ Redirect to login after logout
    window.location.reload(); // ✅ Refresh UI to hide Profile button
  };

  return (
    <nav className="navbar">
      <div className="logo">Hobby Travel Matchmaker</div>
      <div className="menu">
        <Link to="/">Home</Link>
        <Link to="/explore">Explore</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">
          <button className="signup-btn">Sign Up</button>
        </Link>

        {isAuthenticated && (
          <div className="profile-container">
            <button className="profile-btn" onClick={() => setShowProfile(!showProfile)}>
              Profile
            </button>

            {showProfile && user && (
              <div className="profile-box">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                  alt="Profile"
                  className="profile-pic"
                />
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Hobby:</strong> {user.hobby}</p>
                <button onClick={handleLogout}>Logout</button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
