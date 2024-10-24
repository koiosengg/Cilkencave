import React, { useState, useEffect } from "react";

import RTLDesign from "../../assets/Home/HomeTTM/RTL-Design-Efficient Solutions- cilkencave solutions.png";
import DesignVerification from "../../assets/Home/HomeTTM/VLSI Design Veification Homepage Efficient Solutions-min.jpg";
import DFT from "../../assets/Home/HomeTTM/DFT Efficient Solutions hompeage cilkencave-min.jpg";
import PhysicalDesign from "../../assets/Home/HomeTTM/physical design Efficient Solutions cilkencave-min.jpg";
import EmbeddedSoftware from "../../assets/Home/HomeTTM/embedded systems efficient solutions homepage-min.jpg";
import ProductEngineering from "../../assets/Home/HomeTTM/product engineering seeficient solutions homepage.webp";
import Automotive from "../../assets/Home/HomeTTM/Automotive Semiconductor efficient solutions homepage cilkencave-min.png";
import ArtificialIntelligence from "../../assets/Home/HomeTTM/AI Efficient solutions homepage cilkencave-min.jpeg";

function HomeTTM() {
  const solutions = [
    {
      colour: "Blue1",
      img: RTLDesign,
      altText: "Cilkencave RTL Design",
      heading: "RTL Design",
    },
    {
      colour: "Green1",
      img: DesignVerification,
      altText: "Cilkencave Design Verification",
      heading: "Design Verification",
    },
    {
      colour: "Blue2",
      img: DFT,
      altText: "Cilkencave DFT",
      heading: "Design For Test",
    },
    {
      colour: "Green2",
      img: PhysicalDesign,
      altText: "Cilkencave Physical Design",
      heading: "Physical Design",
    },
    {
      colour: "Blue3",
      img: EmbeddedSoftware,
      altText: "Cilkencave Embedded Software",
      heading: "Embedded Software",
    },
    {
      colour: "Green3",
      img: ProductEngineering,
      altText: "Cilkencave Product Engineering",
      heading: "Product Engineering",
    },
    {
      colour: "Blue4",
      img: Automotive,
      altText: "Cilkencave Automotive",
      heading: "Automotive",
    },
    {
      colour: "Green4",
      img: ArtificialIntelligence,
      altText: "Cilkencave Artificial Intelligence",
      heading: "Artificial Intelligence",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === solutions.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [solutions.length]);

  const currentSolution = solutions[currentIndex];

  return (
    <div className="homeContainer homeTTM">
      <div className="homeContainerHeading">
        <p>
          Efficient Solutions for <br /> Faster TTM
        </p>
        <div className="homeContainerHeadingH2">
          <h2>Solutions</h2>
        </div>
      </div>
      <div className={`homeTTMContainer ${currentSolution.colour}`}>
        <div className="box1 box"></div>
        <div className="box2 box"></div>
        <div className="box3 box"></div>
        <div className="box4 box"></div>
        <div className="box5 box"></div>
        <div className="box6 box"></div>
        <div className="box7 box"></div>
        <div className="box8 box"></div>
        <div className="box9 box"></div>
        <h3>CILKEN CAVE</h3>
        <div className="homeTTMContent">
          <img src={currentSolution.img} alt={currentSolution.altText} />
          <h4>{currentSolution.heading}</h4>
        </div>
      </div>
    </div>
  );
}

export default HomeTTM;
