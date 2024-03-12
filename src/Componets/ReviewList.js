// ReviewList.js
import React, { useState, useEffect } from 'react';
import ReviewHighlighter from './ReviewHighlighter';
import reviewsData from './reviews';
function ReviewList() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    
    setReviews(reviewsData);
  }, []);

  return (
    <div>
     {reviews.map((review, index) => (
        <ReviewHighlighter key={index} review={review} />
      ))}
    </div>
  );
}

export default ReviewList;
