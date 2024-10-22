import React from "react";
import Banner from "./System_Design/Banner";
import AboutService from "./System_Design/AboutService";
import HomeCareerLink from "./Home/HomeCareerLink.jsx";
import Enabler from "./System_Design/Enabler.jsx";
import Capabilities from "./System_Design/Capabilities.jsx";
import ADDM from "./System_Design/ADDM.jsx";
import HomeContactLink from "./Home/HomeContactLink.jsx";

function System_Design() {
  return (
    <div>
      <Banner />
      <AboutService />
      <HomeCareerLink />
      <Enabler />
      <Capabilities />
      <ADDM />
      <HomeContactLink />
    </div>
  );
}

export default System_Design;
