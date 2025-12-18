import { ReactNode } from 'react';
import styles from './Layout.module.css'
interface LayoutPropsType {
  children: ReactNode;
  id?: string;
}
export const Layout = (props: LayoutPropsType)=>{

    return (
        <div id={props.id} className={styles.layout}>{props.children}</div>
    );

}
