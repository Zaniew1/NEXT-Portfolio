'use client';
import { ImageContainer } from "@/components/atoms/ImageContainer/ImageContainer";
import Slider from "react-slick";
import styles from './ImageCarousel.module.css'
import { NextArrow } from "@/components/atoms/NextArrow/NextArrow";
import { PreviousArrow } from "@/components/atoms/PreviousArrow/PreviousArrow";
import { useEffect, useState } from "react";
type CarouselType = {
    images: string[]
}
export const ImageCarousel = (props:CarouselType) =>{
    const [initialSlidesToShow, setInitialSlidesToShow] = useState<1|2|3>(1)
    useEffect(()=>{
        const width = window.innerWidth ?? 500
        setTimeout(() => {
            if(width < 786){
                setInitialSlidesToShow(1);
            }else if(width < 1280){
                setInitialSlidesToShow(2)
            }else if(width >= 1280){
                setInitialSlidesToShow(3)
            }
        }, 0)
    },[])

    const settings = {
        dots: true,
        infinite: true,
        swipeToSlide: true,
        slidesToShow: initialSlidesToShow,  
        slidesToScroll: 1,   
        initialSlide: 0,         // default: desktop >1280
        nextArrow: <NextArrow />,
        prevArrow: <PreviousArrow />,
        mobileFirst: true,
        responsive: [
            {
               breakpoint: 9999,         // ≤ 1280px
               settings: {
                   slidesToShow: 3,
               },
           },
            {
                breakpoint: 1280,         // ≤ 1280px
                settings: {
                    slidesToShow: 2,
                },
            },
            {
            breakpoint: 765,          // ≤ 765px
            settings: {
                slidesToShow: 1,
            },
            },
        ],
    };
    return(
        <div className={styles.carousel}>
            {props.images.length > 1 && 
            <Slider {...settings}>
                {props.images.map((image, index)=>{
                    return(
                        <div key={index+1} className={styles.carousel__item}>
                            <ImageContainer  src={`/${image}`} fill={true} alt={`Zdjęcie poglądowe projektu nr ${index+1}`}/>
                        </div>
                    )
                })}
            </Slider>
            }
            {props.images.length == 1 && 
                <div className={styles.carousel__item__single}>
                    <ImageContainer  src={`/${props.images[0]}`} fill={true} alt={`Zdjęcie poglądowe projektu`}/>
                </div>
            }
        </div>
    )


} 