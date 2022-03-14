import React from 'react'
import Slider from "react-slick";

export default function SimpleSlider(props) {
    const settings = {
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        // speed: 2000,

        autoplaySpeed: 3000,
  
    }
    return (
    
        <Slider {...settings}>
            {props.children}
        </Slider>
    )
}
