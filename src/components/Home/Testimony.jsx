import React, { useState, useRef } from "react";
import TestImg from "../../assets/Home/Testimony/TestImg.jfif";

function Testimony() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const testimonyDivRef = useRef(null);

  const slides = [
    [
      {
        text: "Lorem ipsum dolor sit amet consectetur. Mattis auctor quis risus a in risus elit velit. Tempus massa sem.",
        name: "Cristiano Ronaldo",
        role: "Team Member",
        img: TestImg,
      },
      {
        text: "Lorem ipsum dolor sit amet consectetur. Mattis auctor quis risus a in risus elit velit. Tempus massa sem.",
        name: "Cristiano Ronaldo",
        role: "Team Member",
        img: TestImg,
      },
      {
        text: "Lorem ipsum dolor sit amet consectetur. Mattis auctor quis risus a in risus elit velit. Tempus massa sem.",
        name: "Cristiano Ronaldo",
        role: "Team Member",
        img: TestImg,
      },
    ],
    [
      {
        text: "Lorem ipsum dolor sit amet consectetur. Mattis auctor quis risus a in risus elit velit. Tempus massa sem.",
        name: "Cristiano Ronaldo",
        role: "Team Member",
        img: TestImg,
      },
      {
        text: "Lorem ipsum dolor sit amet consectetur. Mattis auctor quis risus a in risus elit velit. Tempus massa sem.",
        name: "Cristiano Ronaldo",
        role: "Team Member",
        img: TestImg,
      },
      {
        text: "Lorem ipsum dolor sit amet consectetur. Mattis auctor quis risus a in risus elit velit. Tempus massa sem.",
        name: "Cristiano Ronaldo",
        role: "Team Member",
        img: TestImg,
      },
    ],
    [
      {
        text: "Lorem ipsum dolor sit amet consectetur. Mattis auctor quis risus a in risus elit velit. Tempus massa sem.",
        name: "Cristiano Ronaldo",
        role: "Team Member",
        img: TestImg,
      },
      {
        text: "Lorem ipsum dolor sit amet consectetur. Mattis auctor quis risus a in risus elit velit. Tempus massa sem.",
        name: "Cristiano Ronaldo",
        role: "Team Member",
        img: TestImg,
      },
      {
        text: "Lorem ipsum dolor sit amet consectetur. Mattis auctor quis risus a in risus elit velit. Tempus massa sem.",
        name: "Cristiano Ronaldo",
        role: "Team Member",
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
