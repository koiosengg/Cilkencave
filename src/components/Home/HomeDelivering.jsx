import React from "react";
import Star from "../../assets/Home/HomeDelivering/Star.svg";
import Vector from "../../assets/Home/HomeDelivering/Vector.svg";
import MainImg from "../../assets/Home/HomeDelivering/MainImg.jpg";

function HomeDelivering() {
  return (
    <div className="homeContainer homeDelivering">
      <div className="homeDeliveringLeft">
        <div className="homeContainerHeading">
          <p>
            Delivering
            <br /> Innovative Solutions  <br /> Globally
          </p>
          <div className="homeContainerHeadingH2">
            <h2>Who We Are</h2>
          </div>
        </div>
        <div className="homeDeliveringContent">
          <p className="homeDeliveringContentPara">
            At CilkenCave, we are committed to providing cutting-edge
            semiconductor solutions that drive progress. Our global team of
            experts works tirelessly to develop technologies that meet the
            ever-evolving needs of our clients. With a focus on quality and
            innovation, we ensure our services are both reliable and efficient.
            Partnering with us means accessing the best in silicon engineering,
            system design, embedded solutions, artificial intelligence, and
            automotive technologies. Together, we can transform your ideas into
            reality and shape the future of technology.
          </p>
          <div className="homeDeliveringInfo">
            <div className="homeDeliveringInfoSet">
              <div className="heading">
                <img src={Star}></img>
                <p>Experience</p>
              </div>
              <span>
                We provide top technology solutions designed for the specific
                needs of markets around the world.
              </span>
            </div>
            <div className="homeDeliveringInfoSet">
              <div className="heading">
                <img src={Vector}></img>
                <p>Quick Support</p>
              </div>
              <span>
                Our dedicated support team is here for you, ready to assist with
                any issues you may have and we’ll get you back on track!
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
            Our advanced solutions help industries grow and adapt to new
            technologies.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomeDelivering;
