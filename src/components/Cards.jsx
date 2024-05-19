import React from "react";
import CardExample from "../common/Card.jsx";
import img1 from "../assets/mark.jpg";
import img2 from "../assets/nick.jpg";
import img3 from "../assets/zomato.jpg";

const Cards = () => {
  const data = [
    {
      img: img1,
      title: "Mark Zuckerberg",
      designation: "CEO ",
      text: "Mark Elliot Zuckerberg is an American businessman. He co-founded the social media service Facebook, along with his Harvard roommates in 2004, and its parent company Meta Platforms (formerly Facebook, Inc.), of which he is chairman, chief executive officer and controlling shareholder.",
    },
    { img: img2, title: "Nick Vujicic", designation: "Speaker", text: "Nicholas James Vujicic is an Australian-American Christian evangelist and motivational speaker of Serbian descent. Vujicic has tetra-amelia syndrome, a disorder characterised by the absence of arms and legs. " },
    { img: img3, title: "Deepinder Goyal", designation: "CEO", text: "Zomato/ Deepinder Goyal started in 2010 as a platform for restaurant reviews and has grown into a public company synonymous with food in 1,000+ cities in India." },
    
  ];

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {data.map((item, index) => (
          <div className="col " key={index}>
            <CardExample 
              img={item.img}
              title={item.title}
              text={item.text}
              designation={item.designation}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
