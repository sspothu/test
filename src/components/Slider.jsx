import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider1 from "../assets/slider1.jpg";
import slider2 from "../assets/slider2.jpg";
import slider3 from "../assets/slider3.jpg";
import slider4 from "../assets/slider4.jpg";
import slider5 from "../assets/slider5.jpg";
import slider6 from "../assets/slider6.jpg";
import slider7 from "../assets/slider7.jpg";

const SliderComponent = () => {
  const styles = { img: { height: "200px", width: "100%" } };
  var settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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

  return (
    <div style={{backgroundColor:"azure", margin:"30px"}}>
    <div className="slider-container ">
      <Slider {...settings}>
        <div>
          <img style={styles.img} src={slider1} alt="Design 1" />
        </div>
        <div>
          <img style={styles.img} src={slider2} alt="Design 2" />
        </div>
        <div>
          <img style={styles.img} src={slider3} alt="Design 3" />
        </div>
        <div>
          <img style={styles.img} src={slider4} alt="Design 4" />
        </div>
        <div>
          <img style={styles.img} src={slider5} alt="Design 1" />
        </div>
        <div>
          <img style={styles.img} src={slider6} alt="Design 2" />
        </div>
        <div>
          <img style={styles.img} src={slider7} alt="Design 3" />
        </div>
      </Slider>
    </div>
    </div>
  );
};

export default SliderComponent;
