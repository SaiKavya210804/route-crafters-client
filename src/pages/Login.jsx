import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FaEye, FaEyeSlash } from "react-icons/fa"; 

const Login = () => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const response = await login(credentials.username, credentials.password);
  
      if (response?.data?.message) {
        alert(response.data.message);
        navigate("/dashboard");
      } else {
        alert("Login successful...");
        navigate("/dashboard");
      }
    } catch (error) {
      const message =
        error?.response?.data?.message || "Login failed. Please try again.";
      console.error("Login error:", error);
      alert(message);
    }
  };
  

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <label>Username</label>
          <input
            type="text"
            name="username"
            placeholder="Enter your username"
            value={credentials.username}
            onChange={handleChange}
            required
          />

          <label>Password</label>
          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              value={credentials.password}
              onChange={handleChange}
              required
            />
            <span
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

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