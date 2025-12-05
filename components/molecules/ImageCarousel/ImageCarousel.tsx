"use client";
import { ImageContainer } from "@/components/atoms/ImageContainer/ImageContainer";
import Slider from "react-slick";
import styles from './ImageCarousel.module.css'
import { NextArrow } from "@/components/atoms/NextArrow/NextArrow";
import { PreviousArrow } from "@/components/atoms/PreviousArrow/PreviousArrow";
type CarouselType = {
    images: string[]
}

export const ImageCarousel = (props:CarouselType) =>{
    const settings = {
         dots: true,
        infinite: true,
        slidesToShow: 3,
        swipeToSlide: true,
        nextArrow: <NextArrow />,
        prevArrow: <PreviousArrow />,
        responsive: [
            {
                breakpoint: 1280,     // <= 1280px
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 786,     // <= 786px
                settings: {
                    slidesToShow: 1,
                },
            }
          
        ],
    };
    return(
        <div className={styles.carousel}>
            <Slider {...settings}>
                {props.images.map((image, index)=>{
                    return(
                        <div key={index+1} className={styles.carousel__item}>
                            <ImageContainer  src={`/${image}`} fill={true} alt={`Zdjęcie poglądowe projektu nr ${index+1}`}/>
                        </div>
                    )
                })}
            </Slider>
        </div>
    )


} 