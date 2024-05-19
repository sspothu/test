import React from 'react';
import Carousel from '../components/Carousel';
import Slider from '../components/Slider';
import Footer from '../components/Footer';
import Accordion from "../components/Accordion"
import Cards from '../components/Cards';
import Testimonial from '../common/Testmonial';



const Home = () => {
  return (
    <>
    
    <Carousel/>
    <Slider/>   
    <Cards/>
    <Accordion/>
    <Testimonial/>
    <Footer/>
    

    </>
  )
}

export default Home