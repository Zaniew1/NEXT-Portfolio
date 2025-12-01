"use client"
import styles from "./NavSide.module.css"
import { useContext } from 'react';
import {navData} from '../../../data/navData'
import { NavIndexType } from "@/app/page";
export const NavSide = (props: NavIndexType) => {
    const topHeightForLine = ((props.navIndex) * 20 + 10);
    return (
        <div className={styles.navside}>
            <div className={styles.navside__line} style={{top: topHeightForLine+"%"}}></div>
            <ul className={styles.navside__list}>
                <li onClick={()=>props.setNavIndex(0)}  className={`${styles.navside__list__item} ${props.navIndex == 0 ?styles.navside__list__item__active : ""}`}>01<span className={styles.navside__list__item__span}>{navData[0].title}</span></li>
                <li onClick={()=>props.setNavIndex(1)} className={`${styles.navside__list__item} ${props.navIndex == 1 ?styles.navside__list__item__active : ""}`}>02<span className={styles.navside__list__item__span}>{navData[1].title}</span></li>
                <li onClick={()=>props.setNavIndex(2)} className={`${styles.navside__list__item} ${props.navIndex == 2  ?styles.navside__list__item__active : ""}`}>03<span className={styles.navside__list__item__span}>{navData[2].title}</span></li>
                <li onClick={()=>props.setNavIndex(3)} className={`${styles.navside__list__item} ${props.navIndex == 3 ?styles.navside__list__item__active : ""}`}>04<span className={styles.navside__list__item__span}>{navData[3].title}</span></li>
                <li onClick={()=>props.setNavIndex(4)} className={`${styles.navside__list__item} ${props.navIndex == 4 ?styles.navside__list__item__active : ""}`}>05<span className={styles.navside__list__item__span}>{navData[4].title}</span></li>
            </ul>
        </div>
    )
}