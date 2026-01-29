"use client";
import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    toggleVisibility();

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <a
      href="#summary"
      className={`scroll-to-top ${isVisible ? "visible" : ""}`}
      aria-label="Scroll to top"
    >
      <span className="scroll-to-top__icon">↑</span>
    </a>
  );
};

export default ScrollToTop;
