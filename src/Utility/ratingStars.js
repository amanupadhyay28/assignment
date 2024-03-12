
import React from 'react';

export const renderStars = (rating, totalStars = 5) => (
  [...Array(totalStars)].map((_, i) => (
    <span key={i} style={{ color: i < rating ? "#ffc107" : "#e4e5e9" }}>★</span>
  ))
);
