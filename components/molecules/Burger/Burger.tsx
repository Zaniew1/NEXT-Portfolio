"use client"
import { useState } from 'react'
import styles from './Burger.module.css'
export const Burger = ()=>{
    const [burgerActive, setBurgerActive] = useState<boolean>(false)
    return (
        <div onClick={()=>setBurgerActive(prev=> !prev)} className={styles.wrapper__burger}>

            <div className={`${styles.burger} ${burgerActive ? styles.burger__active : ""}`}>
            </div>
        </div>
    )
}