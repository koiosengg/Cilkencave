import React from "react";
import BannerImg from "../../assets/Careers/CareersMainPage/Banner.svg";

function CareersBanner() {
  return (
    <div className="BannerContainer">
      <div className="Banner">
        <img src={BannerImg}></img>
      </div>
      <div className="BannerText">
        <h1>Careers</h1>
        <p>Transforming Ambitions into Success</p>
      </div>
    </div>
  );
}

export default CareersBanner;
