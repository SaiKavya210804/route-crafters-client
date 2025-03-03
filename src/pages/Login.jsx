import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Fetch user data from the backend
      const response = await axios.get("http://localhost:3000/users");
      const users = response.data;

      // Check if user exists
      const user = users.find((u) => u.email === credentials.email && u.password === credentials.password);

      if (user) {
        localStorage.setItem("isAuthenticated", "true"); // Store authentication state
        alert("Login successful!");
        navigate("/dashboard"); // ✅ Redirect to Dashboard page
      } else {
        alert("Invalid email or password.");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Failed to login. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <label>Email</label>
          <input type="email" name="email" placeholder="Enter your email" value={credentials.email} onChange={handleChange} required />
          
          <label>Password</label>
          <input type="password" name="password" placeholder="Enter your password" value={credentials.password} onChange={handleChange} required />
          
          <button type="submit">Login</button>
        </form>
        
        <p>
          Do not have an account? <Link to="/signup">Sign up here</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
