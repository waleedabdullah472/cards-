import React from "react";

const Star = ({ overallRating, agentRating, landlordRating, locationRating, renderOverallStars, renderStars }) => {
  return (
    <div className="rating-container">
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
      <div className="rating-categories">
        <div className="category">
          <div className="category-label">Agent rating</div>
          <div className="stars">{renderStars("agent", agentRating)}</div>
        </div>
        <div className="category">
          <div className="category-label">Landlord rating</div>
          <div className="stars">{renderStars("landlord", landlordRating)}</div>
        </div>
        <div className="category">
          <div className="category-label">Location rating</div>
          <div className="stars">{renderStars("location", locationRating)}</div>
        </div>
        <button className="review-button">Write a review</button>
      </div>
    </div>
  );
};

export default Star;