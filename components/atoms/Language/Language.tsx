import { useEffect, useState } from 'react'
import styles from './Language.module.css'
import Flag from 'react-world-flags'
import { useTranslation } from 'react-i18next';
export const Language = () => {
    const [ispolish, setIsPolish] = useState<boolean>(true);
    const [t, i18n] = useTranslation("global");
    useEffect(() => {
        if (ispolish) {
            i18n.changeLanguage("pl")
            
        }else{
            i18n.changeLanguage("en")
        }
    }, [ispolish, i18n])
    return (
            <div className={styles.lang} onClick={()=> setIsPolish(!ispolish)}>
               {!ispolish && <Flag code={"pl"} /> }
               {ispolish && <Flag code={"gb"} /> }
            </div>
           
    )
}