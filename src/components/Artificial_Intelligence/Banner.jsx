import React from "react";
import BannerImg from "../../assets/Artificial_Intelligence/BannerImg.png";

function Banner() {
  return (
    <div className="BannerContainer">
      <div className="Banner">
        <img src={BannerImg} alt="Cilkencave Artificial Intelligence Banner"></img>
      </div>
      <div className="BannerText">
        <h1>Artificial Intelligence</h1>
        <p>Revolutionizing Tomorrow with AI-Powered Solutions</p>
      </div>
    </div>
  );
}

export default Banner;
