import { ChevronRight } from 'lucide-react';
import styles from './Arrow.module.css'
import { CSSProperties } from 'react';
export type ArrowType = {
    className?:string,
    style?: CSSProperties,
    onClick?: ()=>void
}
export function Arrow(props: ArrowType) {
  const { style, onClick} = props;
  return (
    <div
      className={styles.arrow}
      style={{ ...style }}
      onClick={onClick}
    >
        <ChevronRight/>
    </div>
  );
}