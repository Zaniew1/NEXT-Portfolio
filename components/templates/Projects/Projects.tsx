"use client"
import { ProjectNav } from '@/components/organisms/ProjectNav/ProjectNav';
import styles from './Projects.module.css';
import {projectData} from '../../../data/projectData';
import { useState } from 'react';
import { ProjectNavigationSmall } from '@/components/molecules/ProjectNavigationSmall/ProjectNavigationSmall';
import { ProjectNameInfo } from '@/components/molecules/ProjectNameInfo/ProjectNameInfo';
import { ImageContainer } from '@/components/atoms/ImageContainer/ImageContainer';
import Link from 'next/link';
import { AnimatePresence, motion } from 'motion/react';
export const Projects = () => {
    const [projectIndex, setProjectIndex] = useState<number>(0);
  const [isAnimating, setAnimating] = useState<number>(0);

    return (
        <div className={styles.projects} id={"projects"}>
            <h1 className={styles.projects__header}>Projekty</h1 >
            <div className={styles.projects__main}>
                <div className={styles.projects__main__navigation}>

                    <ProjectNavigationSmall index={projectIndex} isAnimating={isAnimating} setIndex={setProjectIndex} setAnimating={setAnimating}/>
                    <ProjectNameInfo index={projectIndex} setIndex={setProjectIndex} isAnimating={isAnimating}/>
                </div>
                <AnimatePresence mode="wait">
                   
                    <div className={styles.projects__main__view}>
                        <motion.div
                            key={isAnimating}  
                            initial={{ width: 0 }}
                            animate={{ width: ["0%", "100%", "0%"] }} 
                            transition={{
                                duration: 1.4, 
                                times: [0, 0.5, 1],
                                ease: "easeInOut",
                                delay: 0,   
                            }}
                            className={styles.projects__main__view__mask}>
                        </motion.div>
                        <Link className={styles.projects__main__view__link} href={"projects/"+projectIndex}>
                            <ImageContainer  src={`/${projectData[projectIndex].images[0]}`} alt={'asd'} fill/>
                        </Link>
                    </div>
                </AnimatePresence>
            </div>
            <ProjectNav index={projectIndex} setIndex={setProjectIndex} isAnimating={isAnimating} setAnimating={setAnimating}/>

        </div>
    )
}