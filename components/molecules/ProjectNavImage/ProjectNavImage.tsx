import { motion } from 'motion/react'
import styles from './ProjectNavImage.module.css'
import { ImageContainer } from '@/components/atoms/ImageContainer/ImageContainer'
import { ProjectDataType } from '@/data/projectData'

type ProjectNavImageType = {
    isAnimating: number,
    changeProject: () => void,
    previousProject: ProjectDataType,
    text: string,
    position: "left" | "right"
}

export const ProjectNavImage = (props:ProjectNavImageType)=>{

    return (
        <div onClick={props.changeProject } className={`${styles.projectNav__wrapper} ${props.position === "left" ? styles.projectNav__wrapper__left : styles.projectNav__wrapper__right}`}>
                <div className={styles.projectNav__wrapper__image}>
                    <motion.div 
                        key={props.isAnimating} 
                        animate={{ width: ["0%", "100%", "0%"] }} 
                        transition={{
                            duration: 1.4, 
                            times: [0, 0.5, 1],
                            ease: "easeInOut",
                            delay: 0,      
                        }}
                        className={props.position === "left" ? styles.projectNav__wrapper__image__mask__left : styles.projectNav__wrapper__image__mask__right}></motion.div>
                        <ImageContainer style={{borderRadius: "10px 0 10px 0"}} src={`${props.previousProject.images[0]}`} alt={'asd'} fill/>
                </div>
                <span className={styles.projectNav__wrapper__navigation}>{props.text}</span>
                <motion.span 
                    key={props.isAnimating} 
                    animate={{ opacity: [1, 0, 1] }} 
                    transition={{
                        duration: 1.4,
                        times: [0, 0.5, 1],
                        ease: "easeInOut",
                        delay: 0,
                    }}
                    className={styles.projectNav__wrapper__name}>{props.previousProject.title}</motion.span>
        </div>
    )
}