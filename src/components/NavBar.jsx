import React from "react";
import { Link } from "react-router-dom";
//import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Hobby Travel Matchmaker</div>
      <div className="menu">
        <Link to="/">Home</Link>
        <Link to="/explore">Explore</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
        <button className="signup-btn">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
