import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

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
