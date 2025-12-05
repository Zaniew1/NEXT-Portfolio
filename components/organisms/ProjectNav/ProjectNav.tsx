"use client"
import Link from "next/link";
import styles from "./ProjectNav.module.css"
import Image from "next/image";
import { projectData } from "@/data/projectData";
import { ChevronLeft } from 'lucide-react';
import { AnimatedText } from "@/components/atoms/AnimatedLetters/AnimatedLetters";
import { motion } from "motion/react";
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
    isAnimating : number,
    setAnimating: (index: number) => void,
}

export const ProjectNav = (props: ProjectNavType) =>{

    const handlePrev = () => {
        if(props.index === 1){
            return projectData.length-1;
        }else{
            return props.index-1
        }
    };

    const handleNext = () => {
        if(props.index === projectData.length-1){
            return 1;
        }else{
            return props.index+1
        }
    };
    const changeProjectToPrevious = () =>{
        props.setAnimating(handlePrev())
        setTimeout(() => {
            props.setIndex(handlePrev());
        }, 700);
    }
    const changeProjectToNext = () =>{
        props.setAnimating(handleNext())
        setTimeout(() => {
            props.setIndex(handleNext());
        }, 700);
    }
    const project = projectData.find(el=> el.id === props.index)
    const previousProject = projectData.find(el=> el.id === handlePrev())
    const nextProject = projectData.find(el=> el.id === handleNext())
    if(!project) return null;
    if(!previousProject) return null;
    if(!nextProject) return null;

    return(
        <div className={styles.projectNav}>

            <div onClick={() => changeProjectToPrevious() } className={`${styles.projectNav__wrapper} ${styles.projectNav__wrapper__left}`}>
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
                        className={styles.projectNav__wrapper__image__mask__left}></motion.div>
                    <Image style={{borderRadius: "10px 0 10px 0"}} src={`/${previousProject.images[0]}`} alt={'asd'} fill/>
                </div>
                <span className={styles.projectNav__wrapper__navigation}>Poprzedni projekt</span>
                <motion.span 
                    key={props.isAnimating} 
                    animate={{ opacity: [1, 0, 1] }} 
                    transition={{
                        duration: 1.4,
                        times: [0, 0.5, 1],
                        ease: "easeInOut",
                        delay: 0,
                    }}
                    className={styles.projectNav__wrapper__name}>{previousProject.title}</motion.span>
            </div>
            <div onClick={() => changeProjectToPrevious() } className={styles.projectNav__arrow__left}><ChevronLeft/></div>
            <Link href={'/projects'}>
                <p className={styles.projectNav__text} >
                       <AnimatedText text="Zobacz wszystkie projekty" />
                    <span className={styles.projectNav__text__span}></span>
                </p>
            </Link>
            <div onClick={()=>changeProjectToNext() } className={` ${styles.projectNav__arrow__right}`}><ChevronLeft/></div>
            <div onClick={()=>changeProjectToNext() } className={`${styles.projectNav__wrapper} ${styles.projectNav__wrapper__right}`}>
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
                        className={styles.projectNav__wrapper__image__mask__right}></motion.div>
                    <Image style={{borderRadius: "10px 0 10px 0"}} src={`/${nextProject.images[0]}`} alt={'asd'} fill/>
                </div>
                <span className={styles.projectNav__wrapper__navigation}>Następny projekt</span>
                <motion.span 
                    key={props.isAnimating} 
                    animate={{ opacity: [1, 0, 1] }} 
                    transition={{
                        duration: 1.4,
                        times: [0, 0.5, 1],
                        ease: "easeInOut",
                        delay: 0,
                    }}
                    className={styles.projectNav__wrapper__name}>{nextProject.title}</motion.span>
            </div>
        </div>
    ); 
}