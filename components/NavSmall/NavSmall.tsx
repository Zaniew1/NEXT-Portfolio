'use client'
type NavSmallPropsType = {
    id: number,
    title: string,
    link: string
}
import { ChevronUp, ChevronDown } from 'lucide-react';
import styles from "./NavSmall.module.css"
import {navData} from '../../data/navData'
import { useContext } from 'react';
import { UIContext } from '../../store/Ui-context';
export const NavSmall = () => {
    const {navPage, setNavPage} = useContext(UIContext);
    const incrementPageNumber = (number:number)=>{
        if(number >= 5)return;
        setNavPage(number+1)
    }
    const decrementPageNumber = (number:number)=>{
        if(number <= 1)return;
        setNavPage(number-1)
    }
    return (
        <div className={styles.navsmall}>
            <div className={styles.navsmall__info}>
                <div className={styles.navsmall__info__number}>0{navPage}</div>
                <div className={styles.navsmall__info__title}>{navData[navPage-1].title}</div>
            </div>
            <div className={styles.navsmall__arrows}>
                <div onClick={()=>decrementPageNumber(navPage)} className={`${styles.navsmall__arrow} ${navPage == 1 ? `${styles.navsmall__arrow__deactivated}` :""}`}><ChevronUp/></div>
                <div onClick={()=>incrementPageNumber(navPage)} className={`${styles.navsmall__arrow} ${navPage == 5 ? `${styles.navsmall__arrow__deactivated}` :""}`}><ChevronDown/></div>
            </div>
        </div>
    )
    
}