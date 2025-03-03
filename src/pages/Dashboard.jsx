import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Profile from "../pages/Profile"; // ✅ Import Profile component

const Dashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = location.state?.user; // ✅ Get user data from navigation

  useEffect(() => {
    if (!user) {
      navigate("/login"); // Redirect to login if no user data
    }
  }, [user, navigate]);

  const handleLogout = () => {
    navigate("/login"); // Redirect to login after logout
  };

  return (
    <div className="dashboard-container">
      <h1>Welcome to Your Dashboard</h1>
      {user ? (
        <>
          <h2>Hello, {user.name}!</h2>
          <Profile user={user} /> {/* ✅ Render Profile Component */}
        </>
      ) : (
        <p>No user data available. Redirecting...</p>
      )}

      <button onClick={handleLogout} className="logout-btn">
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
