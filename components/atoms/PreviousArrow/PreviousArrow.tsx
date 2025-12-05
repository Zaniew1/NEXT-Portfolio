import { ChevronLeft } from "lucide-react";
import { CSSProperties } from "react";
import styles from './PreviousArrow.module.css'
export type ArrowType = {
    className?:string,
    style?: CSSProperties,
    onClick?: ()=>void
}
export function PreviousArrow(props: ArrowType) {
  const { style, onClick } = props;
  return (
    <div
      className={styles.arrow}
      style={{ ...style }}
      onClick={onClick}
     >
        <ChevronLeft/>
    </div>
  );
}