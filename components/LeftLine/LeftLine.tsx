import styles from './LeftLine.module.css'
import Link from 'next/link';
import { Share2 } from 'lucide-react';

export const LeftLine = ()=>{
    return (
        <div className={styles.leftLine} >
			<div className={styles.leftLine__top}></div>
			<div className={styles.leftLine__mid}></div>
            <div className={styles.leftLine__socials}>
                <span className={styles.leftLine__socials__icon}><Share2 /></span>
                <div className={styles.leftLine__socials__unwrap}>
                    <Link target='_blank' href="https://www.linkedin.com/in/mateusz-zaniewski-3a159b107/">Linkedin</Link>
                    <span>-</span>
                    <Link href="https://github.com/Zaniew1">Github</Link>
                </div>

            </div>
			<div className={styles.leftLine__bot}></div>
		</div>
    )
}
