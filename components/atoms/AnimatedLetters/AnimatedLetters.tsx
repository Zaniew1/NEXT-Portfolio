"use client"
import React, { useState } from "react";
import styles from "./AnimatedLetters.module.css"
export const AnimatedText = (props: { text: string }) => {
     const [hovered, setHovered] = useState(false);
     const chars = props.text.split("");
  return (
    <span 
        className={`${styles.letter} ${hovered ? styles.hovered : ""}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{ "--count": chars.length } as React.CSSProperties}
    >
      {chars.map((char, i) => (
        <span key={i} style={{ "--i": i } as React.CSSProperties}>
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
};