import { ExperienceCard } from '@/components/organisms/ExperienceCard/ExperienceCard'
import styles from './Experience.module.css'
import {experienceData} from '@/data/experienceData'
import { SectionHeader } from '@/components/atoms/SectionHeader/SectionHeader'
import { useTranslation } from 'react-i18next'
export const Experience = () => {
    const [t] = useTranslation("global");
        // someday here will be slider with experience cards
        return (
        <div className={styles.experience} >
            <SectionHeader>{t("menu.exp")}</SectionHeader>
            <ExperienceCard data={experienceData[0]} />
        </div>
    )
}