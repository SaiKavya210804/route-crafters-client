import { useState, useEffect } from "react";
import HeroSection from "../components/HeroSection";
import HobbiesSection from "../components/HobbiesSection";
import Features from "../components/Features";
import Footer from "../components/Footer";

const Home = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  const handleScroll = () => {
    setShowBackToTop(window.scrollY > 200);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ❌ REMOVED <Navbar /> */}
      <HeroSection />
      <HobbiesSection />
      <Features />
      <Footer />

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          className="back-to-top"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          Back to Top
        </button>
      )}
    </>
  );
};

export default Home;
