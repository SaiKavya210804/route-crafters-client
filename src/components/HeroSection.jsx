import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";

const images = [
  "/images/book-fest.jpg",
  "/images/cycling.jpg",
  "/images/museums.jpg",
  "/images/trekking.jpg",
  "/images/photographers.jpg",
  "/images/food-taste.jpg",
  "/images/historical-places.jpg",
  "/images/yoga.jpg"
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setFade(false);
    setTimeout(() => {
      setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      setFade(true);
    }, 500);
  };

  const nextSlide = () => {
    setFade(false);
    setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
      setFade(true);
    }, 500);
  };

  return (
    <>

      {/* Hero Section */}
      <section className="hero">
        <div
          className={`hero-background ${fade ? "fade-in" : "fade-out"}`}
          style={{ backgroundImage: `url(${images[index]})` }}
        ></div>

        <div className="hero-overlay">
          <h2>Your world of joy</h2>
          <p>From local escapes to far-flung adventures, find what makes you happy anytime, anywhere.</p>

          <div className="search-container">
            <Search className="search-icon" />
            <input type="text" placeholder="Search destinations..." />
            <button className="search-btn">Search</button>
          </div>

          <button className="prev" onClick={prevSlide}>&#10094;</button>
          <button className="next" onClick={nextSlide}>&#10095;</button>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
