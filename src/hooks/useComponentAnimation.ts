import React, { useState, useEffect } from "react";

export const useComponentAnimation = (
  animationClass: string,
  watcher?: any
) => {
  const [animation, setAnimation] = useState();
  const watchForChange = watcher ? [watcher] : []; // if this was not supplied then the animation only runs on component load

  useEffect(() => {
    setTimeout(() => {
      setAnimation(animationClass);
    }, 100);
  }, watchForChange);

  return {
    animation,
    setAnimation
  };
};
