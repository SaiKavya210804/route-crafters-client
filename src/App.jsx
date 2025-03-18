import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "../src/context/AuthContext";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Explore from "./pages/Explore";
import ProtectedRoute from "./components/ProtectedRoute"; // Import the ProtectedRoute component

import NavBar from "./components/NavBar";

function App() {
  return (
    <AuthProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />

          {/* Use ProtectedRoute to protect the dashboard */}
          <Route
            path="/dashboard"
            element={<ProtectedRoute element={<Dashboard />} />}
          />

          <Route path="/about" element={<About />} />
          <Route path="/explore" element={<Explore />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
