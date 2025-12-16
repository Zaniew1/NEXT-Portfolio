import { CSSProperties, useState } from "react";
import FsLightbox from "fslightbox-react";
import { SearchCheck } from 'lucide-react';
import Image from "next/image"
import styles from  './ImageMagnify.module.css';
type ImageMagnifyType = {
    sources: string[];
    style?: CSSProperties;
    src:string;
    alt: string;
    fill?: boolean;
    width?: number;
    height?:number;
    className?: string;
    quality?: number;
    slideIndex? :number
}

export const ImageMagnify = (props: ImageMagnifyType) =>{
   const [toggler, setToggler] = useState(false);

	return (
		<div  className={styles.imageContainer}>
            <span onClick={() => setToggler(!toggler)} className={styles.magnify}><SearchCheck/></span>
            <span className={styles.background}></span>
            <Image
                style={props.style}
                src={props.src}
                alt={props.alt}
                fill={props.fill}
                width={props.fill ? undefined : props.width}
                height={props.fill ? undefined : props.height}
                quality={props.quality ?? 75}
                
            />
			<FsLightbox
				toggler={toggler}
				sources={props.sources}
                slide={props.slideIndex}
			/>
        </div>
	);
};