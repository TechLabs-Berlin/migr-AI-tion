import React from "react";
import Slider from "react-slick";
import "./IntroSlider.css";
import slide1 from "./ImageIntroSlider/slide 1.png";
import slide2 from "./ImageIntroSlider/slide 2.png";
import slide3 from "./ImageIntroSlider/slide 3.png";
import slide4 from "./ImageIntroSlider/slide 4.png";

const settings = {
  dots: false,
  fade: true,
  arrows: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 4000,
  autoplaySpeed: 8000,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function IntroSlider() {
  return (
    <div className="introslider-wrapper">
      <Slider {...settings} className="slider2">
        <div className="paper-slider2">
          <img src={slide1} style={{ margin: "auto" }} alt="" />
        </div>
        <div className="paper-slider2">
          <img src={slide2} style={{ margin: "auto" }} alt="" />
        </div>
        <div className="paper-slider2">
          <img src={slide3} style={{ margin: "auto" }} alt="" />
        </div>
        <div className="paper-slider2">
          <img src={slide4} style={{ margin: "auto" }} alt="" />
        </div>
      </Slider>
    </div>
  );
}
