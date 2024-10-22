import React from "react";
import Banner from "./Semiconductor_Chip_Design/Banner";
import AboutService from "./Semiconductor_Chip_Design/AboutService";
import HomeCareerLink from "./Home/HomeCareerLink.jsx";
import DivImg from "../assets/Semiconductor_Chip_Design/DivImg.png";
import Architecture from "./Semiconductor_Chip_Design/Architecture.jsx";
import RTL from "./Semiconductor_Chip_Design/RTL.jsx";
import RTL2GDS from "./Semiconductor_Chip_Design/RTL2GDS.jsx";
import Analog from "./Semiconductor_Chip_Design/Analog.jsx";
import Validation from "./Semiconductor_Chip_Design/Validation.jsx";
import FPGA from "./Semiconductor_Chip_Design/FPGA.jsx";
import HomeContactLink from "./Home/HomeContactLink.jsx";

function Semiconductor_Chip_Design() {
  return (
    <div>
      <Banner />
      <AboutService />
      <HomeCareerLink />
      <img src={DivImg} className="SemiconductorDivImg"></img>
      <Architecture />
      <RTL />
      <RTL2GDS />
      <Analog />
      <Validation />
      <FPGA />
      <HomeContactLink />
    </div>
  );
}

export default Semiconductor_Chip_Design;
