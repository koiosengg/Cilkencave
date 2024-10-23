import React from 'react'
import BannerImg from "../../assets/AboutUs/BannerImg.png";

function AboutUsBanner() {
  return (
    <div className="BannerContainer">
      <div className="Banner">
        <img src={BannerImg}></img>
      </div>
      <div className="BannerText">
        <h1>About Us</h1>
        <p>Shaping the Future of Microelectronics</p>
      </div>
    </div>
  );
}

export default AboutUsBanner
