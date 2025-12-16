"use client"
import Link from "next/link";
import styles from "./ProjectNav.module.css"
import { projectData } from "@/data/projectData";
import { AnimatedText } from "@/components/atoms/AnimatedLetters/AnimatedLetters";
import { ProjectNavImage } from "@/components/molecules/ProjectNavImage/ProjectNavImage";
import { Arrow } from "@/components/atoms/Arrow/Arrow";

type ProjectNavType = {
    index: number,
    setIndex: (index: number) => void
    isAnimating : number,
    setAnimating: (index: number) => void,
    changeProjectNext: ()=> void
    changeProjectPrev: ()=> void
}

export const ProjectNav = (props: ProjectNavType) =>{

    const getIndex = (newIndex:number) => {
        const max = projectData.length;
        return (newIndex + max) % max; // cykliczny wrap-around
    };
    const handlePrev = () => getIndex(props.index - 1);
    const handleNext = () => getIndex(props.index + 1);
    const project = projectData.find(el=> el.id === props.index)
    const previousProject = projectData.find(el=> el.id === handlePrev())
    const nextProject = projectData.find(el=> el.id === handleNext())
    if(!project) return null;
    if(!previousProject) return null;
    if(!nextProject) return null;

    return(
        <div className={styles.projectNav}>

           <ProjectNavImage position={"left"} previousProject={previousProject} text={"Poprzedni projekt"} isAnimating={props.isAnimating} changeProject={()=>props.changeProjectPrev()} />
            <div className={styles.projectNav__middle}>
                <Arrow onClick={()=>props.changeProjectPrev()} orientation="left"></Arrow>
                <Link href={'/projects'}>
                    <p className={styles.projectNav__text} >
                        <AnimatedText text="Zobacz wszystkie projekty" />
                        <span className={styles.projectNav__text__span}></span>
                    </p>
                </Link>
                <Arrow onClick={() => props.changeProjectNext()} orientation="right" ></Arrow>
            </div>
           <ProjectNavImage position={"right"} previousProject={nextProject} text={"Następny projekt"} isAnimating={props.isAnimating} changeProject={()=>props.changeProjectNext()} />
            
        </div>
    ); 
}