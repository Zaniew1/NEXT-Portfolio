import Link from 'next/link';
import { MobileNavPropsType, NavIndexTypeOptional } from '../Nav/Nav'
import styles from './NavMobile.module.css'
import { Linkedin, Github } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
export const NavMobile = (props: MobileNavPropsType & NavIndexTypeOptional)=>{
    const pathname = usePathname();
    const router = useRouter();
    const {t} = useTranslation('global')
    const navigateAndClose = (id: string) =>{
        props.setActive(false);

        if (pathname !== "/") {
            router.push("/");
            setTimeout(() => {
                document.getElementById(id)?.scrollIntoView({ behavior: "smooth"});
            }, 300);
        } else {
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth",});
        }
    }
    return (
        <div className={`${styles.navmobile} ${props.active ? styles.navmobile__active : ""}`}>
            <ul className={styles.navmobile__list}>
                <li onClick={()=>navigateAndClose("about")} className={styles.navmobile__list__item}>{t("menu.about")}</li>
                <li onClick={()=>navigateAndClose("projects")} className={styles.navmobile__list__item}>{t("menu.projects")}</li>
                <li onClick={()=>navigateAndClose("tech")} className={styles.navmobile__list__item}>{t("menu.tech")}</li>
                <li onClick={()=>navigateAndClose("experience")} className={styles.navmobile__list__item}>{t("menu.exp")}</li>
                <li onClick={()=>navigateAndClose("contact")} className={styles.navmobile__list__item}>{t("menu.contact")}</li>
            </ul>
            <div className={styles.navmobile__links}>
                {pathname != "/projects" && <Link   href="/projects" className={styles.navmobile__link}>{t("menu.allProjects")}</Link>}
                {pathname != "/" && <Link   href="/" className={styles.navmobile__link}>{t("menu.home")}</Link>}
                <Link  download href="/Mateusz_Zaniewski_FullStack_CV_POL.pdf" className={styles.navmobile__link}>{t("menu.cv")}</Link>
            </div>
            <div className={styles.navmobile__social}>
                <Link href={"https://www.linkedin.com/in/mateusz-zaniewski-3a159b107"} className={styles.navmobile__social__icon}><Linkedin/></Link>
                <Link href={'https://github.com/Zaniew1'} className={styles.navmobile__social__icon}><Github/></Link>
            </div>
        </div>
    )


}