// import React from "react";
import { MapPin, Users, BookOpen, Globe, Leaf, List, Compass } from "lucide-react";
//import "./features.css";

const features = [
  { title: "Interest-Based Destination Recommendations", desc: "Get travel suggestions based on your hobbies and interests.", icon: <Compass /> },
  { title: "Hobby Communities", desc: "Join groups and connect with like-minded travelers.", icon: <Users /> },
  { title: "Activity & Workshop Listings", desc: "Explore events and workshops related to your hobbies.", icon: <BookOpen /> },
  { title: "Group Travel Options", desc: "Match with others who share your travel interests.", icon: <Users /> },
  { title: "Destination Insights", desc: "Discover detailed guides and expert tips for unique destinations.", icon: <MapPin /> },
  { title: "Customizable Itineraries", desc: "Plan and personalize trips based on your preferences.", icon: <List /> },
  { title: "Sustainability Highlights", desc: "Find eco-friendly destinations and travel options.", icon: <Leaf /> },
  { title: "Interactive Maps", desc: "Explore hobby-specific travel hotspots on a global map.", icon: <Globe /> }
];

const Features = () => {
  return (
    <section className="features">
      <h2>Key Features</h2>
      <div className="feature-list">
        {features.map((feature, index) => (
          <div key={index} className="feature">
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
            {/* c */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
