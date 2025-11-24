import Link from "next/link"
import styles from "./ProjectNameInfo.module.css"
import { projectData } from "@/data/projectData"
import { motion } from "motion/react"


export const ProjectNameInfo = (props: {index : number, setIndex: (index: number)=> void, isAnimating: number}) =>{
    return (<motion.div key={props.isAnimating}  
                    animate={{ opacity: [1, 0, 1] }} 
                    transition={{
                        duration: 1.4, 
                        times: [0, 0.5, 1],
                        ease: "easeInOut",
                        delay: 0, 
                    }}className={styles.projectname__wrapper}>
                <div className={styles.projectname__wrapper__type}>{projectData[props.index].type}</div>
                <div className={styles.projectname__wrapper__info}>
                    <div className={styles.projectname__wrapper__info__index}>0{props.index+1}</div>
                    <div className={styles.projectname__wrapper__info__name}>{projectData[props.index].title}</div>
                </div>
                <div className={styles.projectname__wrapper__link}>
                    <Link className={styles.projectname__wrapper__link__anchor} href={projectData[props.index].link} >Wyświetl szczegóły</Link>
                    <span  className={styles.projectname__wrapper__link__span}></span>
                </div>

            </motion.div>)

}