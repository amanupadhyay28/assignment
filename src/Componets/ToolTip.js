
import React, { useState } from 'react';
import '../Assets/Styles/ToolTip.css'; 

const Tooltip = ({ text, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      className="tooltip-container"
    >
      {children}
      {isVisible && <div className="tooltip-content">{text}</div>}
    </div>
  );
};

export default Tooltip;


