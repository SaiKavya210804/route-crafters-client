import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; 

const Dashboard = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-header">Welcome to Your Dashboard</h1>
      {user && <p className="dashboard-subtext">Hello, {user.email}!</p>}

      <div className="dashboard-content">
        <div className="dashboard-card">
          <h3>Your Profile</h3>
          <p>Manage and update your personal details, hobbies, and preferences.</p>
        </div>

        <div className="dashboard-card">
          <h3>Your Travel Plans</h3>
          <p>Explore new places, make plans, and create itineraries based on your hobbies.</p>
        </div>

        <div className="dashboard-card">
          <button onClick={handleLogout} className="logout-btn">Logout</button>
        </div>
      </div>

      <div className="dashboard-footer">
        <p>
          Need help? <a href="mailto:support@routecrafters.com">Contact Support</a>
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
