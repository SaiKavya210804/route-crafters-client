import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Hobby Travel Matchmaker</div>
      <div className="menu">
        <Link to="/">Home</Link>
        <Link to="/explore">Explore</Link>
        <Link to="/about">About</Link>
<<<<<<< HEAD
        {!isAuthenticated ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">
              <button className="signup-btn">Sign Up</button>
            </Link>
          </>
        ) : (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/profile">Profile</Link> {/* Profile button visible after login */}
          </>
        )}
=======
        <Link to="/login">Login</Link>
        <Link to="/signup">
          <button className="signup-btn">Sign Up</button>
        </Link>
>>>>>>> parent of 663e3aa (created a profile page)
      </div>
    </nav>
  );
};

export default Navbar;
