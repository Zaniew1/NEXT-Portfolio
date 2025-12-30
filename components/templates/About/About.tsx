'use client'
import { Infinity } from 'lucide-react';
import { useState } from "react"
import styles from "./About.module.css"
import Image from 'next/image'
import { AnimatePresence, motion } from "motion/react"
import { SwipeableDiv } from '@/components/molecules/SwipeableDiv/SwipeableDiv';
import { useTranslation } from 'react-i18next';

export const About = () => {
    const startDate = new Date(2022, 4);
    const now = new Date();
    const yearsCommercialExp = now.getFullYear() - startDate.getFullYear();
    const [t] = useTranslation("global");
    const [switchText, setSwitchText]  = useState<number>(0);
    const swipeLeft = () => {
        setSwitchText(1);
    }
    const swipeRight = () =>{
        setSwitchText(0)
    }

    return <div className={styles.about} >
        <div className={styles.about__text}>
            <div className={styles.about__text__switch}>
                <p onClick={()=>setSwitchText(0)} className={`${styles.about__text__switch__item} ${switchText == 0 ? `${styles.about__text__switch__item__active}`: ""}`}>{t("home.one.header")}</p>
                <p onClick={()=>setSwitchText(1)} className={`${styles.about__text__switch__item} ${switchText == 1 ? `${styles.about__text__switch__item__active}`: ""}`}>{t("home.two.header")}</p>

            </div>
            <div className={styles.about__text__wrapper}>
                <SwipeableDiv onSwipeLeft={swipeLeft} onSwipeRight={swipeRight} >
                    <p  className={`${styles.about__text__paragraph} ${switchText == 0 ? styles.about__text__paragraph__fromtop: styles.about__text__paragraph__hidetop}`}> 
                        {t("home.one.text_one")}
                        <br/>
                        {t("home.one.text_two")}</p>
                    <div className={`${styles.about__text__icons} ${switchText == 0 ? styles.about__text__paragraph__show: styles.about__text__paragraph__hidebottom}`}>
                        <div className={styles.about__text__icons__wrapper}>
                            <span className={styles.about__text__icons__wrapper__number}>#1</span>
                            <span className={styles.about__text__icons__wrapper__text}>Fullstack</span>
                        </div>
                        <div className={styles.about__text__icons__wrapper}>
                            <span className={styles.about__text__icons__wrapper__number}>{yearsCommercialExp}</span>
                            <span className={styles.about__text__icons__wrapper__text}>{t("home.one.milestones_one")}</span>
                        </div>
                        <div className={styles.about__text__icons__wrapper}>
                            <span className={styles.about__text__icons__wrapper__number}>1000</span>
                            <span className={styles.about__text__icons__wrapper__text}>{t("home.one.milestones_two")}</span>
                        </div>
                        <div className={styles.about__text__icons__wrapper}>
                            <span className={styles.about__text__icons__wrapper__number}> <Infinity /></span>
                            <span className={styles.about__text__icons__wrapper__text}>{t("home.one.milestones_three")}</span>
                        </div>
                    </div>
                </SwipeableDiv>
                <SwipeableDiv onSwipeLeft={swipeLeft} onSwipeRight={swipeRight}>
                    <div className={`${styles.about__text__paragraph} ${switchText ==1? styles.about__text__paragraph__frombottom: styles.about__text__paragraph__hide}`}> 
                            <p className={styles.about__text__paragraph__text__highlighted}>
                                {t("home.two.text.header_one")}
                            </p>
                            <p className={styles.about__text__paragraph__text}>
                                {t("home.two.text.header_one_text")}
                            </p>
                            <p className={styles.about__text__paragraph__text__highlighted}>
                                {t("home.two.text.header_two")}
                            </p>
                            <p className={styles.about__text__paragraph__text}>
                                {t("home.two.text.header_two_text")}
                            </p>
                            <p className={styles.about__text__paragraph__text__highlighted}>
                                {t("home.two.text.header_three")}
                            </p>
                            <p className={styles.about__text__paragraph__text}>
                                {t("home.two.text.header_three_text")}
                            </p>
                            
                    </div>
                </SwipeableDiv>

            </div>
        </div>
        <div className={`${styles.about__picture}`}>
            <AnimatePresence  >

                {!switchText && <motion.div 
                                    key="img1"
                                    className={` ${styles.about__picture__one} `}
                                    initial={{ width: 0,  }}
                                    animate={{ width: "100%" }}
                                    exit={{ width: 0 }}
                                    transition={{duration: 0.7}}
                                >
                                <Image 	fill preload={true} style={{ objectFit: 'cover' }}  quality={100} alt={"Mateusz skupiony podczas pracy"} src={'/focus.png'}></Image>

                </motion.div>}
                {switchText && <motion.div 
                                    className={` ${styles.about__picture__two} `}
                                    key="img2"
                                    initial={{ width: 0 }}
                                    animate={{ width: "100%" }}
                                    exit={{ width: 0 }}
                                    transition={{ duration: 0.7 }}
                                >
                                <Image 	fill preload={true} style={{objectFit: 'cover' }}  quality={100} alt={"Mateusz w pod krzyżem na Giewoncie"} src={'/gory1.png'}></Image>
                </motion.div>}
            </AnimatePresence>
        </div>
    </div>
}
