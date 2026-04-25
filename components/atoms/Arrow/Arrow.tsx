import { ChevronRight } from 'lucide-react';
import styles from './Arrow.module.css'
import type { ComponentProps } from "react";
import { CSSProperties} from 'react';
export type ArrowType = {
    className?:string,
    orientation?: "left" | "right"
    style?: CSSProperties,
    onClick?: ()=>void
} & ComponentProps<typeof ChevronRight>;
export function Arrow(props: ArrowType) {
  const { style, onClick, ...iconProps} = props;
  return (
    <div
      className={`${styles.arrow} ${props.orientation === "left" ? styles.arrow__left :""}`}
      style={{ ...style }}
      onClick={onClick}
    >
        <ChevronRight {...iconProps} />
    </div>
  );
}