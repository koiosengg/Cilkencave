import React from "react";
import BannerImg from "../../assets/Embedded_Solutions/BannerImg.png";

function Banner() {
  return (
    <div className="BannerContainer">
      <div className="Banner">
        <img src={BannerImg} alt="Cilkencave Embedded Solutions Banner"></img>
      </div>
      <div className="BannerText">
        <h1>Embedded Solutions</h1>
        <p>Embedded Solutions for a Connected World</p>
      </div>
    </div>
  );
}

export default Banner;
