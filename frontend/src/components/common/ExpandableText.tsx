"use client";
import React, { useState } from "react";
import { ExpandableTextProps } from "@/types/types";

function ExpandableText({ text, maxLength = 100, className }: ExpandableTextProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded((prev) => !prev);

  const displayedText = isExpanded ? text : `${text.slice(0, maxLength)}...`;

  return (
    <div className="expandable-text">
      <p className="expandable-text__content">{displayedText}</p>
      {text.length > maxLength && (
        <button className="expandable-text__button" onClick={toggleExpand}>
          {isExpanded ? "See less" : "See more"}
        </button>
      )}
    </div>
  );
}

export default ExpandableText;
