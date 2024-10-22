import React from "react";
import AboutUsBanner from "./AboutUs/AboutUsBanner";
import AboutUsUniqueness from "./AboutUs/AboutUsUniqueness";
import HomeCareerLink from "./Home/HomeCareerLink.jsx";
import AboutUsDelivering from "./AboutUs/AboutUsDelivering";
import AboutUsMissionVission from "./AboutUs/AboutUsMissionVission";
import HomeContactLink from "./Home/HomeContactLink.jsx";

function AboutUs() {
  return (
    <div className="AboutUs">
      <AboutUsBanner />
      <AboutUsUniqueness />
      <HomeCareerLink />
      <AboutUsDelivering />
      <AboutUsMissionVission />
      <HomeContactLink />
    </div>
  );
}

export default AboutUs;
