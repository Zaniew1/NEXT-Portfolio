import { useState } from "react"
import styles from './SwipeableDiv.module.css'
export type SwipeableDivProps = React.PropsWithChildren<{
    onSwipeLeft?: ()=> void;
    onSwipeRight?: ()=> void;
    onSwipeTop?: ()=> void;
    onSwipeBottom?: ()=> void;
}>;

export const SwipeableDiv: React.FC<SwipeableDivProps> = (props)=>{
    
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
        const isTopSwipe = distanceVertical > -minSwipeDistance;
        const isBottomSwipe = distanceVertical < -minSwipeDistance;

    
        // if (isLeftSwipe || isRightSwipe) console.log('swipe', isLeftSwipe ? 'left' : 'right')
        if(isLeftSwipe && props.onSwipeLeft){
            props.onSwipeLeft();
        }
        if(isRightSwipe && props.onSwipeRight){
            props.onSwipeRight();
        }
        // if (isTopSwipe || isBottomSwipe) console.log('swipe', isTopSwipe ? 'top' : 'bot')
        if(isTopSwipe && props.onSwipeTop){
            props.onSwipeTop();
        }
        if(isBottomSwipe && props.onSwipeBottom){
            props.onSwipeBottom();
        }
            
        }


    return <div className={styles.swipable} onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>{props.children}</div>
}