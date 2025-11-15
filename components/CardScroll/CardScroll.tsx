"use client";

import { useEffect, useState, ReactNode, useContext, useRef } from "react";
import styles from './CardScroll.module.css'
import { UIContext } from "@/store/Ui-context";
interface CardScrollProps {
  children: ReactNode[];      // sekcje (każda = jedna strona)
  duration?: number;          // czas trwania animacji
}

export default function CardScroll({ children, duration = 800 }: CardScrollProps) {
  const [index, setIndex] = useState<number>(0);
  const  scrollLocked = useRef<boolean>(false);
  const count = children.length;
  const { setNavPage } = useContext(UIContext);
  const animating = useRef(false);
useEffect(() => {
  const handleWheel = (e: WheelEvent) => {
    console.log(scrollLocked.current)
    e.preventDefault();
    if (scrollLocked.current) return;
    scrollLocked.current = true;
    
    setTimeout(() => {
      scrollLocked.current = false;
    }, 700);
    console.log(scrollLocked.current)

    setIndex(prev => {
      let newIndex = prev;

      if (e.deltaY > 0 && prev < count - 1) {
        newIndex = prev + 1;
      } else if (e.deltaY < 0 && prev > 0) {
        newIndex = prev - 1;
      }
      // to jest BEZPIECZNE, bo jest w event handlerze, nie w renderze
        requestAnimationFrame(() => {
          setNavPage(newIndex);
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
}, [count, setNavPage]); // ZOSTAJE TYLKO count — zero funkcji, zero indexu

  return (
    <div className={styles.cardscroll__container}>
      {children.map((child, i) => {
        const isTop = i === index;

        return (
          <div
            key={i}
            className={styles.cardscroll__page}
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
          </div>
        );
      })}
    </div>
  );
}