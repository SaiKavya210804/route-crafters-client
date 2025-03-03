import { Link } from "react-router-dom";

const Navbar = () => {
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  return (
    <nav className="navbar">
      <div className="logo">Hobby Travel Matchmaker</div>
      <div className="menu">
        <Link to="/">Home</Link>
        <Link to="/explore">Explore</Link>
        <Link to="/about">About</Link>

        {!isAuthenticated ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">
              <button className="signup-btn">Sign Up</button>
            </Link>
          </>
        ) : (
          <>
            <Link to="/profile">Profile</Link>
            <button className="logout-btn" onClick={() => {
              localStorage.removeItem("isAuthenticated");
              window.location.href = "/login"; // Redirect after logout
            }}>
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
