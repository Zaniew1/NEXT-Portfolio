import { ExperienceCard } from '@/components/organisms/ExperienceCard/ExperienceCard'
import styles from './Experience.module.css'
import {experienceData} from '@/data/experienceData'
import { SectionHeader } from '@/components/atoms/SectionHeader/SectionHeader'
export const Experience = () => {
        // someday here will be slider with experience cards
        return (
        <div className={styles.experience} id={"experience"}>
            <SectionHeader>Doświadczenie</SectionHeader>
            <ExperienceCard data={experienceData[0]} />
        </div>
    )
}