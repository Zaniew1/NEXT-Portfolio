import styles from './ProjectNavigationSmall.module.css'

type ProjectNavigationSmallType = {
    index : number,
    setIndex: (index: number) => void
}
import { projectData } from '@/data/projectData'
export const ProjectNavigationSmall = (props: ProjectNavigationSmallType) =>{
    return (
        <div className={styles.smallnav__wrapper}>
             {projectData.map((el ,idx)=>{
                return (<div onClick={()=> props.setIndex(el.id)}
                             className={`${styles.smallnav__wrapper__element} ${props.index === el.id ? styles.smallnav__wrapper__element__active: ""}`} 
                             key={`${el.id}-${el.title}`}>
                                0{idx+1}
                                <span className={styles.smallnav__wrapper__element__span}>
                                </span>
                        </div>)
             })}
        </div>


    );


}