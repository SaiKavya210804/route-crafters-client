import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { CommunityProvider } from "./context/CommunityContext"; 

// Import Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Explore from "./pages/Explore";
import ProtectedRoute from "./components/ProtectedRoute"; // Import the ProtectedRoute component

// Import Components
import NavBar from "./components/NavBar";
import CreateCommunity from "./components/CreateCommunity";
import CommunityList from "./components/CommunityList";
import ProtectedRoute from "./components/ProtectedRoute";

// Import Services (To Ensure Services Are Included)
import { getCommunities, createCommunity } from "./services/CommunityService";
import { getPosts, createPost } from "./services/PostService";

function App() {
  return (
    <AuthProvider>
      <CommunityProvider> {/* Ensures Community State is Managed Globally */}
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/profile" element={<Profile />} />

            {/* Protected Dashboard Route */}
            <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />

          <Route path="/about" element={<About />} />
          <Route path="/explore" element={<Explore />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
