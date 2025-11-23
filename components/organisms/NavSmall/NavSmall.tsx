'use client'
import { ChevronUp, ChevronDown } from 'lucide-react';
import styles from "./NavSmall.module.css"
import {navData} from '../../../data/navData'
import { NavIndexType } from '@/app/page';

export const NavSmall = (props:NavIndexType) => {
    const incrementPageNumber = (number:number)=>{
        if(number >= navData.length-1)return;
        props.setNavIndex(number+1)
    }
    const decrementPageNumber = (number:number)=>{
        if(number <=0)return;
        props.setNavIndex(number-1)
    }
    return (
        <div className={styles.navsmall}>
            <div className={styles.navsmall__info}>
                <div className={styles.navsmall__info__number}>0{props.navIndex+1}</div>
                <div className={styles.navsmall__info__title}>{navData[props.navIndex].title}</div>
            </div>
            <div className={styles.navsmall__arrows}>
                <div onClick={()=>decrementPageNumber(props.navIndex)} className={`${styles.navsmall__arrow} ${props.index == 0 ? `${styles.navsmall__arrow__deactivated}` :""}`}><ChevronUp/></div>
                <div onClick={()=>incrementPageNumber(props.navIndex)} className={`${styles.navsmall__arrow} ${props.index == 4 ? `${styles.navsmall__arrow__deactivated}` :""}`}><ChevronDown/></div>
            </div>
        </div>
    )
    
}