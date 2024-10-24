import React, { useState, useEffect } from "react";
import IOT from "../../assets/Home/HomeIndustries/IOT Cilkencave.jfif";
import Semiconductor from "../../assets/Home/HomeIndustries/Semiconductor Cilkencave.jpg";
import Agriculture from "../../assets/Home/HomeIndustries/Agriculture Cilkencave.jpg";
import Automotive from "../../assets/Home/HomeIndustries/Automotive Cilkencave.webp";
import Medical from "../../assets/Home/HomeIndustries/Medical Devices Cilkencave.jpg";
import AI from "../../assets/Home/HomeIndustries/AI & Robotics Cilkencave.jpg";
import Security from "../../assets/Home/HomeIndustries/security services- homepage - cilkencave-min.jpeg";
import Consumer from "../../assets/Home/HomeIndustries/Consumer Electronics-cilkencave services homepage.webp";
import Aerospace from "../../assets/Home/HomeIndustries/aerospace- cilkencave services semiconductors- homepage.webp";
import IndustrialAutomation from "../../assets/Home/HomeIndustries/Industrial Automation Cilkencave.jfif";
import Logistics from "../../assets/Home/HomeIndustries/transport and logistics cilkencave services homepage.avif";
import HomeAutomation from "../../assets/Home/HomeIndustries/Smart-home-Automation-Control-System cilkencave services homepage-min.jpg";

function HomeIndustries() {
  // Array of industry objects
  const industries = [
    {
      imgSrc: IOT,
      altText: "IOT Cilkencave",
      title: "IoT, Networking & Industrial",
    },
    {
      imgSrc: Semiconductor,
      altText: "Semiconductor Cilkencave",
      title: "Semiconductor",
    },
    {
      imgSrc: Agriculture,
      altText: "Agriculture Cilkencave",
      title: "Agriculture",
    },
    {
      imgSrc: Automotive,
      altText: "Automotive Cilkencave",
      title: "Automotive",
    },
    {
      imgSrc: Medical,
      altText: "Medical Devices Cilkencave",
      title: "Medical Devices",
    },
    { imgSrc: AI, altText: "AI & Robotics Cilkencave", title: "AI & Robotics" },
    { imgSrc: Security, altText: "Security Cilkencave", title: "Security" },
    {
      imgSrc: Consumer,
      altText: "Consumer Electronics Cilkencave",
      title: "Consumer Electronics",
    },
    { imgSrc: Aerospace, altText: "Aerospace Cilkencave", title: "Aerospace" },
    {
      imgSrc: IndustrialAutomation,
      altText: "Industrial Automation Cilkencave",
      title: "Industrial Automation",
    },
    {
      imgSrc: Logistics,
      altText: "Transport & Logistics Cilkencave",
      title: "Transport & Logistics",
    },
    {
      imgSrc: HomeAutomation,
      altText: "Home Automation Cilkencave",
      title: "Home Automation",
    },
  ];

  const [currentSet, setCurrentSet] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSet((prevSet) => (prevSet === 0 ? 1 : 0));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const visibleIndustries =
    currentSet === 0 ? industries.slice(0, 6) : industries.slice(6, 12);

  return (
    <div className="homeContainer homeIndustries">
      <div className="homeContainerHeading">
        <p>Industries We Cater to</p>
        <div className="homeContainerHeadingH2">
          <h2>Industries</h2>
        </div>
      </div>
      <div className="homeIndustriesContainer">
        {visibleIndustries.map((industry, index) => (
          <div className="homeIndustrySet" key={index}>
            <div className="homeIndustrySetImg">
              <img src={industry.imgSrc} alt={industry.altText}></img>
            </div>
            <h3>{industry.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeIndustries;
