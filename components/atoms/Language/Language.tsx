import styles from './Language.module.css'
import Flag from 'react-world-flags'
export const Language = (props: {setLang: (lang: "pl" | "en")=>void, lang:"pl" | "en"}) => {
    return (
            <div className={styles.lang} onClick={()=> props.setLang(props.lang === "pl" ? "en" :"pl")}>
               {props.lang === "pl" && <Flag code={"pl"} /> }
               {props.lang === "en" && <Flag code={"gb"} /> }
            </div>
           
    )
}