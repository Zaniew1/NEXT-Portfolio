'use client'
import { useState } from "react"
import styles from "./About.module.css"
import Image from 'next/image'
const About = () => {
    const [switchText, setSwitchText]  = useState<number>(0);
    return <div className={styles.about}>
        <div className={styles.about__text}>
            <div className={styles.about__text__switch}>
                <p onClick={()=>setSwitchText(0)} className={`${styles.about__text__switch__item} ${switchText === 0 ? `${styles.about__text__switch__item__active}`: ""}`}>Kim jestem</p>
                <p onClick={()=>setSwitchText(1)} className={`${styles.about__text__switch__item} ${switchText === 1 ? `${styles.about__text__switch__item__active}`: ""}`}>Sukcesy</p>

            </div>
            <p> Nulla aspernatur in maiores molestias nesciunt, nostrum, libero culpa consequatur est alias quos! Maiores labore illo recusandae asperiores magnam, quis temporibus natus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla aspernatur in maiores molestias nesciunt, nostrum, libero culpa consequatur est alias quos! Maiores labore illo recusandae asperiores magnam, quis temporibus natus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla aspernatur in maiores molestias nesciunt, nostrum, libero culpa consequatur est alias quos! Maiores labore illo recusandae asperiores magnam, quis temporibus natus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla aspernatur in maiores molestias nesciunt, nostrum, libero culpa consequatur est alias quos! Maiores labore illo recusandae asperiores magnam, quis temporibus natus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla aspernatur in maiores molestias nesciunt, nostrum, libero culpa consequatur est alias quos! Maiores labore illo recusandae asperiores magnam, quis temporibus natus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla aspernatur in maiores molestias nesciunt, nostrum, libero culpa consequatur est alias quos! Maiores labore illo recusandae asperiores magnam, quis temporibus natus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla aspernatur in maiores molestias nesciunt, nostrum, libero culpa consequatur est alias quos! Maiores labore illo recusandae asperiores magnam, quis temporibus natus.</p>
        </div>
        <div className={styles.about__picture}>
            <Image 	fill preload={true} style={{ objectFit: 'cover' }}  quality={100} alt={"Mateusz skupiony podczas pracy"} src={'/focus.png'}></Image>
        </div>
    </div>
}

export default  About