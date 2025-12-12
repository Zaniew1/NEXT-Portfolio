import styles from "./SectionHeader.module.css"



export const SectionHeader = (props:React.PropsWithChildren) =>{
    return <h1 className={styles.header}>{props.children}</h1>
}