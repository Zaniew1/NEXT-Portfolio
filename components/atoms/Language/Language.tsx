import styles from './Language.module.css'
import Flag from 'react-world-flags'
export const Language = (props: {setLang: (lang: "pl" | "en")=>void, lang:"pl" | "en"}) => {
    console.log('asd')
    return (
            <div className={styles.lang} onClick={()=> props.setLang(props.lang === "pl" ? "en" :"pl")}>
               {props.lang === "pl" && <Flag alt="Flaga Polski" code={"pl"} /> }
               {props.lang === "en" && <Flag alt="Flaga Wielkiej Brytanii" code={"gb"} /> }
            </div>
           
    )
}