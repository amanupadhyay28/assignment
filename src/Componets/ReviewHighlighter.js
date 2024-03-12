import React, { useState } from 'react';
import Tooltip from './ToolTip';
import ReviewHeader from './ReviewHeader';
import { renderStars } from '../Utility/ratingStars'; 
import "../Assets/Styles/ReviewCard.css"; 
function ReviewHighlighter({ review }) {
  const sentimentColors = {
    Positive: "#D9F2DD",
    Negative: "#F2DBD9",
    Mixed: "#e8bd6d3d",
    Neutral: "#eaf09b6b",
  };
  const [isBookmarked, setIsBookmarked] = useState(review.bookmarked);
  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };
 
  const highlightText = (text, analytics) => {
    let lastIndex = 0;
    let result = [];

    analytics.forEach((analysis, index) => {
      const { highlight_indices } = analysis;
      if (highlight_indices && highlight_indices.length > 0) {
        const [start, end] = highlight_indices[0];
        const beforeText = text.slice(lastIndex, start);
        lastIndex = end;
        const highlightedText = text.slice(start, end);

        if (beforeText)
          result.push(<span key={`before-${index}`}>{beforeText}</span>);
        result.push(
          <Tooltip key={`tooltip-${index}`} text={analysis.topic}>
            <span
              key={`highlight-${index}`}
              style={{ backgroundColor: sentimentColors[analysis.sentiment] }}
            >
              {highlightedText}
            </span>
          </Tooltip>
        );
      }
    });

    result.push(<span key="after">{text.slice(lastIndex)}</span>);

    return result;
  };

  return (
  //   <div className="review-card">
  //   <ReviewHeader review={review} onToggleBookmark={toggleBookmark} isBookmarked={isBookmarked} />
  //       <div
  //         style={{
  //           display: "flex",
  //           alignItems: "center",
  //           justifyContent: "space-between",
  //         }}
  //       >
  //         <div style={{ display: "flex", alignItems: "center" }}>
  //           <img
  //             src={logo}
  //             alt="booking.com"
  //             height={60}
  //             width={60}
  //             style={{ marginRight: "10px" }}
  //           />
  //           <div>
  //             <strong>{review.reviewer_name} </strong>
  //             <span style={{ color: "grey" }}>
  //               wrote a review at <strong>{review.source.name}</strong>
  //             </span>
  //           </div>
  //         </div>

  //         <div
  //           className="bookmark-icon"
  //           onClick={toggleBookmark}
  //           style={{ float: "right", cursor: "pointer" }}
  //         >
  //           <FontAwesomeIcon
  //             icon={faUserPlus}
  //             style={{ cursor: "pointer", marginRight: "10px" }}
  //           />
  //           <FontAwesomeIcon
  //             icon={isBookmarked ? fasBookmark : farBookmark}
  //             style={{ marginRight: "10px" }}
  //           />
  //           <FontAwesomeIcon icon={faEllipsis} style={{ cursor: "pointer" }} />
  //         </div>
  //       </div>

  //       <div style={{ color: "grey" }}>
  //         <div className="review-rating">
  //           {renderStars(review.rating_review_score / 2)}
  //           <span style={{ marginLeft: "10px" }}>{review.date}</span>
  //         </div>
  //       </div>
  //     </div>

  //     <p>{highlightText(review.content, review.analytics)}</p>
  //   </div>
  // );

  <div className="review-card">
  <ReviewHeader review={review} onToggleBookmark={toggleBookmark} isBookmarked={isBookmarked} />
  <div style={{ color: "grey" }}>
    <div className="review-rating">
      {renderStars(review.rating_review_score / 2)}
      <span style={{ marginLeft: "10px" }}>{review.date}</span>
    </div>
  </div>
  <p>{highlightText(review.content, review.analytics)}</p>
</div>
);
}
export default ReviewHighlighter;
