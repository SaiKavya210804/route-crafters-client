// src/pages/Explore.jsx

// import React from "react";

const Explore = () => {
  // Sample data for destinations, including South Indian places
  const destinations = [
    {
      id: 1,
      name: "Hiking in the Swiss Alps",
      image: "/images/Switzerland_Explore.jpg", // Local image path for Swiss Alps
      description:
        "The Swiss Alps offer some of the most breathtaking hiking trails in Europe, with stunning views, challenging paths, and cozy mountain huts.",
      tags: ["Hiking", "Nature", "Adventure", "Mountain"]
    },
    {
      id: 2,
      name: "Photography in Kyoto, Japan",
      image: "/images/Waterfall_Explore.jpg", // Local image path for Kyoto
      description:
        "Kyoto is a photographer's paradise, offering traditional temples, beautiful gardens, and stunning cherry blossoms during the spring season.",
      tags: ["Photography", "Culture", "History", "Nature"]
    },
    {
      id: 3,
      name: "Cycling Tour of the Netherlands",
      image: "/images/Cycling_Explore.jpg", // Updated local image path for Cycling Tour
      description:
        "Explore the picturesque Dutch countryside on two wheels, passing through tulip fields, windmills, and charming villages.",
      tags: ["Cycling", "Adventure", "Culture", "Nature"]
    },
    {
      id: 4,
      name: "Surfing in Hawaii",
      image: "/images/Surfing_Explore.jpg", // Local image path for Hawaii surfing
      description:
        "Hawaii is known for its world-class surfing spots, where you can catch waves, enjoy the tropical beaches, and soak in the beautiful island culture.",
      tags: ["Surfing", "Beach", "Adventure", "Nature"]
    },
    // {
    //   id: 5,
    //   name: "Scuba Diving in the Great Barrier Reef",
    //   image: "/images/Scubadiving_Explore.jpg", // Local image path for Scuba Diving
    //   description:
    //     "Explore the underwater world of the Great Barrier Reef, one of the most famous scuba diving locations in the world, with vibrant coral reefs and exotic marine life.",
    //   tags: ["Scuba Diving", "Adventure", "Ocean", "Nature"]
    // },
    // {
    //   id: 6,
    //   name: "Camping in Yellowstone National Park",
    //   image: "/images/Camping_Explore.jpg", // Local image path for Yellowstone
    //   description:
    //     "Yellowstone offers a wide variety of outdoor activities, including camping, hiking, and wildlife watching in one of the most famous national parks in the USA.",
    //   tags: ["Camping", "Nature", "Adventure", "Wildlife"]
    // },
    {
      id: 7,
      name: "Photography in Santorini, Greece",
      image: "/images/Greece_Explore.jpg", // Local image path for Santorini
      description:
        "Santorini is famous for its stunning sunsets, white-washed buildings, and crystal-clear waters, making it a perfect destination for photographers.",
      tags: ["Photography", "Culture", "Beach", "History"]
    },
    // Indian Destinations
    // {
    //   id: 8,
    //   name: "Trekking in Himachal Pradesh",
    //   image: "/images/Trekking_Explore.jpg", // Local image path for Himachal Pradesh trekking
    //   description:
    //     "Himachal Pradesh offers stunning trekking trails with beautiful mountain views, dense forests, and scenic valleys. Popular destinations like Manali and Kullu are great for adventure lovers.",
    //   tags: ["Trekking", "Adventure", "Mountain", "Nature"]
    // },
    {
      id: 9,
      name: "Backpacking in Rajasthan",
      image: "/images/BackpackingRajasthan_Explore.jpg", // Local image path for Rajasthan backpacking
      description:
        "Explore the cultural heritage of Rajasthan, from the golden sands of the Thar Desert to the magnificent forts and palaces in cities like Jaipur, Udaipur, and Jodhpur.",
      tags: ["Backpacking", "Culture", "History", "Adventure"]
    },
    // South Indian Destinations
    {
      id: 10,
      name: "Beach Vacation in Goa",
      image: "/images/Goa_Explore.jpg", // Local image path for Goa beach vacation
      description:
        "Goa is famous for its beautiful beaches, vibrant nightlife, and Portuguese colonial architecture. Whether you’re into partying or just relaxing on the beach, Goa offers something for everyone.",
      tags: ["Beach", "Vacation", "Nature", "Adventure"]
    },
    {
      id: 11,
      name: "Backpacking in Kerala",
      image: "/images/BackpackingKerala_Explore.jpg", // Local image path for Kerala backpacking
      description:
        "Explore the backwaters, hill stations, and beaches of Kerala, one of the most scenic places in India. Don't miss the vibrant culture, Ayurvedic treatments, and tranquil houseboat experiences.",
      tags: ["Backpacking", "Nature", "Culture", "Adventure"]
    },
    {
      id: 12,
      name: "Exploring the Nilgiri Mountains (Ooty)",
      image: "/images/Nilgiri_Explore.jpg", // Local image path for Nilgiri Mountains
      description:
        "Ooty, located in the Nilgiri Hills, offers lush tea gardens, scenic lakes, and a cool climate. It's a perfect getaway to experience nature's beauty in South India.",
      tags: ["Nature", "Mountain", "Adventure", "Tea Gardens"]
    }
  ];

  return (
    <div className="explore-container">
      <h1>Explore Destinations</h1>
      <p>Discover amazing places tailored to your hobbies and interests!</p>

      <div className="destinations-list">
        {destinations.map((destination) => (
          <div className="destination-card" key={destination.id}>
            <img
              src={destination.image}
              alt={destination.name}
              className="destination-image"
            />
            <h3>{destination.name}</h3>
            <p>{destination.description}</p>
            <div className="tags">
              {destination.tags.map((tag, index) => (
                <span key={index} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
