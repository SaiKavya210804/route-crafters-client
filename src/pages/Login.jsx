import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    alert(`Logged in with Email: ${email}`);
  };

  return (
    <section style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Login</h1>
      <form onSubmit={handleLogin} style={{ maxWidth: "400px", margin: "0 auto" }}>
        <div style={{ marginBottom: "1rem" }}>
          <label style={{ display: "block", marginBottom: ".5rem" }} htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: "100%", padding: ".5rem" }}
            required
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label style={{ display: "block", marginBottom: ".5rem" }} htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: "100%", padding: ".5rem" }}
            required
          />
        </div>
        <button
          type="submit"
          style={{
            backgroundColor: "#4CAF50",
            color: "white",
            padding: "0.5rem 1rem",
            border: "none",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </form>
      <p style={{ marginTop: "1rem" }}>
        Do not have an account? <a href="/signup">Sign up here</a>.
      </p>
    </section>
  );
};

export default Login;