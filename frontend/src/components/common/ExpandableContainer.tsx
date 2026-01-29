"use client";

import React, { useState, ReactNode } from "react";

interface ExpandableContainerProps {
  children: ReactNode;
  maxHeight?: number;
  className?: string;
}

const ExpandableContainer: React.FC<ExpandableContainerProps> = ({
  children,
  maxHeight = 150,
  className = "",
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded((prev) => !prev);

  return (
    <div className={`expandable-container ${className}`}>
      <div
        className="expandable-container__content"
        style={{
          maxHeight: isExpanded ? "none" : `${maxHeight}px`,
          overflow: "hidden",
          transition: "max-height 0.3s ease",
        }}
      >
        {children}
      </div>
      <div className="expandable-container__actions">
        <button className="expandable-container__button" onClick={toggleExpand}>
          {isExpanded ? "See less" : "See more"}
        </button>
      </div>
    </div>
  );
};

export default ExpandableContainer;
