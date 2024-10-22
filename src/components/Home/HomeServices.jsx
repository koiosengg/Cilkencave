import React from "react";
import SiliconEngineering from "../../assets/Home/HomeServices/Silicon Engineering Cilkencave.svg";
import SystemDesign from "../../assets/Home/HomeServices/System Design Cilkencave.svg";
import EmbeddedSolutions from "../../assets/Home/HomeServices/Embedded Solutions Cilkencave.svg";
import ArtificialIntelligence from "../../assets/Home/HomeServices/Artificial Intelligence Cilkencave.svg";
import AutomotiveSolutions from "../../assets/Home/HomeServices/Automotive Solutions Cilkencave.svg";
import { Link } from "react-router-dom";

function HomeServices() {
  return (
    <div className="homeContainer homeServices">
      <div className="homeContainerHeading">
        <p>
          Innovative Services, <br /> Exceptional Results
        </p>
        <div className="homeContainerHeadingH2">
          <h2>What We Offer</h2>
        </div>
      </div>
      <div className="homeServicesContainer">
        <div className="homeServiceSet">
          <div className="homeServiceSetText">
            <div className="heading">
              <img
                src={SiliconEngineering}
                alt="Silicon Engineering Cilkencave"
              />
              <h3>Silicon Engineering</h3>
            </div>
            <p>
              Customized semiconductor solutions optimized for performance,
              energy efficiency, and scalability. We design, verify, and deliver
              custom silicon innovations.
            </p>
          </div>
          <Link to="/">
            <p>Read More</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
            >
              <mask
                id="mask0_459_177"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="16"
                height="17"
              >
                <rect y="0.5" width="16" height="16" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_459_177)">
                <path
                  d="M5.61341 13.8334L4.66675 12.8867L9.05341 8.50002L4.66675 4.11335L5.61341 3.16669L10.9467 8.50002L5.61341 13.8334Z"
                  fill="#4DB122"
                />
              </g>
            </svg>
          </Link>
        </div>
        <div className="homeServiceSet">
          <div className="homeServiceSetText">
            <div className="heading">
              <img src={SystemDesign} alt="System Design Cilkencave" />
              <h3>System Design</h3>
            </div>
            <p>
              From concept to deployment, we provide end-to-end system design
              services for complex hardware and software integrations. Our
              solutions ensure seamless functionality.
            </p>
          </div>
          <Link to="/">
            <p>Read More</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
            >
              <mask
                id="mask0_459_177"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="16"
                height="17"
              >
                <rect y="0.5" width="16" height="16" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_459_177)">
                <path
                  d="M5.61341 13.8334L4.66675 12.8867L9.05341 8.50002L4.66675 4.11335L5.61341 3.16669L10.9467 8.50002L5.61341 13.8334Z"
                  fill="#4DB122"
                />
              </g>
            </svg>
          </Link>
        </div>
        <div className="homeServiceSet">
          <div className="homeServiceSetText">
            <div className="heading">
              <img
                src={EmbeddedSolutions}
                alt="Embedded Solutions Cilkencave"
              />
              <h3>Embedded Solutions</h3>
            </div>
            <p>
              Advanced embedded systems built for precision, reliability, and
              high-performance applications. We specialize in custom firmware
              and hardware development.
            </p>
          </div>
          <Link to="/">
            <p>Read More</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
            >
              <mask
                id="mask0_459_177"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="16"
                height="17"
              >
                <rect y="0.5" width="16" height="16" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_459_177)">
                <path
                  d="M5.61341 13.8334L4.66675 12.8867L9.05341 8.50002L4.66675 4.11335L5.61341 3.16669L10.9467 8.50002L5.61341 13.8334Z"
                  fill="#4DB122"
                />
              </g>
            </svg>
          </Link>
        </div>
        <div className="homeServiceSet">
          <div className="homeServiceSetText">
            <div className="heading">
              <img
                src={ArtificialIntelligence}
                alt="Artificial Intelligence Cilkencave"
              />
              <h3>Artificial Intelligence</h3>
            </div>
            <p>
              Harness our AI technologies to accelerate innovation in your
              automation, data analysis, and decision-making. We integrate
              machine learning into cutting-edge applications.
            </p>
          </div>
          <Link to="/">
            <p>Read More</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
            >
              <mask
                id="mask0_459_177"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="16"
                height="17"
              >
                <rect y="0.5" width="16" height="16" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_459_177)">
                <path
                  d="M5.61341 13.8334L4.66675 12.8867L9.05341 8.50002L4.66675 4.11335L5.61341 3.16669L10.9467 8.50002L5.61341 13.8334Z"
                  fill="#4DB122"
                />
              </g>
            </svg>
          </Link>
        </div>
        <div className="homeServiceSet">
          <div className="homeServiceSetText">
            <div className="heading">
              <img
                src={AutomotiveSolutions}
                alt="Automotive Solutions Cilkencave"
              />
              <h3>Automotive Solutions</h3>
            </div>
            <p>
              Innovative automotive technology solutions driving the future of
              mobility. We deliver smart, connected, and autonomous systems for
              the automotive industry.
            </p>
          </div>
          <Link to="/">
            <p>Read More</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
            >
              <mask
                id="mask0_459_177"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="16"
                height="17"
              >
                <rect y="0.5" width="16" height="16" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_459_177)">
                <path
                  d="M5.61341 13.8334L4.66675 12.8867L9.05341 8.50002L4.66675 4.11335L5.61341 3.16669L10.9467 8.50002L5.61341 13.8334Z"
                  fill="#4DB122"
                />
              </g>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomeServices;
