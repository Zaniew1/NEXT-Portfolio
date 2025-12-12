'use client'
import { Infinity } from 'lucide-react';
import { useState } from "react"
import styles from "./About.module.css"
import Image from 'next/image'
import { AnimatePresence, motion } from "motion/react"
import { SwipeableDiv } from '@/components/molecules/SwipeableDiv/SwipeableDiv';

export const About = () => {
    const [switchText, setSwitchText]  = useState<number>(0);
    const swipeLeft = () => {
        setSwitchText(1);
    }
    const swipeRight = () =>{
        setSwitchText(0)
    }

    return <div className={styles.about} id={"about"}>
        <div className={styles.about__text}>
            <div className={styles.about__text__switch}>
                <p onClick={()=>setSwitchText(0)} className={`${styles.about__text__switch__item} ${switchText == 0 ? `${styles.about__text__switch__item__active}`: ""}`}>Kim jestem</p>
                <p onClick={()=>setSwitchText(1)} className={`${styles.about__text__switch__item} ${switchText == 1 ? `${styles.about__text__switch__item__active}`: ""}`}>Zainteresowania</p>

            </div>
            <div className={styles.about__text__wrapper}>
                <SwipeableDiv onSwipeLeft={swipeLeft} onSwipeRight={swipeRight} >
                    <p  className={`${styles.about__text__paragraph} ${switchText == 0 ? styles.about__text__paragraph__fromtop: styles.about__text__paragraph__hidetop}`}> 
                        Cześć! Jestem fullstack developerem z 3-letnim stażem, a ostatnio intensywnie pracowałem nad produktem SaaS z branży reklamy (dystrybucja i wyświetlanie).
                        Można powiedzieć, że świetnie ogarniam, jak tworzyć skalowalne i naprawdę wydajne aplikacje webowe.
                        Teraz szukam miejsca, gdzie mógłbym skoczyć na głęboką wodę i w pełni rozwinąć skrzydła w technologiach MERN (MongoDB, Express, React, Node.js).
                        <br/>Cel? Działać przy innowacyjnych projektach, które rzeczywiście mają sens i gdzie mogę się przyczynić do stworzenia czegoś fajnego i efektywnego.
                        Jestem gotów na nowe wyzwania! Chętnie dołączę do zespołu, który ceni sobie dobrą robotę i daje przestrzeń na rozwój.</p>
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
                </SwipeableDiv>
                <SwipeableDiv onSwipeLeft={swipeLeft} onSwipeRight={swipeRight}>
                    <div className={`${styles.about__text__paragraph} ${switchText ==1? styles.about__text__paragraph__frombottom: styles.about__text__paragraph__hide}`}> 
                            <p className={styles.about__text__paragraph__text__highlighted}>
                                Szachy
                            </p>
                            <p className={styles.about__text__paragraph__text}>
                                W szachach uwielbiam strategiczne myślenia i przewidywanie kilka ruchów w przód. Moim ulubionym otwarciem jest Obrona królewsko-indyjska.
                            </p>
                            <p className={styles.about__text__paragraph__text__highlighted}>
                                Wędrówki po górach
                            </p>
                            <p className={styles.about__text__paragraph__text}>
                                Moim ulubionym miejscem na ziemi są Tatry, w każde wakacje i ferie zimowe staram się pojechać choćby na 1 dzień by móc sie zresetować w górach. Zdobyłem już 80% najwyższych szczytów Tatr. Zamierzam niedługo zdobyć je wszystkie (Gotta catch &apos;em all :D)
                            </p>
                            <p className={styles.about__text__paragraph__text__highlighted}>
                                Kinematografia
                            </p>
                            <p className={styles.about__text__paragraph__text}>
                                Interesuję się również kinematografią — zarówno od strony warstwy artystycznej, jak i narracji. Inspiruje mnie sposób, w jaki twórcy budują emocje, rytm i atmosferę. Moim ulubionym reżyserem jest Christopher Nolan.
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
