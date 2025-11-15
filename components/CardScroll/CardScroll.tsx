"use client";

import { useEffect, useState, ReactNode } from "react";

interface CardScrollProps {
  children: ReactNode[];      // sekcje (każda = jedna strona)
  duration?: number;          // czas trwania animacji
}

export default function CardScroll({ children, duration = 800 }: CardScrollProps) {
  const [index, setIndex] = useState<number>(0);
  const [scrolling, setScrolling] = useState<boolean>(false)
  const count = children.length;

  
  useEffect(() => {
      const handleScroll = (e: WheelEvent) => {
          if (scrolling) return;
          console.log(scrolling)
          setScrolling(true);
          if (e.deltaY > 0 && index < count - 1) {
              setIndex((prev) => prev + 1);
            } else if (e.deltaY < 0 && index > 0) {
                setIndex((prev) => prev - 1);
            }
            
            setTimeout(() => {
                setScrolling(false);
            }, duration + 100);
            console.log(index)
    };

    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  }, [index, count, duration, scrolling]);

  return (
   <>{children}</>
  );
}