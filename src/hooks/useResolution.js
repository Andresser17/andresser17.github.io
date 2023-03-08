import { useState, useEffect } from "react";

export default function useResolution() {
  const [resolution, setResolution] = useState(0);

  // get document resolution
  useEffect(() => {
    // get current resolution when component is mounted
    if (resolution === 0) setResolution(document.body.clientWidth);

    const getResolution = () => {
      setResolution(document.body.clientWidth);
    };
    window.addEventListener("resize", getResolution);

    return () => {
      window.removeEventListener("resize", getResolution);
    };
  }, [resolution]);

  return resolution;
}
