import React from "react";
import CareersBanner from "./Careers/CareersBanner";
import CareersBenefit from "./Careers/CareersBenefit";
import CareersAbout from "./Careers/CareersAbout";
import CareersJob from "./Careers/CareersJob";

function Careers() {
  return (
    <div className="Careers">
      <CareersBanner />
      <CareersBenefit />
      <CareersAbout />
      <CareersJob/>
    </div>
  );
}

export default Careers;
