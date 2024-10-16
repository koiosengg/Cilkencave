import React from "react";
import HomeBanner from "./Home/HomeBanner";
import HomeServices from "./Home/HomeServices";
import HomeIndustires from "./Home/HomeIndustires";
import HomeUniqueness from "./Home/HomeUniqueness";
import HomeCareerLink from "./Home/HomeCareerLink";
import HomeTTM from "./Home/HomeTTM";
import HomeDelivering from "./Home/HomeDelivering";
import HomeContactLink from "./Home/HomeContactLink";
import Testimony from "./Home/Testimony";

function Home() {
  return (
    <div className="Home">
      <HomeBanner />
      <HomeServices />
      <HomeIndustires />
      <HomeUniqueness />
      <HomeCareerLink />
      <HomeTTM />
      <HomeDelivering />
      <HomeContactLink />
      <Testimony />
    </div>
  );
}

export default Home;
