import React, { useState, useRef } from "react";
import TestImg from "../../assets/Home/Testimony/TestImg.jfif";

function Testimony() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const testimonyDivRef = useRef(null);

  const slides = [
    [
      {
        text: "CilkenCave's expertise in silicon engineering has improved our product's performance. Their team's dedication to innovation and quality stands out. We couldn’t have asked for a better partner in our technological journey, and I look forward to future collaborations.",
        name: "Rahul Sharma",
        role: "CTO",
        img: TestImg,
      },
      {
        text: "Working with CilkenCave has been a game-changer for our projects. Their system design solutions are cutting-edge and tailored to our needs. I highly recommend them to anyone looking to enhance their technology endeavors and achieve exceptional results.",
        name: "Aditi Verma",
        role: "Project Manager",
        img: TestImg,
      },
      {
        text: "CilkenCave's embedded solutions transformed our approach to automotive technology. Their attention to detail and responsiveness to our needs were remarkable. I am excited to see what we can achieve together in future projects with their innovative solutions.",
        name: "Anil Gupta",
        role: "Lead Engineer",
        img: TestImg,
      },
    ],
    [
      {
        text: "CilkenCave's artificial intelligence solutions empowered us to enhance our offerings. Their innovative approach and commitment to excellence make them a standout partner in the industry. I truly value our collaboration and the impactful results we’ve achieved together.",
        name: "Sneha Reddy",
        role: "Director of AI Development",
        img: TestImg,
      },
      {
        text: "Our experience with Cilken Cave has been outstanding from start to finish. Their automotive solutions are top-notch and have greatly improved our product line. I appreciate their professionalism and their ability to meet deadlines without compromising on quality.",
        name: "Karan Joshi",
        role: "Senior Managerr",
        img: TestImg,
      },
      {
        text: "CilkenCave has been instrumental in our company’s growth and success. Their silicon engineering services provided us with the competitive edge needed in our market. I wholeheartedly recommend them to anyone seeking innovative technology solutions to elevate their business.",
        name: "Priya Menon",
        role: "Founder & CEO",
        img: TestImg,
      },
    ],
  ];

  const slideWidth = testimonyDivRef.current
    ? testimonyDivRef.current.offsetWidth
    : 0;

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="homeContainer testimony">
      <div className="homeContainerHeading">
        <p>
          Hear from
          <br /> Our Happy Clients
        </p>
        <div className="homeContainerHeadingH2">
          <h2>Testimonials</h2>
        </div>
      </div>
      <div className="testimonyContainer">
        <div className="testimonyDiv" ref={testimonyDivRef}>
          <div
            className="testimonySlide"
            style={{
              display: "flex",
              transform: `translateX(-${currentSlide * slideWidth}px)`,
              transition: "transform 0.5s ease",
            }}
          >
            {slides.map((row, rowIndex) => (
              <div className="testimonyRow" key={rowIndex}>
                {row.map((slide, index) => (
                  <div className="testimonySet" key={index}>
                    <p className="testimonySetText">{slide.text}</p>
                    <div className="heading">
                      <img src={slide.img} alt={slide.name} />
                      <div className="info">
                        <p>{slide.name}</p>
                        <span>{slide.role}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="testimonyControlDiv">
          <div
            className="testimonyLeft"
            onClick={handlePrev}
            style={{
              opacity: currentSlide === 0 ? 0.5 : 1,
              pointerEvents: currentSlide === 0 ? "none" : "auto",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              style={{ transform: "rotate(180deg)" }}
            >
              <mask
                id="mask0_516_1645"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="32"
                height="32"
              >
                <rect
                  y="32"
                  width="32"
                  height="32"
                  transform="rotate(-90 0 32)"
                  fill="#D9D9D9"
                />
              </mask>
              <g mask="url(#mask0_516_1645)">
                <path
                  d="M24.0001 16L16.0001 24L14.1334 22.1333L18.9334 17.3333H6.66675L6.66675 14.6667H18.9334L14.1334 9.86667L16.0001 8L24.0001 16Z"
                  fill="#111111"
                />
              </g>
            </svg>
          </div>
          <div
            className="testimonyRight"
            onClick={handleNext}
            style={{
              opacity: currentSlide === slides.length - 1 ? 0.5 : 1,
              pointerEvents:
                currentSlide === slides.length - 1 ? "none" : "auto",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <mask
                id="mask0_516_1645"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="32"
                height="32"
              >
                <rect
                  y="32"
                  width="32"
                  height="32"
                  transform="rotate(-90 0 32)"
                  fill="#D9D9D9"
                />
              </mask>
              <g mask="url(#mask0_516_1645)">
                <path
                  d="M24.0001 16L16.0001 24L14.1334 22.1333L18.9334 17.3333H6.66675L6.66675 14.6667H18.9334L14.1334 9.86667L16.0001 8L24.0001 16Z"
                  fill="#111111"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimony;
