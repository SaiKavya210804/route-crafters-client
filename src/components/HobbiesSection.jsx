import React from "react";
import { Link } from "react-router-dom";

const hobbies = [
  { title: "Photography", img: "C:\Users\bodap\OneDrive\Documents\Hobby-travel-match-maker\route-crafters-client\public\images\Hobby1_photography.jpg"},
  { title: "Cycling", img: "C:\Users\bodap\OneDrive\Documents\Hobby-travel-match-maker\route-crafters-client\public\images\hobby2_cycling.jpg"},
  { title: "Food Tasting", img: "C:\Users\bodap\OneDrive\Documents\Hobby-travel-match-maker\route-crafters-client\public\images\hobby2_foodtasting.jpg"},
  { title: "Trekking", img: "C:\Users\bodap\OneDrive\Documents\Hobby-travel-match-maker\route-crafters-client\public\images\hobby3_trekking.jpg"}
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
      <Link to="/hobbies" className="view-all-btn">View All</Link>
    </section>
  );
};

export default HobbiesSection;
