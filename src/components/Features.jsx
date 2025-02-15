// import React frmm,........om "react";
import "./features.css";

const features = [
  { title: "Interest-Based Destination Recommendations", desc: "Get travel suggestions based on your hobbies and interests." },
  { title: "Hobby Communities", desc: "Join groups and connect with like-minded travelers." },
  { title: "Activity & Workshop Listings", desc: "Explore events and workshops related to your hobbies." },
  { title: "Group Travel Options", desc: "Match with others who share your travel interests." },
  { title: "Destination Insights", desc: "Discover detailed guides and expert tips for unique destinations." },
  { title: "Customizable Itineraries", desc: "Plan and personalize trips based on your preferences." },
  { title: "Sustainability Highlights", desc: "Find eco-friendly destinations and travel options." },
  { title: "Interactive Maps", desc: "Explore hobby-specific travel hotspots on a global map." }
];

const Features = () => {
  return (
    <section className="features">
      <h2>Key Features</h2>
      <div className="feature-list">
        {features.map((feature, index) => (
          <div key={index} className="feature">
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;