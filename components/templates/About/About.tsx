'use client'
import { Infinity } from 'lucide-react';
import {useState } from "react"
import styles from "./About.module.css"
import Image from 'next/image'
export const About = () => {

    const [switchText, setSwitchText]  = useState<number>(0);
    return <div className={styles.about}>
        <div className={styles.about__text}>
            <div className={styles.about__text__switch}>
                <p onClick={()=>setSwitchText(0)} className={`${styles.about__text__switch__item} ${switchText === 0 ? `${styles.about__text__switch__item__active}`: ""}`}>Kim jestem</p>
                <p onClick={()=>setSwitchText(1)} className={`${styles.about__text__switch__item} ${switchText === 1 ? `${styles.about__text__switch__item__active}`: ""}`}>Sukcesy</p>

            </div>
            <div className={styles.about__text__wrapper}>
                <p className={`${styles.about__text__paragraph} ${switchText == 0 ? styles.about__text__paragraph__fromtop: styles.about__text__paragraph__hidetop}`}> 
                                        Jestem programistą fullstack z 3-letnim
                                        doświadczeniem w pracy nad rozwojem produktu
                                        SaaS zajmującego się dystrybucją i wyświetlaniem
                                        reklam. Specjalizuję się w tworzeniu skalowalnych
                                        i efektywnych aplikacji webowych. Szukam
                                        nowych wyzwań, które pozwolą mi rozwijać swoje
                                        umiejętności w stacku technologicznym MERN
                                        (MongoDB, Express, React, Node.js) i przyczynić
                                        SaaS zajmującego się dystrybucją i wyświetlaniem
                                        reklam. Specjalizuję się w tworzeniu skalowalnych
                                        i efektywnych aplikacji webowych. Szukam
                                        nowych wyzwań, które pozwolą mi rozwijać swoje
                                        umiejętności w stacku technologicznym MERN
                                        (MongoDB, Express, React, Node.js) i przyczynić
                                        się do realizacji innowacyjnych projektów.</p>
                <div className={`${styles.about__text__icons} ${switchText == 0 ? styles.about__text__paragraph__show: styles.about__text__paragraph__hidebottom}`}>
                    <div className={styles.about__text__icons__wrapper}>
                        <span className={styles.about__text__icons__wrapper__number}>#1</span>
                        <span className={styles.about__text__icons__wrapper__text}>Fullstack</span>
                    </div>
                    <div className={styles.about__text__icons__wrapper}>
                        <span className={styles.about__text__icons__wrapper__number}>3</span>
                        <span className={styles.about__text__icons__wrapper__text}>lata doświadczenia komercyjnego</span>
                    </div>
                    <div className={styles.about__text__icons__wrapper}>
                        <span className={styles.about__text__icons__wrapper__number}>1000</span>
                        <span className={styles.about__text__icons__wrapper__text}>commitów na github</span>
                    </div>
                    <div className={styles.about__text__icons__wrapper}>
                        <span className={styles.about__text__icons__wrapper__number}> <Infinity /></span>
                        <span className={styles.about__text__icons__wrapper__text}>chęci do rozwoju</span>
                    </div>
                </div>
                <p className={`${styles.about__text__paragraph} ${switchText ==1? styles.about__text__paragraph__frombottom: styles.about__text__paragraph__hide}`}> 
                                        Jestem programistą fullstack z 3-letnim
                                        doświadczeniem w pracy nad rozwojem produktu
                                        Saasdasdasssssssssssas asd asd asd asdasdddddddddd asd  asdasdrzyczynić
                                        się do realizacji innowacyjnych projektów.</p>

            </div>
        </div>
        <div className={`${styles.about__picture}`}>
            <div className={` ${styles.about__picture__one} ${!switchText ? styles.about__pixture__one__active : ""}`}>
                <Image 	fill preload={true} style={{ objectFit: 'cover' }}  quality={100} alt={"Mateusz skupiony podczas pracy"} src={'/focus.png'}></Image>

            </div>
            <div className={` ${styles.about__picture__two} ${switchText ? styles.about__pixture__two__active : ""}`}>
                <Image 	fill preload={true} style={{ objectFit: 'cover' }}  quality={100} alt={"Mateusz skupiony podczas pracy"} src={'/focus2.png'}></Image>
            </div>
        </div>
    </div>
}
