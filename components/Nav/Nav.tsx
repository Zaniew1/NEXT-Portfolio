import Link from "next/link";
import styles from "./Nav.module.css";
export const Nav = () =>{
    return(
        <nav className={styles.nav}>
            <Link href="/" className={styles.nav__text}>Mateusz Zaniewski - Twój FullStack</Link>
        </nav>
    )

}