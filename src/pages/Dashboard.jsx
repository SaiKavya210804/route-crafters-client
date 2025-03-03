import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!isAuthenticated || !storedUser) {
      navigate("/login");
    } else {
      setUser(storedUser);
    }
  }, [navigate]);

  return (
    <div className="dashboard-container">
      {user ? <h1>Welcome, {user.username}!</h1> : <h1>Loading...</h1>}
    </div>
  );
};

export default Dashboard;
