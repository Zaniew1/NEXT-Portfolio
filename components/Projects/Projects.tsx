import styles from './Projects.module.css'
export const Projects = () => {
    return (
        <div className={styles.projects}>
            <h1 className={styles.projects__header}>Projekty</h1 >
            <div className={styles.projects__main}>
                <div className={styles.projects__main__nav}></div>
                <div className={styles.projects__main__view}></div>
                
            </div>
            <div className={styles.projects__nav}></div>
        </div>
    )
}