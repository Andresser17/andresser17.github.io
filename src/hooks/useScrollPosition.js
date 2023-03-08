import { useState, useEffect } from "react";

export default function useScrollPosition() {
  // Manage scroll position
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScrollPosition = () => {
      const position = window.scrollY;

      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScrollPosition);

    return () => {
      window.removeEventListener("scroll", handleScrollPosition);
    };
  }, []);

  return scrollPosition;
}
