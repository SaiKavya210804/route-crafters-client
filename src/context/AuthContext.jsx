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

  // Check authentication status on page load
  useEffect(() => {
    // Fetch user data to check if the user is already authenticated
    axios
      .get("https://route-crafters-server.onrender.com/auth/user", { withCredentials: true })
      .then((response) => {
        setUser(response.data);
        setIsAuthenticated(true);
      })
      .catch(() => {
        setUser(null);
        setIsAuthenticated(false);
      });
  }, []);

  // Login Function
  const login = async (email, password) => {
    try {
      // Fetch users from the server
      const response = await axios.get("https://route-crafters-server.onrender.com/users");
      const users = response.data;

      // Check if user exists with matching credentials
      const user = users.find((u) => u.email === email && u.password === password);
      if (user) {
        setUser(user);
        setIsAuthenticated(true);
        return { success: true, user };
      } else {
        return { success: false, message: "Invalid email or password" };
      }
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
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Define PropTypes for children
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired, // ✅ Corrected PropTypes
};

export default AuthProvider;
