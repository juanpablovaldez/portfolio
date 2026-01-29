"use client";
import React, { useState } from "react";

function TagList({ list }: { list: string[] }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxVisibleTags = 5;

  const toggleExpand = () => setIsExpanded((prev) => !prev);

  const visibleTags = isExpanded ? list : list.slice(0, maxVisibleTags);

  return (
    <div className="tag-list-container">
      <ul className="tag-list">
        {visibleTags.map((tag) => (
          <li key={tag} className="tag-item">
            {tag}
          </li>
        ))}
      </ul>
      {list.length > maxVisibleTags && (
        <button className="tag-list__button" onClick={toggleExpand}>
          {isExpanded ? "See less" : `+${list.length - maxVisibleTags} more`}
        </button>
      )}
    </div>
  );
}

export default TagList;
