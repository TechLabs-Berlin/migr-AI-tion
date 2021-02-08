import React from 'react'
import Slider from "react-slick";
import './IntroSlider.css';


const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

const imageSlider = [
    { img: "https://images.unsplash.com/photo-1612534526511-dd27833d6e50?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", id: 1 },
    { img: "https://images.unsplash.com/photo-1612409210157-fae7e07df828?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", id: 2 },
    { img: "https://images.unsplash.com/photo-1610252210889-39f91863926a?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5MHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", id: 3 },
    { img: "https://images.unsplash.com/photo-1612522677527-eafebd3c7e29?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1NXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", id: 4 },
    { img: "https://images.unsplash.com/photo-1612472844581-dd9310a6bad1?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMDB8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", id: 5 }
]

export default function IntroSlider() {

    return (
        <div className="introslider-wrapper">
            <Slider {...settings} className="slider2">
                {imageSlider.map((slide) => (
                    <div className="paper-slider2">
                        <img key={slide.id} src={slide.img} style={{ margin: "auto" }} />
                    </div>
                ))}
            </Slider>
        </div>

    )
}