import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { StarFilled } from "@ant-design/icons";

 
function SlickContent() {
  var settings = {
    dots: false,
    infinite: true,
    autoplay:true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
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
  return (
    <div style={{width:"100%", backgroundColor:"#fffff", textAlign:"center", fontFamily:"Goudy Type"}} className="slider-container p-5">
      <Slider {...settings} >
     
        <div style={{backgroundColor:"azure"}} >
        <p>Mark Zuckerberg</p>
        <span><StarFilled /><StarFilled /><StarFilled /><StarFilled /></span>
        <h5 style={{textAlign:"center"}}>"Mark Elliot Zuckerberg is an American businessman. He co-founded the social media service Facebook, along with his Harvard roommates in 2004, and its parent company Meta Platforms (formerly Facebook, Inc.), of which he is chairman, chief executive officer and controlling shareholder."</h5>
        <p> Meta - CEO</p>
       
        </div>
     
        <div style={{backgroundColor:"azure"}} >
        <p>Nick Vijicic</p>
        <span><StarFilled /><StarFilled /><StarFilled /><StarFilled /></span>
        <h5 style={{textAlign:"center"}}>"Nicholas James Vujicic is an Australian-American Christian evangelist and motivational speaker of Serbian descent. Vujicic has tetra-amelia syndrome, a disorder characterised by the absence of arms and legs. "</h5>
        <p> Motivational Speaker</p>
       
        </div>
       
      <div style={{ backgroundColor:"azure"}} >
        <p>Deepinder Goyal</p>
        <span><StarFilled /><StarFilled /><StarFilled /><StarFilled /></span>
        <h5 style={{textAlign:"center"}}>"Zomato/ Deepinder Goyal started in 2010 as a platform for restaurant reviews and has grown into a public company synonymous with food in 1,000+ cities in India."</h5>
        <p> Zomato - CEO</p>
        </div>
 
        
      </Slider>
    </div>
  );
}
 
export default SlickContent;
 
 
 
 
 
 
 