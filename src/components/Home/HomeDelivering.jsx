import React from "react";
import Star from "../..//assets/Home/HomeDelivering/Star.svg";
import Vector from "../../assets/Home/HomeDelivering/Vector.svg";
import MainImg from "../../assets/Home/HomeDelivering/MainImg.jpg";

function HomeDelivering() {
  return (
    <div className="homeContainer homeDelivering">
      <div className="homeDeliveringLeft">
        <div className="homeContainerHeading">
          <p>
            Innovative Services, <br /> Exceptional Results
          </p>
          <div className="homeContainerHeadingH2">
            <h2>What We Offer</h2>
          </div>
        </div>
        <div className="homeDeliveringContent">
          <p className="homeDeliveringContentPara">
            CilkenCave Semiconductor is rapidly emerging as a global leader in
            delivering comprehensive engineering solutions. We specialize in
            providing end-to-end services in Semiconductor, Embedded Systems,
            Automotive, and System Design, all under one roof. Our expertise
            empowers clients to create next-generation leadership products,
            achieving both immediate success and sustainable long-term growth.
          </p>
          <div className="homeDeliveringInfo">
            <div className="homeDeliveringInfoSet">
              <div className="heading">
                <img src={Star}></img>
                <p>Experience</p>
              </div>
              <span>
                Our great team of more than 1000 + Scientists & Engineer Experts
              </span>
            </div>
            <div className="homeDeliveringInfoSet">
              <div className="heading">
                <img src={Vector}></img>
                <p>Quick Support</p>
              </div>
              <span>
                Our great team of more than 1000 + Scientists & Engineer Experts
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="homeDeliveringRight">
        <img src={MainImg} className="homeDeliveringRightMain"></img>
        <div className="homeDeliveringRightContent">
          <h3>Empowering Innovation</h3>
          <p>
            Netus nisl id ut volutpat ipsum purus. Non ullamcorper faucibus elit
            sit feugiat rutrum ac eu elementum. Ut morbi urna ipsum risus.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomeDelivering;
