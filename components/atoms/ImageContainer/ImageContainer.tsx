import { CSSProperties } from 'react';
import styles from  './ImageContainer.module.css';
import Image from 'next/image'
export const ImageContainer = (props: { style?: CSSProperties, src:string, alt: string, fill?: boolean, width?: number, height?:number, className?: string, quality?: number}) =>{
    return (
        <div className={styles.imageContainer}>
            <Image
            style={props.style}
            src={props.src}
            alt={props.alt}
            fill={props.fill}
            width={props.fill ? undefined : props.width}
            height={props.fill ? undefined : props.height}
            quality={props.quality ?? 75}
            className="object-cover"
            />
        </div>
    )
}