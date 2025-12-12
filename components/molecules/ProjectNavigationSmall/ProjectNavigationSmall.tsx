import styles from './ProjectNavigationSmall.module.css'

type ProjectNavigationSmallType = {
    index : number,
    setIndex: (index: number) => void
    isAnimating : number,
    setAnimating: (index: number) => void
}
import { projectData } from '@/data/projectData'
export const ProjectNavigationSmall = (props: ProjectNavigationSmallType) =>{
    const handleProjectChange = (id:number) =>{
        props.setAnimating(id);
        setTimeout(() => {
            props.setIndex(id);
        }, 700); 
    } 
    return (
        <div className={styles.smallnav__wrapper}>
             {projectData.map((el)=>{
                return (<div onClick={()=> handleProjectChange(el.id)}
                             className={`${styles.smallnav__wrapper__element} ${props.index === el.id ? styles.smallnav__wrapper__element__active: ""}`} 
                             key={`${el.id}-${el.title}`}>
                                0{el.id+1}
                                <span className={styles.smallnav__wrapper__element__span}>
                                </span>
                        </div>)
             })}
        </div>


    );


}