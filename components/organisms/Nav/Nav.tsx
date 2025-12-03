"use client"
import Link from "next/link";
import styles from "./Nav.module.css";
import { Burger } from "@/components/molecules/Burger/Burger";
import { NavMobile } from "../NavMobile/NavMobile";
import { useState } from "react";
export type MobileNavPropsType = {
    active: boolean,
    setActive: (active:boolean)=>void 
}
export const Nav = () =>{
    const [burgerActive, setBurgerActive] = useState<boolean>(false)
    return(
        <nav className={styles.nav}>
            <Link href="/" className={styles.nav__text}>Mateusz Zaniewski - FullStack Developer</Link>
            <Link  download href="/Mateusz Zaniewski FullStack CV POL.pdf" className={styles.nav__cv}></Link>
            <Burger active={burgerActive} setActive={setBurgerActive}/>
            <NavMobile active={burgerActive} setActive={setBurgerActive} />
        </nav>
    )

}