import React from "react";
import BannerImg from "../../assets/Embedded_Solutions/BannerImg.svg";

function Banner() {
  return (
    <div className="BannerContainer">
      <div className="Banner">
        <img src={BannerImg}></img>
      </div>
      <div className="BannerText">
        <h1>Embedded Solutions</h1>
        <p>Embedded Solutions for a Connected World</p>
      </div>
    </div>
  );
}

export default Banner;
