"use client"
import { useState } from "react"
import styles from "./NavSide.module.css"
export const NavSide = () => {
    const [activeItem, setActiveItem] = useState<number>(1);
    const topHeightForLine = ((activeItem - 1) * 20 + 10);
    return (
        <div className={styles.navside}>
            <div className={styles.navside__line} style={{top: topHeightForLine+"%"}}></div>
            <ul className={styles.navside__list}>
                <li onClick={()=>setActiveItem(1)}  className={`${styles.navside__list__item} ${activeItem == 1 ?styles.navside__list__item__active : ""}`}>01<span className={styles.navside__list__item__span}>O Mnie</span></li>
                <li onClick={()=>setActiveItem(2)} className={`${styles.navside__list__item} ${activeItem == 2 ?styles.navside__list__item__active : ""}`}>02<span className={styles.navside__list__item__span}>Projekty</span></li>
                <li onClick={()=>setActiveItem(3)} className={`${styles.navside__list__item} ${activeItem == 3  ?styles.navside__list__item__active : ""}`}>03<span className={styles.navside__list__item__span}>Technologie</span></li>
                <li onClick={()=>setActiveItem(4)} className={`${styles.navside__list__item} ${activeItem == 4 ?styles.navside__list__item__active : ""}`}>04<span className={styles.navside__list__item__span}>Doświadczenie</span></li>
                <li onClick={()=>setActiveItem(5)} className={`${styles.navside__list__item} ${activeItem == 5 ?styles.navside__list__item__active : ""}`}>05<span className={styles.navside__list__item__span}>Kontakt</span></li>
            </ul>
        </div>
    )
}