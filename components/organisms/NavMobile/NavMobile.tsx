import Link from 'next/link';
import { MobileNavPropsType } from '../Nav/Nav'
import styles from './NavMobile.module.css'
import { Linkedin, Github } from 'lucide-react';

export const NavMobile = (props: MobileNavPropsType)=>{
    return (
        <div className={`${styles.navmobile} ${props.active ? styles.navmobile__active : ""}`}>
            <ul className={styles.navmobile__list}>
                <li className={styles.navmobile__list__item}>O mnie</li>
                <li className={styles.navmobile__list__item}>Projekty</li>
                <li className={styles.navmobile__list__item}>Technologie</li>
                <li className={styles.navmobile__list__item}>Doświadczenie</li>
                <li className={styles.navmobile__list__item}>Kontakt</li>
            </ul>
            <Link  download href="/Mateusz Zaniewski FullStack CV POL.pdf" className={styles.navmobile__cv}></Link>
            <div className={styles.navmobile__social}>
                <Link href={"https://www.linkedin.com/in/mateusz-zaniewski-3a159b107"} className={styles.navmobile__social__icon}><Linkedin/></Link>
                <Link href={'https://github.com/Zaniew1'} className={styles.navmobile__social__icon}><Github/></Link>
            </div>
        </div>
    )


}