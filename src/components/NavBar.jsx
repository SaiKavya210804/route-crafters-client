// import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Hobby Travel Matchmaker</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/explore">Explore</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;