"use client";

import { useEffect, useState, ReactNode, useRef } from "react";
import styles from './CardScroll.module.css'
import { NavIndexType } from '@/app/page';
import { motion } from "motion/react";

interface CardScrollProps {
  children: ReactNode[];      // sections - pages
  duration?: number;         // aniumation time
}

export default function CardScroll( { children,  duration = 800, navIndex, setNavIndex }: CardScrollProps & NavIndexType) {
  const [index, setIndex] = useState<number>(0);
  const  scrollLocked = useRef<boolean>(false);
  const count = children.length;
  // handle nav change with navSmall and navRight
  useEffect(() => {
    setIndex(navIndex);
  }, [navIndex]);
  // handle page change on scroll
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (scrollLocked.current) return;
      scrollLocked.current = true;
      
      setTimeout(() => {
        scrollLocked.current = false;
      }, 700);

      setIndex(prev => {
        let newIndex = prev;

        if (e.deltaY > 0 && prev < count - 1) {
          newIndex = prev + 1;
        } else if (e.deltaY < 0 && prev > 0) {
          newIndex = prev - 1;
        }
          requestAnimationFrame(() => {
            setNavIndex(newIndex);
          });

        return newIndex;
      });
    };

  const handleTouchMove = (e: TouchEvent) => {
    e.preventDefault();
  };

  window.addEventListener("wheel", handleWheel, { passive: false });
  window.addEventListener("touchmove", handleTouchMove, { passive: false });

  return () => {
    window.removeEventListener("wheel", handleWheel);
    window.removeEventListener("touchmove", handleTouchMove);
  };
}, [count, setNavIndex]); 

  return (
    <div className={styles.cardscroll__container}>
      {children.map((child, i) => {
        const isTop = i === index;

        return (
          <motion.div
            key={i}
            className={styles.cardscroll__page}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            style={{
              zIndex: children.length - i,
              transform: isTop ? `translateY(0)` : `translateY(${(i - index) * 100}vh)`,
              animation:
                isTop && i > 0
                  ? `slideUp ${duration}ms ease forwards`
                  : "none",
            }}
          >
            {child}
          </motion.div>
        );
      })}
    </div>
  );
}