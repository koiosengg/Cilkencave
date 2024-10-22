import React from "react";
import BannerImg from "../../assets/Automotive_Solutions/BannerImg.svg";

function Banner() {
  return (
    <div className="BannerContainer">
      <div className="Banner">
        <img src={BannerImg}></img>
      </div>
      <div className="BannerText">
        <h1>Automotive Solutions</h1>
        <p>Elevate your Projects with Expert Analog Design and Layout</p>
      </div>
    </div>
  );
}

export default Banner;
