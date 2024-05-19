import React from 'react'
import carosuel1 from "../assets/carosuel1.jpg"
import carosuel2 from "../assets/carosuel2.jpg"
import carosuel3 from "../assets/carosuel3.jpeg"
import carosuel4 from "../assets/carosuel4.jpg"


const Carousel = () => {
  return (
        <>
           <section className="carousel-section "  >
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>

                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={carosuel1} className="d-block w-100 " height="600px"  alt="Design1"/>
           
                  </div>
                  <div className="carousel-item">
                    <img src={carosuel2} className="d-block w-100" height="600px" alt="Design2"/>
                   
                  </div>
                  <div className="carousel-item">
                    <img src={carosuel3} className="d-block w-100" height="600px" alt="Design3"/>
                   
                  </div>
                  <div className="carousel-item">
                    <img src={carosuel4} className="d-block w-100" height="600px" alt="Design4"/>
                   
                  </div>
                  
                  
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
        </section>
        </>
   
  )
}

export default Carousel