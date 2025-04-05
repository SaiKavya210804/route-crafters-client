import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "../src/context/AuthContext";

import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Explore from "./pages/Explore";
import HobbySelection from "./components/HobbySelection"; // Add this
import SeasonSelection from "./components/SeasonSelection"; // Add this
import ProtectedRoute from "./components/ProtectedRoute"; 

import NavBar from "./components/NavBar";

function App() {
  return (
    <AuthProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />

          {/* Use ProtectedRoute to protect the dashboard */}
          <Route
            path="/dashboard"
            element={<ProtectedRoute element={<Dashboard />} />}
          />

          <Route path="/about" element={<About />} />
          <Route path="/explore" element={<Explore />} />

          {/* ✅ Add routes for HobbySelection & SeasonSelection */}
          <Route path="/hobby-selection" element={<HobbySelection />} />
          <Route path="/season-selection" element={<SeasonSelection />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
