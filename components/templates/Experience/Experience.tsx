import { ExperienceCard } from '@/components/organisms/ExperienceCard/ExperienceCard'
import styles from './Experience.module.css'
import {experienceData} from '@/data/experienceData'
export const Experience = () => {
        // someday here will be slider with experience cards
        return (
        <div className={styles.experience}>
            <h1 className={styles.experience__header}>Doświadczenie</h1 >
            <div  className="slider-container">
                    <ExperienceCard data={experienceData[0]} />
            </div>
            <div className={styles.experience__nav}></div>
        </div>
    )
}