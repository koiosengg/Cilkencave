import React from "react";
import Banner from "../components/Automotive_Solutions/Banner";
import AboutService from "./Automotive_Solutions/AboutService";
import HomeCareerLink from "./Home/HomeCareerLink.jsx";
import Competencies from "./Automotive_Solutions/Competencies.jsx";
import OurFocus from "./Automotive_Solutions/OurFocus.jsx";
import HomeContactLink from "./Home/HomeContactLink.jsx";

function Automotive_Solutions() {
  return (
    <div>
      <Banner />
      <AboutService />
      <HomeCareerLink />
      <Competencies />
      <OurFocus />
      <HomeContactLink />
    </div>
  );
}

export default Automotive_Solutions;
