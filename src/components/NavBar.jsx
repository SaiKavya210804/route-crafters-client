import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuth();

  return (
    <nav style={{ 
      display: "flex", 
      justifyContent: "space-between", 
      alignItems: "center", 
      padding: "10px 20px", 
      background: "black", 
      color: "white" 
    }}>
      <h1 style={{ margin: 0, fontSize: "24px" }}>Hobby Travel Matchmaker</h1>

      <ul style={{ 
        listStyle: "none", 
        display: "flex", 
        gap: "20px", 
        margin: 0, 
        padding: 0 
      }}>
        <li><Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link></li>
        <li><Link to="/explore" style={{ color: "white", textDecoration: "none" }}>Explore</Link></li>
        <li><Link to="/about" style={{ color: "white", textDecoration: "none" }}>About</Link></li> {/* About page link */}

        {isAuthenticated ? (
          <>
            <li><Link to="/profile" style={{ color: "white", textDecoration: "none" }}>Profile</Link></li>
            {user?.name && <li style={{ color: "white" }}>Welcome, {user.name}!</li>}

            <li>
              <button 
                onClick={logout} 
                style={{ 
                  background: "red", 
                  color: "white", 
                  border: "none", 
                  padding: "5px 10px", 
                  cursor: "pointer", 
                  borderRadius: "5px" 
                }}>
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li><Link to="/login" style={{ color: "white", textDecoration: "none" }}>Login</Link></li>
            <li>
              <Link to="/signup" 
                style={{ 
                  background: "orange", 
                  color: "white", 
                  padding: "8px 12px", 
                  borderRadius: "5px", 
                  textDecoration: "none" 
                }}>
                Sign Up
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
