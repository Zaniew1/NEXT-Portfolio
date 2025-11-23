"use client"
import { ProjectNav } from '@/components/organisms/ProjectNav/ProjectNav';
import styles from './Projects.module.css';
import {projectData} from '../../../data/projectData';
import { useState } from 'react';
import { ProjectNavigationSmall } from '@/components/molecules/ProjectNavigationSmall/ProjectNavigationSmall';
import { ProjectNameInfo } from '@/components/molecules/ProjectNameInfo/ProjectNameInfo';
import { ImageContainer } from '@/components/atoms/ImageContainer/ImageContainer';
import Link from 'next/link';
export const Projects = () => {
    const [projectIndex, setProjectIndex] = useState<number>(0)
    return (
        <div className={styles.projects}>
            <h1 className={styles.projects__header}>Projekty</h1 >
            <div className={styles.projects__main}>
                <div className={styles.projects__main__navigation}>

                    <ProjectNavigationSmall index={projectIndex} setIndex={setProjectIndex}/>
                    <ProjectNameInfo index={projectIndex} setIndex={setProjectIndex}/>
                </div>
                <div className={styles.projects__main__view}>
                    <Link className={styles.projects__main__view__link} href={"projects/"+projectIndex}>
                        <ImageContainer  src={`/${projectData[projectIndex].images[0]}`} alt={'asd'} fill/>
                    </Link>
                </div>
            </div>
            <ProjectNav index={projectIndex} setIndex={setProjectIndex}/>

        </div>
    )
}