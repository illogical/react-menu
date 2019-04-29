import React, { useEffect, useState } from "react";

// Component Usage: <TestAnimation />
export const TestAnimation = () => {
  const [animateClass, setAnimateClass] = useState("");

  useEffect(() => {
    setAnimateClass("animate");
  }, []);

  return <div className={`box ${animateClass}`} />;
};
