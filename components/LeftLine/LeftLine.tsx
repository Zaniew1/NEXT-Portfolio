import styles from './LeftLine.module.css'
export const LeftLine = ()=>{
    return (
        <div className={styles.leftLine} >
			<div className={styles.leftLine__top}></div>
			<div className={styles.leftLine__mid}></div>
            <span className={styles.leftLine__icon}></span>
			<div className={styles.leftLine__bot}></div>
		</div>
    )
}