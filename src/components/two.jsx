import React, { useState } from "react";
import "./two.css";
import { FaSearch } from "react-icons/fa";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const images = [
  "islam.png",
  "events.png",
  "comedy.png",
  "islam.png",
  "sports.png",
  "islam.png"
];


const cardData = [
  { category: "Restaurants", title: "Restaurant's", image: "islam.png", descriptions: ["Asian Wok Islamabad", "Rs. 3000.00 - 5500.00", "VAvenue Parks Cinema"] },
  { category: "Restaurants", title: "Restaurant's", image: "islam.png", descriptions: ["The Carnivore Islamabad", "Rs. 3000.00 - 5500.00", "Park Ultra Mall @ Alam Street"] },
  { category: "Restaurants", title: "Restaurant's", image: "islam.png", descriptions: ["The Monal DownTown", "Rs. 1000.00 - 3500.00", "Parkiran ICE, BSD City"] },
  { category: "Hotels", title: "Serena Hotel", image: "islam.png", descriptions: ["Luxury 5-Star Hotel in Islamabad", "Rs. 10,000.00 - 25,000.00", "Near Diplomatic Enclave"] },
  { category: "Hotels", title: "Marriott Hotel", image: "islam.png", descriptions: ["Premium Stay & Conference Center", "Rs. 8,000.00 - 20,000.00", "F-5 Islamabad"] },
  { category: "Hotels", title: "Centaurus Apartments", image: "islam.png", descriptions: ["Luxury Apartments with Mall Access", "Rs. 12,000.00 - 30,000.00", "Centaurus Mall, Islamabad"] },
  { category: "Farm Houses", title: "Green Valley Farm", image: "islam.png", descriptions: ["Spacious Farmhouse for Events", "Rs. 15,000.00 - 40,000.00", "Near Chak Shahzad, Islamabad"] },
  { category: "Farm Houses", title: "Royal Orchard Farmhouse", image: "islam.png", descriptions: ["Luxury Farmhouse with Pool", "Rs. 20,000.00 - 50,000.00", "Bani Gala, Islamabad"] },
  { category: "Farm Houses", title: "Blue Lagoon Farm", image: "islam.png", descriptions: ["Perfect for Family & Corporate Events", "Rs. 18,000.00 - 45,000.00", "Murree Expressway"] }
];

const Two = () => {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState([1000, 50000]);

  const locations = ["Islamabad", "Lahore", "Karachi", "Peshawar", "Quetta"];
  const categories = ["Restaurants", "Hotels", "Farm Houses", "Fine Dining", "Auditoriums", "Resorts", "Marquee"];

  return (
    <div>
      <div className="header-section">
        <h1 className="header-title">Over 300+ new Venue’s found <br /> and counting.</h1>
        <div className="search-container">
          <input type="text" placeholder="Search by city and venue title" className="search-input" />
          <button className="search-button"><FaSearch /></button>
        </div>
      </div>

      <div className="image-section">
        {images.map((image, index) => (
          <div key={index} className="image-container">
            <img src={image} alt={`Venue ${index + 1}`} className="image" />
          </div>
        ))}
      </div>

      <section className="search-results">
        <h3>Search results for <span className="islamabad">"Islamabad"</span></h3>
        <div className="content">
          <div className="sidebar">
            <h3>Filters</h3>
            <div className="filter-section">
              <h4>Locations</h4>
              <ul className="filter-list">
                {locations.map((city) => (
                  <li key={city} className="filter-item">
                    <input
                      type="radio"
                      className="checkbox"
                      checked={selectedLocation === city}
                      onChange={() => setSelectedLocation(city)}
                    />
                    <label>{city}</label>
                  </li>
                ))}
              </ul>
            </div>

            <div className="filter-section">
              <h4>Categories</h4>
              <ul className="filter-list">
                {categories.map((category) => (
                  <li key={category} className="filter-item">
                    <input
                      type="radio"
                      className="checkbox"
                      checked={selectedCategory === category}
                      onChange={() => setSelectedCategory(category)}
                    />
                    <label>{category}</label>
                  </li>
                ))}
              </ul>
            </div>

            <div className="price-filter">
              <h4>Price Range</h4>
              <Slider
                range
                min={1000}
                max={60000}
                value={priceRange}
                onChange={setPriceRange}
              />
              <div className="flex justify-between">
                <span>Rs. {priceRange[0].toLocaleString("en-US")}.00</span>
                <span>Rs. {priceRange[1].toLocaleString("en-US")}.00</span>
              </div>
            </div>
          </div>

          <div className="results">
            {["Restaurants", "Hotels", "Farm Houses"].map((category, catIndex) => (
              <div key={catIndex} className="result-section">
                <div className="section-header">
                  <h3>{category}</h3>
                  <a href="#">See all &gt;</a>
                </div>
                <div className="cards">
                  {cardData.filter((card) => card.category === category).map((card, idx) => (
                    <div key={idx} className="card">
                      <img src={card.image} alt={card.title} />
                      <h4>{card.title}</h4>
                      <p className="blue-text">{card.descriptions[0]}</p>
                      <p className="bold-text">{card.descriptions[1]}</p>
                      <p className="dark-text">{card.descriptions[2]}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Two;
