// import React from "react";
import { Link } from "react-router-dom";

const hobbies = [
  { title: "Hiking in the Swiss Alps", img: "/images/Switzerland_Explore.jpg", desc: "Breathtaking hiking trails with stunning views and cozy mountaiThe Swiss Alps offer some of the most breathtaking hiking trails in Europe, with stunning views, challenging paths, and cozy mountain huts." },
  { title: "Photography in Kyoto, Japan", img: "/images/Waterfall_Explore.jpg", desc: "Kyoto is a photographer's paradise, offering traditional temples, beautiful gardens, and stunning cherry blossoms during the spring season." },
  { title: "Cycling Tour of the Netherlands", img: "/images/Cycling_Explore.jpg", desc: "Explore the Dutch countryside with windmills and charming villages." },
  { title: "Surfing in Hawaii", img: "/images/Surfing_Explore.jpg", desc: "Hawaii is known for its world-class surfing spots, where you can catch waves, enjoy the tropical beaches, and soak in the beautiful island culture." },
  { title: "Photography in Santorini, Greece", img: "/images/Greece_Explore.jpg", desc: "Santorini is famous for its stunning sunsets, white-washed buildings, and crystal-clear waters, making it a perfect destination for photographers." },
  { title: "Backpacking in Rajasthan", img: "/images/BackpackingRajasthan_Explore.jpg", desc: "Explore the cultural heritage of Rajasthan, from the golden sands of the Thar Desert to the magnificent forts and palaces in cities like Jaipur, Udaipur, and Jodhpur." },
  { title: "Beach Vacation in Goa", img: "/images/Goa_Explore.jpg", desc: "Goa is famous for its beautiful beaches, vibrant nightlife, and Portuguese colonial architecture. Whether you’re into partying or just relaxing on the beach, Goa offers something for everyone." },
  { title: "Backpacking in Kerala", img: "/images/BackpackingKerala_Explore.jpg", desc: "Explore the backwaters, hill stations, and beaches of Kerala, one of the most scenic places in India. Don't miss the vibrant culture, Ayurvedic treatments, and tranquil houseboat experiences." },
  { title: "Exploring the Nilgiri Mountains (Ooty)", img: "/images/Nilgiri_Explore.jpg", desc: "Ooty, located in the Nilgiri Hills, offers lush tea gardens, scenic lakes, and a cool climate. It's a perfect getaway to experience nature's beauty in South India." },
  { title: "Scuba Diving in the Great Barrier Reef", img: "/images/Scubadiving_Explore.jpeg", desc: "Explore the underwater world of the Great Barrier Reef, one of the most famous scuba diving locations in the world, with vibrant coral reefs and exotic marine life." }
];

const HobbiesSection = () => {
  return (
    <section className="hobbies">
      <h2>Explore Hobbies</h2>
      <div className="hobby-list">
        {hobbies.map((hobby, index) => (
          <div key={index} className="hobby-card">
            <img src={hobby.img} alt={hobby.title} />
            <div className="hobby-content">
              <h3>{hobby.title}</h3>
              <p>{hobby.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <Link to="/Explore" className="view-all-btn">View All</Link>
    </section>
  );
};

export default HobbiesSection;
