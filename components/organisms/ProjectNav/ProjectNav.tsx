"use client"
import Link from "next/link";
import styles from "./ProjectNav.module.css"
import Image from "next/image";
import { projectData } from "@/data/projectData";
import { ChevronLeft } from 'lucide-react';
import { AnimatedText } from "@/components/atoms/AnimatedLetters/AnimatedLetters";
export type ProjectDataType = {
    id: number,
    title: string,
    type: string,
    technologies: string[],
    description: string
}

type ProjectNavType = {
    index: number,
    setIndex: (index: number) => void
}

export const ProjectNav = (props: ProjectNavType) =>{
    const handlePrev = () => {
        if(props.index === 0){
            return projectData.length-1;
        }else{
            return props.index-1
        }
    };

    const handleNext = () => {
        if(props.index === projectData.length-1){
            return 0;
        }else{
            return props.index+1
        }
    };
    console.log(projectData[handlePrev()].images[0])
    return(
        <div className={styles.projectNav}>

            <div onClick={() => props.setIndex(handlePrev()) } className={`${styles.projectNav__wrapper} ${styles.projectNav__wrapper__left}`}>
                <div className={styles.projectNav__wrapper__image}>
                    <Image style={{borderRadius: "10px 0 10px 0"}} src={`/${projectData[handlePrev()].images[0]}`} alt={'asd'} fill/>
                </div>
                <span className={styles.projectNav__wrapper__navigation}>Poprzedni projekt</span>
                <span className={styles.projectNav__wrapper__name}>{projectData[handlePrev()].title}</span>
            </div>
            <div onClick={() => props.setIndex(handlePrev()) } className={styles.projectNav__arrow__left}><ChevronLeft/></div>
            <Link href={'/projects'}>
                <p className={styles.projectNav__text} >
                       <AnimatedText text="Zobacz wszystkie projekty" />
                    <span className={styles.projectNav__text__span}></span>
                </p>
            </Link>
            <div onClick={()=>props.setIndex(handleNext()) } className={` ${styles.projectNav__arrow__right}`}><ChevronLeft/></div>
            <div onClick={()=>props.setIndex(handleNext()) } className={`${styles.projectNav__wrapper} ${styles.projectNav__wrapper__right}`}>
                <div className={styles.projectNav__wrapper__image}>
                    <Image style={{borderRadius: "10px 0 10px 0"}} src={`/${projectData[handleNext()].images[0]}`} alt={'asd'} fill/>
                </div>
                <span className={styles.projectNav__wrapper__navigation}>Następny projekt</span>
                <span className={styles.projectNav__wrapper__name}>{projectData[handleNext()].title}</span>
            </div>
        </div>
    ); 
}