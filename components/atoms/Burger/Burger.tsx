import { MobileNavPropsType } from '@/components/organisms/Nav/Nav'
import styles from './Burger.module.css'

export const Burger = (props: MobileNavPropsType)=>{
    
    return (
        <div onClick={()=>props.setActive(props.active ? false  : true)} className={styles.wrapper__burger}>
            <div className={`${styles.burger} ${props.active ? styles.burger__active : ""}`}></div>
        </div>
    )
}