"use client"
import { LeftLine } from "@/components/molecules/LeftLine/LeftLine";
import { RightLine } from "@/components/molecules/RightLine/RightLine";
import { Nav } from "@/components/organisms/Nav/Nav";
import styles from "./allProjects.module.css";
import { Layout } from "@/components/atoms/Layout/Layout";
import { SwipeableDiv } from "@/components/molecules/SwipeableDiv/SwipeableDiv";
import { useState } from "react";
import { AnimatePresence, motion} from "motion/react";
import { projectData } from "@/data/projectData";
import { ImageContainer } from "@/components/atoms/ImageContainer/ImageContainer";
import Link from "next/link";
import { SectionHeader } from "@/components/atoms/SectionHeader/SectionHeader";
 function ProjectsPage () {
      const [switchText, setSwitchText]  = useState<number>(0);
      const swipeLeft = () => {
          if(switchText == 0){setSwitchText(2)}
          if(switchText == 1){setSwitchText(0)}
          if(switchText == 2){setSwitchText(1)}
      }
      const swipeRight = () =>{
          if(switchText == 0){setSwitchText(1)}
          if(switchText == 1){setSwitchText(2)}
          if(switchText == 2){setSwitchText(0)}
      }
      const frontEndProjects = projectData.filter(el => el.type === "Front-end")
      const backEndProjects = projectData.filter(el => el.type === "Back-end")
      const fullStackProjects = projectData.filter(el => el.type === "Full-stack")

  return (
    <main >
        <Nav></Nav>
         <Layout>
            <div className={styles.projects}>
              <SectionHeader>Wszystkie moje projekty</SectionHeader>
              <div className={styles.projects__text__switch}>
                <p onClick={()=>setSwitchText(0)} className={`${styles.projects__text__switch__item} ${switchText == 0 ? `${styles.projects__text__switch__item__active}`: ""}`}>Frontend</p>
                <p onClick={()=>setSwitchText(1)} className={`${styles.projects__text__switch__item} ${switchText == 1 ? `${styles.projects__text__switch__item__active}`: ""}`}>Backend</p>
                <p onClick={()=>setSwitchText(2)} className={`${styles.projects__text__switch__item} ${switchText == 2 ? `${styles.projects__text__switch__item__active}`: ""}`}>Fullstack</p>
              </div>
              <div className={styles.projects__text__wrapper}>

                  { switchText == 0 && 
                      <SwipeableDiv 
                        onSwipeLeft={swipeLeft} 
                        onSwipeRight={swipeRight}
                        className={styles.projects__swipeable}> 
                          <div className={styles.projects__swipeable__wrapper}>
                              {frontEndProjects?.map((el,index)=>{
                                return (
                                    <motion.div 
                                      key={el.id+"front"}
                                      initial={{opacity: 0, x:-50}}
                                      animate={{opacity: 1, x:0}}
                                      transition={{ delay: (index+1)/15, duration: 0.4, ease: "easeInOut" }}
                                      className={styles.projects__swipeable__wrapper__div}
                                    >
                                      <Link className={styles.projects__swipeable__wrapper__link}  href={"/projects/"+el.id}>
                                          <span className={styles.projects__swipeable__wrapper__link__hover__bgc}></span>
                                        <div className={styles.projects__swipeable__wrapper__link__animations}>
                                          <span className={styles.projects__swipeable__wrapper__link__hover__one}></span> 
                                          <span className={styles.projects__swipeable__wrapper__link__hover__one__half}></span> 
                                          <span className={styles.projects__swipeable__wrapper__link__hover__two}></span>
                                          <span className={styles.projects__swipeable__wrapper__link__hover__three}></span>
                                          <span className={styles.projects__swipeable__wrapper__link__hover__three__half}></span>
                                          <span className={styles.projects__swipeable__wrapper__link__hover__four}></span>
                                          <span className={styles.projects__swipeable__wrapper__link__hover}>
                                            {el.title}
                                          </span>
                                        </div>
                                        <ImageContainer fill src={"/"+el.images[0]} alt={el.title}/>
                                      </Link>
                                    </motion.div>
                                )
                                
                              })}
                          </div>
                      </SwipeableDiv>
                  }
                  { switchText == 1 && 
                    <SwipeableDiv 
                          onSwipeLeft={swipeLeft} 
                          onSwipeRight={swipeRight}
                          className={styles.projects__swipeable}>
                       <div className={styles.projects__swipeable__wrapper}>

                        {backEndProjects?.map((el,index)=>{
                                return (
                                    <motion.div
                                      key={"fullstack"+el.id}
                                      initial={{opacity: 0, y:50}}
                                      animate={{opacity: 1, y:0}}
                                      transition={{  delay: (index+1)/15, duration: 0.4, ease: "easeInOut" }}
                                      className={styles.projects__swipeable__wrapper__div}
                                    >
                                      <Link className={styles.projects__swipeable__wrapper__link} href={"/projects/"+el.id}>
                                          <span className={styles.projects__swipeable__wrapper__link__hover__bgc}></span>
                                        <div className={styles.projects__swipeable__wrapper__link__animations}>
                                          <span className={styles.projects__swipeable__wrapper__link__hover__one}></span> 
                                          <span className={styles.projects__swipeable__wrapper__link__hover__one__half}></span> 
                                          <span className={styles.projects__swipeable__wrapper__link__hover__two}></span>
                                          <span className={styles.projects__swipeable__wrapper__link__hover__three}></span>
                                          <span className={styles.projects__swipeable__wrapper__link__hover__three__half}></span>
                                          <span className={styles.projects__swipeable__wrapper__link__hover__four}></span>
                                          <span className={styles.projects__swipeable__wrapper__link__hover}>
                                            {el.title}
                                          </span>
                                        </div>
                                        <ImageContainer  fill src={"/"+el.images[0]} alt={el.title}/>
                                      </Link>
                                    </motion.div>

                                )
                              })}

                       </div>
                    </SwipeableDiv>
                  }
                  { switchText == 2 &&
                  <SwipeableDiv 
                        onSwipeLeft={swipeLeft} 
                        onSwipeRight={swipeRight}
                        className={styles.projects__swipeable}>
                      <div className={styles.projects__swipeable__wrapper}>
                        {fullStackProjects?.map((el,index)=>{
                                return (
                                    <motion.div 
                                    key={el.id+"Fullstack"}
                                    initial={{opacity: 0, x:50}}
                                    animate={{opacity: 1, x:0}}
                                    transition={{ delay: (index+1)/15, duration: 0.4, ease: "easeInOut" }}
                                    className={styles.projects__swipeable__wrapper__div}
                                  >
                                  <Link className={styles.projects__swipeable__wrapper__link}  href={"/projects/"+el.id}>
                                        <span className={styles.projects__swipeable__wrapper__link__hover__bgc}></span>
                                      <div className={styles.projects__swipeable__wrapper__link__animations}>
                                        <span className={styles.projects__swipeable__wrapper__link__hover__one}></span> 
                                        <span className={styles.projects__swipeable__wrapper__link__hover__one__half}></span> 
                                        <span className={styles.projects__swipeable__wrapper__link__hover__two}></span>
                                        <span className={styles.projects__swipeable__wrapper__link__hover__three}></span>
                                        <span className={styles.projects__swipeable__wrapper__link__hover__three__half}></span>
                                        <span className={styles.projects__swipeable__wrapper__link__hover__four}></span>
                                        <span className={styles.projects__swipeable__wrapper__link__hover}>
                                          {el.title}
                                        </span>
                                      </div>
                                      <ImageContainer fill src={"/"+el.images[0]} alt={el.title}/>
                                      </Link>
                                  </motion.div>
                                )
                              })}
                      </div>
                    </SwipeableDiv>
                  }

              </div>
            </div>
         </Layout>
        <LeftLine></LeftLine>
        <RightLine></RightLine> 
        

    </main>
  );
}
export default ProjectsPage