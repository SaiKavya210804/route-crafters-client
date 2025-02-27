import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css"; // Ensure CSS is imported

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("/users.json");
      if (!response.ok) throw new Error("Failed to fetch users");

      const users = await response.json();
      const user = users.find((u) => u.email === email && u.password === password);

      if (user) {
        alert(`Welcome, ${user.username}!`);
        navigate("/dashboard"); // Redirects after login
      } else {
        setError("Invalid email or password. Please try again.");
      }
    } catch (err) {
      console.error("Error loading user data:", err);
      setError("Error loading user data.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Login</h1>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <form onSubmit={handleLogin}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="password">Password:</label>
          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span className="toggle-password" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? "🙈" : "👁"}
            </span>
          </div>
          <button type="submit">Login</button>
        </form>
        <p className="signup-text">
          Do not have an account? <br />
          <a href="/register">Sign up here</a>.
        </p>
      </div>
    </div>
  );
};

export default Login;
