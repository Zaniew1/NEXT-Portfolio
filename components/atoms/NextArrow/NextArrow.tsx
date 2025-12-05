import { ChevronRight } from 'lucide-react';
import { ArrowType } from "../PreviousArrow/PreviousArrow";
import styles from './NextArrow.module.css'
export function NextArrow(props: ArrowType) {
  const { style, onClick } = props;
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