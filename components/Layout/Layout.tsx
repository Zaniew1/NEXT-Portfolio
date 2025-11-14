import styles from './Layout.module.css'
export const Layout = (props: React.PropsWithChildren)=>{

    return (
        <div className={styles.layout}>{props.children}</div>
    );

}