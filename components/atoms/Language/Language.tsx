import styles from './Language.module.css'
import Flag from 'react-world-flags'
export const Language = (props: {setIsPolish: (polish: boolean)=>void, isPolish: boolean}) => {
    return (
            <div className={styles.lang} onClick={()=> props.setIsPolish(!props.isPolish)}>
               {!props.isPolish && <Flag code={"pl"} /> }
               {props.isPolish && <Flag code={"gb"} /> }
            </div>
           
    )
}