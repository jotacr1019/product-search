import React, {  useEffect, useState } from 'react';
import Carousel from "nuka-carousel"
import css from "./slider.module.css";

export function CarouselSlide(props){
    const [pictures, setPictures] = useState([]);

    useEffect(() => {
        setPictures(props.pictures)
    }, [props.pictures])

    return (
        <Carousel className={css.carousel} >
            {pictures?.map((pic) => (
                <div className={css.root} key={pic}>
                    <img className={css.img} src={pic} alt={pic}/>
                </div>
            ))}
        </Carousel>
    )
}
