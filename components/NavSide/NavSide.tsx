"use client"
import styles from "./NavSide.module.css"
import { useContext } from 'react';
import { UIContext } from '../../store/Ui-context';
import {navData} from '../../data/navData'
export const NavSide = () => {
    const {navPage, setNavPage} = useContext(UIContext);
    const topHeightForLine = ((navPage) * 20 + 10);
    return (
        <div className={styles.navside}>
            <div className={styles.navside__line} style={{top: topHeightForLine+"%"}}></div>
            <ul className={styles.navside__list}>
                <li onClick={()=>setNavPage(0)}  className={`${styles.navside__list__item} ${navPage == 0 ?styles.navside__list__item__active : ""}`}>01<span className={styles.navside__list__item__span}>{navData[0].title}</span></li>
                <li onClick={()=>setNavPage(1)} className={`${styles.navside__list__item} ${navPage == 1 ?styles.navside__list__item__active : ""}`}>02<span className={styles.navside__list__item__span}>{navData[1].title}</span></li>
                <li onClick={()=>setNavPage(2)} className={`${styles.navside__list__item} ${navPage == 2  ?styles.navside__list__item__active : ""}`}>03<span className={styles.navside__list__item__span}>{navData[2].title}</span></li>
                <li onClick={()=>setNavPage(3)} className={`${styles.navside__list__item} ${navPage == 3 ?styles.navside__list__item__active : ""}`}>04<span className={styles.navside__list__item__span}>{navData[3].title}</span></li>
                <li onClick={()=>setNavPage(4)} className={`${styles.navside__list__item} ${navPage == 4 ?styles.navside__list__item__active : ""}`}>05<span className={styles.navside__list__item__span}>{navData[4].title}</span></li>
            </ul>
        </div>
    )
}