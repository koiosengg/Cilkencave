import React from "react";
import BannerImg from "../../assets/Semiconductor_Chip_Design/BannerImg.png";

function Banner() {
  return (
    <div className="BannerContainer">
      <div className="Banner">
        <img src={BannerImg}></img>
      </div>
      <div className="BannerText">
        <h1>Semiconductor Chip Design</h1>
        <p>Engineering Silicon to Power Future Innovations</p>
      </div>
    </div>
  );
}

export default Banner;
