import Link from 'next/link';
import { MobileNavPropsType, NavIndexTypeOptional } from '../Nav/Nav'
import styles from './NavMobile.module.css'
import { Linkedin, Github } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
export const NavMobile = (props: MobileNavPropsType & NavIndexTypeOptional)=>{
    const sectionToIndex: Record<string, number> = {
        about: 0,
        projects: 1,
        tech: 2,
        experience: 3,
        contact: 4
    }
    const pathname = usePathname();
    const router = useRouter();
    const navigateAndClose = (id: string) =>{
        props.setActive(false);
        const targetIndex = sectionToIndex[id];
        if (pathname !== "/") {
                router.push("/")
                props.setNavIndex?.(targetIndex);
            } else {
                setTimeout(() => {
                    props.setNavIndex?.(targetIndex);
                }, 200);
            }
    }
    return (
        <div className={`${styles.navmobile} ${props.active ? styles.navmobile__active : ""}`}>
            <ul className={styles.navmobile__list}>
                <li onClick={()=>navigateAndClose("about")} className={styles.navmobile__list__item}>O mnie</li>
                <li onClick={()=>navigateAndClose("projects")} className={styles.navmobile__list__item}>Projekty</li>
                <li onClick={()=>navigateAndClose("tech")} className={styles.navmobile__list__item}>Technologie</li>
                <li onClick={()=>navigateAndClose("experience")} className={styles.navmobile__list__item}>Doświadczenie</li>
                <li onClick={()=>navigateAndClose("contact")} className={styles.navmobile__list__item}>Kontakt</li>
            </ul>
            <div className={styles.navmobile__links}>
                {pathname != "/projects" && <Link   href="/projects" className={styles.navmobile__link}>Wszystkie projekty</Link>}
                {pathname != "/" && <Link   href="/" className={styles.navmobile__link}>Strona główna</Link>}
                <Link  download href="/Mateusz_Zaniewski_FullStack_CV_POL.pdf" className={styles.navmobile__link}>Pobierz CV</Link>
            </div>
            <div className={styles.navmobile__social}>
                <Link href={"https://www.linkedin.com/in/mateusz-zaniewski-3a159b107"} className={styles.navmobile__social__icon}><Linkedin/></Link>
                <Link href={'https://github.com/Zaniew1'} className={styles.navmobile__social__icon}><Github/></Link>
            </div>
        </div>
    )


}