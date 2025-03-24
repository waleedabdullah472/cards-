import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./three.css";
import { FaSearch } from "react-icons/fa";

const images = [
  "islam.png",
  "events.png",
  "comedy.png",
  "islam.png",
  "sports.png",
  "islam.png",
];

const Three = () => {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState([1000, 50000]);

  const locations = ["Islamabad", "Lahore", "Karachi", "Peshawer", "Quetta"];
  const categories = [
    "Restaurants",
    "Hotels",
    "Farm Houses",
    "Fine Dining",
    "Auditoriums",
    "Resorts",
    "Marquee",
  ];

  return (
    <div>
      {/* Header Section */}
      <div className="header-section">
        <h1 className="header-title">
          Over 300+ new Venue’s found
          <br /> and counting.
        </h1>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search by city and venue title"
            className="search-input"
          />
          <button className="search-button">
            <FaSearch />
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="image-section">
        {images.map((image, index) => (
          <div key={index} className="image-container">
            <img src={image} alt={`Venue ${index + 1}`} className="image" />
          </div>
        ))}
      </div>

      {/* Search Results Section */}
      <section className="search-results">
        <h3>
          Search results for{" "}
          <span className="islamabad">"Islamabad"</span>
        </h3>
        <div className="content">
          {/* Filters Section */}
          <div className="sidebar">
            <h3>Filters</h3>
            <div className="filter-section">
              <h4>Locations</h4>
              <ul className="filter-list">
                {locations.map((city) => (
                  <li key={city} className="filter-item">
                    <input
                      id={city.toLowerCase()}
                      type="checkbox"
                      className="checkbox"
                      checked={selectedLocation === city}
                      onChange={() => setSelectedLocation(city)}
                    />
                    <label htmlFor={city.toLowerCase()}>{city}</label>
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
                      id={category.toLowerCase().replace(/\s/g, "")}
                      type="checkbox"
                      className="checkbox"
                      checked={selectedCategory === category}
                      onChange={() => setSelectedCategory(category)}
                    />
                    <label
                      htmlFor={category.toLowerCase().replace(/\s/g, "")}
                      className="category-label" // Added class here
                    >
                      {category}
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            <div className="price-filter">
              <h4>Price Range</h4>
              <Slider
                range
                min={1000}
                max={50000}
                value={priceRange}
                onChange={setPriceRange}
                trackStyle={[{ backgroundColor: "rgba(79, 76, 238, 1)" }]}
                handleStyle={[
                  { borderColor: "rgba(79, 76, 238, 1)" },
                  { borderColor: "rgba(79, 76, 238, 1)" },
                ]}
              />
              <div className="flex justify-between">
                <span>
                  Rs. {priceRange[0].toLocaleString("en-US")}.00
                </span>
                <span>
                  Rs. {priceRange[1].toLocaleString("en-US")}.00
                </span>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="restaurant-section">
            <h2></h2>
            <div className="restaurant-row">
              {[
                {
                  name: "The Carnivore Islamabad",
                  image: "header.png",
                  price: "Rs. 2000",
                  location: "Pak-Saud Tower",
                  date: "SEP 20",
                },
                {
                  name: "Marriott Hotels & Resorts",
                  image: "islam.png",
                  price: "Rs. 1000",
                  location: "Jinnah Convention Center",
                  date: "SEP 22",
                },
                {
                  name: "The Monal DownTown",
                  image: "monal.png",
                  price: "Rs. 3400",
                  location: "F7/4",
                  date: "SEP 23",
                },
              ].map((venue, index) => (
                <div key={index} className="card">
                  <img
                    src={venue.image}
                    alt={venue.name}
                    className="card-img"
                  />
                  <div className="card-content">
                    <div className="date-container"> {/* Date Container */}
                      <p className="date">{venue.date}</p>
                    </div>
                    <h3>{venue.name}</h3>
                    <p className="description">{venue.description}</p>
                    <p className="price">{venue.price}</p>
                    <p className="location">{venue.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Three;