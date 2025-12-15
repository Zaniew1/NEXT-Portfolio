import { CSSProperties, useState } from "react"
import styles from './SwipeableDiv.module.css'
import { HTMLMotionProps, motion } from "motion/react";
export type SwipeableDivProps = React.PropsWithChildren<{
    onSwipeLeft?: ()=> void;
    onSwipeRight?: ()=> void;
    onSwipeTop?: ()=> void;
    onSwipeBottom?: ()=> void;
    style?: CSSProperties;
}> &  HTMLMotionProps<"div">;

export const SwipeableDiv: React.FC<SwipeableDivProps> = ({
  style,
  children,
  onSwipeLeft,
  onSwipeRight,
  onSwipeTop,
  onSwipeBottom,
  ...rest // <-- includes motion animation props
})=>{
    
    const [touchStartHorizontal, setTouchStartHorizontal] = useState<null | number>(null)
    const [touchStartVertical, setTouchStartVertical] = useState<null | number>(null)
    const [touchEndHorizontal, setTouchEndHorizontal] = useState<null | number>(null)
    const [touchEndVertical, setTouchEndVertical] = useState<null | number>(null)

    // the required distance between touchStart and touchEnd to be detected as a swipe
    const minSwipeDistance = 50 

    const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        setTouchEndHorizontal(null) 
        setTouchEndVertical(null)
        setTouchStartHorizontal(e.targetTouches[0].clientX)
        setTouchStartVertical(e.targetTouches[0].clientY)
    }

    const onTouchMove = (e : React.TouchEvent<HTMLDivElement>) => {
        setTouchEndHorizontal(e.targetTouches[0].clientX)
        setTouchEndVertical(e.targetTouches[0].clientY)
    }

    const onTouchEnd = () => {
        if ((!touchStartHorizontal || !touchEndHorizontal) || (!touchStartVertical || !touchEndVertical )) return;

        const distanceHorizontal = touchStartHorizontal - touchEndHorizontal;
        const distanceVertical = touchStartVertical - touchEndVertical;

        const isLeftSwipe = distanceHorizontal > minSwipeDistance;
        const isRightSwipe = distanceHorizontal < -minSwipeDistance;

        const isTopSwipe = distanceVertical > minSwipeDistance;
        const isBottomSwipe = distanceVertical < -minSwipeDistance;

        if (isLeftSwipe && onSwipeLeft) onSwipeLeft();
        if (isRightSwipe && onSwipeRight) onSwipeRight();

        if (isTopSwipe && onSwipeTop) onSwipeTop();
        if (isBottomSwipe && onSwipeBottom) onSwipeBottom();
            
    }


    return <motion.div   {...rest} style={style} className={styles.swipable} onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd} >{children}</motion.div>
}