'use client';
import Slider from "react-slick";
import styles from './ImageCarousel.module.css'
import { Arrow, } from "@/components/atoms/Arrow/Arrow";
import { ReactNode, useEffect, useState } from "react";
import { ImageMagnify } from "@/components/atoms/ImageMagnify/ImageMagnify";
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
                if(props.images.length < 3){
                    setInitialSlidesToShow(2)
                }else{
                    setInitialSlidesToShow(3)
                }
            }
        }, 0)
    },[props.images.length])

    const settings = {
        dots: false,
        infinite: true,
        swipeToSlide: true,
        slidesToShow: initialSlidesToShow,  
        slidesToScroll: 1,   
        initialSlide: 0,         // default: desktop >1280
        nextArrow: <Arrow orientation="right"  />,
        prevArrow: <Arrow orientation="left"  />,
        mobileFirst: true,
        appendDots: (dots:ReactNode) => (
            <div
            style={{
            backgroundColor: "transparent",
            borderRadius: "10px",
            padding: "10px"
            }}
        >
            <ul style={{ margin: "0px" }}> {dots} </ul>
        </div>
        ),
        customPaging: (i:number) => (
        <div
            style={{
            width: "30px",
            height: "30px",
            color: "red",
            backgroundColor: "#000",
            border: "1px #fff solid",
            borderRadius: "50%",
            }}
        >
        </div>
        ),
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
                    console.log(props.images)
                    return(
                        <div key={index+1} className={styles.carousel__item}>
                            <ImageMagnify fill  src={`${image}`} alt={`Zdjęcie poglądowe projektu nr ${index+1}`} slideIndex={index+1} sources={[...props.images]}/>
                        </div>
                    )
                })}
            </Slider>
            }
            {props.images.length == 1 && 
                <div className={styles.carousel__item__single}>
                    <ImageMagnify fill  src={`${props.images[0]}`} alt={'Zdjęcie poglądowe projektu'} sources={["/Auth/1.png","/Auth/2.png","/Auth/3.png"]}/>
                </div>
            }
        </div>
    )


} 