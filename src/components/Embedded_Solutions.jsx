import React from "react";
import Banner from "./Embedded_Solutions/Banner";
import AboutService from "./Embedded_Solutions/AboutService";
import HomeCareerLink from "./Home/HomeCareerLink.jsx";
import DivImg from "../assets/Embedded_Solutions/DivImg.png";
import Leading from "./Embedded_Solutions/Leading.jsx";
import Networking from "./Embedded_Solutions/Networking.jsx";
import HomeContactLink from "./Home/HomeContactLink.jsx";

function Embedded_Solutions() {
  return (
    <div>
      <Banner />
      <AboutService />
      <HomeCareerLink />
      <img
        src={DivImg}
        className="SemiconductorDivImg"
        alt="Cilkencave Embedded Solutions"
      ></img>
      <Leading />
      <Networking />
      <HomeContactLink />
    </div>
  );
}

export default Embedded_Solutions;
