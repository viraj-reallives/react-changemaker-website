import React, { useEffect, useMemo, useState } from "react";
import "./BlurText.css";

const BlurText = ({
  text = "",
  delay = 200,
  animateBy = "words",
  direction = "top",
  onAnimationComplete,
  className = "",
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const segments = useMemo(() => {
    if (animateBy === "letters") {
      return text.split("");
    }
    return text.split(" ");
  }, [animateBy, text]);

  useEffect(() => {
    const startTimer = setTimeout(() => setIsVisible(true), 20);
    const completeTimer = setTimeout(() => {
      if (typeof onAnimationComplete === "function") {
        onAnimationComplete();
      }
    }, segments.length * delay + 450);

    return () => {
      clearTimeout(startTimer);
      clearTimeout(completeTimer);
    };
  }, [delay, onAnimationComplete, segments.length]);

  return (
    <span className={`blur-text-root ${className}`}>
      {segments.map((segment, index) => {
        const isSpace = animateBy === "letters" && segment === " ";
        return (
          <span
            key={`${segment}-${index}`}
            className={`blur-text-segment blur-text-from-${direction} ${isVisible ? "is-visible" : ""}`}
            style={{ transitionDelay: `${index * delay}ms` }}
            aria-hidden={isSpace}
          >
            {isSpace ? "\u00A0" : segment}
            {animateBy === "words" && index < segments.length - 1 ? "\u00A0" : ""}
          </span>
        );
      })}
    </span>
  );
};

export default BlurText;
