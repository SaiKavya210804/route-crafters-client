import { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";

// Create Auth Context
const AuthContext = createContext();

// Custom Hook to use Auth Context
export const useAuth = () => {
  return useContext(AuthContext);
};

// Auth Provider Component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true)

  // Check authentication status on page load
  useEffect(() => {
    // Fetch user data to check if the user is already authenticated
    axios
      .get("http://localhost:8080/api/users/check-auth", { withCredentials: true })
      .then((response) => {
        setUser(response.data);
        setIsAuthenticated(true);
        setLoading(false)
      })
      .catch(() => {
        setUser(null);
        setIsAuthenticated(false);
      });
  }, []);

  // Login Function
  const login = async (username, password) => {
    try {
      // Fetch users from the server
      const response = await axios.post("http://localhost:8080/api/users/login", {username, password}, {withCredentials: true});
      setUser(response.data.user);
      setIsAuthenticated(true)
      return response

     
    } catch (error) {
      console.error("Login error:", error);
      return { success: false, message: "Failed to login. Please try again." };
    }
  };

  // Logout Function
  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

// Define PropTypes for children
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired, // ✅ Corrected PropTypes
};

export default AuthProvider;
