
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import logo from "../Assets/logo/bookingIcon.png"; 
import { faBookmark as farBookmark } from "@fortawesome/free-regular-svg-icons"; // Unfilled bookmark
import { faBookmark as fasBookmark } from "@fortawesome/free-solid-svg-icons"; 

const ReviewHeader = ({ review, onToggleBookmark, isBookmarked }) => (
  <div className="review-header">
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="Logo" height="60" width="60" style={{ marginRight: "10px" }} />
        <div>
          <strong>{review.reviewer_name}</strong>
          <span style={{ color: "grey" }}> wrote a review at <strong>{review.source.name}</strong></span>
        </div>
      </div>
      <div className="bookmark-icon" onClick={onToggleBookmark} style={{ cursor: "pointer" }}>
        <FontAwesomeIcon icon={faUserPlus} style={{ marginRight: "10px" }} />
        <FontAwesomeIcon icon={isBookmarked ? fasBookmark : farBookmark} style={{ marginRight: "10px" }} />
        <FontAwesomeIcon icon={faEllipsis} />
      </div>
    </div>
  </div>
);

export default ReviewHeader;
