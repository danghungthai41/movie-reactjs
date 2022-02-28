import React, { useEffect, useState } from "react";
import { IoArrowUpSharp } from "react-icons/io5";

const UseScrollBrowser = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 250) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <button
      className={`scrollToTop ${
        isVisible ? "display-scroll" : "hidden-scroll"
      }`}
      id="scrollToTop"
      onClick={scrollToTop}
    >
      <IoArrowUpSharp style={{ fontSize: 20, fontWeight: 700 }} />
    </button>
  );
};

export default UseScrollBrowser;
