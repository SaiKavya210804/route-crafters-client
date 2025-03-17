import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "../src/context/AuthContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import About from "./pages/About";  // Import About Page
import Explore from "./pages/Explore";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />  {/* About page route */}
          <Route path="/explore" element={<Explore />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
