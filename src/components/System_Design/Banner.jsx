import React from "react";
import BannerImg from "../../assets/System_Design/BannerImg.png";

function Banner() {
  return (
    <div className="BannerContainer">
      <div className="Banner">
        <img src={BannerImg}></img>
      </div>
      <div className="BannerText">
        <h1>System Design</h1>
        <p>Enhancing Reliability and Performance</p>
      </div>
    </div>
  );
}

export default Banner;
