import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is authenticated
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    const users = JSON.parse(localStorage.getItem("user"));

    if (!isAuthenticated || !users) {
      navigate("/login"); // Redirect to login if not authenticated
    } else {
      setUser(users);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("user");
    navigate("/login"); // Redirect to login after logout
  };

  return (
    <div className="dashboard-container">
      <h1>Welcome to Your Dashboard</h1>
      {user && <h2>Hello, {user.email}!</h2>}
      
      <button onClick={handleLogout} className="logout-btn">
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
