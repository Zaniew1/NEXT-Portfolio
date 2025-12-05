'use client';
import { LeftLine } from "@/components/molecules/LeftLine/LeftLine";
import { RightLine } from "@/components/molecules/RightLine/RightLine";
import { Nav } from "@/components/organisms/Nav/Nav";
import styles from './singleProject.module.css'
import { projectData } from "@/data/projectData";
// import {ProjectDataType} from '../../../data/projectData'
import { useParams } from 'next/navigation';
import { ImageCarousel } from "@/components/molecules/ImageCarousel/ImageCarousel";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { BsEye } from "react-icons/bs";
import { ImageContainer } from "@/components/atoms/ImageContainer/ImageContainer";
type Params = { [key: string]: string };
function ProjectPage() {
  const queryParams = useParams();
  const projectId = queryParams.id
  const project = projectData.find(el => Number(el.id) === Number(projectId));
  if (!project) {
    throw new Error("Project not found");
  }
  const {title, type, technologies, images, github, view,  content } = project;
  return (
    <div >
      <Nav></Nav>
      <div className={styles.project}>
        <h1 className={styles.project__header}>{title}</h1>
        <p className={styles.project__type}>{type}</p>
        <div className={styles.project__links}>
          {github && <Link href={github}><FaGithub/>GitHub</Link>}
          {view && <Link href={view}><BsEye/>Podgląd</Link>}
        </div>
        <ImageCarousel images={images}/>
        {/* <p className={styles.project__desc}>
            {description}
        </p> */}
        <div className={styles.project__tech}>
          {technologies?.map((tech, index)=>{
            const colorStyle = tech.color      
            return (
              <div className={styles.project__tech__item}  key={`key:tech__item__${index}`}>
                <span className={styles.project__tech__item__icon} style={colorStyle}>{tech.icon}</span>
                <span className={styles.project__tech__item__name}>{tech.name}</span>
              </div>
            )
          })}
        </div>
        <div className={styles.project__content}>
          {content?.map((el, index)=>{
            return (
              <div className={styles.project__content__wrapper} key={`key:content__item__${index}`}>
                {el.header && <h1 className={styles.project__content__wrapper__header}>{el.header}</h1>}
                {el.text && <p className={styles.project__content__wrapper__text}>{el.text}</p>}
                {el.image && <ImageContainer src={"/"+el.image} alt={"Zdjęcie opisujące funkcjonalność"} fill/>}
                {el.list && 
                  <ul className={styles.project__content__wrapper__list}>
                    {el.list?.map((li)=>{
                      return (<li className={styles.project__content__wrapper__list__item} key={`key:list__item__${Math.random()*1000000}`}>{li}</li>)
                    })}
                  </ul>
                  }
              </div>
            )})
          }
        </div>
      </div>
      <LeftLine></LeftLine>
      <RightLine></RightLine> 
    </div>
  );
}
export default ProjectPage
