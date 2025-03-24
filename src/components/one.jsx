import React, { useState, useEffect } from "react";
import "./One.css";
import { CheckCircle } from 'lucide-react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar, faSwimmer, faUtensils, faChild, faDumbbell, faBuilding, faTableTennis, faTree } from "@fortawesome/free-solid-svg-icons";

const One = () => {
    const [currentDateTime, setCurrentDateTime] = useState("");
    useEffect(() => {
        const updateDateTime = () => {
            const now = new Date();
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
            setCurrentDateTime(now.toLocaleDateString('en-US', options));
        };
        updateDateTime();
        const interval = setInterval(updateDateTime, 60000);
        return () => clearInterval(interval);
    }, []);
    const [selectedStars, setSelectedStars] = useState(0);
    const handleStarClick = (starIndex) => {
        setSelectedStars(starIndex);
    };
    const handleSubmit = () => {
        alert(`You selected ${selectedStars} stars!`);
    };
    const [agentRating, setAgentRating] = useState(4);
    const [landlordRating, setLandlordRating] = useState(5);
    const [locationRating, setLocationRating] = useState(5);
    const [overallRating, setOverallRating] = useState(5);
    const handleStarClickRating = (category, rating) => {
        switch (category) {
            case 'agent':
                setAgentRating(rating);
                break;
            case 'landlord':
                setLandlordRating(rating);
                break;
            case 'location':
                setLocationRating(rating);
                break;
            default:
                break;
        }
    };
    const handleOverallRatingClick = (rating) => {
        setOverallRating(rating);
    };
    const renderStars = (category, rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <span
                    key={i}
                    className={`star ${i <= rating ? 'filled' : ''}`}
                    onClick={() => handleStarClickRating(category, i)}
                >
                    ★
                </span>
            );
        }
        return stars;
    };
    const renderOverallStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <span
                    key={i}
                    className={`overall-star ${i <= rating ? 'filled' : ''}`}
                    onClick={() => handleOverallRatingClick(i)}
                >
                    ★
                </span>
            );
        }

        return stars;
    };


  const [reviewStars, setReviewStars] = useState(0); // New state for review stars

  const handleReviewStarClick = (starIndex) => {
      setReviewStars(starIndex);
  };

  const renderReviewStars = () => {
      const stars = [];
      for (let i = 1; i <= 5; i++) {
          stars.push(
              <span
                  key={i}
                  className={`review-star ${i <= reviewStars ? 'active' : ''}`}
                  onClick={() => handleReviewStarClick(i)}
              >
                  ★
              </span>
          );
      }
      return stars;
  };



    return (
        <div className="container">
            <section className="banner-section">
                <div className="banner-overlay"></div>
                <div className="left-content">
                    <h1 className="main-heading">Marriot Hotels and <br /> resorts</h1>
                    <h3 className="sub-heading">Islamabad</h3>
                    <a href="#" className="view-link">View map</a>
                </div>
                <div className="right-card">
                    <h3 className="card-title">Date &  time</h3>
                    <p className="date-time">{currentDateTime}</p>
                    <button className="book-now">Book Now</button>
                    <button className="view-details">View Details</button>
                </div>
            </section>

            <section className="services-container">
                <div className="left-side">
                    <a href="/events" className="back-link">Back to Event</a>
                    <h3 className="location-heading">Islamabad Marriott Hotel <br /> & Resorts</h3>
                    <p className="description">Aga Khan Road Shalimar 5, Islamabad 44000 Pakistan</p>
                    <a href="https://www.totalwebsite.com" className="visit-link">Visit Total Website</a>
                    <p className="description">
                        The five-star international Islamabad Marriott Hotel is located at <br /> the foot steps of the famous Margalla Hills and is within close<br /> proximity to Rawal Lake, the town centre and F6.
                    </p>
                    <h3 className="services-heading">Venue Information</h3>
                    <div className="services-cards">
                        <div className="service-card">
                        <div className="service-icon">
  <img src="ic1.png" alt="Utensils" className="icon-style" />
</div>
                            <div className="service-content">
                                <h4 className="service-title">Duration</h4>
                                <p className="service-description">
                                    No Booking Limitations<br></br>
                                    Open 24/7
                                </p>
                            </div>
                        </div>
                        <div className="service-card">
                        <div className="service-icon">
  <img src="ic2.png" alt="Utensils" className="icon-style" />
</div>
                            <div className="service-content">
                                <h4 className="service-title">Fine Dining</h4>
                                <p className="service-description">
                                    4.  0 Very good audience Verified Lisitng
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right-side">
                    <div className="first-row">
                        <div className="booking-card">
                            <p className="booking-text">Booking Starting at</p>
                            <p className="price"><span>RS</span> 50,000</p>
                        </div>
                    </div>
                    <div className="second-row">
                        <div className="map"></div>
                    </div>
                </div>
            </section>

            <section className="new-section">
                <div className="left-part">
                    <h3 className="feature-title">Feature</h3>

                    <div className="feature-container">
                        <div className="feature-column">
                            <p><CheckCircle className="icon" /> Ballroom</p>
                            <p><CheckCircle className="icon" /> Wedding Hall</p>
                            <p><CheckCircle className="icon" /> Storage Facility</p>
                        </div>
                        <div className="feature-column">
                            <p><CheckCircle className="icon" /> Meeting Room</p>
                            <p><CheckCircle className="icon" /> Air Conditioning </p>
                            <p><CheckCircle className="icon" /> Fully Kitchen</p>
                        </div>
                    </div>
                </div>
                <div className="right-part">
                    <h3 className="feature-title">Facilities</h3>

                    <div className="feature-container">
                        <div className="feature-column">
                            <p><FontAwesomeIcon icon={faCar} className="icon" /> Car Park</p>
                            <p><FontAwesomeIcon icon={faSwimmer} className="icon" /> Swimming Pool</p>
                            <p><FontAwesomeIcon icon={faUtensils} className="icon" /> BBQ</p>
                            <p><FontAwesomeIcon icon={faChild} className="icon" /> Kids Pool</p>
                        </div>
                        <div className="feature-column">
                            <p><FontAwesomeIcon icon={faDumbbell} className="icon" /> Gym</p>
                            <p><FontAwesomeIcon icon={faBuilding} className="icon" /> Function Room</p>
                            <p><FontAwesomeIcon icon={faTableTennis} className="icon" /> Tennis Court</p>
                            <p><FontAwesomeIcon icon={faTree} className="icon" /> Playground</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Exclusive Offers Section (Adjusted) */}
            <section className="exclusive-offers">
                <div className="left-offers">
                    <h1>Property Details</h1>

                    <div className="property-details">
                        <p>Property type</p>
                        <h3>Condominium</h3>

                        <p>Furnishing</p>
                        <h3>Fully furnished</h3>

                        <p>Cost of renting per day</p>
                        <h3>RS. 212,000</h3>

                        <p>Developer</p>
                        <h3>United Property Holdings Pte Ltd</h3>

                        <p>Total Capacity</p>
                        <h3>300+</h3>

                        <p>Listing date</p>
                        <h3>16 Sept 2024</h3>
                        <p>Smoking Allowed</p>
                        <h3>Yes</h3>
                        <p>Pet Allowed</p>
                        <h3>Yes</h3>
                    </div>

                    {/* Review Card */}
                    <div className="review-card">
                        <div className="review-card-left">
                            <div className="review-text">Project Review</div>
                            <div className="stars">
                                {[1, 2, 3, 4, 5].map((starIndex) => (
                                    <span
                                        key={starIndex}
                                        className={`star ${selectedStars >= starIndex ? 'selected' : ''}`}
                                        onClick={() => handleStarClick(starIndex)}
                                    >★</span>
                                ))}
                                <div className="stars-count">{selectedStars} Stars</div>
                            </div>
                        </div>
                        <div className="review-card-right">
                            <button className="submit-button" onClick={handleSubmit}>View 16 Reviews</button>
                        </div>
                        
                    </div>
                    <section className="similar-listings-section">
      <p className="similar-listings-text">
        There are other listings similar to the Merit <span className="similar-listings-view-now">View Now</span>
      </p>
      <h2 className="similar-listings-heading">Venue Contact</h2>
      <p className="similar-listings-paragraph">
        Let's go to <a href="(link unavailable)" className="similar-listings-link">www.customerservice.com</a> and refer from more details.
      </p>
    </section>
                </div>

                {/* Combined Rating Container */}
                <div className="rating-container">
                    <div className="rating-card">
                        <div className="rating-left"> {/* Left Section */}
                            <div className="overall-rating">
                                <div className="rating-number">{overallRating}</div>
                                <div className="rating-text">
                                    Excellent
                                    <div className="give-review">Give review</div>
                                </div>
                                <div className="overall-stars">
                                    {renderOverallStars(overallRating)}
                                </div>
                            </div>
                        </div>
                        <div className="rating-right"> {/* Right Section */}
                            <div className="rating-categories">
                                <div className="category">
                                    <div className="category-label">Agent rating</div>
                                    <div className="stars">{renderStars('agent', agentRating)}</div>
                                </div>
                                <div className="category">
                                    <div className="category-label">Landlord rating</div>
                                    <div className="stars">{renderStars('landlord', landlordRating)}</div>
                                </div>
                                <div className="category">
                                    <div className="category-label">Location rating</div>
                                    <div className="stars">{renderStars('location', locationRating)}</div>
                                </div>
                                <button className="review-button">Write a review</button>
                            </div>
                        </div>
                    </div>
                    <div className="review-section">
      <div className="review-header">
        <h2>Reviews</h2>
        <span>(1 Review)</span>
      </div>
      <div className="review-content">
        {/* Add review content here */}
      </div>
    </div>
                    {/* Add the new card here */}
                    <div className="another-card">
                        <div className="card-header">
                            <img src="monal.png" alt="Person" className="profile-picture" />
                            <div className="header-text">
                                <h3 className="person-name">John Doe</h3>
                                <div className="review-stars">{renderReviewStars()}</div>
                            </div>


                        </div>
                        <p className="card-text">
                            Nice 3 b/r home with cold/warm air con plus separate totally self contained unit for granny <br></br>
                            or sub-let to assist with rent,plenty of parking space in front yard,had no problems, am <br>
                            </br>transferred to NQ, rent was reasonable at $460, nice private backyard, school & Coles <br></br>nearby.
                        </p>
                    </div>


                    <div className="share-container">
                        <h1>Share with friends</h1>
                        <div className="social-icons">
                            <a
                                href="whatsapp://send?text=Check%20this%20out!"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2048px-WhatsApp.svg.png"
                                    alt="WhatsApp"
                                    className="social-icon"
                                />
                            </a>
                            <a
                                href="https://www.facebook.com/sharer/sharer.php?u=YOUR_URL"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png"
                                    alt="Facebook"
                                    className="social-icon"
                                />
                            </a>
                            <a
                                href="https://www.linkedin.com/shareArticle?url=YOUR_URL&title=YOUR_TITLE"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png.png"
                                    alt="LinkedIn"
                                    className="social-icon"
                                />
                            </a>
                            <a
                                href="https://twitter.com/intent/tweet?url=YOUR_URL&text=YOUR_TEXT"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png"
                                    alt="Twitter"
                                    className="social-icon"
                                />
                            </a>
                        </div>
                    </div>



                </div>



            </section>

            {/* ADVERTISEMENT SECTION */}
            <section className="advertisement-section">
                
                <div className="advertisement-content">
                    {/* Replace with your actual advertisement content - can be images, text, or even embedded iframes */}
                    <img src="header.png" alt="Advertisement" />
                    
                </div>
            </section>

        </div>
    );
};

export default One;