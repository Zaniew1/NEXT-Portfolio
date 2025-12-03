"use client"
import { useState } from 'react'
import styles from './Tech.module.css'
import { techData } from '@/data/techData'
import {  motion } from "motion/react"
export const Tech = () => {
    const [techIndex, setTechIndex]= useState<number>(0)
        return (
        <div className={styles.tech} id={"tech"}>
            <h1 className={styles.tech__header}>Technologie</h1 >
            <div className={styles.tech__main}> 
                <div className={styles.tech__main__nav}>
                   {techData.map((el, index)=>{
                        return(
                            <div onClick={()=>setTechIndex(index)}
                                 key={`${el.section}-${el.id}`} 
                                 className={`${styles.tech__main__nav__element} ${index === techIndex ? styles.tech__main__nav__element__active : "" }`}>
                                    <span className={styles.tech__main__nav__element__span}></span>
                                    {el.section}
                            </div>
                        )
                   })}
                </div>
                <div  className={styles.tech__main__technologies}>

                        {techData[techIndex].technologies.map((el, idx)=>{
                            const colorStyle = el.color      
                            return (
                                <motion.div 
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1,y: 0 }}
                                    exit={{ opacity: 0 }}
                                    transition={{
                                        duration: 0.3,
                                    }}
                                    key={`${el.name}-${idx}`}  
                                    className={styles.tech__main__technologies__element}>
                                            <div className={styles.tech__main__technologies__element__icon}  style={colorStyle} >{el.icon}</div>
                                            <div className={styles.tech__main__technologies__element__name}>{el.name}</div>
                                </motion.div>
                            )
                        })}
                </div>
            </div>
        </div>
    )
}