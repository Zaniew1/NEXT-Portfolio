import styles from './RightLine.module.css'
export const RightLine = ()=>{
    return (
        <div className={styles.rightLine} >
			<div className={styles.rightLine__top}></div>
			<div className={styles.rightLine__bot}></div>
		</div>
    )
}