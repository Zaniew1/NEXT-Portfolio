import { useState } from "react"
import styles from './SwipeableDiv.module.css'
export type SwipeableDivProps = React.PropsWithChildren<{
    onSwipeLeft?: ()=> void;
    onSwipeRight?: ()=> void;
    onSwipeTop?: ()=> void;
    onSwipeBottom?: ()=> void;
}>;

export const SwipeableDiv: React.FC<SwipeableDivProps> = (props)=>{
    
    const [touchStart, setTouchStart] = useState<null | number>(null)
    const [touchEnd, setTouchEnd] = useState<null | number>(null)

    // the required distance between touchStart and touchEnd to be detected as a swipe
    const minSwipeDistance = 50 

    const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEnd(null) // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX)
    }

    const onTouchMove = (e : React.TouchEvent<HTMLDivElement>) => setTouchEnd(e.targetTouches[0].clientX)

    const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance
    if (isLeftSwipe || isRightSwipe) console.log('swipe', isLeftSwipe ? 'left' : 'right')
        if(isLeftSwipe && props.onSwipeLeft){
            props.onSwipeLeft();
        }
        if(isRightSwipe && props.onSwipeRight){
            props.onSwipeRight();
        }
        
    // add your conditional logic here
    }


    return <div className={styles.swipable} onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>{props.children}</div>
}