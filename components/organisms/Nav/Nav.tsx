import Link from "next/link";
import styles from "./Nav.module.css";
export const Nav = () =>{
    return(
        <nav className={styles.nav}>
            <Link href="/" className={styles.nav__text}>Mateusz Zaniewski - FullStack Developer</Link>
            <Link  download href="/Mateusz Zaniewski FullStack CV POL.pdf" className={styles.nav__cv}>Pobierz CV</Link>
        </nav>
    )

}