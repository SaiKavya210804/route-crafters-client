import PropTypes from "prop-types"; // ✅ Import PropTypes
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ element }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading)
    return <div>Loading..</div>
  return isAuthenticated ? element : <Navigate to="/login" />;
};

// ✅ Define PropTypes for element
ProtectedRoute.propTypes = {
  element: PropTypes.element.isRequired,
};

export default ProtectedRoute;
