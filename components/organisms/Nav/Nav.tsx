"use client"
import Link from "next/link";
import styles from "./Nav.module.css";
import { Burger } from "@/components/atoms/Burger/Burger";
import { NavMobile } from "../NavMobile/NavMobile";
import { useState } from "react";
import { usePathname } from "next/navigation";
export type NavIndexTypeOptional = {
    navIndex?: number,
    setNavIndex?: (index: number)=> void
}
export type MobileNavPropsType = {
    active: boolean,
    setActive: (active:boolean)=>void 
}
export const Nav = (props: NavIndexTypeOptional) =>{
    const [burgerActive, setBurgerActive] = useState<boolean>(false)
    const pathname = usePathname();
    return(
        <nav className={styles.nav}>
            <Link href="/" className={styles.nav__text}>Mateusz Zaniewski - FullStack Developer</Link>
            <div className={styles.nav__links}>

                {pathname != "/projects" && <Link href="/projects" className={styles.nav__link}>Wszystkie Projekty</Link>}
                {pathname == "/projects" && <Link href="/" className={styles.nav__cv}>Strona główna</Link>}
                <Link  download href="/Mateusz_Zaniewski_FullStack_CV_POL.pdf" className={styles.nav__cv}>Pobierz CV</Link>
            </div>
            <Burger active={burgerActive} setActive={setBurgerActive}/>
            <NavMobile navIndex={props.navIndex} setNavIndex={props.setNavIndex} active={burgerActive} setActive={setBurgerActive} />
        </nav>
    )

}