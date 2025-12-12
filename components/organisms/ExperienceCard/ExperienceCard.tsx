import { ImageContainer } from '@/components/atoms/ImageContainer/ImageContainer';
import styles from './ExperienceCard.module.css';
import Link from 'next/link';
import { ExperienceDataType } from '@/data/experienceData';
export const ExperienceCard = (props: {data:ExperienceDataType}) => {
    return (
        <div className={styles.card}> 
            <div className={styles.card__image}>
                <ImageContainer fill src={props.data.companyLogo} alt={"Logo firmy "+props.data.company}/>
            </div>
            <div className={styles.card__text}>
                <Link className={styles.card__text__name} href={props.data.companyWebsite} >{props.data.company}</Link>
                <div className={styles.card__text__data}>{props.data.duration}</div>
                <p className={styles.card__text__position}>{props.data.position}</p>
                <div className={styles.card__text__tech}>
                    {props.data.technologies.map((technology)=>
                        <div key={technology.tech} className={styles.card__text__tech__icon}>
                            <div style={{color: technology.color}}className={styles.card__text__tech__icon__svg}>{technology.icon}</div>
                            <p className={styles.card__text__tech__icon__text}>{technology.tech}</p>
                        </div>
                    )}
                </div>
                <p className={styles.card__text__paragraph}>Opis stanowiska:</p>
                <ul className={styles.card__text__list}>
                    {props.data.responsibilities.map(res=>{
                        return <li key={res.key} className={styles.card__text__list__element}>{res.text}</li>
                    })}
                </ul>  
            </div>

        </div>
    )
}